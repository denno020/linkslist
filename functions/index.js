/*
 *  Links List - Create a list of links, and then share it!
 *  Copyright (c) Luke Denton
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({
  origin: true,
});
const randomstring = require('randomstring');
const HttpStatus = require('http-status-codes');
const moment = require('moment');
const emailValidator = require('email-validator');
const tables = require('./tables.json');

// Determine which Firebase app should be used
if (process.env.NODE_ENV === 'development') {
  const devFirebase = require('../firebase.development.json');
  admin.initializeApp(devFirebase);
} else {
  admin.initializeApp();
}

/**
 * Generate a new ID for sharing the list
 *
 * This function is almost certainly going to be the cause for massive performance loss, as it might take a while to
 * randomly generate a new unique string, if there are already a lot generated
 *
 * @param {Array} usedIds Array of ID's that have already been generated
 *
 * @returns {string}
 */
const getNewId = (usedIds) => {
  const newId = randomstring.generate(7);

  // If the generated ID already exists, then generate a new one
  if (usedIds.includes(newId)) {
    getNewId(usedIds);
  }

  return newId;
};

let todayString = null;
/**
 * Get string representing time at this point
 *
 * @returns {string}
 */
const getTodayString = () => {
  // Only call moment() if todayString hasn't already been set, so moment() is only going to be called once per function execution
  if (!todayString) {
    todayString = moment().format('YYYY-MM-DD hh:mm:ss');
  }

  return todayString;
};

/**
 * Decode a user authentication token, extracting the user ID from it
 *
 * @param authToken
 *
 * @returns {Promise<string>}
 */
const decodeToken = (authToken) => {
  return admin.auth().verifyIdToken(authToken).then((decodedToken) => {
    return decodedToken.uid;
  })
}

/**
 * Extract the user ID from the request
 *
 * @param request
 *
 * @returns {Promise<string>|Promise<Boolean>}
 */
function getAdminId(request) {
  if (!request.headers.authorization) {
    return new Promise((res) => {
      res(false);
    })
  }

  const authToken = request.headers.authorization.split('Bearer ')[1];
  return decodeToken(authToken);
}

/**
 * Generate random string for users list
 *
 * @type {HttpsFunction}
 */
exports.getLink = functions.https.onRequest(async (request, response) => {
  const allowedRequestMethods = ['POST'];

  // Handle the pre-flight check
  if (request.method === 'OPTIONS') {
    response
      .append('Access-Control-Allow-Headers', 'content-type, Authorization')
      .append('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Method', allowedRequestMethods.join(','))
      .status(HttpStatus.NO_CONTENT)
      .send();
    return;
  }

  // Only allow function to continue if the user has used the correct request type
  if (!allowedRequestMethods.includes(request.method)) {
    response.status(HttpStatus.METHOD_NOT_ALLOWED).send(`This resource doesn't accept ${request.method} requests`);
    return;
  }

  // Ensure the links parameter is set correctly
  const { links, ui } = request.body;
  if (!links || !ui) {
    response.status(HttpStatus.BAD_REQUEST).send();
    return;
  }

  const usedIdsRef = admin.database().ref(`/${tables.usedIds}`);
  const listsRef = admin.database().ref(`/${tables.lists}`);

  // Load the list of already used list ID's
  const snapshot = await usedIdsRef.once('value');

  // Passing usedIds in as a parameter so that the DB isn't called every single time the getNewId function is called,
  // as that function is recursive, and could call itself multiple times again
  const usedIds = snapshot.val() ? Object.values(snapshot.val()): [];
  const newId = getNewId(usedIds);

  const adminId = await getAdminId(request);

  usedIdsRef.push(newId);
  listsRef.push({
    id: newId,
    ui,
    links,
    createdAt: getTodayString(),
    updatedAt: getTodayString(),
    isOwned: adminId !== false // Indicates that a signed in user created this list, therefore will be eligible for premium features
  });

  // If this list was created by an authenticated user, they're now the admin of the list
  if (adminId !== false) {
    // Store the new list against the User DB entry
    admin.database().ref(`/${tables.users}/${adminId}/myLists`).push(newId);
    // Also store a reference of the User who created the list in a separate DB
    // This will be used for things like checking premium status etc
    admin.database().ref(`/${tables.listOwner}/${newId}`).set(adminId);
  }

  // If there isn't an authorization header, then the user isn't logged in
  return cors(request, response, () => {
    response.status(HttpStatus.OK).send({ id: newId });
  });
});

/**
 * Updates database for the provided list
 *
 * @type {HttpsFunction}
 */
exports.syncData = functions.https.onRequest(async (request, response) => {
  const allowedRequestMethods = ['POST'];

  // Handle the pre-flight check
  if (request.method === 'OPTIONS') {
    response
      .append('Access-Control-Allow-Headers', 'content-type')
      .append('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Method', allowedRequestMethods.join(','))
      .status(HttpStatus.NO_CONTENT)
      .send();
    return;
  }

  // Only allow function to continue if the user has used the correct request type
  if (!allowedRequestMethods.includes(request.method)) {
    response.status(HttpStatus.METHOD_NOT_ALLOWED).send(`This resource doesn't accept ${request.method} requests`);
    return;
  }

  // Ensure the links parameter is set correctly
  const { urlString, links, ui, meta, isPaypalMeDismissed } = request.body;
  if (
    [
      typeof urlString,
      typeof links,
      typeof ui,
      typeof meta,
      typeof isPaypalMeDismissed
    ].includes('undefined')
  ) {
    response.status(HttpStatus.BAD_REQUEST).send();
    return;
  }

  const listsRef = admin.database().ref(`/${tables.lists}`);
  const snapshot = await listsRef.orderByChild('id').equalTo(urlString).once('value');
  const dbVal = snapshot.val();
  const firebaseDbId = Object.keys(dbVal)[0];

  admin.database().ref(`/${tables.lists}/${firebaseDbId}`).update({
    links,
    ui,
    meta,
    isPaypalMeDismissed,
    updatedAt: getTodayString()
  });

  return cors(request, response, () => {
    response.status(HttpStatus.OK).send();
  });
});

exports.subscribe = functions.https.onRequest(async (request, response) => {
  const allowedRequestMethods = ['POST'];

  // Handle the pre-flight check
  if (request.method === 'OPTIONS') {
    response
      .append('Access-Control-Allow-Headers', 'content-type')
      .append('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Method', allowedRequestMethods.join(','))
      .status(HttpStatus.NO_CONTENT)
      .send();
    return;
  }

  // Only allow function to continue if the user has used the correct request type
  if (!allowedRequestMethods.includes(request.method)) {
    response.status(HttpStatus.METHOD_NOT_ALLOWED).send(`This resource doesn't accept ${request.method} requests`);
    return;
  }

  // Ensure the request is formatted correctly
  const { email, isInterestedInPremium = false } = request.body;

  if (
    [
      typeof email
    ].includes('undefined')
  ) {
    response.status(HttpStatus.BAD_REQUEST).send();
    return;
  }

  const isValidEmail = emailValidator.validate(email);
  if (!isValidEmail) {
    response.status(HttpStatus.BAD_REQUEST).send();
    return;
  }

  const dbTable = isInterestedInPremium ? 'premiumSubscribers' : 'subscribers';

  const existingRecordSnapshot = await admin.database().ref(`/${tables.mailingList}/${dbTable}`).orderByChild('email').equalTo(email).once('value');

  // Only add the email if it doesn't already exist in the database
  if (existingRecordSnapshot.val() === null) {
    admin.database().ref(`/${tables.mailingList}/${dbTable}`).push({
      email,
      added: getTodayString()
    });
  }

  return cors(request, response, () => {
    response.status(HttpStatus.OK).send();
  });
})

exports.createUserRecord = functions.https.onRequest(async (request, response) => {
  const allowedRequestMethods = ['POST'];

  // Handle the pre-flight check
  if (request.method === 'OPTIONS') {
    response
      .append('Access-Control-Allow-Headers', 'content-type')
      .append('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Method', allowedRequestMethods.join(','))
      .status(HttpStatus.NO_CONTENT)
      .send();
    return;
  }

  // Only allow function to continue if the user has used the correct request type
  if (!allowedRequestMethods.includes(request.method)) {
    response.status(HttpStatus.METHOD_NOT_ALLOWED).send(`This resource doesn't accept ${request.method} requests`);
    return;
  }

  // Ensure the request is formatted correctly
  const { uid } = request.body;

  if (
    [
      typeof uid
    ].includes('undefined')
  ) {
    response.status(HttpStatus.BAD_REQUEST).send();
    return;
  }

  await admin.database().ref(`users/${uid}`).set({
    id: uid,
    displayName: '',
    myLists: '',
    subscribedLists: ''
  });

  return cors(request, response, () => {
    response.status(HttpStatus.OK).send();
  });
});

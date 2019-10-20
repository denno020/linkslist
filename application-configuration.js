/*
 *  Links List - Create a list of links, and then share it!
 *  Copyright (c) 2019 Luke Denton
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

const isLive = window.location.hostname !== 'localhost';

const productionFirebase = {
  "apiKey": "{Enter API key}",
  "authDomain": "{Enter authDomain}",
  "databaseURL": "{Enter databaseURL}",
  "projectId": "{Enter projectID}",
  "appId": "{Enter Test Environment appId}"
};

const devFirebase = {
  "apiKey": "{Enter Test Environment API key}",
  "authDomain": "{Enter Test Environment authDomain}",
  "databaseURL": "{Enter Test Environment databaseURL}",
  "projectId": "{Enter Test Environment projectID}",
  "appId": "{Enter Test Environment appId}"
};

/**
 * @typedef {Object} FirebaseConfig
 * @property {string} apiKey
 * @property {string} authDomain
 * @property {string} databaseURL
 * @property {string} projectId
 * @property {string} appId
 */

export default {
  isLive,
  ...isLive && { // is production
    projectUrl: 'https://linkslist.app/'
  } || { // is development
    projectUrl: 'http://localhost:8080/'
  },

  ...isLive && { // is production
    cloudFunctionsUrl: 'https://us-central1-linkslist-42239.cloudfunctions.net'
  } || { // is development
    cloudFunctionsUrl: 'http://localhost:5000/linkslist-42239/us-central1'
  },

  /** @var {FirebaseConfig} firebase */
  firebase: (isLive) ? productionFirebase : devFirebase,
  version: '1.2.1'
};

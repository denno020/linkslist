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

import Vue from "vue";
import metaScraper from 'meta-scraper';
import Ajax from './Ajax';
import store from '../store';
import appConfig from '../../application-configuration';
import Performance from './Performance';
import Analytics from './Analytics';
import DataStore from "./DataStore";
import { auth } from "@/utils/FirebaseListeners";

/**
 * NetworkCalls class that will contain all network requests that are made throughout the application
 */

/**
 * Get unique string that will be used for sharing url
 *
 * @returns {String}
 */
export const getLinkId = async () => {
  const { links } = store.getters;
  const ui = store.getters['ui/ui'];
  Performance.mark('start_generating_id');

  const headers = store.getters.isLoggedIn ? {
    Authorization: `Bearer ${await auth.currentUser.getIdToken()}`
  } : undefined;
  const response = await Ajax.post(`${appConfig.cloudFunctionsUrl}/getLink`, { links, ui }, headers);

  Performance.mark('finish_generating_id');
  Performance.measure('time_to_generate_id', 'start_generating_id', 'finish_generating_id');
  const timing = Performance.getEntriesByName('time_to_generate_id');
  if (timing !== false) {
    const { duration } = timing[0];
    Analytics.FireTiming('time_to_generate_id', Math.round(duration));
  }

  const { body: { id } } = response;

  DataStore.clear(); // No longer need localStorage

  return id;
};

/**
 * Get the data for a URL
 *
 * @returns {Object}
 */
export const getUrlData = async (url) => {
  const response = await metaScraper(`https://cors-anywhere.herokuapp.com/${url}`);
  const { error = false, errorMessage = {}, description = false, image = false, title = false, og = false } = response;

  return {
    description: error ? errorMessage.message : description,
    image: error ? false : image,
    title: error ? 'Unable to preview link' : title,
    url: og.url || url
  };
};

/**
 * Send data to Firebase cloud function to update the DB
 *
 * Theme and viewMode aren't sync'd, because they're only saved when the list is first created.
 * If the theme or view mode are changed from the value saved in the DB, then it will only be saved to local storage,
 * so it will only be viewable for the user that changed it
 *
 * @returns {Promise}
 */
export const syncFirebaseDB = async () => {
  const { dispatch, getters } = store;

  if (!getters.areCookiesAccepted) {
    dispatch('displayCookiesError');
    return;
  }

  const data = store.getters['getStateToPersist'];
  const { urlString } = getters;

  // Don't try and sync Firebase if there isn't a database entry to sync it with!
  if (urlString === "") {
    DataStore.persist(data); // Sync data to local storage
    return;
  }

  const response = await Vue.http.post(`${appConfig.cloudFunctionsUrl}/syncData`, { urlString, ...data });
  const { body } = response;

  return body;
};

/**
 * Send data user email to Firebase cloud function to store for future updates regarding either the free program or
 * the premium features
 *
 * @param {string}  email                 Email address of the user signing up
 * @param {Boolean} isInterestedInPremium Flag indicating if they're subscribing to app updates, or to premium features being released
 *
 * @returns {Promise<boolean>}
 */
export const subscribe = async (email, isInterestedInPremium) => {
  const response = await Vue.http.post(`${appConfig.cloudFunctionsUrl}/subscribe`, { email, isInterestedInPremium });
  const { status } = response;
  return status === 200;
};

export const createUserRecord = (uid) => {
  return Vue.http.post(`${appConfig.cloudFunctionsUrl}/createUserRecord`, { uid });
};

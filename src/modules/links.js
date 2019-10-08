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

import { getUrlData, syncFirebaseDB } from '../utils/NetworkCalls';

/**
 * Initial state
 * @type {Object}
 */
const state = {
  nextId: 1,
  links: []
};

/**
 * Mutations for updating this piece of state
 * Must be synchronous
 *
 * @type {Object}
 */
const mutations = {

  /**
   * Increase the value for currentId
   *
   * @param {Object} state The slice of state that this module represents
   *
   * @returns {null}
   */
  increaseNextId(state) {
    state.nextId = state.nextId + 1;
  },

  /**
   * Set the nextId value
   * This will be used when syncing the database links with the local links
   *
   * @param {Object} state   The slice of state that this module represents
   * @param {Object} payload Object containing the nextId
   */
  setNextId(state, payload) {
    const { nextId } = payload;
    state.nextId = nextId;
  },

  /**
   * Add new entry to the links array
   *
   * @param {Object} state   The slide of state that this module represents
   * @param {Object} payload Object containing ID and URL of new link
   *
   * @returns {null}
   */
  addToLinks(state, payload) {
    state.links.push({
      ...payload,
      loaded: false,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 125"%3E%3C/svg%3E'
    });
  },

  /**
   *
   * @param {Object} state   The slide of state that this module represents
   * @param {Object} payload Object containing ID of link to update, and meta data for that link
   *
   * @returns {null}
   */
  updateLinkMeta(state, payload) {
    const { id, metaData } = payload;
    state.links = state.links.map((link) => {
      if (link.id !== id) {
        return link;
      }

      return {
        ...link,
        ...metaData
      };
    });
  },

  /**
   * Remove link from the links array
   *
   * @param {Object} state   The slide of state that this module represents
   * @param {Object} payload Object containing the ID of the link to remove
   *
   * @returns {null}
   */
  removeFromLinks(state, payload) {
    state.links = state.links.filter(link => link.id !== payload.id);
  },

  /**
   * Replace the links array with the newly received data
   *
   * @param {Object} state   The slice of state that this module is responsible for
   * @param {Object} payload The updated links array
   */
  setLinks(state, payload) {
    state.links = payload;
  }
};

/**
 * Actions for updating this piece of state
 * Can contain asyncronous actions
 *
 * @type {Object}
 */
const actions = {

  /**
   * Add a new link
   *
   * @param {Object} module The slice of state within this module
   *
   * @returns {null}
   */
  addToLinks({ rootState, state, commit, dispatch }) {
    dispatch('userInput/clearLinkUrl');

    // For each of the parsed links, get it's data and add to the links array
    rootState.userInput.links.forEach((link) => {
      const { value: url } = link;
      const { nextId } = state;

      const payload = {
        id: nextId,
        url
      };
      commit('addToLinks', payload);
      dispatch('fetchUrlData', payload);

      // Increase next ID ready for the next link
      commit('increaseNextId');
    });

    // Now that we've finished looping, the links are now stored in their permanent home, so the temporary links array can be cleared
    dispatch('userInput/clearLinks');
  },

  /**
   * Fetch the data of a URL
   *
   * @param {Object} module  The slice of state within this module
   * @param {Object} payload Object containing ID and URL of link that has just been saved
   *
   * @returns {null}
   */
  async fetchUrlData({ commit, dispatch }, payload) {
    const { id, url: fetchUrl } = payload;
    const { description, image, title, url } = await getUrlData(fetchUrl);

    commit('updateLinkMeta', {
      id,
      metaData: {
        loaded: true,
        description,
        image,
        title,
        url
      }
    });

    dispatch('syncDb');
  },

  /**
   * Remove a link from the links array
   *
   * @param {Object} module The slice of state within this module
   * @param {int}    id     The ID of the link to remove
   *
   * @returns {null}
   */
  removeLink({ commit, dispatch }, id) {
    commit('removeFromLinks', { id });

    dispatch('syncDb');
  },

  /**
   * Trigger cloud function that will sync the DB with the current state of the list
   */
  syncDb({ rootGetters }) {
    const urlString = rootGetters.urlString;
    // If there is no urlString set, then the list hasn't been created in Firebase yet
    if (urlString === '') {
      return;
    }

    const links = rootGetters.links;

    // Make sure that all links in the array have their meta data set before syncing to Firebase
    // This will be an issue when adding multiple links at once
    const canUpdate = links.every(link => link.loaded);
    if (!canUpdate) {
      return;
    }

    syncFirebaseDB();
  },

  /**
   * Sets the links to the new value
   * This will be used when updates from the database are received
   *
   * @param {Object} module
   * @param {Object} payload The updated links array
   *
   * @returns {null}
   */
  setLinks({ commit }, payload = []) {
    commit('setLinks', payload);

    let highestId = 0;
    payload.forEach((link) => {
      if (link.id > highestId) {
        highestId = link.id;
      }
    });

    commit('setNextId', { nextId: ++highestId });
  }
};

/**
 * Getter for this piece of state
 *
 * @type {Object}
 */
const getters = {
  links: state => state.links
};

// Module exports
export default {
  state,
  mutations,
  actions,
  getters
};

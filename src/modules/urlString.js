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

import { getLinkId } from '../utils/NetworkCalls';
import { listenForListChange } from '../utils/FirebaseListeners';
import { ALERT_ERROR } from "../constants";

/**
 * This state is for storing the unique URL string that is used to share the links list
 */

const getInitialUrlStringVal = () => {
  const { pathname } = window.location;
  const replacePattern = /\/(app$)?/;
  return pathname ? pathname.replace(replacePattern, '') : null;
};

/**
 * Initial state
 * @type {Object}
 */
const state = {
  urlString: getInitialUrlStringVal()
};

/**
 * Mutations for updating this piece of state
 * Must be synchronous
 *
 * @type {Object}
 */
const mutations = {
  urlString(state, payload) {
    state.urlString = payload;
  }
};

/**
 * Actions for updating this piece of state
 * Can contain asynchronous actions
 *
 * @type {Object}
 */
const actions = {
  urlString(state, payload) {
    state.commit('urlString', payload);
    listenForListChange(payload);
  },

  clearUrlString({ commit }) {
    commit('urlString', '');
  },

  /**
   * Fetch the unique string that will be used for sharing the list
   *
   * @param {Object} module
   *
   * @returns {null}
   */
  async fetchUrlString({ dispatch }) {
    try {
      dispatch('ui/setIsGettingId', { isGettingId: true });
      const id = await getLinkId();
      dispatch('ui/setIsGettingId', { isGettingId: false });
      dispatch('urlString', id);
      history.pushState({}, id, id);
    } catch (error) {
      dispatch('ui/setIsGettingId', { isGettingId: false });
      dispatch('alerts/displayAlert', { type: ALERT_ERROR, message: 'There was an error creating URL. Please try again' });
    }
  }
};

/**
 * Getter for this piece of state
 *
 * @type {Object}
 */
const getters = {
  urlString: state => state.urlString
};

// Module exports
export default {
  state,
  mutations,
  actions,
  getters
};

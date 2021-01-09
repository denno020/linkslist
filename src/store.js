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

import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import appConfig from '../application-configuration';
import DataStore from "./utils/DataStore";
import { ALERT_INFO } from "./constants";
import { syncFirebaseDB } from "./utils/NetworkCalls";
import validateCookiesAccepted from "./store/validateCookiesAccepted";

Vue.use(Vuex);

export default new Vuex.Store({
  modules,

  /**
   * Initial state
   */
  state: {
    projectUrl: appConfig.projectUrl,
    areLinksLoading: false
  },

  /**
   * These are synchronous and used to update the state directly.
   */
  mutations: {
    areLinksLoading(state, isLoading) {
      state.areLinksLoading = isLoading;
    }

  },

  /**
   * These are required when wanting to do asynchronous actions as well, i.e. API call before updating state
   */
  actions: {

    checkAndHydrateFromLocalStorage({ dispatch }) {
      // Hydrate from localStorage, if data exists
      const storedData = DataStore.getStored();

      if (storedData) {
        dispatch('hydrateState', storedData);
        dispatch('alerts/displayAlert', { type: ALERT_INFO, message: 'Links restored from local cache' });
      }
    },

    /**
     * Hydrate store state using data from Firebase or localStorage
     *
     * @param {Object}   module
     * @param {Function}  module.dispatch Dispatch function that calls modules actions
     * @param {Object}   storedState Stored state data
     *
     * @returns {null}
     */
    hydrateState({ dispatch, commit }, storedState) {
      const { links, ui, meta, isPaypalMeDismissed } = storedState;

      dispatch('setLinks', links);
      dispatch('ui/setUi', ui);
      dispatch('userInput/setMeta', meta);

      dispatch('setAreLinksLoading', { isLoading: false });
    },

    setAreLinksLoading({ commit }, payload) {
      const { isLoading } = payload;
      commit('areLinksLoading', isLoading);

    },

    syncToFirebase: (...params) => validateCookiesAccepted(...params, () => {
      syncFirebaseDB();
    })
  },
  /**
   * These are used to ensure all components get the same data, even if that data needs to be modified before being
   * returned to the component
   */
  getters: {
    projectUrl: state => state.projectUrl,

    /**
     * Get the state that is persisted both to localStorage, but also to Firebase
     *
     * @param state
     * @param getters
     *
     * @returns {{ui: *, isPaypalMeDismissed: *, meta: *, links: *}}
     */
    getStateToPersist: (state, getters) => {
      const {
        links,
        'ui/ui': ui,
        'userInput/getMeta': meta,
        'alerts/isPaypalMeVisible': isPaypalMeVisible
      } = getters;

      return {
        links,
        ui,
        meta,
        isPaypalMeDismissed: !isPaypalMeVisible
      };
    },

    areLinksLoading: state => state.areLinksLoading
  }
});

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

import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules';
import appConfig from '../application-configuration';

Vue.use(Vuex);

export default new Vuex.Store({
  modules,

  /**
   * Initial state
   */
  state: {
    projectUrl: appConfig.projectUrl
  },

  /**
   * These are synchronous and used to update the state directly.
   */
  mutations: {},

  /**
   * These are required when wanting to do asynchronous actions as well, i.e. API call before updating state
   */
  actions: {

    /**
     * Hydrate store state using locally stored data
     *
     * @param {Object}   module
     * @param {Function}  module.dispatch Dispatch function that calls modules actions
     * @param {Object}   storedState Stored state data
     *
     * @returns {null}
     */
    hydrateState({ dispatch }, storedState) {
      const { links, ui, meta } = storedState;

      dispatch('setLinks', links);
      dispatch('ui/setUi', ui);
      dispatch('userInput/setMeta', meta)
    }
  },

  /**
   * These are used to ensure all components get the same data, even if that data needs to be modified before being
   * returned to the component
   */
  getters: {
    projectUrl: state => state.projectUrl
  }
});

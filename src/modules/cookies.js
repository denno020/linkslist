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

import Storage from "@/utils/Storage";
import { ALERT_ERROR } from "../constants";

/**
 * Initial state
 * @type {Object}
 */
const state = {
  areCookiesAccepted: null
};

/**
 * Mutations for updating this piece of state
 * Must be synchronous
 *
 * @type {Object}
 */
const mutations = {
  areCookiesAccepted(state, isAccepted) {
    state.areCookiesAccepted = isAccepted;
  }
};

/**
 * Actions for updating this piece of state
 * Can contain asynchronous actions
 *
 * @type {Object}
 */
const actions = {
  checkIfCookiesAllowed({ dispatch }) {
    const cookiesState = Storage.getItem('cookies-state');
    if (!cookiesState) {
      dispatch('setAreCookiesAccepted', { isAccepted: false });
      return;
    }

    dispatch('setAreCookiesAccepted', { isAccepted: cookiesState === 'accepted' });
  },

  setAreCookiesAccepted({ commit }, payload) {
    const { isAccepted, doReload = false } = payload;
    commit('areCookiesAccepted', isAccepted);

    if (isAccepted) {
      Storage.setItem('cookies-state', 'accepted')
    }

    if (doReload) {
      location.reload();
    }
  },

  displayCookiesError({ dispatch }) {
    dispatch('alerts/displayAlert', { type: ALERT_ERROR, message: `Links List will not work with cookies disabled`, timeout: 0 });
  }
};

/**
 * Getter for this piece of state
 *
 * @type {Object}
 */
const getters = {
  areCookiesAccepted: state => state.areCookiesAccepted
};

// Module exports
export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
};

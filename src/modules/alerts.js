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

import { ALERT_SUCCESS, ALERT_ERROR, ALERT_INFO, ALERT_WARNING } from '../constants';
import Storage from "../utils/Storage";

/**
 * Initial state
 * @type {Object}
 */
const state = {
  types: [
    {
      type: ALERT_SUCCESS,
      icon: 'check_circle'
    },
    {
      type: ALERT_INFO,
      icon: 'info'
    },
    {
      type: ALERT_WARNING,
      icon: 'priority_high'
    },
    {
      type: ALERT_ERROR,
      icon: 'warning'
    }
  ],
  show: {
    [ALERT_SUCCESS]: false,
    [ALERT_ERROR]: false,
    [ALERT_WARNING]: false,
    [ALERT_INFO]: false
  },
  text: {
    [ALERT_SUCCESS]: '',
    [ALERT_ERROR]: '',
    [ALERT_WARNING]: '',
    [ALERT_INFO]: ''
  },
  isPaypalMeVisible: !Storage.getItem('paypal_me_dismissed')
};

/**
 * Mutations for updating this piece of state
 * Must be synchronous
 *
 * @type {Object}
 */
const mutations = {
  /**
   * Set flag to display alert of specified type, and update the message
   *
   * @param {Object} state   The slide of state that this module is responsible for
   * @param {Object} payload An object containing the type of alert to display, and the message to display
   *
   * @returns {null}
   */
  displayAlert(state, payload) {
    const { type, message } = payload;
    state.show[type] = true;
    state.text[type] = message;
  },

  /**
   * Set flag to hide alert of specified type, and reset message to blank
   *
   * @param {Object} state   The slide of state that this module is responsible for
   * @param {Object} payload An object containing the type of alert to hide
   *
   * @returns {null}
   */
  hideAlert(state, payload) {
    const { type } = payload;
    state.show[type] = false;
    state.text[type] = '';
  },

  /**
   *
   * @param {Object}  state     The slide of state that this module is responsible for
   * @param {Boolean} isVisible Flag indicating if the "snackbar" is visible or not
   *
   * @returns {null}
   */
  isPaypalMeVisible(state, isVisible) {
    state.isPaypalMeVisible = isVisible;
  }
};

/**
 * Actions for updating this piece of state
 * Can contain asynchronous actions
 *
 * @type {Object}
 */
const actions = {

  /**
   * Display an alert for a specific amount of time
   *
   * @param {Object} module
   * @param {Object} payload Object containing the alert to display, the message, and optionally the amount of time to display
   */
  displayAlert({ commit, dispatch }, payload) {
    const { type, message, timeout = 3000 } = payload;
    commit('displayAlert', { type, message });

    if (timeout > 0) {
      window.setTimeout(() => {
        dispatch('hideAlert', { type });
      }, timeout);
    }
  },

  /**
   * Action to hide alert of specified type
   *
   * @param {Object} state   The slide of state that this module is responsible for
   * @param {Object} payload
   */
  hideAlert({ commit }, payload) {
    commit('hideAlert', payload);
  },

  /**
   *
   * @param {Object} state   The slide of state that this module is responsible for
   * @param {Object} payload Object containing the new value for the property
   *
   * @returns {null}
   */
  setIsPaypalMeVisible({ commit }, payload) {
    const { isVisible } = payload;
    commit('isPaypalMeVisible', isVisible);
    Storage.setItem('paypal_me_dismissed', true);
  }
};

/**
 * Getter for this piece of state
 *
 * @type {Object}
 */
const getters = {
  isVisible: state => type => state.show[type],
  getText: state => type => state.text[type],
  getTypes: state => state.types,
  isPaypalMeVisible: state => state.isPaypalMeVisible
};

// Module exports
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

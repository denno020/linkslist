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

import { VIEW_OPEN, VIEW_DENSE } from '../constants';
import { syncFirebaseDB } from "../utils/NetworkCalls";
import Analytics from "../utils/Analytics";

/**
 * @typedef  {Object}  UIState
 * @property {string}  viewMode
 * @property {Object}  views
 * @property {string}  theme
 * @property {Array}   colourSwatches
 * @property {Boolean} swatchesVisible
 * @property {Boolean} isGettingId
 */

/**
 * Initial state
 * @type {UIState}
 */
const state = {
  viewMode: VIEW_OPEN,
  views: {
    VIEW_OPEN: {
      mode: VIEW_OPEN,
      icon: 'view_agenda'
    },
    VIEW_DENSE: {
      mode: VIEW_DENSE,
      icon: 'view_headline'
    }
  },
  theme: "#2196F3", // Storing the actual HEX value which will allow for a possible custom colour in the future
  // All available colours. The first colour will be the default colour shown in quick picker, with the rest shown after user clicks on "More..."
  colourSwatches: [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
    "#607D8B",
    "#9E9E9E",
    "#000000",
  ],
  /** @var {Boolean} Indicates if the user is currently picking from the colour chooser */
  swatchesVisible: false,
  isGettingId: false
};

/**
 * Mutations for updating this piece of state
 * Must be synchronous
 *
 * @type {Object}
 */
const mutations = {
  viewMode(state, viewMode) {
    state.viewMode = viewMode;
  },

  /**
   * Set the theme
   *
   * @param {UIState} state   The slice of state that this module is responsible for
   * @param {Object} payload Object containing the theme to be set
   *
   * @returns {null}
   */
  theme(state, payload) {
    const { theme } = payload;
    state.theme = theme;
  },

  /**
   * Set UI params
   * This function will mainly be used to populate the UI state with values that have been saved in the DB or localStorage
   *
   * @param {UIState} state   The slice of state that this module is responsible for
   * @param {Object} payload  Object containing the UI values that are going to be updated
   *
   * @returns {null}
   */
  setUi(state, payload) {
    Object.keys(payload).forEach((property) => {
      state[property] = payload[property];
    });
  },

  /**
   * Set isGettingId
   *
   * @param {UIState} state   The slice of state that this module is responsible for
   * @param {Object} payload Object container the value to update
   *
   * @returns {null}
   */
  isGettingId(state, payload) {
    const { isGettingId } = payload;

    state.isGettingId = isGettingId;
  },

  /**
   * Set swatchesVisible
   *
   * @param {UIState} state   The slice of state that this module is responsible for
   * @param {Object} payload Object containing the value to update
   */
  swatchesVisible(state, payload) {
    const { swatchesVisible } = payload;

    state.swatchesVisible = swatchesVisible;
  }
};

/**
 * Actions for updating this piece of state
 * Can contain asynchronous actions
 *
 * @type {Object}
 */
const actions = {
  setViewMode({ commit }, payload) {
    const { viewMode } = payload;
    commit('viewMode', viewMode);
    syncFirebaseDB();

    Analytics.FireFeatureUsed('view_mode', viewMode);
  },

  /**
   * Set the theme
   *
   * @param {Object} module
   * @param {Object} payload Object containing the theme to set
   */
  setTheme({ commit }, payload) {
    commit('theme', payload);
    syncFirebaseDB();

    Analytics.FireFeatureUsed('colour_swatches', 'selected');
  },

  /**
   * Set the UI properties, likely from database or localStorage
   *
   * @param {Object} module
   * @param {Object} payload Object containing the UI property values to update
   *
   * @returns {null}
   */
  setUi({ commit }, payload) {
    commit('setUi', payload);
  },

  /**
   * Set the flag for isGettingId, indicating if the application has requested an ID
   *
   * @param {Object} module
   * @param {Object} payload              Object containing property value to update
   * @param {Boolean} payload.isGettingId Flag indicating if the application is currently querying for URL ID
   *
   * @returns {null}
   */
  setIsGettingId({ commit }, payload) {
    commit('isGettingId', payload);
  },

  /**
   * Toggle the swatchesVisible property
   *
   * @param {Object} module
   * @param {Object} payload          Options object
   * @param {Boolean} payload.visible [Optional] Force visibility on (true) or off (false). Leave undefined to toggle
   *
   * @returns {null}
   */
  toggleColourSwatches({ commit, state }, payload) {
    const swatchesVisible = payload && typeof payload.visible !== 'undefined' ? payload.visible : !state.swatchesVisible;
    commit('swatchesVisible', { swatchesVisible });

    if (swatchesVisible) Analytics.FireFeatureUsed('colour_swatches', 'opened');
  }
};

/**
 * Getter for this piece of state
 *
 * @type {Object}
 */
const getters = {
  viewMode: state => state.viewMode,
  views: state => Object.values(state.views),
  theme: state => state.theme,
  ui: (state, getters) => {
    // This is the data that will be saved to Firebase DB/localStorage
    const { theme, viewMode } = getters;
    return { theme, viewMode };
  },
  colourSwatches: state => state.colourSwatches,
  swatchesVisible: state => state.swatchesVisible,
  isGettingId: state => state.isGettingId
};

// Module exports
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

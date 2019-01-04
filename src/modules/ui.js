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

import { VIEW_OPEN, VIEW_DENSE, THEME_LIGHT_BLUE } from '../constants';

/**
 * Initial state
 * @type {Object}
 */
const state = {
  selectedView: VIEW_OPEN,
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
  theme: THEME_LIGHT_BLUE
};

/**
 * Mutations for updating this piece of state
 * Must be synchronous
 *
 * @type {Object}
 */
const mutations = {
  selectedView(state, payload) {
    const { viewMode } = payload;
    state.selectedView = viewMode;
  },

  /**
   * Set the theme
   *
   * @param {Object} state   The slice of state that this module is responsible for
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
   * @param {Object} state   The slice of state that this module is responsible for
   * @param {Object} payload Object containing the UI values that are going to be upated
   *
   * @returns {null}
   */
  setUi(state, payload) {
    state = {
      ...state,
      ...payload
    };
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
    commit('selectedView', payload);
  },

  /**
   * Set the theme
   *
   * @param {Object} module
   * @param {Object} payload Object containing the theme to set
   */
  setTheme({ commit }, payload) {
    commit('theme', payload);
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
  }
};

/**
 * Getter for this piece of state
 *
 * @type {Object}
 */
const getters = {
  viewMode: state => state.selectedView,
  views: state => Object.values(state.views),
  theme: state => state.theme,
  ui: (state, getters) => {
    // This is the data that will be saved to Firebase DB/localStorage
    const {theme, viewMode} = getters;
    return { theme, viewMode };
  }
};

// Module exports
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

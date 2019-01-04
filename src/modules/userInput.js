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

import LinkParse from '../utils/LinkParser';

/**
 * Initial state
 * @type {Object}
 */
const state = {
  linkUrl: '', // The text that the user enters into the input box
  links: [] // Array of links extracted from the user inputted text
};

/**
 * Mutations for updating this piece of state
 * Must be synchronous
 *
 * @type {Object}
 */
const mutations = {
  linkUrl(state, payload) {
    state.linkUrl = payload;
  },

  /**
   * Set the parsed links array
   *
   * @param {Object} state   The slice of state that this module is responsible for
   * @param {array}  payload An array of links that have been extracted from the linkUrl string
   *
   * @returns {null}
   */
  setLinks(state, payload) {
    state.links = payload;
  }
};

/**
 * Actions for updating this piece of state
 * Can contain asynchronous actions
 *
 * @type {Object}
 */
const actions = {
  linkUrl({ commit, dispatch }, payload) {
    commit('linkUrl', payload);
    // Parse the linkUrl string for a set of characters that looks like a URL
    dispatch('parseLinkUrl');
  },

  /**
   * Clear the value in linkUrl
   *
   * @param {Object} module
   */
  clearLinkUrl({ commit }) {
    commit('linkUrl', '');
  },

  /**
   * Clear the array in links
   *
   * @param {Object} module
   *
   * @returns {null}
   */
  clearLinks({ commit }) {
    commit('setLinks', '');
  },

  /**
   * Parse the linkUrl text to find one or multiple links
   *
   * @param {Object} module
   */
  parseLinkUrl({ state, commit }) {
    const links = LinkParse.parse(state.linkUrl);
    commit('setLinks', links);
  }
};

/**
 * Getter for this piece of state
 *
 * @type {Object}
 */
const getters = {
  linkUrl: state => state.linkUrl,
  links: state => state.links
};

// Module exports
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

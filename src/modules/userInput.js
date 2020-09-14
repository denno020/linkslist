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
import { syncFirebaseDB } from "../utils/NetworkCalls";
import Analytics from "../utils/Analytics";

/**
 * @typedef {Object} UserInputState
 * @property {String} linkUrl
 * @property {Array} links
 * @property {string} listTitle
 * @property {string} listDescription
 * @property {Boolean} isEditingListTitle
 * @property {Boolean} isEditingListDescription
 */

/**
 * Initial state
 * @type {UserInputState}
 */
const state = {
  linkUrl: '', // The text that the user enters into the input box
  links: [], // Array of links extracted from the user inputted text
  listTitle: 'Links List',
  listDescription: 'Simply create a list of links. Then share it!',
  isEditingListTitle: false,
  isEditingListDescription: false
};

/**
 * Mutations for updating this piece of state
 * Must be synchronous
 *
 * @type {Object}
 */
const mutations = {
  /**
   * @param {Object} state   The slice of state that this module is responsible for
   * @param {string} linkUrl
   *
   * @returns {null}
   */
  linkUrl(state, linkUrl) {
    state.linkUrl = linkUrl;
  },

  /**
   * Set the parsed links array
   *
   * @param {Object} state The slice of state that this module is responsible for
   * @param {Array}  links An array of links that have been extracted from the linkUrl string
   *
   * @returns {null}
   */
  setLinks(state, links) {
    state.links = links;
  },

  /**
   * Set the title of the list
   *
   * @param {Object}  state    The slice of state that this module is responsible for
   * @param {string}  listTitle The new title for the list
   *
   * @returns {null}
   */
  listTitle(state, listTitle) {
    state.listTitle = listTitle;
  },

  /**
   * Set the title of the list
   *
   * @param {Object} state           The slice of state that this module is responsible for
   * @param {string} listDescription The new description for the list
   *
   * @returns {null}
   */
  listDescription(state, listDescription) {
    state.listDescription = listDescription;
  },

  /**
   * @param {Object}  state
   * @param {Boolean} isEditingListTitle
   *
   * @returns {null}
   */
  isEditingListTitle(state, isEditingListTitle) {
    state.isEditingListTitle = isEditingListTitle;
  },

  /**
   * @param {Object}  state
   * @param {Boolean} isEditingListTitle
   *
   * @returns {null}
   */
  isEditingListDescription(state, isEditingListDescription) {
    state.isEditingListDescription = isEditingListDescription;
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
  },

  /**
   * Alias for the setListTitle action below
   * This is only here to be used when hydrating state from a stored list (either in localStorage or Firebase)
   *
   * @param {Object}   module
   * @param {function}  module.dispatch Function to call actions on the module
   * @param {Object}   payload
   * @param {string}    payload.value The title for the list
   *
   * @returns {null}
   */
  listTitle({ dispatch }, payload) {
    const { value } = payload;
    dispatch('setListTitle', { listTitle: value });
  },

  /**
   * @param {Object}   module
   * @param {function}  module.commit     Function to call mutations on the module
   * @param {Object}   payload
   * @param {string}    payload.listTitle The new title for the list
   *
   * @returns {null}
   */
  setListTitle({ commit }, payload) {
    const { listTitle } = payload;
    commit('listTitle', listTitle);
    document.title = listTitle;
  },

  /**
   * Alias for the setListDescription action below
   * This is only here to be used when hydrating state from a stored list (either in localStorage or Firebase)
   *
   * @param {Object}   module
   * @param {function}  module.dispatch Function to call actions on the module
   * @param {Object}   payload
   * @param {string}    payload.value The description for the list
   */
  listDescription({ dispatch }, payload) {
    const { value } = payload;
    dispatch('setListDescription', { listDescription: value });
  },

  /**
   * @param {Object}   module
   * @param {function}  module.commit           Function to call mutations on the module
   * @param {Object}   payload
   * @param {string}    payload.listDescription The new description for the list
   *
   * @returns {null}
   */
  setListDescription({ commit }, payload) {
    const { listDescription } = payload;
    commit('listDescription', listDescription);
  },

  /**
   * @param {Object}   module
   * @param {function}  module.commit     Function to call mutations on the module
   * @param {Object}   payload
   * @param {Boolean}   payload.isEditing The new description for the list
   *
   * @returns {null}
   */
  setIsEditingListTitle({ commit }, payload) {
    const { isEditing } = payload;
    commit('isEditingListTitle', isEditing);

    // Assuming that isEditing === false when the user has finished updating the title
    if (!isEditing) {
      syncFirebaseDB();
    }

    Analytics.FireFeatureUsed('edit_title', isEditing ? 'true' : 'false');
  },

  /**
   * @param {Object}   module
   * @param {function}  module.commit     Function to call mutations on the module
   * @param {Object}   payload
   * @param {Boolean}   payload.isEditing The new description for the list
   *
   * @returns {null}
   */
  setIsEditingListDescription({ commit }, payload) {
    const { isEditing } = payload;
    commit('isEditingListDescription', isEditing);

    // Assuming that isEditing === false when the user has finished updating the description
    if (!isEditing) {
      syncFirebaseDB();
    }

    Analytics.FireFeatureUsed('edit_description', isEditing ? 'true' : 'false');
  },

  /**
   * Set the meta data for the links list, likely from Firebase DB
   *
   * @param {Object}   module
   * @param {function}  module.dispatch Function to call actions on the module
   * @param {Object}   payload
   * @param {string}    payload.listTitle       The saved title for the list
   * @param {string}    payload.listDescription The saved description for the list
   */
  setMeta({ dispatch }, payload) {
    if (!payload) {
      return;
    }

    Object.entries(payload).forEach((entry) => {
      const [property, value] = entry;
      dispatch(property, { value });
    });
  }
};

/**
 * Getter for this piece of state
 *
 * @type {Object}
 */
const getters = {
  linkUrl: state => state.linkUrl,
  links: state => state.links,
  listTitle: state => state.listTitle,
  listDescription: state => state.listDescription,
  isEditingListTitle: state => state.isEditingListTitle,
  isEditingListDescription: state => state.isEditingListDescription,
  /**
   * Get the data that will be saved to Firebase DB/localStorage
   *
   * @param {UserInputState} state
   *
   * @returns {{ listDescription: <string>, listTitle: <string> }}
   */
  getMeta: (state) => {
    return {
      listTitle: state.listTitle,
      listDescription: state.listDescription
    };
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

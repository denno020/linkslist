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

/**
 * Initial state
 * @type {Object}
 */
const state = {
  user: false,
  myLists: [],
  subscribedLists: []
};

/**
 * Mutations for updating this piece of state
 * Must be synchronous
 *
 * @type {Object}
 */
const mutations = {
  user(state, payload) {
    state.user = payload;
  },

  subscribedLists(state, lists) {
    state.subscribedLists = lists;
  },

  myLists(state, myLists) {
    state.myLists = myLists;
  }
};

/**
 * Actions for updating this piece of state
 * Can contain asynchronous actions
 *
 * @type {Object}
 */
const actions = {
  user({ commit }, { user }) {
    commit('user', user);
  },

  signOut({ commit }) {
    commit('user', false);
    window.location.href = "/app"; // Choosing to do this to ensure everything within the app state is forgotten/reset
  },

  addSubscribedList({ commit, state, getters }, payload) {
    const { list, firebaseId } = payload;
    const { id, meta, ui } = list;
    const newLists = [
      ...state.subscribedLists,
      {
        firebaseId,
        id,
        title: meta ? meta.listTitle : getters['userInput/listTitle'],
        desc: meta ? meta.listDescription : getters['userInput/listDescription'],
        theme: ui.theme
      }
    ];

    commit('subscribedLists', newLists);
  },

  removeSubscribedList({ commit, state }, payload) {
    const { id } = payload;
    const filteredSubscribedLists = state.subscribedLists.filter(list => list.id !== id);
    commit('subscribedLists', filteredSubscribedLists)
  },

  addToMyLists({ commit, state, getters }, payload) {
    const { list, firebaseId } = payload;
    const { id, meta, ui } = list;
    const myLists = [
      ...state.myLists,
      {
        firebaseId,
        id,
        title: meta ? meta.listTitle : getters['userInput/listTitle'],
        desc: meta ? meta.listDescription : getters['userInput/listDescription'],
        theme: ui.theme
      }
    ];

    commit('myLists', myLists);
  }
};

/**
 * Getter for this piece of state
 *
 * @type {Object}
 */
const getters = {
  user: state => state.user,
  isLoggedIn: state => state.user !== false,
  myLists: state => state.myLists,
  subscribedLists: state => state.subscribedLists,
  isSubscribed: (state, getters) => state.subscribedLists.find(subscribedList => subscribedList.id === getters.urlString) !== undefined
};

// Module exports
export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
};

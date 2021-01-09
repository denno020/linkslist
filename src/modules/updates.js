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

import getNFirstArrayItems from '../utils/get-n-first-array-items';
import generateNextNArrayValues from '../utils/generate-next-n-array-values';
import updates from './../updates';

/**
 * Initial state
 * @type {Object}
 */
const state = {
  updates
};

/**
 * Mutations for updating this piece of state
 * Must be synchronous
 *
 * @type {Object}
 */
const mutations = {
  updates(state, payload) {
    state.updates = payload;
  }
};

/**
 * Actions for updating this piece of state
 * Can contain asynchronous actions
 *
 * @type {Object}
 */
const actions = {
  updates({ commit }, payload) {
    commit('updates', payload);
  }
};

/**
 * Getter for this piece of state
 *
 * @type {Object}
 */
const getters = {
  updates: state => state.updates,
  updateSlices: state => {
    const updatesGenerator = generateNextNArrayValues(state.updates, 3);
    const groups = [];
    let slice = updatesGenerator.next().value;
    while (typeof slice !== 'undefined') {
      groups.push(slice);
      slice = updatesGenerator.next().value;
    }
    return groups;
  },
  recentUpdates: state => getNFirstArrayItems(state.updates, 3),
  getUpdate: state => slug => state.updates.find(update => update.slug === slug)
};

// Module exports
export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
};

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
 * Abstract interface class for local storage
 */
export default class DataStore {
  constructor (config = {}) {
    this.config = config;
  }

  /**
   * Sync provided state with localStorage
   *
   * @param {Object} state
   *
   * @returns {Promise}
   */
  static persist(state) {
    return new Promise(() => {
      localStorage.setItem('links-list', JSON.stringify(state));
    });
  }

  static getStored() {
    const stored = localStorage.getItem('links-list');
    if (!stored) return false;

    return JSON.parse(stored);
  }

  /**
   * Clear local storage value
   * This will likely be called once the user has generated a URL, so the data will be saved to Firebase instead
   *
   * @returns {null}
   */
  static clear() {
    localStorage.removeItem('links-list');
  }
}

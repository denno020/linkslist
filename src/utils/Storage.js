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
 * Class Storage
 *
 * Interface class for local storage
 */
export default class Storage {

  /**
   * Save item to storage,
   * Data will be run through JSON.stringify
   *
   * @param {string}        key   Key for value
   * @param {string|Object} value Value to save against key
   *
   * @returns {null}
   */
  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Get item from storage
   *
   * @param {string} key Key of value to get
   *
   * @returns {string|Object}
   */
  static getItem(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  }

  /**
   * Remove an item from storage
   *
   * @param {string} key Key of value to remove
   *
   * @returns {null}
   */
  static removeItem(key) {
    localStorage.removeItem(key);
  }
}

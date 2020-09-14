/*
 *  Links List - Create a list of links, and then share it!
 *  Copyright (c) 2020 Luke Denton
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
 * A generator function that will yield data from an array in groups of `n` items
 *
 * @param {array}  arr The array to be parsed
 * @param {Number} n   The number of items that should be yielded each time
 *
 * @returns {Generator<[], void, ?>}
 */
export default function* (arr, n) {
  let returnValue = [];

  for (let i = 0 ; i < arr.length ; i++) {
    if (returnValue.length < n) {
      const value = arr[i];
      returnValue.push(value);
    }

    if (returnValue.length === n) {
      yield returnValue;
      returnValue = [];
    }
  }

  // Ensure there is still a yield even if there aren't any more array items left
  // This handles when the length of the array isn't perfectly divisible by `n`
  yield returnValue;
}

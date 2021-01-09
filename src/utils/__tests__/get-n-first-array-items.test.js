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

import getNFirstArrayItems from '../get-n-first-array-items';

describe('getNFirstArrayItems', () => {
  it('gets the first 3 items', () => {
    const inputArray = [
      'one', 'two', 'three', 'four', 'five', 'six'
    ];
    const expectedOutput = [
      'one', 'two', 'three'
    ];

    const output = getNFirstArrayItems(inputArray, 3);

    expect(output).toEqual(expectedOutput);
  });

  it('gets the first 5 items', () => {
    const inputArray = [
      'one', 'two', 'three', 'four', 'five', 'six'
    ];
    const expectedOutput = [
      'one', 'two', 'three', 'four', 'five'
    ];

    const output = getNFirstArrayItems(inputArray, 5);

    expect(output).toEqual(expectedOutput);
  });

  it('returns entire array if there are less items than are requested', () => {
    const inputArray = [
      'one', 'two', 'three'
    ];
    const expectedOutput = [
      'one', 'two', 'three'
    ];

    const output = getNFirstArrayItems(inputArray, 5);

    expect(output).toEqual(expectedOutput);
  });
});

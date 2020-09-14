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

import generateNextNArrayValues from '../generate-next-n-array-values';

describe('generateNextNArrayValues', () => {
  it('gets data in sets of 3', () => {
    const inputArray = [
      'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'
    ];

    const firstExpectedOutput = ['one', 'two', 'three'];
    const secondExpectedOutput = ['four', 'five', 'six'];
    const thirdExpectedOutput = ['seven', 'eight', 'nine'];
    const fourthExpectedOutput = ['ten', 'eleven', 'twelve'];

    const valueGenerator = generateNextNArrayValues(inputArray, 3);

    expect(valueGenerator.next().value).toEqual(firstExpectedOutput);
    expect(valueGenerator.next().value).toEqual(secondExpectedOutput);
    expect(valueGenerator.next().value).toEqual(thirdExpectedOutput);
    expect(valueGenerator.next().value).toEqual(fourthExpectedOutput);
  });

  it('gets data in sets of 2', () => {
    const inputArray = [
      'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'
    ];

    const firstExpectedOutput = ['one', 'two'];
    const secondExpectedOutput = ['three', 'four'];
    const thirdExpectedOutput = ['five', 'six'];
    const fourthExpectedOutput = ['seven', 'eight'];
    const fifthExpectedOutput = ['nine', 'ten'];
    const sixthExpectedOutput = ['eleven', 'twelve'];

    const valueGenerator = generateNextNArrayValues(inputArray, 2);

    expect(valueGenerator.next().value).toEqual(firstExpectedOutput);
    expect(valueGenerator.next().value).toEqual(secondExpectedOutput);
    expect(valueGenerator.next().value).toEqual(thirdExpectedOutput);
    expect(valueGenerator.next().value).toEqual(fourthExpectedOutput);
    expect(valueGenerator.next().value).toEqual(fifthExpectedOutput);
    expect(valueGenerator.next().value).toEqual(sixthExpectedOutput);
  });

  it('handles an array that isn\'t divisible perfectly by n', () => {
    const inputArray = [
      'one', 'two', 'three', 'four', 'five'
    ];

    const firstExpectedOutput = ['one', 'two', 'three'];
    const secondExpectedOutput = ['four', 'five'];

    const valueGenerator = generateNextNArrayValues(inputArray, 3);

    expect(valueGenerator.next().value).toEqual(firstExpectedOutput);
    expect(valueGenerator.next().value).toEqual(secondExpectedOutput);
  });
});

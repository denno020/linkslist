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

const { areUrlsTheSame } = require('../compare-urls');

describe('compare-urls', () => {
  it('ignores protocol when only 1 URL has it', () => {
    const url1 = 'https://www.my-url.com';
    const url2 = 'www.my-url.com';
    const url3 = 'my-url.com';

    expect(areUrlsTheSame(url1, url2)).toBe(true);
    expect(areUrlsTheSame(url1, url3)).toBe(true);
  });

  it('compares protocol when both URLs have one', () => {
    const url1 = 'https://www.my-url.com';
    const url2 = 'http://www.my-url.com';
    const url3 = 'http://my-url.com';

    expect(areUrlsTheSame(url1, url2)).toBe(false);
    expect(areUrlsTheSame(url1, url3)).toBe(false);
    expect(areUrlsTheSame(url2, url3)).toBe(true);
  });

  it('checks pathname is different', () => {
    const url1 = 'my-url.com';
    const url2 = 'my-url.com/test/alias';
    const url3 = 'my-url.com/test/alias';

    expect(areUrlsTheSame(url1, url2)).toBe(false);
    expect(areUrlsTheSame(url2, url3)).toBe(true);
  });

  it('ignores www', () => {
    const url1 = 'www.my-url.com';
    const url2 = 'my-url.com';

    expect(areUrlsTheSame(url1, url2)).toBe(true);
  });


});

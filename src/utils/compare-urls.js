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

function prepareUrl(url) {
  const removeWWW = url.replace('www.', '');
  // Checking for http rather than https, so I don't accidentally make the URL `https://http://...`
  const ensureHttps = removeWWW.includes('http') ? removeWWW : `https://${removeWWW}`;
  return ensureHttps;
}

/**
 * Compare 2 URL's to see if they're the same.
 * They'll be the same if they have the same domain and pathname.
 * If the protocol is included, then it will need to match, otherwise if the protocol is only in 1 URL, it isn't used
 * for the comparison
 *
 * @param {string} one The first URL to compare
 * @param {string} two The second URL to compare
 */
export const areUrlsTheSame = (one, two) => {
  const url1 = new URL(prepareUrl(one));
  const url2 = new URL(prepareUrl(two));

  if (url1.protocol !== url2.protocol) {
    return false;
  }

  if (url1.host !== url2.host) {
    return false;
  }

  if (url1.pathname !== url2.pathname) {
    return false;
  }

  return true;
}




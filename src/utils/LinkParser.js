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

import * as linkify from 'linkifyjs/lib/linkify';

/**
 * Class LinkParse
 *
 * Meant to abstract the use of the linkifyjs library
 */
export default class LinkParser {

  /**
   * Parse a given string and extract the URL's inside it, if any
   *
   * @param {string} string
   */
  static parse(string) {
    return linkify.find(string);
  }
}

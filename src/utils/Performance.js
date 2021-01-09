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
 * Abstract class for the window.performance browser API
 * If performance isn't in the browser for some reason, this class will at least allow the application to continue
 * on without anything breaking
 */
export default class Performance {
    static now() {
        if (!window.performance) return false;

        return window.performance.now();
    }

    static mark(name) {
        if (!window.performance) return false;

        window.performance.mark(name);
    }

    static measure(name, start, end) {
        if (!window.performance) return false;

        window.performance.measure(name, start, end);
    }

    static getEntriesByName(name) {
        if (!window.performance) return false;

        return window.performance.getEntriesByName(name);
    }
}

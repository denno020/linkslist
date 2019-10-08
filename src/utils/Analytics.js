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

export default class Analytics {
    /**
     * Fire the user timing request to GA
     *
     * @param {string} name     The name of the timing event
     * @param {number} time     The timing value
     * @param {string} category The category of the timing event
     *
     * @returns {null}
     */
    static FireTiming(name, time, category = 'Performance') {
        if (window.location.hostname === 'localhost') {
            console.log(name, time, category);
            return;
        }

        gtag('event', 'timing_complete', {
            'name' : name,
            'value' : time,
            'event_category' : category
        });
    };
}

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

import { ALERT_SUCCESS, THEME_LIGHT_BLUE } from '../../constants';

export default {
  name: "GetLink",
  computed: {
    urlString() {
      return this.$store.getters.urlString;
    },
    url () {
      return `${this.$store.getters.projectUrl}${this.urlString}`;
    },
    theme() {
      return this.$store.getters['ui/theme'];
    }
  },
  methods: {
    handleGetLink() {
      this.$store.dispatch('fetchUrlString');
    },
    copyToClipboard() {
      this.$store.dispatch('alerts/displayAlert', { type: ALERT_SUCCESS, message: 'Copied to clipboard!' });
    }
  }
}

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

import {
  Alerts,
  Card,
  Footer,
  GetLink,
  Toolbar,
  ViewContainer
} from './components';
import { listenForListChange } from './utils/FirebaseListeners';

export default {
  components: {
    Alerts,
    Card,
    Footer,
    GetLink,
    Toolbar,
    ViewContainer
  },

  /**
   * Lifecycle method that is called as soon as the component gets mounted
   */
  mounted() {
    const urlString = this.$store.getters.urlString;
    if (urlString && urlString !== '') {
      listenForListChange(urlString);
    }
  },
  computed: {
    linkUrl: {
      get () {
        return this.$store.getters['userInput/linkUrl'];
      },
      set (value) {
        this.$store.dispatch('userInput/linkUrl', value);
      }
    },
    links() {
      return this.$store.getters.links;
    },

    /**
     * Get the count of URL's that the user has in their input string, but haven't yet added to the list
     *
     * @returns {int}
     */
    urlCount() {
      return this.$store.getters['userInput/links'].length;
    },
    theme() {
      return this.$store.getters['ui/theme'];
    }
  },
  methods: {
    handleAddLink() {
      if (this.linkUrl === "") {
        return;
      }

      this.$store.dispatch('addToLinks');
    }
  }
}

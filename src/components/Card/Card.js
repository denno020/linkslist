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

import AnimatedEllipsis from '../AnimatedEllipsis/AnimatedEllipsis.vue';
import { VIEW_OPEN, VIEW_DENSE } from '../../constants';

export default {
  name: "Card",
  components: {
    AnimatedEllipsis
  },
  props: [
    'link'
  ],
  computed: {
    isOpen() {
      return this.$store.getters['ui/viewMode'] === VIEW_OPEN;
    },
    isDense() {
      return this.$store.getters['ui/viewMode'] === VIEW_DENSE;
    },
    id() {
      return this.link.id;
    },
    loaded() {
      return this.link.loaded;
    },
    image() {
      return this.link.image;
    },
    title() {
      return this.link.title;
    },
    description() {
      return this.link.description;
    },
    url() {
      return this.link.url;
    }
  },
  methods: {

    /**
     * Handle removing a link from the list
     *
     * @param {int} linkId The ID of the link to remove from the links array
     *
     * @return {null}
     */
    handleRemoveLink(linkId) {
      this.$store.dispatch('removeLink', linkId);
    }
  }
}

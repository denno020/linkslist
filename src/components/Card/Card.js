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

import AnimatedEllipsis from '@/components/AnimatedEllipsis';
import { VIEW_OPEN, VIEW_DENSE } from '../../constants';

export default {
  name: "Card",
  components: {
    AnimatedEllipsis
  },
  props: {
    link: {
      default: () => ({
        id: '',
        loaded: true,
        image: '',
        title: 'Placeholder card',
        description: 'This is a placeholder card! The description is longer to make the loading bar look better',
        url: 'placeholder-card.com',
      }),
      type: Object
    },
    skeleton: {
      default: false,
      type: Boolean
    }
  },
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
    },
    isSkeleton() {
      return this.skeleton;
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
};

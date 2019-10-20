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

import { EditButtonInline } from '../';

export default {
  name: "Header",

  components: {
    EditButtonInline
  },

  data() {
    return {
      showTitleEditButton: false,
      showDescriptionEditButton: false
    };
  },

  computed: {
    listTitle: {
      get() { return this.$store.getters['userInput/listTitle']; },
      set(listTitle) {
        this.$store.dispatch('userInput/setListTitle', { listTitle })
      }
    },
    listDescription: {
      get() { return this.$store.getters['userInput/listDescription']; },
      set(listDescription) {
        this.$store.dispatch('userInput/setListDescription', { listDescription });
      }
    },
    isEditingTitle() {
      return this.$store.getters['userInput/isEditingListTitle'];
    },
    isEditingDescription() {
      return this.$store.getters['userInput/isEditingListDescription'];
    }
  },

  methods: {
    setIsEditingListTitle(isEditing) {
      this.$store.dispatch('userInput/setIsEditingListTitle', { isEditing });

      if (isEditing) {
        this.$nextTick(() => { // See https://forum.vuejs.org/t/how-to-set-focus-to-input/10672/8
          this.$refs.linkTitle.focus();
        });
      }
    },
    setIsEditingListDescription(isEditing) {
      this.$store.dispatch('userInput/setIsEditingListDescription', { isEditing });

      if (isEditing) {
        this.$nextTick(() => { // See https://forum.vuejs.org/t/how-to-set-focus-to-input/10672/8
          this.$refs.linkDescription.focus();
        });
      }
    }
  }
}

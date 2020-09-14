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

import Authentication from "@/components/Authentication";
import EditButtonInline from "@/components/EditButtonInline";
import UserAccount from "@/components/UserAccount";
import { db } from '../../utils/FirebaseListeners';

export default {
  name: "Header",

  components: {
    EditButtonInline,
    Authentication,
    UserAccount
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
        this.$store.dispatch('userInput/setListTitle', { listTitle });
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
    },
    isSubscribeVisible() {
      const isThisMyList = typeof this.$store.getters.myLists.find(list => list.id === this.$store.getters.urlString) !== 'undefined';
      return  !isThisMyList && !this.isEditingTitle;
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
    },

    /**
     * Handle subscriptions to a Links List.
     * This will both subscribe and unsubscribe, depending on the current status of subscription to the list that is
     * currently visible
     */
    handleListSubscription() {
      if (!this.$store.getters.isSubscribed) {
        db.ref(`users/${this.$store.getters.user.uid}/subscribedLists`).push(this.$store.getters.urlString);
        return;
      }

      // User is already subscribed, so they're attempting to remove a subscription
      const unsubscribedListEntry = this.$store.getters.subscribedLists.find(subscribedList => subscribedList.id === this.$store.getters.urlString)
      const subscribedListRef = db.ref(`users/${this.$store.getters.user.uid}/subscribedLists/${unsubscribedListEntry.firebaseId}`);
      if (!subscribedListRef) {
        // For some reason, we weren't able to find a reference for the saved list ID, so ignore the action
        return;
      }

      subscribedListRef.remove();
    }
  }
};

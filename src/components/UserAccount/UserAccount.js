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

import { Fragment } from 'vue-fragment';
import Analytics, { AUTHENTICATION_LOGOUT } from "@/utils/Analytics";
import { auth } from "@/utils/FirebaseListeners";
import { subscribe } from "@/utils/NetworkCalls";

export default {
  name: 'UserAccount',

  components: {
    Fragment
  },

  data() {
    return {
      visibleModal: '',
      isSubscribingToPremium: false,
      isSubscribingToPremiumSuccess: false,
      authenticatedOptions: [
        {
          text: 'My Details',
          callback: () => {
            this.visibleModal = this.MODAL__DETAILS;
          }
        },
        {
          text: 'My Lists',
          callback: () => {
            this.visibleModal = this.MODAL__MY_LISTS;
          }
        },
        {
          text: 'List Subscriptions',
          callback: () => {
            this.visibleModal = this.MODAL__SUBSCRIBED_LISTS;
          }
        },
        {
          text: '*Premium',
          callback: () => {
            this.visibleModal = this.MODAL__PREMIUM;
          }
        },
        {
          text: 'Sign Out',
          callback: () => {
            Analytics.FireAuthentication(AUTHENTICATION_LOGOUT);
            auth.signOut().then(() => {
              this.$store.dispatch('signOut');
            });
          }
        }
      ]
    };
  },

  created() {
    this.MODAL__DETAILS = 'details';
    this.MODAL__MY_LISTS = 'my_lists';
    this.MODAL__SUBSCRIBED_LISTS = 'subscribed_lists';
    this.MODAL__PREMIUM = 'premium';
  },

  computed: {
    theme() {
      return this.$store.getters['ui/theme'];
    },
    user() {
      return this.$store.getters.user;
    },
    subscribedLists() {
      // Filter them here so we can determine if a user is already subscribed to the list.
      // If we filter out the current list ID from the savedLists at the time we save them in the store,
      // then we won't be able to check if the user _is_ subscribed to the current list or not
      return this.$store.getters.subscribedLists.filter(list => list.id !== this.$store.getters.urlString);
    }
  },

  methods: {
    handleNavigateToMyList(id) {
      // This will push the list ID to the URL as expected, but the UI doesn't update because the URL bar isn't reactive... Yet
      window.location.href = `${window.location.origin}/${id}`;
      // this.$router.push({ path: `${id}` })
    },

    handleSelectSubscribedList(id) {
      // This will push the list ID to the URL as expected, but the UI doesn't update because the URL bar isn't reactive... Yet
      window.location.href = `${window.location.origin}/${id}`;
      // this.$router.push({ path: `${id}` })
    },

    async handleSubscribeToPremium() {
      this.isSubscribingToPremium = true;
      await subscribe(this.$store.getters.user.email, true);
      this.subscribeEmail = '';
      this.isSubscribingToPremiumSuccess = true;
      this.isSubscribingToPremium = false;
    }
  }
};

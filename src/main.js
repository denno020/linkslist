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

import Vue from 'vue';
import VueResource from 'vue-resource';
import VueClipboard from 'vue-clipboard2';
import Bugsnag from 'bugsnag-js';
import VueBugsnag from 'vue-bugsnag';
import Ads from 'vue-google-adsense';
import './plugins/vuetify';
import Wrapper from './Wrapper.vue';
import store from './store';
import appConfig from '../application-configuration';
import router from './router';
import { auth, db } from "@/utils/FirebaseListeners";
import tables from "../functions/tables.json";

Vue.config.productionTip = false;

Bugsnag.apiKey = "{Enter Bugsnag API key}";

Vue.use(require('vue-script2'));
Vue.use(VueResource);
Vue.use(VueClipboard);

Vue.use(Ads.Adsense);
Vue.use(Ads.InArticleAdsense);
Vue.use(Ads.InFeedAdsense);

if (appConfig.isLive) {
  Vue.use(VueBugsnag);
}

auth.onAuthStateChanged((user) => {
  if (!user) {
    store.dispatch('user', { user: false });
    return;
  }

  db.ref(`/${tables.users}/${user.uid}`).once('value', (snapshot) => {
    const val = snapshot.val();
    const linksListUser = {
      ...user,
      custom: {
        ...val
      }
    };

    store.dispatch('user', { user: linksListUser });

    // There are saved lists, so set up listeners to handle when a list is subscribed to, but more importantly when an
    // list is unsubscribed from
    db.ref(`/${tables.users}/${user.uid}/subscribedLists`).on('child_added', (snapshot) => {
      const firebaseId = snapshot.key;
      const urlString = snapshot.val();

      db.ref(`/${tables.lists}`).orderByChild('id').equalTo(urlString).on('child_added', (snapshot) => {
        const list = snapshot.val();
        store.dispatch('addSubscribedList', { firebaseId, list });
      });
    });

    // There are saved lists, so set up listeners to handle when a list is subscribed to, but more importantly when an
    // list is unsubscribed from
    db.ref(`/${tables.users}/${user.uid}/myLists`).on('child_added', (snapshot) => {
      const firebaseId = snapshot.key;
      const urlString = snapshot.val();

      db.ref(`/${tables.lists}`).orderByChild('id').equalTo(urlString).on('child_added', (snapshot) => {
        const list = snapshot.val();
        store.dispatch('addToMyLists', { firebaseId, list });
      });
    });

    db.ref(`/${tables.users}/${user.uid}/subscribedLists`).on('child_removed', (snapshot) => {
      const id = snapshot.val();
      store.dispatch('removeSubscribedList', { id });
    });
  });

});

// @TODO This probably needs to be updated to run a regex pattern over the location.pathname, using `.some()`, as we'll also need to account for /update/some-update-name
const urlHasListId = !['/', '/app', '/updates'].includes(location.pathname);
if (urlHasListId) {
  store.dispatch('setAreLinksLoading', { isLoading: true });
} else {
  store.dispatch('checkAndHydrateFromLocalStorage');
}

new Vue({
  store,
  router,
  render: h => h(Wrapper)
}).$mount('#app');

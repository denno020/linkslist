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
import './plugins/vuetify';
import App from './App.vue';
import store from './store'

Vue.config.productionTip = false;

Bugsnag.apiKey = "{Enter Bugsnag API key}";

Vue.use(VueResource);
Vue.use(VueClipboard);
Vue.use(VueBugsnag);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');

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

import firebase from 'firebase/app';
import 'firebase/database';
import store from '../store';
import appConfig from "../../application-configuration";
import tables from '../../functions/tables.json';

firebase.initializeApp(appConfig.firebase);

export const listenForListChange = (urlString) => {
  firebase.database().ref(`/${tables.lists}`).orderByChild('id').equalTo(urlString).on('value', (snapshot) => {
    const updatedVal = snapshot.val();

    if (!updatedVal) {
      // @TODO This is so temporary - replace with a dialog informing the user that the ID doesn't exist first
      window.location.replace('/');
      return;
    }

    const { links, ui, meta } = Object.values(updatedVal)[0];

    store.dispatch('setLinks', links);
    store.dispatch('ui/setUi', ui);
    store.dispatch('userInput/setMeta', meta)
  })
};

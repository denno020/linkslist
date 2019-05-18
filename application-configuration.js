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

const isLive = window.location.hostname !== 'localhost';

export default {
  isLive,
  ...isLive && { // is production
    projectUrl: '{Enter Project URL}'
  } || { // is development
    projectUrl: 'http://localhost:8080/'
  },

  ...isLive && { // is production
    cloudFunctionsUrl: '{Enter Firebase cloud functions URL}'
  } || { // is development
    cloudFunctionsUrl: '{Enter URL for local Firebase Cloud Functions dev}'
  },

  firebase: {
    "apiKey": "{Enter API key}",
    "authDomain": "{Enter authDomain}",
    "databaseURL": "{Enter databaseURL}",
    "projectId": "{Enter projectID}"
  },
  version: '1.1.0'
};

<!--
  -  Links List - Create a list of links, and then share it!
  -  Copyright (c) 2019 Luke Denton
  -
  -  This program is free software: you can redistribute it and/or modify
  -  it under the terms of the GNU General Public License as published by
  -  the Free Software Foundation; either version 3 of the License, or
  -  (at your option) any later version.
  -
  -  This program is distributed in the hope that it will be useful,
  -  but WITHOUT ANY WARRANTY; without even the implied warranty of
  -  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  -  GNU General Public License for more details.
  -
  -  You should have received a copy of the GNU General Public License
  -  along with this program.  If not, see <http://www.gnu.org/licenses/>.
  -->

<template>
  <v-dialog
    v-model="dialog"
    width="700"
  >
    <a href="#" slot="activator" class="white--text privacy-policy-link">Privacy Policy</a>

    <v-card>
      <v-card-title
        class="headline white--text"
        :class="theme"
        primary-title
      >
        Privacy Policy
      </v-card-title>

      <v-card-text>
        <p>
          Links List does not store any users data. When getting a link to share a list, only the links that are added to
          the list will be saved to the database, as well as some customisation options (theme colour and view mode).
        </p>
        <p>
          At no point is there any identifiable information saved to the Links List database.
        </p>
        <p>
          Whilst Links List doesn't make lists searchable or provide a directory of lists, if anyone were to guess a URL,
          then they will be able to view that list. With this in mind, sensitive links/information should be added to a
          list at the users own risk.
        </p>
        <p>
          Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to this,
          and other websites. Google's use of advertising cookies enables it and its partners to serve ads to users
          based on the sites the user visits on the Internet.
        </p>
        <p>
          Users may opt out of personalized advertising by visiting Ads Settings.
        </p>
        <p>
          Google analytics is attached to the site, tracking user visits in order to gauge user interest.
        </p>
        <p>
          Bugsnag is also installed on the site, tracking errors that occur. It doesn’t capture any personal
          information, only information regarding a specific error, if one occurs.
        </p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :color="theme"
          flat
          @click="dialog = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src="./PrivacyDialog.js"></script>
<style scoped src="./PrivacyDialog.css"></style>

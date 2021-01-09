<!--
  -  Links List - Create a list of links, and then share it!
  -  Copyright (c) Luke Denton
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
  <div v-if="$store.getters.areCookiesAccepted === false" class="cookies-notice-container">
      <v-alert transition="scale-transition" class="cookies-notice" :value="true" type="warning" color="warning">
        Links List uses cookies to track usage and make it possible for the application to work.
        <v-btn @click="$store.dispatch('setAreCookiesAccepted', { isAccepted: true, doReload: true })">Accept All</v-btn>
      </v-alert>
  </div>
</template>

<script src="./CookiesNotice.js"></script>
<style scoped lang="scss" src="./CookiesNotice.scss"></style>

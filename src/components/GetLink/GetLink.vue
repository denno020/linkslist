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
  <v-layout justify-center shrink>
    <v-btn v-if="!urlString" :color="theme" class="white--text" @click="handleGetLink" :loading="isLoading">
      <v-icon class="mr-2">link</v-icon>
      Get link
    </v-btn>
    <div v-else>
      <v-btn
        flat
        color="primary"
        class="button--url"
        v-clipboard:copy="url"
        v-clipboard:success="copyToClipboard"
      >
        {{this.url}}
      </v-btn>
    </div>
  </v-layout>
</template>

<script src="./GetLink.js"></script>
<style scoped lang="scss" src="./GetLink.scss"></style>

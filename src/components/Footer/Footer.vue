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
  <v-footer :color="theme" app class="pl-2 pr-2 white--text" height="auto">
    <v-layout xs-3 class="links-container">
      <div class="version" itemprop="softwareVersion">
        <a class="white--text" href="https://github.com/denno020/linkslist/blob/master/CHANGELOG.md" target="_blank" rel="nofollow noopener">Version {{this.applicationVersion}}</a>
      </div>
      <div class="privacy-policy-link-container pl-2">
        <PrivacyDialog />
      </div>
    </v-layout>
    <v-layout xs-6 justify-center class="contact">
      Suggestions or issues? <a class="white--text pl-1" target="_blank" href="https://github.com/denno020/linkslist/issues/new" rel="nofollow noopener">Please open a GitHub Issue</a>
    </v-layout>
    <v-layout xs-3 justify-end class="author" itemprop="author" itemscope itemtype="http://schema.org/Person">
      <meta itemprop="email" content="linkslistapp@gmail.com">
      <span class="author-name">
        Links List created by <span itemprop="name">Luke Denton</span>
      </span>
    </v-layout>
  </v-footer>
</template>

<script src="./Footer.js"></script>
<style src="./Footer.css"></style>

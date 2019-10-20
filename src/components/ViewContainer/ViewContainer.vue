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
  <v-layout align-center justify-end shrink class="view-container">
    <div class="view-container__label pr-1">View:</div>
    <v-btn-toggle v-model="viewMode">
      <v-btn v-for="view in views" :key="view.mode" :value="view.mode" flat icon>
        <v-icon>{{view.icon}}</v-icon>
      </v-btn>
    </v-btn-toggle>
  </v-layout>
</template>

<script src="./ViewContainer.js"></script>
<style scoped lang="scss" src="./ViewContainer.scss"></style>

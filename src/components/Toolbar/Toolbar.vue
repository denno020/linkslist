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
  <v-layout shrink wrap class="toolbar">
    <v-flex xs4 class="toolbar__left">
      <slot name="left"></slot>
    </v-flex>
    <v-flex xs4 class="toolbar__middle">
      <slot name="middle"></slot>
    </v-flex>
    <v-flex xs4 class="toolbar__right">
      <slot name="right"></slot>
    </v-flex>
  </v-layout>
</template>

<script src="./Toolbar.js"></script>
<style scoped lang="scss" src="./Toolbar.scss"></style>

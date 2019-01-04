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
  <div class="alerts">
    <Alert
      v-for="(type, index) in types"
      v-if="$store.getters['alerts/isVisible'](type.type)"
      :key="index"
      :type="type.type"
      :icon="type.icon"
    />
  </div>
</template>

<script src="./Alerts.js"></script>
<style scoped src="./Alerts.css"></style>

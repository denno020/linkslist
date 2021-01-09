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
    <v-layout align-center justify-start shrink class="swatches-container">
        <div v-for="swatch in swatches" :key="swatch" class="swatch-container">
            <button :style="{ backgroundColor: swatch }" class="swatch" @click="() => { updateColor(swatch) }">&nbsp;</button>
        </div>
    </v-layout>
</template>

<script src="./ColourSwatches.js"></script>
<style scoped lang="scss" src="./ColourSwatches.scss"></style>

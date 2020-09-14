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
  <v-card :class="{ 'v-card--open': isOpen, 'v-card--dense': isDense }">
    <v-layout class="v-card__layout pr-4">
      <div class="v-card__close-container">
        <button class="v-card__button--close" @click="() => { handleRemoveLink(this.id); }">
          <v-icon>close</v-icon>
        </button>
      </div>
      <v-flex pa-2 class="v-card__image-container">
        <v-img
          v-if="this.image"
          :src="this.image"
          height="100%"
          width="100%"
          contain
          class="v-card__image"
        ></v-img>
        <v-icon v-else :x-large="isOpen" class="v-card__image--not_found" :class="{ 'skeleton skeleton--image': this.isSkeleton }">image_search</v-icon>
      </v-flex>
      <v-flex xs12 layout align-center>
        <v-card-title primary-title>
          <div>
            <div :class="{'headline' : isOpen, 'subheading': isDense}">
              <v-layout align-center class="v-card__title-container">
                <span v-if="this.loaded" :class="{ 'skeleton': this.isSkeleton }">{{this.title}}</span>
                <span v-else>
                  <AnimatedEllipsis/>
                </span>
                <div v-if="isDense" class="v-card__action-container--dense pl-2">
                  <a :href="this.url" target="_blank" rel="nofollow noopener" class="pa-2 card-action grey--text lighten-3--text">
                    {{this.url}}
                    <v-icon small>open_in_new</v-icon>
                  </a>
                </div>
              </v-layout>
            </div>
            <div v-if="isOpen">
              <span v-if="this.loaded" :class="{ 'skeleton': this.isSkeleton }">{{this.description}}</span>
              <span v-else>
                  <AnimatedEllipsis/>
              </span>
            </div>
          </div>
        </v-card-title>
      </v-flex>
    </v-layout>
    <v-divider light v-if="isOpen"></v-divider>
    <v-card-actions class="d-flex pa-0" v-if="isOpen">
      <a :href="this.url" target="_blank" rel="nofollow noopener" class="pa-2 card-action">
        <span :class="{ 'skeleton': this.isSkeleton }">
          {{this.url}}
        </span>
        <v-icon>open_in_new</v-icon>
      </a>
    </v-card-actions>
  </v-card>
</template>

<script src="./Card.js"></script>
<style src="./Card.css"></style>

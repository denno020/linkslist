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
  <v-app>
    <Header />
    <Alerts />
    <v-content>
      <v-container fluid fill-height justify-center align-start class="pt-0">
        <v-layout fluid column>
          <v-layout justify-center align-start shrink>
            <v-flex xs12 md8>
              <v-layout justify-center align-start>
                <v-text-field
                    label="https://"
                    solo
                    hide-details
                    v-model="linkUrl"
                    @keyup.enter="handleAddLink"
                ></v-text-field>
                <v-btn :color="theme" class="button--add white--text" @click="handleAddLink">
                  <v-icon class="mr-1">add</v-icon>
                  Add
                  <span class="ml-1" v-if="urlCount > 0">({{this.urlCount}})</span>
                </v-btn>
              </v-layout>
            </v-flex>
          </v-layout>

          <Toolbar v-if="$store.getters.links.length > 0">
            <template slot="left">
              <ChangeTheme />
            </template>
            <template slot="middle">
              <GetLink/>
            </template>
            <template slot="right">
              <ViewContainer />
            </template>
          </Toolbar>

          <v-layout justify-center :align-start="links.length > 0" :align-center="links.length === 0">
            <ul v-if="links.length > 0" class="links-list">
              <li v-for="link in links" :key="link.id" class="pb-3">
                <Card :link="link" />
              </li>
            </ul>
            <div v-else class="empty-links-list">
              <div class="empty-links-list__item font-weight-light">
                Enter URLs into the input box above
              </div>
              <HowToUseDialog class="empty-links-list__item"/>
              <FAQ class="empty-links-list__item"/>
            </div>
          </v-layout>
        </v-layout>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script src="./App.js"></script>
<style scoped src="./App.css"></style>

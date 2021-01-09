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
    <header class="app-header text-xs-center">
        <div class="app-header__actions">
            <div v-if="this.$store.getters.isLoggedIn && this.$store.getters.urlString"
                 class="app-header__subscribe-container">
                <v-btn class="subscription-button" :color="this.$store.getters['ui/theme']" flat v-if="isSubscribeVisible" @click="handleListSubscription" title="Subscribing to this list will store a link to it in your List Subscriptions panel!">
                    <span>
                        <v-icon v-if="this.$store.getters.isSubscribed" :color="this.$store.getters['ui/theme']">star</v-icon>
                        <v-icon v-else :color="this.$store.getters['ui/theme']">star_border</v-icon>
                    </span>
                    <span>
                        <span v-if="this.$store.getters.isSubscribed">Unsubscribe</span>
                        <span v-else>Subscribe</span>
                    </span>
                </v-btn>
            </div>
            <div class="app-header__login-container">
                <Authentication v-if="!$store.getters.isLoggedIn"/>
                <UserAccount v-else/>
            </div>
        </div>
        <div class="app-header__title" @mouseleave="showTitleEditButton = false">
            <h1 v-if="!isEditingTitle" class="app-header__title-heading display-2 font-weight-thin">
                <span @mouseover="showTitleEditButton = true">{{ listTitle }}</span>
                <EditButtonInline v-if="showTitleEditButton" :onClick="setIsEditingListTitle"/>
            </h1>
            <input
                ref="linkTitle"
                v-else
                v-model="listTitle"
                @keyup.enter="saveListTitle()"
                @blur="saveListTitle()"
                class="app-header__title-heading--editor display-2 font-weight-thin"
            />

        </div>
        <div class="app-header__subtitle pt-2" @mouseleave="showDescriptionEditButton = false">
            <h3 v-if="!isEditingDescription" class="app-header__subtitle-description font-weight-light subheading">
                <span @mouseover="showDescriptionEditButton = true">{{ listDescription }}</span>
                <EditButtonInline v-if="showDescriptionEditButton" :onClick="setIsEditingListDescription"/>
            </h3>
            <input
                ref="linkDescription"
                v-else
                v-model="listDescription"
                @keyup.enter="saveListDescription()"
                @blur="saveListDescription()"
                class="app-header__subtitle-description--editor font-weight-light subheading"
            />
        </div>
    </header>
</template>

<script src="./Header.js"></script>
<style scoped lang="scss" src="./Header.scss"></style>

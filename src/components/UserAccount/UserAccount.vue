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
    <fragment>
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn flat :color="theme" dark v-on="on">
                    Welcome back!
                    <v-icon class="ml-1" small right dark>expand_more</v-icon>
                </v-btn>
            </template>
            <v-list class="user-account__list">
                <v-list-tile
                    v-for="(option, index) in authenticatedOptions" :key="index" @click="option.callback()"
                    class="user-account__list-item"
                >
                    <v-list-tile-title>{{ option.text }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>

        <!-- Expand the usual v-model into its parts, so that we can do a specific action, rather than toggling a boolean -->
        <v-dialog :value="visibleModal === this.MODAL__DETAILS" @input="visibleModal = ''" max-width="600px">
            <v-card>
                <v-form @submit.prevent="">
                    <v-card-title class="justify-center">
                        <span class="headline">My Details</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-md class="pa-0">
                            <v-layout wrap>
                                <v-flex xs12>
                                    <v-list two-line subheader>
                                        <v-subheader><em>More, and the ability to edit data coming soon</em></v-subheader>
<!--                                        <v-list-tile>-->
<!--                                            <v-list-tile-content>-->
<!--                                                <v-list-tile-title>{{ user.custom ? user.custom.displayName : ''}}</v-list-tile-title>-->
<!--                                                <v-list-tile-sub-title>Display Name</v-list-tile-sub-title>-->
<!--                                            </v-list-tile-content>-->
<!--                                        </v-list-tile>-->

                                        <v-list-tile>
                                            <v-list-tile-content>
                                                <v-list-tile-title>{{ user.email }}</v-list-tile-title>
                                                <v-list-tile-sub-title>Email</v-list-tile-sub-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                </v-form>
            </v-card>
        </v-dialog>

        <v-dialog :value="visibleModal === this.MODAL__MY_LISTS" @input="visibleModal = ''" max-width="600px">
            <v-card>
                <v-form @submit.prevent="">
                    <v-card-title class="justify-center">
                        <span class="headline">My Lists</span>
                    </v-card-title>
                    <v-card-text>
                        <em>Please note, only lists created while you're logged in will be displayed here</em>
                        <v-container grid-list-md class="pa-0">
                            <v-layout wrap>
                                <v-flex xs12>
                                    <div v-if="this.$store.getters.myLists.length === 0">
                                        You have not yet created any lists
                                    </div>
                                    <v-list v-else v-for="myList in this.$store.getters.myLists" :key="myList.id" two-line subheader>
                                        <v-list-tile @click="handleNavigateToMyList(myList.id)" avatar>
                                            <v-list-tile-avatar>
                                                <v-icon large :color="myList.theme">assignment</v-icon>
                                            </v-list-tile-avatar>
                                            <v-list-tile-content>
                                                <v-list-tile-title>{{ myList.title }} ({{ myList.id }})</v-list-tile-title>
                                                <v-list-tile-sub-title>{{ myList.desc }}</v-list-tile-sub-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </v-flex>
                                <v-flex xs-12 text-xs-center>
                                    <v-btn @click="visibleModal = MODAL__SUBSCRIBED_LISTS">Switch to My Subscriptions</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                </v-form>
            </v-card>
        </v-dialog>

        <v-dialog :value="visibleModal === this.MODAL__SUBSCRIBED_LISTS" @input="visibleModal = ''" max-width="600px">
            <v-card>
                <v-form @submit.prevent="">
                    <v-card-title class="justify-center">
                        <span class="headline">List Subscriptions</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-md class="pa-0">
                            <v-layout wrap>
                                <v-flex xs12>
                                    <div v-if="this.$store.getters.subscribedLists.length === 0">
                                        Not subscribed to any lists
                                    </div>
                                    <v-list v-else v-for="subscribedList in this.$store.getters.subscribedLists" :key="subscribedList.id" two-line subheader>
                                        <v-list-tile @click="handleSelectSubscribedList(subscribedList.id)" avatar>
                                            <v-list-tile-avatar>
                                                <v-icon large :color="subscribedList.theme">assignment</v-icon>
                                            </v-list-tile-avatar>
                                            <v-list-tile-content>
                                                <v-list-tile-title>{{ subscribedList.title }} ({{ subscribedList.id }})</v-list-tile-title>
                                                <v-list-tile-sub-title>{{ subscribedList.desc }}</v-list-tile-sub-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </v-flex>
                                <v-flex xs-12 text-xs-center>
                                    <v-btn @click="visibleModal = MODAL__MY_LISTS">Switch to My Lists</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                </v-form>
            </v-card>
        </v-dialog>

        <v-dialog :value="visibleModal === this.MODAL__PREMIUM" @input="visibleModal = ''" max-width="600px">
            <v-card>
                <v-form @submit.prevent="">
                    <v-card-title class="justify-center">
                        <span class="headline">Premium Links List</span>
                    </v-card-title>
                    <v-card-text v-if="!isSubscribingToPremiumSuccess">
                        <p>We are currently working on some features that will make up a premium version of Links List.</p>
                        <p>Some features to look out for are</p>
                        <ul>
                            <li>Private lists</li>
                            <li>Lockable lists</li>
                            <li>Custom List ID's</li>
                            <li>and more</li>
                        </ul>
                        <p>If you'd like to follow along with progress, and be notified when the premium version is available, please register your interest by clicking the button below</p>
                        <p>By registering your interest, you'll get a special code on launch that will entitle you to a discount on whichever Links List subscription you choose.</p>
                        <v-btn block :color="theme" :dark="!isSubscribingToPremium" @click="handleSubscribeToPremium" :disabled="isSubscribingToPremium" :loading="isSubscribingToPremium">
                            Register
                        </v-btn>
                    </v-card-text>
                    <v-card-text v-else>
                        Thank you for registering your interest
                    </v-card-text>
                </v-form>
            </v-card>
        </v-dialog>
    </fragment>
</template>

<script src="./UserAccount.js"></script>
<style scoped lang="scss" src="./UserAccount.scss"></style>

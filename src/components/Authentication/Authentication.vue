<!--
  -  Links List - Create a list of links, and then share it!
  -  Copyright (c) 2020 Luke Denton
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
        <v-dialog v-model="dialog" max-width="600px" class="authentication-modal" >
            <template v-slot:activator="{ on }">
                <v-btn  class="font-weight-regular" flat v-on="on" @click="displayLogin = true; displayCreate = false">Login/Sign Up</v-btn>
            </template>

            <v-card v-if="displayLogin">
                <v-form @submit.prevent="handleSignIn">
                    <v-card-title class="justify-center">
                        <span class="headline">Login</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-md class="pa-0">
                            <v-layout wrap>
                                <v-flex xs12>
                                    <v-text-field v-model="email" label="Email*" required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field v-model="password" label="Password*" type="password" required></v-text-field>
                                </v-flex>
                                <v-flex xs12 v-if="error.general">
                                    <div class="red--text">{{ this.error.message }}</div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="blue darken-1" class="white--text" type="submit" :loading="isAuthenticating" :disable="isAuthenticating">
                            Sign In
                        </v-btn>
                    </v-card-actions>
                </v-form>
                <div class="text-xs-center">
                    OR
                </div>
                <v-card-actions class="justify-center">
                    <v-btn class="button-login" color="primary" flat @click="displayLogin = false; displayCreate = true">Create Account</v-btn>
                </v-card-actions>
            </v-card>

            <v-card v-if="displayCreate">
                <v-card-title class="justify-center">
                    <span class="headline">Create Account</span>
                </v-card-title>
                <v-form @submit.prevent="handleCreateAccount">
                    <v-card-text>
                        <v-container grid-list-md class="pa-0">
                            <v-layout wrap>
                                <v-flex xs12>
                                    <v-text-field v-model="email" label="Email*" required :error="error.emailInvalid"></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field v-model="password" label="Password*" type="password" required :error="error.passwordEmpty"></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field v-model="confirmPassword" label="Confirm Password*" type="password" required :error="error.passwordMismatch"></v-text-field>
                                </v-flex>
                                <v-flex xs12 v-if="error.passwordMismatch">
                                    <div class="red--text">Passwords don't match</div>
                                </v-flex>
                                <v-flex xs12 v-if="error.general">
                                    <div class="red--text">{{ this.error.message }}</div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="blue darken-1" class="white--text"  type="submit" :loading="isAuthenticating" :disable="isAuthenticating">
                            Create
                        </v-btn>
                    </v-card-actions>
                </v-form>
                <div class="text-xs-center">
                    OR
                </div>
                <v-card-actions class="justify-center">
                    <v-btn class="button-login" color="primary" flat @click="displayLogin = true; displayCreate = false">Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </fragment>
</template>

<script src="./Authentication.js"></script>
<style scoped lang="scss" src="./Authentication.scss"></style>

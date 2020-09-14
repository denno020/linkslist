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
    <v-dialog
        v-model="dialog"
        width="700"
    >
        <v-btn slot="activator" class="privacy-policy-link">FAQ</v-btn>

        <v-card>
            <v-card-title class="headline white--text" :style="{ backgroundColor: theme }" primary-title>
                Frequently Asked Questions
            </v-card-title>

            <v-card-text>
                <v-expansion-panel>
                    <Question>
                        <template slot="question">
                            Can I import my Chrome, Firefox, Safari bookmarks?
                        </template>
                        <template slot="answer">
                            Yes! If you can export your bookmarks into a HTML or similar text file, then you can import those links into your Links List. Here's how
                            <ol>
                                <li>Open your exported bookmarks file in a text edit</li>
                                <li>Copy <em>all</em> of the text in that file</li>
                                <li>Go to Links List and paste the clipboard contents into the link input field</li>
                                <li>Click on the Add button!</li>
                            </ol>
                            This works because Links List will parse all of the text in the input field, looking for links. When it finds one, it will
                            update the count on the Add button, so you know exactly how many links it has found, and is about to add
                        </template>
                    </Question>
                </v-expansion-panel>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    :color="theme"
                    flat
                    @click="dialog = false"
                >
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script src="./FAQ.js"></script>

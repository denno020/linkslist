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
    <v-snackbar
        v-model="isVisible"
        :bottom="y === 'bottom'"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :right="x === 'right'"
        :timeout="timeout"
        :top="y === 'top'"
        :vertical="mode === 'vertical'"
        color="white"
    >
        <a href="https://www.paypal.me/lukedenton20/5" class="paypal-me-link invert" target="_blank" @click="handleClickPaypalMeLink">
            Support development with&nbsp;<img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" class="paypal-logo" border="0" alt="PayPal Logo" />
        </a>
        <v-btn
            :color="theme"
            flat
            @click="handleDismissPaypalMeLink"
        >
            No thanks
        </v-btn>
    </v-snackbar>
</template>

<script src="./PayPalMe.js"></script>
<style scoped lang="scss" src="./PayPalMe.scss"></style>

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
    <a href="#" slot="activator" class="privacy-policy-link">What can I create a list of?</a>

    <v-card>
      <v-card-title
        class="headline white--text"
        :class="theme"
        primary-title
      >
        What can I create a list of?
      </v-card-title>

      <v-card-text>
        <p>
          Well, anything you like! Provided it's a URL. Random text that doesn't <em>look</em> like a URL, won't be added.
        </p>
        <h2 class="font-weight-light">Wishlists</h2>
        <p>
          Help your family/friends with their online shopping for a gift for you by creating a collection of links to products/
          online services that you'd love as a gift. They will be able to open these links, and secretly purchase <SVGIcon icon="shush"/>
        </p>
        <h3 class="font-weight-light">eBay Wishlist</h3>
        <p>
          Fill the hole in your eBay experience and create a wishlist of eBay items that you would like to share. It might seem
          like eBay already has this feature, but as of writing this, there is no way to share a collection of items in eBay, using
          eBay itself.
        </p>
        <h3 class="font-weight-light">Etsy Wishlist</h3>
        <p>
          Etsy also doesn't have the ability to create, nor therefore share, a wishlist! Links List will allow you to add links
          to any Etsy listing, and save it to a shareable wishlist.
        </p>
        <p>
          Advanced users can even create a wishlist that has both eBay <em>and</em> Etsy listings on them <SVGIcon icon="wink"/>, as well as
          absolutely any other online store.
        </p>

        <h2 class="font-weight-light">List of links to review</h2>
        <p>
          Ever get caught looking through the <a href="https://www.reddit.com/r/aww" target="_blank" rel="noreferrer nofollow">/aww</a> subreddit, and got a bit carried away with the number of links that you
          share to your significant other? I certainly have. With Links List, you can now copy the link to each subreddit
          post into a new list, and share just the lists’ link. Even after sharing the link, you can still add more items,
          as every addition/removal is still made, even after the Get Link button is clicked. As your partner goes through
          each link in the list, they can remove them, essentially crossing off the item as done.
        </p>

        <h2 class="font-weight-light">Parse Plain Text Links</h2>
        <p>
          Another use case for Links List is to take a list of raw text URL's, and convert them to a clickable link! Nothing
          is more arduous than having to copy a URL, open a new browser tab, paste the URL, and then hit enter. Swapping your hands
          between keyboard and mouse for every step is a good way to get Repetitive Strain Injury (RSI). Instead, copy <em>all</em>
          of your raw text links in a single go, then paste that into the Links List input. The Add button will update to indicate
          how many links have been detected in that paste, and you can click the Add button (or hit enter directly after pasting),
          to create your list.
        </p>
        <p>
          It's unlikely you'll be sharing this list, but you can if you wanted!
        </p>


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

<script src="./HowToUseDialog.js"></script>
<style scoped src="./HowToUseDialog.css"></style>

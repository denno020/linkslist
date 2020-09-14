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
  <Unapp>
    <div class="landing">
      <section id="home" class="video-hero"
               style="height: 700px; background-image: url(images/cover_img_1.jpg);  background-size:cover; background-position: center center;background-attachment:fixed;"
               data-section="home">
        <div class="overlay"></div>
        <div class="display-t text-center">
          <div class="display-tc">
            <div class="container">
              <div class="col-md-12 col-md-offset-0">
                <div class="animate-box">
                  <h2>Simply create a list of links. Then share it!</h2>
                  <p>with Links List, sharing links has never been easier</p>
                  <p>
                    <router-link to="/app" tag="button" class="btn btn-primary btn-lg btn-custom">
                      Create Links List
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="colorlib-featured">
        <div class="row animate-box ma-0">
          <div class="featured-wrap">
            <v-carousel hide-delimiters class="landing-carousel">
              <v-carousel-item
                contain
                src="/images/wishlist.png"
              ></v-carousel-item>
              <v-carousel-item
                contain
                src="/images/funnies.png"
              ></v-carousel-item>
              <v-carousel-item
                contain
                src="/images/bookmarks.png"
              ></v-carousel-item>
            </v-carousel>
          </div>
        </div>
      </div>

      <div class="colorlib-intro">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
              <h2>What is Links List?</h2>
              <p>
                Links List is an online application that allows you to save a list of links, and share that list with
                anyone you like. Lists are public, but only accessible to the people that have the URL, they are not
                indexed
                by search engines.
              </p>
              <h3>What can I create a list of?</h3>
              <p>
                You can create a list of anything you like! Provided they're URL's. Random text that doesn't <em>look</em>
                like a URL won't be added.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="colorlib-services colorlib-bg-white">
        <div class="container">
          <div class="row">
            <div class="col-md-4 text-center animate-box">
              <div class="services">
                <span class="icon">
                  <i class="icon-list2"></i>
                </span>
                <div class="desc">
                  <h3>Collaboratively create your Links List</h3>
                  <p>
                    Shared Links Lists will automatically update as links are added or removed, in real time. This gives
                    you the ability to create a list with as many other people as you share the Links List ID to
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-center animate-box">
              <div class="services">
                <span class="icon">
                  <i class="icon-layers"></i>
                </span>
                <div class="desc">
                  <h3>Convert list of strings to clickable links</h3>
                  <p>
                    Do you have a block of string URL's? Simply copy all of them at once and paste into your
                    Links List. The application will parse the text, finding all the URL's it can, and add them to the
                    list
                    as individual items.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-center animate-box">
              <div class="services">
                <span class="icon">
                  <i class="icon-download"></i>
                </span>
                <div class="desc">
                  <h3>Import Bookmarks</h3>
                  <p>
                    Bookmarks can also easily be imported into your Links List. Simply export your bookmarks as a HTML
                    file,
                    then open that HTML file into a text editor, copy all text and past into the input box of your Links
                    List.
                    The application will parse the blob of text and extra all URL's
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="colorlib-intro">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
              <h2>Customize the look and feel of your Links List</h2>
              <p>
                Use the colour palette to colour-code each of your links lists for easy identification.
              </p>
              <p>
                You also have control over the density of the list. Lots of links might call for a list layout, whereas
                a handful of links might be best displayed as tiles. You can choose which display you would like
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 animate-box text-center">
              <span class="play" v-if="!isAnimationPlaying">
                <button class="pulse popup-vimeo ma-auto d-flex justify-center align-center" @click="isAnimationPlaying = true">
                  <i class="icon-play3 white--text"></i>
                </button>
              </span>

              <v-img
                v-else
                src="/images/customization-animation.gif"
                lazy-src="/images/customization-animation.gif"
                width="800"
                max-width="100%"
                class="grey lighten-2 ma-auto"
              >
                <template v-slot:placeholder>
                  <v-layout
                    fill-height
                    align-center
                    justify-center
                    ma-0
                  >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </template>
              </v-img>
            </div>
          </div>
        </div>
      </div>

      <div class="colorlib-work-featured colorlib-bg-white">
        <div class="container">
          <div class="row mobile-wrap">
            <div class="col-md-5 animate-box">
              <div class="mobile-img" style="background-image: url(images/wishlist-mobile.png);"></div>
            </div>
            <div class="col-md-7 animate-box">
              <div class="desc">
                <h2>Create online wish lists for eBay, Etsy, Amazon or any online retailer!</h2>
                <div class="features">
                  <span class="icon"><i class="icon-lightbulb"></i></span>
                  <div class="f-desc">
                    <p>
                      Both eBay and Etsy don't provide any way to save a wish list of items that you would like to
                      receive,
                      and even if they did, there's certainly no way to create a single list that has links from both
                      sites.
                    </p>
                  </div>
                </div>
                <div class="features">
                  <span class="icon"><i class="icon-lightbulb"></i></span>
                  <div class="f-desc">
                    <p>
                      Using Links List, it's simple to create a wish list that you can then share with family and friends,
                      and the process is exactly
                      the same for eBay, Etsy, Amazon or any online retailer!
                    </p>
                  </div>
                </div>
                <div class="features">
                  <span class="icon"><i class="icon-circle-compass"></i></span>
                  <div class="f-desc">
                    <p>
                      The first step is to find the items you wish to save! Once you've found them, copy the URL for each,
                      and paste into your Links List. Each URL will add to the list, and the app will attempt to scrape
                      information
                      from that URL, displaying simple things like the name and description of the product, as well as an
                      image.
                    </p>
                  </div>
                </div>
                <div class="features">
                  <span class="icon"><i class="icon-beaker"></i></span>
                  <div class="f-desc">
                    <p>
                      Once you've added all of your items that you want to save, click on the Get Link button, and share
                      that URL
                      with all your family and friends! They can then sneakily have a look at the list and purchase things
                      without you knowing 😉.
                    </p>
                  </div>
                </div>
                <p>
                  <router-link to="/app" tag="button" class="btn btn-primary btn-outline with-arrow">
                    Start saving
                  </router-link>
                </p>
              </div>
            </div>
          </div>
          <div class="row mobile-wrap">
            <div class="col-md-5 col-md-push-7 animate-box">
              <div class="mobile-img" style="background-image: url(images/name-customisation.jpg);"></div>
            </div>
            <div class="col-md-7 col-md-pull-5 animate-box">
              <div class="desc">
                <h2>Customize name and description of your Links List</h2>
                <div class="features">
                  <span class="icon"><i class="icon-lightbulb"></i></span>
                  <div class="f-desc">
                    <p>
                      Creating a list of links is great, but they might not be very useful without context as to what the
                      links
                      are saved for.
                    </p>
                  </div>
                </div>
                <div class="features">
                  <span class="icon"><i class="icon-circle-compass"></i></span>
                  <div class="f-desc">
                    <p>
                      Links List gives you the ability to change the title and description of your Links List. This will
                      then save
                      with your list so that whoever receives the link to your Links List will know exactly what the list
                      of links
                      represents.
                    </p>
                  </div>
                </div>
                <div class="features">
                  <span class="icon"><i class="icon-beaker"></i></span>
                  <div class="f-desc">
                    <p>
                      Not only will the title of the list be updated, but so will the tab title in your browser, so if you
                      have
                      multiple Links Lists open, you can easily move between tabs without having to guess which list
                      you're jumping to
                    </p>
                  </div>
                </div>
                <p>
                  <router-link to="/app" tag="button" class="btn btn-primary btn-outline with-arrow">
                    Start customizing
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="colorlib-blog">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
              <h2>Latest updates</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4" v-for="(update, index) in $store.getters.recentUpdates" :key="index">
              <article>
                <h2><router-link :to="`/updates/${update.slug}`">Release {{update.release}}</router-link></h2>
                <p class="admin"><span>{{update.displayDate}}</span></p>
                <p>{{update.title}}</p>
                <p class="author-wrap"><span class="author-img" style="background-image: url(/images/luke_denton.png);"></span> <span href="#" class="author">by {{update.author}}</span></p>
                <p class="text-right"><router-link :to="`/updates/${update.slug}`">Read More >>></router-link></p>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div id="colorlib-subscribe" class="colorlib-subscribe" style="background-image: url(images/cover_img_1.jpg);"
           data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-md-offset-1 text-center colorlib-heading animate-box">
              <h2>Already trusted by thousands of users creating over 2.7k lists!</h2>
              <p>Subscribe to receive Links List tips and updates right to your inbox.</p>
            </div>
          </div>
          <div class="row animate-box">
            <div class="col-md-6 col-md-offset-3">
              <div class="row">
                <div class="col-md-12">
                  <Subscribe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="colorlib-pricing">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
              <h2>Pricing</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-offset-2 col-md-3 text-center animate-box">
              <div class="pricing">
                <h2 class="pricing-heading">Free</h2>
                <div class="price"><sup class="currency">$</sup>0<small>per month</small></div>
                <p>
                  No account needed. Create as many public Links Lists as you like.
                </p>
                <p>
                  <router-link to="/app" tag="button" class="btn btn-primary">
                    Create Links List
                  </router-link>
                </p>
              </div>
            </div>
            <div class="col-md-5 text-center animate-box">
              <div class="pricing">
                <h2 class="pricing-heading">Pro</h2>
                <div class="price"><sup class="currency">$</sup>?<small>per month</small></div>
                <p>
                  We are working on a premium version of Links List that will include features like private lists,
                  password protection,
                  list permissions, custom list ID and more.
                </p>
                <p>
                  If this interests you, let us know by clicking below and entering your email address. Not only will you
                  get an email when it's ready, you'll also get the opportunity to sign up for half price!
                </p>
                <p><button class="btn btn-primary btn-outline" @click="isModalOpen = !isModalOpen">Register Interest</button></p>
                <small>Please note, registering your interest is <strong>not</strong> committing to purchase</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" :open="isModalOpen" @click="isModalOpen = !isModalOpen">
      <div class="modal-dialog modal-dialog-centered" role="document" @click.stop>
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">
              Register Interest for Premium Features
            </h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="isModalOpen = !isModalOpen">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <Subscribe @afterSubmit="handleAfterSubmit">
              <input type="hidden" name="isInterestedInPremium" value="true">
            </Subscribe>
            <div class="success-message text-center pt-2" v-if="isSuccessMessageShowing">
              Thanks for registering your interest! We'll be in touch soon with the latest updates!
            </div>
          </div>
        </div>
      </div>
    </div>
  </Unapp>
</template>

<script src="./Landing.js"></script>
<style scoped lang="scss" src="./Landing.scss"></style>

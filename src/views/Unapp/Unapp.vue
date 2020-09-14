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
  <div id="page" class="unapp">
    <nav class="colorlib-nav" role="navigation">
      <div class="top-menu">
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <div id="colorlib-logo">
                <router-link to="/" class="brand-link">Links List</router-link>
              </div>
            </div>
            <div class="col-md-10 text-right menu-1">
              <ul>
                <li><router-link to="/updates">Updates</router-link></li>
                <li><router-link to='/app' tag="button" class="btn btn-primary">Use App</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <slot></slot>

    <footer id="colorlib-footer">
      <div class="container">
        <div class="row row-pb-md">
          <div class="col-md-6 colorlib-widget">
            <h4>About Links List</h4>
            <p>
              I created Links List as a way to share links with my wife. During the day, I would find myself navigating various
              subreddits, finding cute images that I would like to show her, but that would mean I'd end up sending multiple
              messages to her in a short amount of time. Not only would this be annoying to have her phone going off
              multiple times in a row, it also made it hard to have regular conversation around the links.<br>
              With Links List, I can create a list of links that she can get to when she has a moment, and remove each link
              as she's looked at it, effectively making it a To Do list as well.
            </p>
          </div>
          <div class="col-md-3 colorlib-widget">
            <h4>Recent Updates</h4>
            <div v-for="(update, index) in $store.getters.recentUpdates" class="f-blog" :key="update.slug">
              <router-link :to="`/updates/${update.slug}`" class="blog-img" :style="`background-image: url(/images/blog-${index+1}.jpg);`"></router-link>
              <div class="desc">
                <h2><router-link :to="`/updates/${update.slug}`">Release {{update.release}}</router-link></h2>
                <p class="admin"><span>{{update.displayDate}}</span></p>
              </div>
            </div>
          </div>

          <div class="col-md-3 colorlib-widget">
            <h4>Contact Info</h4>
            <ul class="colorlib-footer-links">
              <li><a href="mailto:linkslistapp@gmail.com"><i class="icon-envelope"></i> linkslistapp@gmail.com</a></li>
              <li>
                <router-link to="/"><i class="icon-location4"></i> linkslist.app</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copy">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <p>
                Links List was created by Luke Denton
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script src="./Unapp.js"></script>
<style scoped lang="scss" src="./Unapp.scss"></style>
<style scoped lang="scss" src="@/scss/bootstrap.scss"></style>
<style scoped lang="scss" src="@/scss/style.scss"></style>

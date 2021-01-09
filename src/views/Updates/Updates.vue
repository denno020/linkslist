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
  <Unapp id="page">
    <section id="home" class="video-hero" style="height: 500px; background-image: url(images/cover_img_1.jpg);  background-size:cover; background-position: center center;background-attachment:fixed;" data-section="home">
      <div class="overlay"></div>
      <div class="display-t display-t2 text-center">
        <div class="display-tc display-tc2">
          <div class="container">
            <div class="col-md-12 col-md-offset-0">
              <div class="animate-box">
                <h2>Blog</h2>
                <p class="breadcrumbs"><span><router-link to="/">Home</router-link></span> <span>Blog</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="row" v-for="(group, index) in $store.getters.updateSlices" :key="index">
        <div class="col-md-4 animate-box" v-for="update in group" :key="update.slug">
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
  </Unapp>
</template>

<script src="./Updates.js"></script>
<style scoped lang="scss" src="./Updates.scss"></style>

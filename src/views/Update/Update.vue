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
    <div id="page" class="update">
      <section id="home" class="video-hero" style="height: 500px; background-image: url(images/cover_img_1.jpg);  background-size:cover; background-position: center center;background-attachment:fixed;" data-section="home">
        <div class="overlay"></div>
        <div class="display-t display-t2 text-center">
          <div class="display-tc display-tc2">
            <div class="container">
              <div class="col-md-12 col-md-offset-0">
                <div class="animate-box">
                  <h2>Release {{this.update.release}}</h2>
                  <p class="breadcrumbs"><span><router-link to="/">Home</router-link></span> <span><router-link to="/updates">Updates</router-link></span><span>Release {{this.update.release}}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container">
        <div class="row">
          <div class="col-md-offset-1 col-md-10 animate-box">
            <article>
              <h3>{{update.title}}</h3>
              <p class="admin"><span>{{this.update.displayDate}}</span></p>
              <p v-html="this.update.html"></p>
              <p class="author-wrap"><span href="#" class="author-img" style="background-image: url(/images/luke_denton.png);"></span> <span href="#" class="author">by {{this.update.author}}</span></p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </Unapp>
</template>

<script src="./Update.js"></script>
<style scoped lang="scss" src="./Update.scss"></style>

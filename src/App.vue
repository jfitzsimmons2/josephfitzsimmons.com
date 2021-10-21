<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import SideNav from './components/SideNav.vue'
import menu from "./data/menu";

</script>

<template>
  <div class="hero">
    <div class="video-container">
      <video class="video" autoplay loop muted>
        <source src="./assets/video/sunset.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <!-- <div class="hero-content-container">
      <h1>Joseph Fitzsimmons</h1>
      <p>You can call me Joe. ☕️ </p>
      <p>I'm a front-end engineer who works with Vue.</p>
      <p>This is my site where I share what's on my mind.</p>
    </div> -->
  </div>
  <SideNav :menu="menu.items"></SideNav>
</template>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  font-family: "Gotham Narrow SSm A", "Gotham Narrow SSm B";
  font-size: 18px;
}

body {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Isotope A", "Isotope B";
  font-style: normal;
  font-weight: 900;
}

.hero {
  display: flex;
  align-items: center;
  max-width: 960px;
  margin-top: 4rem;
}

.hero-content-container {
  padding-left: 1rem;
}

.video-container {
  /* width: 900px;
  flex: 0 1 900px;
  padding-top: 75%;
  height: 0px;
  position: relative; */
}

.video {
  width: 100%;
  height: 100%;
  /* position: absolute;
  top: 0;
  left: 0; */
}
</style>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <router-view></router-view>
</template>

<style>
.flex {
  display: flex;
}

.align-center {
  align-items: center;
}
marquee {
  margin: 2rem 0;
  border-top: 2px dashed red;
  border-bottom: 2px dashed red;
  padding: 1rem 0;
  color: lime;
}
:root {
  --global-font-size: 15px;
  --global-line-height: 1.4em;
  --global-space: 10px;
  --font-stack: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace, serif;
  --mono-font-stack: Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  --background-color: #2f2f2f;
  --page-width: 60em;
  --font-color: #f2f2f2;
  --invert-font-color: #2f2f2f;
  --primary-color: #e0dd23;
  --secondary-color: #727578;
  --error-color: #d20962;
  --progress-bar-background: #727578;
  --progress-bar-fill: #151515;
  --code-bg-color: #1f2224;
  --input-style: solid;
  --display-h1-decoration: none;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}

img {
  width: auto;
}

html {
  font-family: "Gotham Narrow SSm A", "Gotham Narrow SSm B";
  font-size: 18px;
}

body {
  padding: 4rem 0;
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
  display: block;
  font-style: normal;
  font-weight: 900;
  font-size: 1rem;
}

.text-center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>

<style scoped>
.video {
  opacity: 0.25;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s;
}

.video:hover {
  opacity: 0.75;
  transition: opacity 0.25s;
}
</style>

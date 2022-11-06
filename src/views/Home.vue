<script setup lang="ts">
import { onMounted, ref } from "vue";

const timer = ref(10);
const interval = ref();

const startTimer = () => {
  interval.value = setInterval(() => {
    if (timer.value == 0) {
      window.location.replace("https://www.joefitzsimmons.dev");
    } else {
      timer.value -= 1;
    }
  }, 1000);
};

onMounted(() => {
  startTimer();
});
</script>

<template>
  <div class="container">
    <h1>I've moved...</h1>
    <p><a href="https://www.joefitzsimmons.dev">joefitzsimmons.dev</a></p>
    <p>Redirecting in {{ timer }}</p>
    <div style="
        display: flex;
        width: 100%;
        text-align: center;
        align-items: center;
      ">
      <img src="../assets/images/head_construction.gif" style="width: 50px; margin-right: 1rem" />
      <span>This website is best viewed on</span>
      <img src="../assets/images/netscape1.gif" style="margin-left: 1rem" />
    </div>
  </div>
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

.video {
  width: 100%;
  height: 100%;
}
</style>

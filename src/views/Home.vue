<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

const filterVals = reactive<{
  blur: number;
  contrast: number;
  hueRotate: number;
}>({
  blur: 0,
  contrast: 100,
  hueRotate: 0,
});

const showControls = ref(false);
const play = ref(true);
const interval = ref();
const sunsetVid = ref();

const playPause = () => {
  if (play.value) {
    clearInterval(interval.value);
    sunsetVid.value.pause();
  } else {
    startTimer();
    sunsetVid.value.play();
  }

  play.value = !play.value;
};

const startTimer = () => {
  interval.value = setInterval(() => {
    if (filterVals.hueRotate !== 360) {
      filterVals.hueRotate += 1;
    } else {
      filterVals.hueRotate = 0;
    }
  }, 100);
};

onMounted(() => {
  startTimer();
});
</script>

<template>
  <div class="container">
    <div
      class="flex align-center"
      style="
        border: 2px dashed lightblue;
        padding: 0 1rem;
        background: rgba(0, 0, 0, 0.25);
        margin-bottom: 2rem;
      "
    >
      <img src="../assets/images/Torch.gif" />
      <h1 class="text-center">Welcome to the website of Joe Fitzsimmons</h1>
      <img src="../assets/images/Torch.gif" />
    </div>
    <div style="display: flex; align-items: flex-start; width: 100%">
      <img src="../assets/images/subzero_from_mortal_kombat.gif" />

      <div style="flex: 1 1 auto; margin: 0 1rem">
        <p>
          I'm a front-end software engineer who works with Vue. Welcome to my
          web page. It's still a little messy here but I'm cleaning things up
          and I hope you find something useful!
        </p>
        <p>
          I've been making websites since the <strong>90s</strong> when I was in
          middle school and have had a knack for making things on the web ever
          since!
        </p>
      </div>
      <img src="../assets/images/REP_MOVE.gif" />
    </div>
    <div class="controls">
      <button @click="showControls = !showControls" class="btn btn-primary">
        Show Controls
      </button>
      <button @click="playPause" class="btn btn-secondary">
        {{ play ? "Pause" : "Play" }}
      </button>
      <div v-if="showControls" class="ba b--dotted bw3 b--yellow pa3">
        Blur: {{ filterVals.blur }}px // Contrast: {{ filterVals.contrast }}% //
        Hue Rotate: {{ filterVals.hueRotate }}deg
        <input
          type="range"
          v-model.number="filterVals.blur"
          min="0"
          max="100"
          style="width: 100%"
        />
        <input
          type="range"
          min="0"
          max="200"
          v-model.number="filterVals.contrast"
          style="width: 100%"
        />
        <input
          type="range"
          v-model.number="filterVals.hueRotate"
          min="0"
          max="360"
          style="width: 100%"
          :disabled="play"
        />
      </div>
    </div>

    <div class="video-container">
      <video
        class="video"
        ref="sunsetVid"
        autoplay
        loop
        muted
        :style="`filter: blur(${filterVals.blur}px) contrast(${filterVals.contrast}%) hue-rotate(${filterVals.hueRotate}deg)`"
      >
        <source src="../assets/video/sunset.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <hr />
    <div style="display: flex; align-items: center">
      <img src="../assets/images/cd6.gif" style="margin-right: 1rem" />
      <a href="https://joefitzsimmons.dev/listening/"
        >Check out what I've been listening to lately</a
      >
    </div>
    <hr />
    <div style="display: flex">
      <div style="flex: 1 0 300px">
        <h2>Things I enjoy</h2>
        <ul>
          <li>Cooking delicious foods</li>
          <li>Making some lo-fi music</li>
          <li>Playing Rocket League</li>
        </ul>
      </div>
      <div style="flex: 1 1 auto">
        <div
          style="
            background-color: rgba(0, 0, 0, 0.25);
            border: 2px dashed var(--primary-color);
            padding: 1rem;
          "
        >
          <p style="margin: 0">
            This website is a tribute to the web as it was in the 90s and a
            playground for my Vue experiments. My "real" website that has blog
            posts on it can be found at
            <a href="https://joefitzsimmons.dev">joefitzsimmons.dev</a>
          </p>
        </div>
      </div>
    </div>

    <marquee loop
      >More stuff coming soon........ Check back often......... Site updated
      weekly........ More stuff coming soon........ Check back often.........
      Site updated weekly........ More stuff coming soon........ Check back
      often......... Site updated weekly........ More stuff coming soon........
      Check back often......... Site updated weekly........ More stuff coming
      soon........ Check back often......... Site updated weekly........ More
      stuff coming soon........ Check back often......... Site updated
      weekly........
    </marquee>

    <div
      style="
        display: flex;
        width: 100%;
        text-align: center;
        align-items: center;
      "
    >
      <img
        src="../assets/images/head_construction.gif"
        style="width: 50px; margin-right: 1rem"
      />
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

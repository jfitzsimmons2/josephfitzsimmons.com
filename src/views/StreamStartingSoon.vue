<template>
  <video class="video" autoplay loop muted>
    <source src="../assets/video/sunset.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<script setup lang="ts">
// @ is an alias to /src
</script>

<style scoped>
video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>

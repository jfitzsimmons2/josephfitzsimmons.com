<template>
  <div>
    <h2>Tweets I like</h2>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';

const webApiUrl = 'https://api.twitter.com/2/users/210906386/liked_tweets';
const tokenStr = 'AAAAAAAAAAAAAAAAAAAAAFNNUwEAAAAA1%2B25Fvk%2F3CL2xaabwtiLqQeVvQ4%3DWbeH4FJHZUiPjaNVDcy2SnsBBAC8nyCMv0VOabcNGiLaqdgDjb';
axios.get(webApiUrl, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then((val) => {
  console.log(val);
});

</script>

<style scoped>

</style>

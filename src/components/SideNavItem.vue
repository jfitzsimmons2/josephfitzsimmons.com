<template>
  <a v-if="to" :href="to">{{ label }}</a>
  <span v-else>{{ label }}</span>
  <template v-if="items">
  <button @click="toggleChildren">toggle</button>
    <SideNav
      v-if="showChildren"
      :menu="items"></SideNav>
  </template>
</template>

<script setup lang="ts">
import SideNav from "./SideNav.vue"
import { ref } from 'vue';
const props = defineProps({
  to: String,
  label: String,
  items: Object || undefined
});
const showChildren = ref(false);
const toggleChildren = () => {
  showChildren.value = !showChildren.value;
}
</script>

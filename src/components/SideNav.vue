<template>
  <ul>
    <li v-for="item in props.menu" :key="item.key">
      <SideNavItem
        :to="item.to"
        :label="item.label"
        :items="item.items"
      ></SideNavItem>
    </li>
  </ul>
</template>

<script setup lang="ts">
import SideNavItem from "./SideNavItem.vue";
const props = defineProps({
  menu: Object,
});
</script>

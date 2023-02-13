<template>
	<div class="desktop-icon" ref="icon" :title="props.title" :operation="operation">
		<img :src="imgSrc" />
		<p>{{ props.title }}</p>
	</div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';

const icon = ref();

const props = defineProps<{
	icon: string;
	title: string;
	operation?: Function;
}>();

const imgSrc = computed(() => new URL(`../src/assets/${props.icon}`));
onMounted(() => {
	icon.value.addEventListener('click', (event: MouseEvent) => {
		icon.value.classList.add('focused');
	});
	icon.value.addEventListener('dblclick', (event: MouseEvent) => {
		if (props.operation) {
			props.operation(event);
		}
	});
	onClickOutside(icon, () => icon.value.classList.remove('focused'));
})
</script>

<style scoped>
.desktop-icon.focused {
	outline: 1px dotted silver;
	outline-offset: .25rem;
}
</style>
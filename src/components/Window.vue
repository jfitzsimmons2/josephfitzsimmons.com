<template>
	<div ref="windowRef" v-if="props.open" class="window" :style="style">
		<div class="title-bar">
			<div class="title-bar-text">
				<slot name="title">My First Program</slot>
			</div>
			<div class="title-bar-controls" v-if="props.closeable">
				<button aria-label="Close" @click="$emit('update:open', false)"></button>
			</div>
		</div>
		<div class="window-body">
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watchEffect } from 'vue';
import interact from 'interactjs';

defineEmits(['update:open'])

const windowRef = ref();

const style = computed(() => {
	return `position: absolute; width: ${props.maxWidth}; max-width: 100%; transform: translate(${position.x}px, ${position.y}px);`
})

const props = withDefaults(
	defineProps<{
		draggable?: boolean,
		open: boolean,
		maxWidth?: string,
		closeable?: boolean
	}>(), {
	draggable: true,
	open: false,
	maxWidth: '500px',
	closeable: true
}
);
const position = reactive({
	x: 18,
	y: 18
})
const setupInteract = () => {
	interact(windowRef.value).draggable({
		listeners: {
			start(event) {
				console.log(event.type, event.target)
			},
			move(event) {
				position.x += event.dx
				position.y += event.dy

				event.target.style.transform =
					`translate(${position.x}px, ${position.y}px)`
			}
		}
	})
}

watchEffect(() => {
	if (props.draggable && props.open) {
		setupInteract();
	}
}, { flush: 'post' })
</script>

<style lang="scss">
.window-title {
	text-overflow: ellipsis;
}

.window img {
	max-width: 100%;
}
</style>
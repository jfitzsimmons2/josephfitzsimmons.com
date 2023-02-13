<template>
	<div class="start-button toolbar">
		<div class="start-button__inner" ref="startMenu">
			<button @click="() => startOpen = !startOpen"><img src="../assets/windows-4.png" style="margin-right: .25rem" />
				<b>Start</b></button>
			<div class="status-bar">
				<p class="status-bar-field">{{ formattedDate }}</p>
			</div>
			<div class="toolbar start-menu" v-if="startOpen">
				<div class="start-menu__banner">
					<p><b>Windows</b>98</p>
				</div>
				<div class="start-menu__main-menu">
					<button class="start-menu__main-menu__menu-item">
						<img src="../assets/settings_gear-3.png" /> <span>These don't work</span>
					</button>
					<button class="start-menu__main-menu__menu-item">
						<img src="../assets/settings_gear-3.png" /> <span>yet...</span>
					</button>
					<button class="start-menu__main-menu__menu-item">
						<img src="../assets/settings_gear-3.png" /> <span>I am working on it</span>
					</button>
					<button class="start-menu__main-menu__menu-item">
						<img src="../assets/settings_gear-3.png" /> <span>Stay tuned</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

const startOpen = ref(false);
const startMenu = ref();

onClickOutside(startMenu, () => startOpen.value = false)
const date = ref(new Date());
const formattedDate = computed(() => date.value.toLocaleTimeString());
onMounted(() => setInterval(() => date.value = new Date(), 1000));

</script>

<style lang="scss">
.start-button__inner {
	display: flex;
	width: 100%;
	justify-content: space-between;
}

.start-menu {

	a {
		color: black;

		&:hover {
			color: white;
			background: navy;
		}
	}
}

.start-menu__main-menu {
	button {
		border: none;
		box-shadow: none;
		width: 150px;
		display: flex;
		align-items: center;
		gap: .5rem;
		padding: 0.25rem .5rem;

		&:hover {
			color: white;
			background: navy;
		}
	}
}
</style>
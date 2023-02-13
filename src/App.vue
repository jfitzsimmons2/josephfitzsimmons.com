<script setup lang="ts">
import { ref } from "vue";
import StartMenu from "./components/StartMenu.vue";
import Window from "./components/Window.vue";
import DesktopIcons from "./components/DesktopIcons.vue";

const openWindow = (window: string) => {
	console.log("opening", window);
	Object.keys(windows.value).forEach((key) => {
		if (key !== window)
			windows.value[key] = false;
		else
			windows.value[key] = true;
	});
}
const windows = ref<{ [string: string]: boolean }>({
	'about': false,
	'midjourney': false
})
const about = ref();
const midjourney = ref();
</script>

<template>
	<Window key="about" ref="about" max-width="300px" v-model:open="windows.about">
		<template #title>Welcome to JosephFitzsimmons.com</template>
		<p>Hello, I'm a front-end software engineer and I really enjoy building things on the web. This site is built with
			Vue 3, XP.css, and TypeScript. My "real" website is at <a
				href="https://www.joefitzsimmons.dev">joefitzsimmons.dev</a></p>
		<div style="display: flex; justify-content: end;"><button @click="windows.about = false">Ok</button></div>
	</Window>
	<Window key="midjourney" ref="midjourney" max-width="calc(100% - 18px)" v-model:open="windows.midjourney"
		:closeable="true">
		<template #title>Midjourney prompts</template>
		<p>I've been using Midjourney for a couple weeks now and having a little too much fun. I find it really interesting
			to feed a bot prompts and get image outputs with some degree of randomness.</p>

		<div style="max-height: 80vh; overflow: scroll">
			<img src="../src/assets/a_coders_desk_from_above_by_dan_mumford_d6671980-646a-4f97-9fa0-69c3efafc050.png" />
			<img src="../src/assets/pixel_art_purple_pink_night_city_scene_841b5019-cdd3-4d22-888f-5af60a567155.png" />
			<img src="../src/assets/pixel_art_purple_pink_night_city_scene_86f8082f-33d2-4f8a-b9e2-9a8e1675ee68.png" />
		</div>
	</Window>
	<DesktopIcons @open-window="openWindow" />
	<StartMenu />
</template>

<style lang="scss">
*,
*::before,
*::after {
	box-sizing: border-box;
}

html {
	background: url('./assets/sunrise_pixel_art_purple_pink_88089bd8-31ad-4e78-8d42-5df2ccf96655.png');
	overflow: hidden;
}

body {
	padding: 0;
	margin: 0;
}

.start-menu {
	// width: 500px;
	// height: 600px;
	bottom: 30px;
	position: absolute;
	background: silver;
	display: grid;
	grid-template-columns: 30px 1fr;

	&__banner {
		background: linear-gradient(180deg, navy, #1084d0);
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: end;

		p {
			text-orientation: mixed;
			writing-mode: vertical-lr;
			color: white;
			margin: .5rem 0;
			transform: rotate(180deg);
			font-size: 18px
		}
	}
}


.start-button {
	width: 100%;
	height: 30px;
	background: silver;
	bottom: 0;
	left: 0;
	right: 0;
	position: absolute;
	display: flex;
	align-items: center;

	button {
		display: flex;
		align-items: center;
		padding: 4px;
		min-width: unset;
	}
}

button {
	color: black;
}

.toolbar {
	padding: 3px;
	box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
}
</style>

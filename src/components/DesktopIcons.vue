<template>
	<div class="desktop-grid">
		<DesktopIcon icon="html-5.png" title="joefitzsimmons.dev" :operation="goToUrl('https://www.joefitzsimmons.dev')" />
		<DesktopIcon icon="computer_explorer_cool-0.png" title="My Computer"
			:operation="() => $emit('open-window', 'about')" />
		<DesktopIcon icon="directory_closed-5.png" title="Midjourney"
			:operation="() => $emit('open-window', 'midjourney')" />
	</div>
</template>

<script setup lang="ts">
import DesktopIcon from './DesktopIcon.vue';

const goToUrl = (url: string) => {
	return (event: MouseEvent) => {
		window.open(url, '_blank');
	}
}

</script>

<style lang="scss">
.desktop-icon {
	display: block;
	justify-content: center;
	flex-wrap: wrap;
	width: 75px;
	text-align: center;
	color: white;
	margin: 1rem 0.5rem;

	p {
		margin: 0;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		max-width: 75px;
	}

}
</style>
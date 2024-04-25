<template>
	<div>
		<h1>VueUse Features Example</h1>
		<p>Current window width: {{ windowWidth }}px</p>
		<p>Current window height: {{ windowHeight }}px</p>
		<button @click="toggleDark">Toggle Dark Mode</button>
		<div>
			<h1>Mouse</h1>
			<p>X: {{ x }}</p>
			<p>Y: {{ y }}</p>
			<p>Source Type: {{ sourceType }}</p>
		</div>
	</div>
</template>

<script>
import { useWindowSize, useDark, useMouse } from '@vueuse/core';

export default {
	name: 'App',
	setup() {
		const { width: windowWidth, height: windowHeight } = useWindowSize();
		const isDark = useDark({
			onChanged(dark) {
				console.log('dark mode changed', dark)
				document.body.classList.remove('theme-dark', 'dnd5e-theme-dark', 'theme-light', 'dnd5e-theme-light');

				if (dark) {
					document.body.classList.add('theme-dark', 'dnd5e-theme-dark');
				} else {
					document.body.classList.add('theme-light', 'dnd5e-theme-light');
				}

				document.body.setAttribute('data-theme', dark ? 'dark' : 'light');


			},
		})
		const toggleDark = () => {
			console.log(isDark);
			isDark.value = !isDark.value;
		}

		
		const { x, y, sourceType } = useMouse();

		return {
			x, y, sourceType,
			windowWidth,
			windowHeight,
			toggleDark,
		};
	},
};
</script>

<style>
/* Add your custom styles here */
</style>
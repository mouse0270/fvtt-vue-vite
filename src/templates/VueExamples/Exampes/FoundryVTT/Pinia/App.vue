<template>
	<div>
		<h1>Counter App</h1>
		<p>Count: {{ counterStore.count }}</p>
		<button @click="increment">Increment</button>
		<button @click="decrement">Decrement</button>
	</div>
	<div>
		<h1>Users</h1>
		<p>Active Users: {{ activeUserCount }}</p>
		<p>Inactive Users: {{ inactiveUserCount }}</p>
	</div>
</template>

<script setup>
import { computed, watch } from 'vue'; // Import the computed function from Vue
import { storeToRefs } from 'pinia'; // Import the storeToRefs function from Pinia
import { useActiveElement, useMouse } from '@vueuse/core'; // Import the useActiveElement function from VueUse
import { useCounterStore } from '../../../../../assets/scripts/stores/counter'; // Import the counter store
import { usePlayerStore } from '../../../../../assets/scripts/stores/players'; // Import the player store
const counterStore = useCounterStore(); // Use the counter store
const playerStore = usePlayerStore(); // Use the player store

const { activeUserCount, inactiveUserCount } = storeToRefs(playerStore); // Destructure the activeUsers and inactiveUsers from the player store
console.log(activeUserCount, inactiveUserCount);


const { x, y, sourceType } = useMouse()
const activeElement = useActiveElement();
watch(activeElement, (el) => {
  console.log('focus changed to', el)
})

const increment = () => {
	counterStore.increment(); // Call the increment method from the counter store
};

const decrement = () => {
	counterStore.decrement(); // Call the decrement method from the counter store
};
</script>

<style>
/* Add your custom styles here */
</style>
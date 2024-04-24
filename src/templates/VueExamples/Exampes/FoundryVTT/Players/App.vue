<template>
	<div>
		<TransitionGroup tag="ul" name="fade" class="container">
			<li v-for="user in users" :key="user.id">
				<img :src="user.avatar" :alt="user.name" />
				<div>
					<h3 :style="`${user.active ? `--player-color: ${user.color.css}` : '' }`">{{ user.name }} <span v-if="user.pronouns.length > 0">({{ user.pronouns }})</span></h3>
					<p v-if="user?.character">
						<strong>[{{ user.character.type.toUpperCase() }}]</strong> {{ user.character.name }} 
					</p>
					<p v-else>{{ localize(`${Module.id}.EXAMPLES.FOUNDRY_VTT.PLAYERS_LANG.no_active_character`) }}</p>
				</div>
			</li>
  		</TransitionGroup>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Module from '../../../../../assets/scripts/module.mjs';
import { localize } from '../../../../../assets/scripts/libs/VueHelpers.mjs';

const users = ref(game.users.contents.sort((a, b) => b.active - a.active));

const updateUsers = () => {
	users.value = game.users.contents.sort((a, b) => b.active - a.active);
}

onMounted(() => {
	Hooks.on('updateUser', updateUsers);
	Hooks.on('userConnected', updateUsers);
});

onUnmounted(() => {
	Hooks.off('updateUser', updateUsers);
	Hooks.off('userConnected', updateUsers);
});
</script>

<style scoped>
.application ul {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	list-style-type: none;
	padding: 0;
}
.application ul li {
	align-items: center;
	display: flex;
	gap: 0.5rem;
	margin: 0px;
}
.application ul li > div {
	flex: 1 1 auto;
}
.application ul li img {
	border-radius: 50%;
	height: 50px;
	width: 50px;
}
.application ul li h3 {
	align-items: center;
	display: flex;
	gap: 0.5rem;
	margin-bottom: 0.5rem;
	padding-bottom: 0.5rem;

	span {
		font-size: var(--font-size-16);
	}
}
.application ul li h3:before {
	background-color: var(--player-color, rgba(0, 0, 0, 0));
	border: 2px solid var(--player-color, #000);
	content: "";
	border-radius: 50%;
	display: inline-block;
	height: 15px;
	width: 15px;
}



/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
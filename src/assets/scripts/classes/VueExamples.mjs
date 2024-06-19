import Module from "../module.mjs";
// Pinia
import { createPinia, setActivePinia } from "pinia";
// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { VueApplicationMixin } from '../libs/VueApplicationMixin.mjs';
import { logger as l } from '../logger.mjs';
import { usePlayerStore } from '../stores/players';


import App from "../../../templates/VueExamples/App.vue";

const { ApplicationV2 } = foundry.applications.api;

// Create a Pinia instance
let pinia = createPinia();
// Set the active Pinia instance
setActivePinia(pinia);

// Setup Vuetify
const vuetify = createVuetify({
	components,
	directives,
})

export class VueExamples extends VueApplicationMixin(ApplicationV2) {
	static DEFAULT_OPTIONS = foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
		id: `app-${Module.id}-VueExamples`,
		window: {
			title: `${Module.id}.title`,
			icon: "fa-solid fa-triangle-exclamation"
		},
		position: {
			width: 880,
			height: "auto"
		},
		actions: {}
	}, { inplace: false });

	static DEBUG = true;

	static SHADOWROOT = false;

	static PARTS = {
		app: {
			id: "app",
			component: App,
			use: {
				"pinia": { plugin: pinia, options: {} },
				"vuetify": { plugin: vuetify }
			}
		}
	}
}

Hooks.on('userConnected', async (user) => {
	const store = usePlayerStore();
	store.userConnected(user);
});
Hooks.on('ready', async () => {
	const store = usePlayerStore();
	store.userConnected(game.user);
});
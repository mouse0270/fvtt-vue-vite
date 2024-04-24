import Module from "../module.mjs";
import { VueApplicationMixin } from '../libs/VueApplicationMixin.mjs';
import { logger as l } from '../logger.mjs';

import App from "../../../templates/VueExamples/App.vue";

const { ApplicationV2 } = foundry.applications.api;
export class VueExamples extends VueApplicationMixin(ApplicationV2) {
	static DEFAULT_OPTIONS = foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
		id: `app-${Module.id}-VueExamples`,
		window: {
			title: `${Module.id}.title`,
			icon: "fa-solid fa-triangle-exclamation"
		},
		position: {
			width: 680,
			height: "auto"
		},
		actions: {}
	}, { inplace: false });

	static DEBUG = true;

	static PARTS = {
		app: {
			id: "app",
			component: App
		}
	}
}
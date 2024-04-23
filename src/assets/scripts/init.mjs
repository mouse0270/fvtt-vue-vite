import Module from "./module.mjs";
import { VueApplicationMixin } from './libs/VueApplicationMixin.mjs';
import { logger as l } from './logger.mjs';


import App from "../../templates/App.vue";
import UserConfig from "../../templates/UserConfig.vue";

const { ApplicationV2 } = foundry.applications.api;
class VueUserConfig extends VueApplicationMixin(ApplicationV2) {
	static DEFAULT_OPTIONS = foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
		id: `app-${Math.random().toString(36).substr(2, 9)}`,
		window: {
			title: `${Module.id}.title`,
			icon: "fa-solid fa-triangle-exclamation"
		},
		position: {
			width: 680,
			height: "auto"
		},
		actions: { }
	}, { inplace: false });

	static PARTS = {
		app: {
			id: "app",
			component: UserConfig
		}
	}
}

class VueApplication extends VueApplicationMixin(ApplicationV2) {
	static DEFAULT_OPTIONS = foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
		id: `app-${Math.random().toString(36).substr(2, 9)}`,
		window: {
			title: `${Module.id}.title`,
			icon: "fa-solid fa-triangle-exclamation"
		},
		position: {
			width: 680,
			height: "auto"
		},
		actions: { }
	}, { inplace: false });

	static DEBUG = true;

	static PARTS = {
		app: {
			id: "app",
			component: App,
			props: {
				title: "Vue Application",
				content: "This is a sample Vue Application using the VueApplicationMixin."
			}
		}
	}
}

Hooks.once('ready', async () => {
	l.log("Hook.Ready | VITE Vue Application | Use ViteUserConfig() to render the Vue Sample usign VueApplicationMixin.")
	window.ViteUserConfig = async () => await new VueUserConfig().render(true);

	l.log("Hook.Ready | VITE Vue Application | Use ViteApp() to render the Vue Sample using VueApplicationMixin.")
	window.ViteApp = async () => await new VueApplication().render(true);
});
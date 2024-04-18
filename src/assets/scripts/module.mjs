//!! ONLY WORKS ON CHROME || DO NOT USE IN PRODUCTION
//import ModuleData from "../../module.json" with { type: "json" };
//!! Module Data since `with` || `assert` is not supported in Firefox/Safari
const ModuleData = {
	id: "fvtt-vue-vite",
	title: "Foundry VTT - Vue.js | VITE",
	flags: {
		logger: {
			"enabled": true,
			"background": "#646cff",
			"foreground": "#ffffff"
		}
	}
};

const defaults = {
	flags: {
		logger: {
			enabled: false,
			background: "#d4d4d4",
			foreground: "#000"
		}
	}
}

export default foundry.utils.mergeObject(defaults, ModuleData);

<template>
	<div class="app">
		<div class="sidebar">
			<ul>
				<li v-for="category in Object.keys(sidebar)" :key="category">
					<h3>{{ localize(`${Module.id}.EXAMPLES.${category}.TITLE`) }}</h3>
					<ul>
						<li v-for="item in Object.keys(sidebar[category])" :key="item" @click="selected({ category, name: item })">
							{{ localize(`${Module.id}.EXAMPLES.${category}.${item}`) }}
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="main">
			<h1>{{ localize(`${Module.id}.EXAMPLES.${category}.TITLE`) }} - {{ localize(`${Module.id}.EXAMPLES.${category}.${example}`) }}</h1>
			<div class="component">
				<component :is="selectedComponent"></component>
			</div>	
			<footer>
				<p v-if="[`BASIC`, `PRACTICAL`].includes(category)" v-html="localize(`${Module.id}.EXAMPLES.FOOTER.PROVIDED_BY`, {
					source: [`BASIC`, `PRACTICAL`].includes(category) ? 'Vue.js' : 'Mouse0270',
					url: footerLinks[category][example],
					category: localize(`${Module.id}.EXAMPLES.${category}.TITLE`),
					example: localize(`${Module.id}.EXAMPLES.${category}.${example}`)
				})"></p>
			</footer>
		</div>
	</div>
</template>

<script setup>
import { shallowRef, ref } from 'vue';
import Module from '../../assets/scripts/module.mjs';
import { localize } from '../../assets/scripts/libs/VueHelpers.mjs';
// Basic Examples
import ExampleBasicHelloWorld from './Exampes/Basic/HelloWorld/App.vue';
import ExampleBasicHandlingUserInput from './Exampes/Basic/HandlingUserInput/App.vue';
import ExampleBasicAttributeBindings from './Exampes/Basic/AttributeBindings/App.vue';
import ExampleBasicConditionalsAndLoops from './Exampes/Basic/ConditionalsAndLoops/App.vue';
import ExampleBasicFormBindings from './Exampes/Basic/FormBindings/App.vue';
import ExampleBasicSimpleComponent from './Exampes/Basic/SimpleComponent/App.vue';
// Practical Examples
import ExamplePracticalMarkdownEditor from './Exampes/Practical/MarkdownEditor/App.vue';
import ExamplePracticalFetchingData from './Exampes/Practical/FetchingData/App.vue';
import ExamplePracticalGridWithSortAndFilter from './Exampes/Practical/GridWithSortAndFilter/App.vue';
import ExamplePracticalTreeView from './Exampes/Practical/TreeView/App.vue';
//import ExamplePracticalSVGGraph from './Exampes/Practical/SVGGraph/App.vue';
import ExamplePracticalModalWithTransitions from './Exampes/Practical/ModalWithTransitions/App.vue';
import ExamplePracticalListWithTransitions from './Exampes/Practical/ListWithTransitions/App.vue';
import ExamplePracticalTodoMVC from './Exampes/Practical/TodoMVC/App.vue';
// Foundry VTT Examples
import ExampleFoundryVTTPlayers from './Exampes/FoundryVTT/Players/App.vue';

const sidebar = {
	"BASIC": {
		"HELLO_WORLD": ExampleBasicHelloWorld,
		"HANDLING_USER_INPUT": ExampleBasicHandlingUserInput,
		"ATTRIBUTE_BINDINGS": ExampleBasicAttributeBindings,
		"CONDITIONALS_AND_LOOPS": ExampleBasicConditionalsAndLoops,
		"FORM_BINDINGS": ExampleBasicFormBindings,
		"SIMPLE_COMPONENT": ExampleBasicSimpleComponent
	},
	"PRACTICAL": {
		"MARKDOWN_EDITOR": ExamplePracticalMarkdownEditor,
		"FETCHING_DATA": ExamplePracticalFetchingData,
		"GRID_WITH_SORT_AND_FILTER": ExamplePracticalGridWithSortAndFilter,
		"TREE_VEIW": ExamplePracticalTreeView,
		//"SVG_GRAPH": ExamplePracticalSVGGraph
		"MODAL_WITH_TRANSITIONS": ExamplePracticalModalWithTransitions,
		"LIST_WITH_TRANSITIONS": ExamplePracticalListWithTransitions,
		"TODOMVC": ExamplePracticalTodoMVC
	},
	"FOUNDRY_VTT": {
		"PLAYERS": ExampleFoundryVTTPlayers
	}
}
const footerLinks = {
	"BASIC": {
		"HELLO_WORLD": "https://vuejs.org/examples/#hello-world",
		"HANDLING_USER_INPUT": "https://vuejs.org/examples/#handling-input",
		"ATTRIBUTE_BINDINGS": "https://vuejs.org/examples/#attribute-bindings",
		"CONDITIONALS_AND_LOOPS": "https://vuejs.org/examples/#conditionals-and-loops",
		"FORM_BINDINGS": "https://vuejs.org/examples/#form-bindings",
		"SIMPLE_COMPONENT": "https://vuejs.org/examples/#simple-component"
	},
	"PRACTICAL": {
		"MARKDOWN_EDITOR": "https://vuejs.org/examples/#markdown",
		"FETCHING_DATA": "https://vuejs.org/examples/#fetching-data",
		"GRID_WITH_SORT_AND_FILTER": "https://vuejs.org/examples/#grid",
		"TREE_VEIW": "https://vuejs.org/examples/#tree",
		//"SSVG_GRAPH": "https://vuejs.org/examples/#svg-graph",
		"MODAL_WITH_TRANSITIONS": "https://vuejs.org/examples/#modal",
		"LIST_WITH_TRANSITIONS": "https://vuejs.org/examples/#list-transition",
		"TODOMVC": "https://vuejs.org/examples/#todomvc"
	}
}

const selectedComponent = shallowRef(sidebar.BASIC.HELLO_WORLD);
const category = ref("BASIC");
const example = ref("HELLO_WORLD");

const selected = (item) => {
	category.value = item.category;
	example.value = item.name;
	selectedComponent.value = sidebar[item.category][item.name];
};
</script>

<style>
#app-fvtt-vue-vite-VueExamples .window-content {
	padding: 0;
}
</style>

<style scoped>
.app {
	border-radius: 0;
	display: flex;
	margin: 0;
	padding: 0;
}

.sidebar {
	border-right: 1px solid var(--color-underline-header);
	width: 200px;

	ul {
		margin: 0;
		padding: 0;

		h3 {
			margin: 0;
			padding: 0.5rem 1rem;
		}

		li > ul > li {
			cursor: pointer;
			list-style-type: none;
			padding: 0.5rem 1rem;
			padding-left: 1.5rem;
		}
	}
}

.main {
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 0;

	> h1 {
		flex: 0 0 auto;
		margin: 0;
		padding: 0 1rem; 
	}

	> .component {
		flex: 1;
		max-height: 60vh;
		overflow: auto;
		padding: 1rem;
	}

	> footer {
		border-top: 1px solid var(--color-underline-header);
		flex: 0 0 auto;
		padding: 0.5rem 1rem;

		a {
			display: inline-block;
			margin: 0;
		}
	}
}
</style>
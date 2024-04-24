<template>
	<div class="app">
		<div class="sidebar">
			<ul>
				<li v-for="category in Object.keys(sidebar)" :key="category">
					<h3>{{ category }}</h3>
					<ul>
						<li v-for="item in Object.keys(sidebar[category])" :key="item" @click="selected({ category, name: item })">
							{{ item }}
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="main">
			<h1>{{ category }} - {{ example }}</h1>
			<div class="component">
				<component :is="selectedComponent"></component>
			</div>	
			<footer>
				<p v-if="[`Basic`, `Practical`].includes(category)">Vue Example provided by <a :href="`https://vuejs.org/examples/#${example.toLowerCase().replace(' ', '-')}`" target="_blank">VueJs Examples - {{ category }} / {{ example }}</a></p>
			</footer>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
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


const sidebar = {
	"Basic": {
		"Hello World": ExampleBasicHelloWorld,
		"Handling User Input": ExampleBasicHandlingUserInput,
		"Attribute Bindings": ExampleBasicAttributeBindings,
		"Conditionals and Loops": ExampleBasicConditionalsAndLoops,
		"Form Bindings": ExampleBasicFormBindings,
		"Simple Component": ExampleBasicSimpleComponent
	},
	"Practical": {
		"Markdown Editor": ExamplePracticalMarkdownEditor,
		"Fetching Data": ExamplePracticalFetchingData,
		"Grid With Sort and Filter": ExamplePracticalGridWithSortAndFilter,
		"Tree View": ExamplePracticalTreeView,
		//"SVG Graph": ExamplePracticalSVGGraph
		"Modal With Transitions": ExamplePracticalModalWithTransitions,
		"List With Transitions": ExamplePracticalListWithTransitions,
		"TodoMVC": ExamplePracticalTodoMVC
	},
	"Foundry VTT": {
		"Hello World": ExampleBasicHelloWorld
	}
}
const selectedComponent = ref(sidebar.Basic["Hello World"]);
const category = ref("Basic");
const example = ref("Hello World");

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
		max-height: 80vh;
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
<script setup>
import DemoGrid from './components/Grid.vue'
import { ref, defineProps, inject, onMounted } from 'vue'

const onChange = inject('onChange');
const onInput = inject('onInput');
const onSubmit = inject('onSubmit');
const buttonAction1 = inject('buttonAction1');
const buttonAction2 = inject('buttonAction2');

const props = defineProps({
  title: {
    type: String,
    default: 'Hello Vue 3'
  },
})

const searchQuery = ref('')
const gridColumns = ['name', 'power']
const gridData = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]
</script>

<template>
  <h1>{{ props.title }}</h1>
  <form class="form1" id="search" @input="onInput" @change="onChange" @submit="onSubmit">
    Search <input name="query" v-model="searchQuery">
  </form>
  <DemoGrid
    :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery">
  </DemoGrid>
  <button @click="buttonAction1">Button 1</button>
  <button @click="buttonAction2">Button 2</button>
</template>
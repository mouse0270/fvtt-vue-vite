<!--
A simple markdown editor.
-->

<script setup>
import { ref, computed } from 'vue'

const input = ref('# hello')
const marked = new showdown.Converter();
const output = computed(() => marked.makeHtml(input.value))

const update = foundry.utils.debounce((event) => {
  input.value = event.target.value
}, 300);
</script>

<template>
  <div class="editor">
    <textarea class="input" :value="input" @input="update"></textarea>
    <div class="output" v-html="output"></div>
  </div>
</template>

<style scoped>
.editor {
  height: 100vh;
  display: flex;
}

.input,
.output {
  overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.input {
  border: none;
  border-right: 1px solid #ccc;
  color: black;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
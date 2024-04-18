<template>
<div class="standard-form">
    <fieldset>
        <legend>{{ localize("USER.SHEET.HEADERS.INFO")}}</legend>
			<div v-for="(field, key) in fields" :key="key" v-html="formField(field.field, field.options)" />
    </fieldset>

    <fieldset>
        <legend>{{ localize("USER.SHEET.HEADERS.CHAR")}}</legend>
    </fieldset>

    <footer class="form-footer">
        <button type="submit">
            <i class="fas fa-save"></i>
            <label>{{ localize("USER.SHEET.BUTTONS.SAVE")}}</label>
        </button>
    </footer>
</div>
</template>

<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue';
import { localize, formField } from '../assets/scripts/libs/VueHelpers.mjs';

const fields = ref({
	name: {
		field: new foundry.data.fields.StringField({ 
			label: localize('USER.FIELDS.name.label'),
			hint: localize('USER.FIELDS.name.hint')
		}),
		options: { hash: {} }
	},
	avatar: {
		field: new foundry.data.fields.FilePathField({ 
			label: localize('USER.FIELDS.avatar.label'),
			hint: localize('USER.FIELDS.avatar.hint'),
			categories: ['IMAGE'],
			options: {
				categories: ['IMAGE']
			}
		}),
		options: { hash: {} }
	},
	color: {
		field: new foundry.data.fields.ColorField({ 
			label: localize('USER.FIELDS.color.label'),
			hint: localize('USER.FIELDS.color.hint')
		}),
		options: { hash: {} }
	},
	pronouns: {
		field: new foundry.data.fields.StringField({ 
			label: localize('USER.FIELDS.pronouns.label'),
			hint: localize('USER.FIELDS.pronouns.hint')
		}),
		options: { hash: {} }
	}
})


onMounted(() => {
	console.log('App Mounted');
});

onUpdated(() => {
	console.log('App Updated');
});

onUnmounted(() => {
	console.log('App Unmounted');
});
</script>

<style scoped>
.card {
	border: 1px solid black;
	padding: 10px;
	margin-bottom: 10px;
}
</style>

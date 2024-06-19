<template>
	<v-app id="inspire">
		<v-main class="bg-grey-lighten-2">
			<v-container>
				<v-row>
					<template v-for="n in 4" :key="n">
						<v-col class="mt-2" cols="12">
							<strong>Category {{ n }}</strong>
						</v-col>

						<v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
							<v-skeleton-loader type="article"></v-skeleton-loader>
						</v-col>
					</template>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>


<script setup>
import { ref } from 'vue'

const drawer = ref(null)
</script>

<style>
/* Add your custom styles here */
</style>
<template>
	<v-app>
		<v-main>
			<v-container>
				<v-row justify="center">
					<v-col cols="12" sm="8" md="6">
						<v-card>
							<v-card-title>
								Welcome to Vuetify!
							</v-card-title>
							<v-card-text>
								<v-text-field
									v-model="message"
									label="Enter a message"
								></v-text-field>
								<v-btn @click="showMessage">Show Message</v-btn>
								<v-alert
									v-if="showAlert"
									type="success"
									dismissible
									@input="showAlert = false"
								>
									{{ message }}
								</v-alert>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			message: '',
			showAlert: false
		};
	},
	methods: {
		showMessage() {
			if (this.message) {
				this.showAlert = true;
			}
		}
	}
};
</script>

<style>
/* Add your custom styles here */
</style>
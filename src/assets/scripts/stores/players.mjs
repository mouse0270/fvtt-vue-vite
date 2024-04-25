import Module from '../module.mjs'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore(`${Module.id}.users`, {
	state: () => ({
		activeUsers: [],
		inactiveUsers: []
	}),
	actions: {
		userConnected(user) {
			this.activeUsers = game.users.filter(u => u.active);
			this.inactiveUsers = game.users.filter(u => !u.active);
		}
	},
	getters: {
		activeUserCount: (state) => state.activeUsers.length,
		inactiveUserCount: (state) => state.inactiveUsers.length
	}
})
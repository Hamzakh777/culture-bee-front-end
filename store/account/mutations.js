const mutations = {
	nextStep(state) {
		state.currentStep = state.currentStep + 1;
	},
	previousStep(state) {
		state.currentStep += -1;
	},
	mutate(state, payload) {
		state[payload.property] = payload.with;
	},

	setId(state, id) {
		state.id = id;
	},
	setUserData(state, data) {
		state.id = data.data.id;
		state.name = data.data.name;
		state.email = data.data.email;
		state.location = data.data.location;
		state.profileImgUrl = data.data.profileImgUrl;
		state.role = data.data.role;
	},	
	retrieveToken(state) {
		if (localStorage.getItem('access_token') !== null) {
			state.accessToken = localStorage.getItem('access_token');
			this.$axios.defaults.headers.common.Authorization =
				'Bearer ' + state.accessToken;
		}
	},
	setToken(state, token) {
		localStorage.setItem('access_token', token);
		state.accessToken = token;
	},
	destroyAccessToken(state) {
		if (localStorage.getItem('access_token') !== null) {
			localStorage.removeItem('access_token');
			state.accessToken = null;
		}
	}
};

export default mutations;

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
		state.id = data.id;
		state.name = data.name;
		state.companyName = data.companyName;
		state.currentProfileCreationStep = data.currentProfileCreationStep;
		state.email = data.email;
		state.location = data.location;
		state.profileImgUrl = data.profileImgUrl;
		state.coverImgUrl = data.coverImgUrl;
		state.role = data.role;
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

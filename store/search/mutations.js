const mutations = {
	mutate(state, payload) {
		state[payload.property] = payload.with;
	},

	setResults(state, data) {
		state.results = data;
	},

	toggleLoader(state) {
		state.isLoading = !state.isLoading;
	}
};

export default mutations;

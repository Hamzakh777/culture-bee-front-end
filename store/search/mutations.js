const mutations = {
	mutate(state, payload) {
		state[payload.property] = payload.with;
	},

	setResults(state, data) {
		state.results = data;
	}
};

export default mutations;

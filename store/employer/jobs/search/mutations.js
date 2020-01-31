const mutations = {
	mutate(state, payload) {
		state[payload.property] = payload.with;
	},

	setJobs(state, jobs) {
		state.jobs = jobs;
	},

	toggleLoader(state) {
		state.isLoading = !state.isLoading;
	}
};

export default mutations;

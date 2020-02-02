const mutations = {
	mutate(state, payload) {
		state[payload.property] = payload.with;
	},

	setJobs(state, jobs) {
		state.jobs = jobs;
	},

	hideLoader(state) {
		state.isLoading = false;
	},
	
	showLoader(state) {
		state.isLoading = true;
	}
};

export default mutations;

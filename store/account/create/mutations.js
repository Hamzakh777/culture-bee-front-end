const mutations = {
	nextStep(state) {
		state.currentStep = state.currentStep + 1;
	},
	previousStep(state) {
		state.currentStep += -1;
	},
	mutate(state, payload) {
		state[payload.property] = payload.with;
	}
};

export default mutations;

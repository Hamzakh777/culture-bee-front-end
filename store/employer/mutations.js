const mutations = {
	nextStep(state) {
        state.currentStep = state.currentStep + 1;
    },
    previousStep(state) {
        state.currentStep += -1;
    }
};

export default mutations;

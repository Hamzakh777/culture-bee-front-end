const mutations = {
    mutate(state, payload) {
        state[payload.property] = payload.with;
    },
    nextStep(state) {
        state.currentProfileCreationStep += 1;
    },
    prevStep(state) {
        state.currentProfileCreationStep -= 1;
    }
};

export default mutations;

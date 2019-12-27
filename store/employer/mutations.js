const mutations = {
    setValueTitle(state, payload) {
        state.values[payload.key].title = payload.title;
    },
    resetValue(state, key) {
        state.values[key].title = null;
        state.values[key].icon = null;
    },
    nextStep(state) {
        state.currentProfileCreationStep += 1;
    },
    prevStep(state) {
        state.currentProfileCreationStep -= 1;
    }
};

export default mutations;

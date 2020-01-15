const mutations = {
    addUpdate(state, update) {
        state.unshift(update);
    },
    addUpdates(state, updates) {
        state.updates = updates;
    }
};

export default mutations;

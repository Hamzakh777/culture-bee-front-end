const mutations = {
    addUpdate(state, update) {
        state.updates.unshift(update);
    },
    addUpdates(state, updates) {
        state.updates = updates;
    },
    updateUpdate(state, data) {
        state.updates =  state.updates.forEach(element => {
            if (element.id === data.update.id) {
                element = data.update;
            }
        });
    },
    removeUpdate(state, id) {
        state.updates = state.updates.filter(update => update.id !== id);
    }
};

export default mutations;

const mutations = {
    setUpdates(state, updates) {
        state.updates = updates;
    },
    addUpdate(state, update) {
        state.updates.unshift(update);
    },
    addUpdates(state, updates) {
        state.updates = updates;
    },
    updateUpdate(state, data) {
        const updates =  state.updates.map(element => {
            if (element.id === data.update.id) {
                element = data.update;
            }
            return element;
        });

        state.updates = updates;
    },
    removeUpdate(state, id) {
        state.updates = state.updates.filter(update => update.id !== id);
    }
};

export default mutations;

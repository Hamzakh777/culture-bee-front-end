const mutations = {
    mutate(state, payload) {
        state[payload.property] = payload.with;
    },
    
};

export default mutations;

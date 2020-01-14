const mutations = {
    mutate(state, payload) {
        state[payload.property] = payload.with;
    },
    setProfileDetails(state, user) {

    }
};

export default mutations;

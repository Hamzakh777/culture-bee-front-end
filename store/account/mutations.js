const mutations = {
	nextStep(state) {
        state.currentStep = state.currentStep + 1;
    },
    previousStep(state) {
        state.currentStep += -1;
    },
    mutate(state, payload) {
        state[payload.property] = payload.with;
    },
    retrieveToken(state) {
        if (localStorage.getItem('access_token') !== null) {
            state.accessToken = localStorage.getItem('access_token');
        }
    },
    setToken(state, token) {
        localStorage.setItem('access_token', token);
        state.accessToken = token;
    },
    destroyAccessToken(state) {
        if (localStorage.getItem('access_token') !== null) {
            localStorage.removeItem('access_token');
            state.accessToken = null;
        }
    }
};

export default mutations;

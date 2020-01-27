const mutations = {
    setVision(state, vision) {
        state.description = vision.description;
        state.id = vision.id;
    }
};

export default mutations;

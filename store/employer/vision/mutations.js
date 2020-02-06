const mutations = {
    setVision(state, vision) {
        if (vision !== null) {
            state.description = vision.description;
            state.id = vision.id;
        }
    }
};

export default mutations;

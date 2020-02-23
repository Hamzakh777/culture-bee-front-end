const mutations = {
    mutate(state, payload) {
        state[payload.property] = payload.with;
    },
    nextStep(state) {
        state.currentProfileCreationStep += 1;
    },
    prevStep(state) {
        state.currentProfileCreationStep -= 1;
    },
    incrementProfileCreationStep(state) {
        state.currentProfileCreationStep += 1;
    },
    setProfileDetails(state, data) {
        state.id = data.id;
        state.name = data.name;
        state.companyName = data.companyName;
        state.currentProfileCreationStep = data.currentProfileCreationStep;
        state.email = data.email;
        state.location = data.location;
        state.profileImgUrl = data.profileImgUrl;
        state.quickPitch = data.quickPitch;
        state.coverImgUrl = data.coverImgUrl;
        state.role = data.role;
        state.following = data.following;
    },
    follow(state) {
        state.following = true;
    },
    unfollow(state) {
        state.following = false;
    }
};

export default mutations;

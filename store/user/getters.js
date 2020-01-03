const getters = {
    isLoggedIn(state) {
        return state.accessToken !== null;
    },
    nameInitials(state, getters) {
        if (getters.isLoggedIn) {
            const names = state.name.split('');

            return names.map(name => name[0]).join('');
        } else {
            return 'CB';
        }
    }
};

export default getters;

const getters = {
	nameInitials(state, getters) {
		if (getters.isLoggedIn && state.name !== null) {
			const names = state.name.split(' ');

			return names.map(name => name[0]).join('');
		} else {
			return 'CB';
		}
	},
	isLoggedIn(state) {
		return state.accessToken !== null;
	}
};

export default getters;

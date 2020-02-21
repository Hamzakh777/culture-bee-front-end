const actions = {
	getProfileDetails({ commit }, id) {
		return new Promise((resolve, reject) => {
			this.$axios
				.get(`api/employer/${id}`)
				.then(response => {
					commit('setProfileDetails', response.data.data);
					resolve(response);
				})
				.catch(err => {
					reject(err);
				});
		});
	},
	updateAccountDetails({ commit }, data) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post('/api/profile', data)
				.then(response => {
					commit('setProfileDetails', response.data.user);
					resolve(response);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
};

export default actions;

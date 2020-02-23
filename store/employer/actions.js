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
	},

	follow({ commit, state }) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post(`/api/user/${state.id}/follow`,)
				.then(response => {
					commit('follow');
					resolve(response);
				})
				.catch(err => {
					reject(err);
				});
		}); 
	},

	unfollow({ commit, state }) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post(`/api/user/${state.id}/unfollow`)
				.then(response => {
					commit('unfollow');
					resolve(response);
				})
				.catch(err => {
					reject(err);
				});
		}); 
	}
};

export default actions;

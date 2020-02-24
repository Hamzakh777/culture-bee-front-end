const actions = {
	fetchAboutMe({ commit }, id) {
		return new Promise((resolve, reject) => {
			this.$axios
				.get(`api/job-seeker/${id}/about-me`)
				.then(response => {
					commit('setAboutMe', response.data);
					resolve(response);
				})
				.catch(err => reject(err));
		});
	},

	addAboutMe({ commit }, data) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post('api/job-seeker/about-me', data)
				.then(response => {
					commit('setAboutMe', response.data);
					resolve(response);
				})
				.catch(err => reject(err));
		});
	},

	updateAboutMe({ commit }, data) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post(`api/job-seeker/about-me`, data)
				.then(response => {
					commit('setAboutMe', response.data);
					resolve(response);
				})
				.catch(err => reject(err));
		});
	}
};

export default actions;

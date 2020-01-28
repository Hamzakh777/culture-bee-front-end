const actions = {
	fetchJob({ commit }, id) {
		return new Promise((resolve, reject) => {
			this.$axios
				.get(`api/jobs/${id}`)
				.then(response => {
					commit('setJob', response.data.job);
					resolve(response);
				})
				.catch(err => reject(err));
		});
	},

	addJob({ commit }, data) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post('api/employer/vision', data)
				.then(response => {
					commit('setVision', response.data.vision);
					resolve(response);
				})
				.catch(err => reject(err));
		});
	},

	updateJob({ commit }, data) {
		return new Promise((resolve, reject) => {
			this.$axios
				.put(`api/employer/${data.id}/vision`, data.vision)
				.then(response => {
					commit('setVision', response.data.vision);
					resolve(response);
				})
				.catch(err => reject(err));
		});
	}
};

export default actions;

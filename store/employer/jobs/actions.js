const actions = {
	fetchJobs({ commit }, id) {
		return new Promise((resolve, reject) => {
			this.$axios
				.get(`api/employer/${id}/jobs`)
				.then(response => {
					commit('setJobs', response.data.jobs);
					resolve(response);
				})
				.catch(err => reject(err));
		});
	}
};

export default actions;

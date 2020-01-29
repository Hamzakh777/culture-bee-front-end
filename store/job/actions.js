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
	}
};

export default actions;

const actions = {
	fetchSearchResults({ state, commit }) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post(`api/search`, {
					category: state.category,
					query: state.query
				})
				.then(response => {
					commit('setResults', response.data.job);
					resolve(response);
				})
				.catch(err => reject(err));
		});
	}
};

export default actions;

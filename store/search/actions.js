const actions = {
	fetchSearchResults({ state, commit }) {
		return new Promise((resolve, reject) => {
			commit('toggleLoader');
			this.$axios
				.post(`api/search`, {
					category: state.category,
					query: state.query
				})
				.then(response => {
					commit('setResults', response.data.results);
					resolve(response);
				})
				.catch(err => reject(err));
			commit('toggleLoader');
		});
	}
};

export default actions;

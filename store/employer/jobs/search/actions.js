const actions = {
	async fetchJobs({ commit, state }) {
		commit('showLoader');
		try {
			const response = await this.$axios.post('/api/employer/jobs/search', {
				query: state.query,
				type: state.type,
				seniority: state.seniority,
				category: state.category,
				industry: state.industry,
				location: state.location
			});
			commit('setJobs', response.data.jobs);
		} catch (error) {
			if (process.browser) {
				alert('An error happend');
			}
		}
		commit('hideLoader');
	}
};

export default actions;

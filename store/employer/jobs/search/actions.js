const actions = {
	async fetchJobs({ commit, state }) {
		commit('toggleLoader');
		try {
			const response = await this.$axios.post('/api/employer/jobs/search', {
				query: state.query,
				type: state.query,
				seniority: state.seniority,
				category: state.category,
				industry: state.industry
			});
			commit('setJobs', response.data.jobs);
		} catch (error) {
			if (process.browser) {
				alert('An error happend');
				console.log(error);
			}
		}
		commit('toggleLoader');
	}
};

export default actions;

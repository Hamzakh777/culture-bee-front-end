const actions = {
	async fetchJobs({ commit, state }) {
		commit('showLoader');
		try {
			const response = await this.$axios.post('/api/employer/jobs/search', {
				query: state.query,
				type: state.type.join(' '),
				seniority: state.seniority.join(' '),
				category: state.category,
				industry: state.industries.join(' '),
				location: state.locations.join(' ')
			});
			commit('setJobs', response.data.jobs);
		} catch (error) {
			if (process.browser) {
				// alert('An error happend');
				console.error(error);
			}
		}
		commit('hideLoader');
	}
};

export default actions;

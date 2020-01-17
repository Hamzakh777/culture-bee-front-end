const actions = {
	fetchBenefits({ commit }, id) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post(`api/employer/{id}/benefits`)
				.then(response => {
					commit('addBenefits', response.data.updates);
					resolve(response);
				})
				.catch(err => reject(err));
		});
	},

	addBenefits({ commit }, data) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post('api/employer/benefits/collection', data)
				.then(response => {
					commit('setBenefits', response.data.benefits);
					resolve(response);
				})
				.catch(err => reject(err));
		});
	},

	updateBenefit({ commit }) {
		return new Promise((resolve, reject) => {
			this.$axios
				.put('api/employer/updates/', data)
				.then(response => {
					commit('updateBenefit', response.data.update);
					resolve(response);
				})
				.catch(err => reject(err));
		});
	},

	deleteBenefit({ commit }, id) {
		return new Promise((resolve, reject) => {
			this.$axios
				.delete(`api/employer/benefits/${id}`)
				.then(response => {
					commit('removeBenefit', id);
					resolve(response);
				})
				.catch(err => reject(err));
		});
	}
};

export default actions;

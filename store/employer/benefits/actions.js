const actions = {
	fetchBenefits({ commit }, id) {
		return new Promise((resolve, reject) => {
			this.$axios
				.get(`api/employer/${id}/benefits`)
				.then(response => {
					commit('setBenefits', response.data.benefits);
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

	/**
	 * Create a benefit
	 * @param {Object} context 
	 * @param {FormData} data 
	 */
	addBenefit({ commit }, data) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post(`api/employer/benefits`, data)
				.then(response => {
					commit('addBenefit', response.data.benefit);
					resolve(response);
				})
				.catch(err => reject(err));
		});
	},

	updateBenefit({ commit }, data) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post(`api/employer/benefits/${data.id}`, data.formData)
				.then(response => {
					commit('updateBenefit', response.data.benefit);
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

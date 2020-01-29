const actions = {
	update({ commit, state, dispatch }) {
		return new Promise((resolve, reject) => {
			const formData = new FormData();

			formData.append('companyName', state.companyName);
			formData.append('industry', state.industry);
			formData.append('location', state.location);
			formData.append('skills', JSON.stringify(state.skills));
			formData.append(
				'profileImgFile',
				state.profileImgFile !== null ? state.profileImgFile.file : null
			);
			formData.append('name', state.name);

			this.$axios
				.post('/api/profile', formData)
                .then(response => {
                    resolve(response);
					commit('setId', response.data.userId);
					dispatch('getLogedInUser');
                })
				.catch(err => reject(err));
		});
	},
	
	updateAccountDetails({ commit }, data) {
		return new Promise((resolve, reject) => {
			this.$axios.post('/api/profile', data)
				.then((response) => {
					console.log(response.data.user);
					commit('setUserData', response.data.user);
					resolve(response);
				})
				.catch(err => {
					reject(err);
				})
		})
	},

	async getLogedInUser({ commit }) {
		try {
			const response = await this.$axios.get('api/profile');

			commit('setUserData', response.data.data);
		} catch (error) {
			alert('An error occured trying to retrieve the user data');
		}
	},

	async logout({ commit }) {
		try {
			await this.$axios.post('api/logout');

			commit('destroyAccessToken');
			this.$router.push({
				path: '/'
			});
		} catch (error) {
			commit('destroyAccessToken');
			this.$router.push({
				path: '/'
			});
		}
	}
};

export default actions;

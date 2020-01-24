const actions = {
    async getProfileDetails({ commit }, id) {
        try {
            const response = await this.$axios.get(`api/employer/${id}`);

            commit('setProfileDetails', response.data.data);
        } catch (error) {
            if (process.browser) {
                window.alert('An error occured trying to retrieve the user data');
            }
        }
    },
    updateAccountDetails({ commit }, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/api/profile', data)
                .then((response) => {
                    commit('setProfileDetails', response.data.user);
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
}

export default actions;
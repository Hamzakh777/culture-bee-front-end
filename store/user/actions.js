const actions = {
    updateProfileDetails({ commit }, data) {
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
    }
}

export default actions;
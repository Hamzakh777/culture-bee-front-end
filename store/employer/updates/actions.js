const actions = {
    addUpdate({ commit }, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('api/employer/updates', data)
                .then((response) => {
                    resolve(response);
                    commit('addUpdate', response.data.update)
                })
                .catch(err => reject(err));
        });
    },

    updateUpdate({ coomit }, data) {
        return new Promise((resolve, reject) => {
            this.$axios.put('api/employer/updates/', data)
                .then((response) => {
                    resolve(response);
                    commit('addUpdate', response.data.update)
                })
                .catch(err => reject(err));
        });
    },

    deleteUpdate() {

    }
}

export default actions;
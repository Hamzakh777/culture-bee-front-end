const actions = {
    fetchUpdates(id) {
        return new Promise((resolve, reject) => {
            this.$axios.post(`api/employer/{id}/updates`)
                .then((response) => {
                    resolve(response);
                    commit('addUpdates', response.data.updates)
                })
                .catch(err => reject(err));
        });
    },

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

    updateUpdate({ commit }, data) {
        return new Promise((resolve, reject) => {
            this.$axios.put('api/employer/updates/', data)
                .then((response) => {
                    resolve(response);
                    commit('addUpdate', response.data.update)
                })
                .catch(err => reject(err));
        });
    },

    deleteUpdate({ commit }, id) {
        return new Promise((resolve, reject) => {
            this.$axios.delete(`api/employer/updates/${id}`)
                .then((response) => {
                    resolve(response);
                    commit('removeUpdate', id)
                })
                .catch(err => reject(err));
        });
    }
}

export default actions;
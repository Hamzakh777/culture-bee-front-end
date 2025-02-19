const actions = {
    fetchUpdates({ commit }, id) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`api/employer/${id}/updates`)
                .then((response) => {
                    resolve(response);
                    commit('setUpdates', response.data.updates);
                })
                .catch(err => reject(err));
        });
    },

    addUpdate({ commit }, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('api/employer/updates', data)
                .then((response) => {
                    commit('addUpdate', response.data.update)
                    resolve(response);
                })
                .catch(err => reject(err));
        });
    },

    updateUpdate({ commit }, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post(`api/employer/updates/${data.id}`, data.updateData)
                .then((response) => {
                    commit('updateUpdate', {
                        id: data.id,
                        update: response.data.update
                    });
                    resolve(response);
                })
                .catch(err => reject(err));
        });
    },

    deleteUpdate({ commit }, id) {
        return new Promise((resolve, reject) => {
            this.$axios.delete(`api/employer/updates/${id}`)
                .then((response) => {
                    commit('removeUpdate', id);
                    resolve(response);
                })
                .catch(err => reject(err));
        });
    }
}

export default actions;
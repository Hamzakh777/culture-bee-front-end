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
                    commit('addUpdate', response.data.update)
                    resolve(response);
                })
                .catch(err => reject(err));
        });
    },

    updateUpdate({ commit }, data) {
        return new Promise((resolve, reject) => {
            // using put because laravel gets an empty request when sending 
            // put without application/x-www-form-urlencoded header 
            // but then axios can't send the fucking header -_-
            this.$axios.put(`api/employer/updates/${data.id}`, data.updateData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
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
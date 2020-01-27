const actions = {
    fetchVision({ commit }, id) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`api/employer/${id}/vision`)
                .then((response) => {
                    commit('setVision', response.data.vision)
                    resolve(response);
                })
                .catch(err => reject(err));
        })
    },
    
    addVision({ commit }, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('api/employer/vision', data)
                .then((response) => {
                    commit('setVision', response.data.vision);
                    resolve(response);
                })
                .catch(err => reject(err));
        })
    },

    updateVision({ commit }, data) {
        return new Promise((resolve, reject) => {
            this.$axios.put(`api/employer/${data.id}/vision`, data.vision)
                .then((response) => {
                    commit('setVision', response.data.vision);
                    resolve(response);
                })
                .catch(err => reject(err));
        });
    }
}

export default actions;
const actions = {
    fetchValues({ commit }, id) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`api/employer/${id}/values`)
                .then((response) => {
                    commit('setValues', response.data.values);
                    resolve(response);
                })
                .catch(err => reject(err));
        })
    },
    
    addValues({ commit }, values) {
        return new Promise((resolve, reject) => {
            this.$axios.post('api/employer/values', values)
                .then((response) => {
                    commit('setValues', response.data.values);
                    resolve(response);
                })
                .catch(err => reject(err));
        });
    }
}

export default actions;
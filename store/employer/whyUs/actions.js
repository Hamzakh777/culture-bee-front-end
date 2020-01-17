const actions = {
    fetchWhyUs({ commit }, id) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`api/employer/${id}/why-us`)
                .then((response) => {
                    commit('setTagline', response.data.tagline);
                    commit('setEthos', response.data.ethos);
                    commit('setCoreValues', response.data.coreValues);
                    resolve(response);
                })
                .catch(err => reject(err));
        })
    },
    
    addWhyUs({ commit }, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('api/employer/why-us', data)
                .then((response) => {
                    commit('setTagline', response.data.tagline);
                    commit('setEthos', response.data.ethos);
                    commit('setCoreValues', response.data.coreValues);
                    resolve(response);
                })
                .catch(err => reject(err));
        })
    }
}

export default actions;
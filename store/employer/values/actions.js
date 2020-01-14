const actions = {
    fetchValues({ commit }) {
        // do some fetching   
    },
    
    addValues({ commit }, values) {
        return new Promise((resolve, reject) => {
            this.$axios.post('api/employer/values', values)
                .then((response) => {
                    resolve(response);
                })
                .catch(err => reject(err));
        });
    }
}

export default actions;
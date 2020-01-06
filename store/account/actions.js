const actions = {
    update({ commit, state }) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();

            formData.append('companyName', state.companyName);
            formData.append('industry', state.industry);
            formData.append('location', state.location);
            formData.append('skills', JSON.stringify(state.skills));
            formData.append('profileImgFile', state.profileImgFile !== null ? state.profileImgFile.file : null);
            formData.append('name', state.name);

            this.$axios.post('/api/profile', formData)
                .then(response => resolve(response))
                .catch(err => reject(err));
        })
    }    
}

export default actions;
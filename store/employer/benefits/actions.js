const actions = {
    addBenefit({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 4000);
        });
    },
    deleteBenefit({ commit }, id) {
        try {
            console.log('removing update');
        } catch (error) {
            alert(error);
        }
    }
}

export default actions;
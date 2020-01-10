const actions = {
    addBenefit({ commit }, id) {
        return new Promise((resolve, reject) => {

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
const mutations = {
    setBenefits(state, benefits) {
        state.benefits = benefits;
    },

    /**
     * 
     * @param {Object} state 
     * @param {Number} id - the id of the benefit to remove
     */
    removeBenefit(state, id) {
        this.state.benefits = this.state.benefits.filter((benefit) => benefit.id !== id);
    },

    updateBenefit(state, updatedBenefit) {
        state.benefits = state.benefits.map(element => {
            if (element.id === updatedBenefit.id) {
                element = updatedBenefit;
            }
            return element;
        });
    }
};

export default mutations;

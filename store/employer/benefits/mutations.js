const mutations = {
    setBenefits(state, benefits) {
        state.benefits = benefits;
    },

    /**
     * Add a benefit
     */
    addBenefit(state, benefit) {
        state.benefits.unshift(benefit);
    },

    /**
     * Remove a benefit
     * @param {Object} state 
     * @param {Number} id - the id of the benefit to remove
     */
    removeBenefit(state, id) {
        state.benefits = state.benefits.filter((benefit) => benefit.id !== id);
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

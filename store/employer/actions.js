const actions = {
    addUpdate({ commit }, id) {
        try {
            console.log('removing update');
        } catch (error) {
            alert(error);
        }
    },
    deleteUpdate({ commit }, id) {
        try {
            console.log('removing update');
        } catch (error) {
            alert(error);
        }
    }
}

export default actions;
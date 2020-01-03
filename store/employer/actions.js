const actions = {
    deleteUpdate({ commit }, id) {
        try {
            console.log('removing update');
        } catch (error) {
            alert(error);
        }
    }
}

export default actions;
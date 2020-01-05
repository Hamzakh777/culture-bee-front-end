export default {
    methods: {
		/**
		 *
		 * @param {String} prop
		 * @param {*} value
		 */
        setStoreProp(prop, value) {
            const payload = {
                property: prop,
                with: value
            };

            this.mutate(payload);
        }
    }
};

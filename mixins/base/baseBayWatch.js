export default {
	methods: {
		/**
		 * @param {Array} props
		 * @param {Function} watcher
		 */
		bayWatch(props, watcher) {
			const iterator = prop => this.$watch(prop, watcher);

			// passing the context to the callback
			props.forEach(iterator, this);
		}
	}
};

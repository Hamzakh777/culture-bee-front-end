export default {
    data() {
        return {
            isLoading: false
        }
    },

    methods: {
        toggleLoader() {
            this.isLoading = !this.isLoading;
        }
    },
}

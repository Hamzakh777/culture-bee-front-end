<template>
    <div class="relative min-h-screen">
        <!-- employers  -->
        <div
            v-if="category === 'employers'"
        >
        <companie-card 

        />
        </div>
        <!-- update  -->
        <div
            v-else-if="category === 'updates'"
        >

        </div>
        <!-- jobs  -->
        <div
            v-else-if="category === 'jobs'"
        >

        </div>
        <!-- loader  -->
        <base-loader 
            v-if="isLoading"
        />
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import baseToggleLoaderMixin from '~/mixins/base/baseToggleLoaderMixin';
    import CompanieCard from '~/components/Companies/CompanieCard';
    import BaseLoader from '~/components/BaseComponents/BaseLoader';

    export default {
        name: 'SearchResults',

        mixins: [baseToggleLoaderMixin],

        components: {
            CompanieCard,
            BaseLoader
        },

        watch: {
            query() {
                this.handleQueryChange();
            }
        },

        computed: {
            ...mapState('search', ['category', 'query'])
        },

        mounted() {
            if(process.browser) {
                this.handleQueryChange();
            }
        },

        methods: {
            ...mapActions('search', ['fetchSearchResults']),

            async handleQueryChange() {
                this.toggleLoader();
                try {
                    await this.fetchSearchResults();
                } catch (error) {
                    console.error(error);
                } finally {
                    this.toggleLoader();
                }
            }
        }
    }
</script>

<template>
    <div class="relative min-h-screen">
        <!-- employers  -->
        <div
            class="flex flex-col md:flex-row md:justify-between flex-wrap"
            v-if="category === 'employers'"
        >
            <employer-card 
                v-for="(employer, index) in results"
                :key="index"
                :employer="employer"
                class="mb-12"
            />
        </div>
        <!-- update  -->
        <div
            v-else-if="category === 'updates'"
            class="flex flex-col md:flex-row md:justify-between flex-wrap"
        >
            <feed-card 
                v-for="(update, index) in results"
                :key="index"
                :update="update"
                class="w-46-%"
            />
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
    import { mapState } from 'vuex';
    import EmployerCard from '~/components/Companies/CompanieCard';
    import BaseLoader from '~/components/BaseComponents/BaseLoader';
    import FeedCard from '~/components/Feed/FeedCard';

    export default {
        name: 'SearchResults',

        components: {
            EmployerCard,
            BaseLoader,
            FeedCard
        },

        computed: {
            ...mapState('search', ['category', 'results', 'isLoading'])
        }
    }
</script>

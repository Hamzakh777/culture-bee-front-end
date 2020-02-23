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
            <job-card 
                v-for="(job, index) in results"
                :key="index"
                :job="job"
            />
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import EmployerCard from '~/components/Companies/CompanieCard';
    import FeedCard from '~/components/Feed/FeedCard';
    import JobCard from '~/components/Jobs/JobCard';

    export default {
        name: 'SearchResults',

        components: {
            EmployerCard,
            FeedCard,
            JobCard
        },

        computed: {
            ...mapState('search', ['category', 'results'])
        }
    }
</script>

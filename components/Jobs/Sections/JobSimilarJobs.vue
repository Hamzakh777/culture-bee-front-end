<template>
    <div class="py-6 bg-gallery">
        <div class="container mx-auto">
            <div class="section-title mb-8">
                similar jobs
            </div>
        </div>
        <div>
            <job-card />
        </div>
    </div>
</template>

<script>
    import JobCard from '~/components/Jobs/JobCard';

    export default {
        name: 'JobSimilarJobs',

        components: {
            JobCard
        }
    }
</script>

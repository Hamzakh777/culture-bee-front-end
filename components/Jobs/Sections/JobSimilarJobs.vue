<template>
    <div class="py-6 bg-gallery">
        <div class="container mx-auto">
            <div class="section-title">
                similar jobs
            </div>
            <div>
                <job-card />
            </div>
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

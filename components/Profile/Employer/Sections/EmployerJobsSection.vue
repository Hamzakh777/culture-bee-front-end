<template>
    <div class="py-18">
        <div class="container mx-auto">
            <div class="flex items-center justify-between">
                <div class="base-title">
                    latest jobs
                </div>
                <button
                    class="primary-btn"
                >
                    Edit jobs
                </button>
            </div>
            <!-- list of jobs -->
            <div class="mt-12">
                <job-card />
            </div>
        </div>
    </div>
</template>

<script>
    import JobCard from '~/components/Jobs/JobCard';

    export default {
        name: 'EmployerJobsSection',

        props: {
            isEditPage: {
                type: Boolean,
                required: true
            }
        },

        components: {
            JobCard
        }
    }
</script>
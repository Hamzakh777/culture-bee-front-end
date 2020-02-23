<template>
	<div id="jobs" class="py-10 md:py-18">
		<div class="container mx-auto">
			<div class="flex items-center justify-between">
				<div class="base-title">
					latest jobs
				</div>
				<!-- <button v-if="isEditPage" class="primary-btn">
					Edit jobs
				</button> -->
                <button 
                    v-if="isEditPage" 
                    class="primary-btn"
                    @click.prevent="$bus.$emit('open-post-job-modal')"
                >
					Add job
				</button>
			</div>
			<!-- list of jobs -->
			<div class="mt-12">
				<job-card 
                    v-for="(job, index) in jobs"
                    :key="index"
                    :job="job"
					:is-edit="isEditPage" 
                />
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import JobCard from '~/components/Jobs/JobCard';

export default {
	name: 'EmployerJobsSection',

	components: {
		JobCard
	},

	props: {
		isEditPage: {
			type: Boolean,
			required: false,
			default: false
		}
    },
    
    computed: {
        ...mapState('employer', ['id']),
        ...mapState('employer/jobs', ['jobs'])
    },

	async mounted() {
		if(process.browser) {
			try {
				await this.fetchJobs(this.id);
			} catch (error) {
				console.log(error);
			}
		}
    },

	methods: {
		...mapActions('employer/jobs', ['fetchJobs'])
	}
};
</script>

<template>
	<div>
		<div v-if="isLoadingUserData" class="relative h-screen">
			<base-loader />
		</div>
		<div v-else>
			<div class="py-16 bg-alabaster">
				<div class="flex justify-center container mx-auto">
					<jobs-filter />
				</div>
			</div>
			<div v-if="isLoading" class="relative h-screen w-screen">
				<base-loader />
			</div>
			<div class="container mx-auto py-16 min-h-screen">
				<job-card
					v-for="job in jobs"
					:key="job.id"
					:job="job"
					:isEdit="true"
				/>
			</div>
		</div>
		<!-- job post modal -->
		<job-post-modal />
	</div>
</template>

<script>
import { mapState } from 'vuex';
import BaseLoader from '~/components/BaseComponents/BaseLoader';
import JobsFilter from '~/components/Jobs/Filter/JobsFilter';
import JobPostModal from '~/components/Jobs/JobPostModal';
import JobCard from '~/components/Jobs/JobCard';

export default {
	components: {
		BaseLoader,
		JobsFilter,
		JobPostModal,
		JobCard
	},

	computed: {
		...mapState('employer/jobs/search', ['jobs', 'isLoading'])
	},

	data() {
		return {
			isLoadingUserData: false
		};
	}
};
</script>

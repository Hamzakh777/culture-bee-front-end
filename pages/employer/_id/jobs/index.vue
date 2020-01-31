<template>
	<div>
		<div v-if="isLoading" class="relative h-screen">
			<base-loader />
		</div>
		<div v-else>
			<div class="py-16 bg-alabaster">
				<div class="flex justify-center container mx-auto">
					<jobs-filter />
				</div>
			</div>
			<div class="py-16">
				
			</div>
		</div>
		<!-- job post modal -->
		<job-post-modal />
	</div>
</template>

<script>
import BaseLoader from '~/components/BaseComponents/BaseLoader';
import baseToggleLoaderMixin from '~/mixins/base/baseToggleLoaderMixin';
import JobsFilter from '~/components/Jobs/Filter/JobsFilter';
import JobPostModal from '~/components/Jobs/JobPostModal';

export default {
	mixins: [baseToggleLoaderMixin],

	components: {
		BaseLoader,
		JobsFilter,
		JobPostModal
	}
};
</script>

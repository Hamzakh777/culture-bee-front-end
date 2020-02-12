<template>
	<div>
		<div v-if="isLoading" class="relative h-screen">
			<base-loader />
		</div>
		<div v-else>
			<job-hero-section />
			<employer-values-section />
			<job-about />
			<job-skills-section />
			<employer-benefits-section />
			<employer-culture-feed />
			<!-- <job-similar-jobs /> -->
			<job-application-modal />
			<job-apply-authenticate />
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import JobSkillsSection from '~/components/Jobs/Sections/JobSkillsSection';
import JobAbout from '~/components/Jobs/Sections/JobAbout';
import JobHeroSection from '~/components/Jobs/Sections/JobHeroSection';
// import JobSimilarJobs from '~/components/Jobs/Sections/JobSimilarJobs';
import EmployerCultureFeed from '~/components/Profile/Employer/Sections/EmployerCultureFeed';
import EmployerBenefitsSection from '~/components/Profile/Employer/Sections/EmployerBenefitsSection';
import EmployerValuesSection from '~/components/Profile/Employer/Sections/EmployerValuesSection';
import baseToggleLoaderMixin from '~/mixins/base/baseToggleLoaderMixin';
import BaseLoader from '~/components/BaseComponents/BaseLoader';
import JobApplyAuthenticate from '~/components/Jobs/Application/Authentication';
import JobApplicationModal from '~/components/Jobs/Application/ApplicationModal';

export default {
	components: {
		JobSkillsSection,
		JobAbout,
		BaseLoader,
		EmployerCultureFeed,
		JobHeroSection,
		// JobSimilarJobs,
		EmployerBenefitsSection,
		EmployerValuesSection,
		JobApplyAuthenticate,
		JobApplicationModal
	},

	mixins: [baseToggleLoaderMixin],

	computed: {
		...mapState('job', ['userId'])
	},

	async created() {
		this.toggleLoader();
		try {
			await this.fetchJob(this.$route.params.id);
			await this.getProfileDetails(this.userId);
		} catch (error) {
			alert('An error happend trying to load company vision');
		}
		this.toggleLoader();
	},

	methods: {
		...mapActions('employer', ['getProfileDetails']),
		...mapActions('job', ['fetchJob'])
	}
};
</script>

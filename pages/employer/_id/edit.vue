<template>
	<div>
		<employer-hero :is-edit-page="true"/>
		<div class="container mx-auto py-10">
			<employer-account-progress />
		</div>
		<employer-profile-sections :is-edit-page="true" />
		<employer-edit-profile-modals /> 
		<job-post-modal />
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import EmployerHero from '~/components/Profile/Employer/EmployerHero';
import EmployerAccountProgress from '~/components/Profile/Employer/EmployerAccountProgress';
import EmployerEditProfileModals from '~/components/Profile/Employer/EmployerEditProfileModals';
import EmployerProfileSections from '~/components/Profile/Employer/EmployerProfileSections';
import JobPostModal from '~/components/Jobs/JobPostModal';

export default {
	components: {
		EmployerHero,
		EmployerAccountProgress,
		EmployerEditProfileModals,
		EmployerProfileSections,
		JobPostModal
	},

	created() {
		try {
			this.getProfileDetails(this.$route.params.id);
		} catch (error) {
			alert('An error happend trying to load company vision');
			console.error(error);
		}
	},

	methods: {
		...mapActions('employer', ['getProfileDetails'])
	},
};
</script>

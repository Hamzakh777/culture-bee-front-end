<template>
	<div>
		<employer-hero :is-edit-page="true"/>
		<div class="container mx-auto py-10">
			<employer-account-progress />
		</div>
		<employer-profile-sections :is-edit-page="true" />
		<employer-edit-profile-modals /> 
	</div>
</template>

<script>
import EmployerHero from '~/components/Profile/Employer/EmployerHero';
import EmployerAccountProgress from '~/components/Profile/Employer/EmployerAccountProgress';
import EmployerEditProfileModals from '~/components/Profile/Employer/EmployerEditProfileModals';
import EmployerProfileSections from '~/components/Profile/Employer/EmployerProfileSections';

export default {
	components: {
		EmployerHero,
		EmployerAccountProgress,
		EmployerEditProfileModals,
		EmployerProfileSections
	},

	mounted() {
		if(process.browser) {
			localStorage.setItem('access_token', 'lkashdflkjhasdklfjklasdjfklasjdlfasdf');
		}
	}
};
</script>

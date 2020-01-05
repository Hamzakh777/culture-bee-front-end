<template>
	<div>
		<employer-hero />
		<employer-profile-sections />
		<employer-edit-profile-modals /> 
	</div>
</template>

<script>
import EmployerHero from '~/components/Profile/Employer/EmployerHero';
import EmployerEditProfileModals from '~/components/Profile/Employer/EmployerEditProfileModals';
import EmployerProfileSections from '~/components/Profile/Employer/EmployerProfileSections';

export default {
	components: {
		EmployerHero,
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

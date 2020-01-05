<template>
	<div>
		<employer-hero :is-edit="false"/>
		<employer-profile-sections />
	</div>
</template>

<script>
import EmployerHero from '~/components/Profile/Employer/EmployerHero';
import EmployerProfileSections from '~/components/Profile/Employer/EmployerProfileSections';

export default {
	components: {
		EmployerHero,
		EmployerProfileSections
	},

	mounted() {
		if(process.browser) {
			localStorage.setItem('access_token', 'lkashdflkjhasdklfjklasdjfklasjdlfasdf');
		}
	}
};
</script>

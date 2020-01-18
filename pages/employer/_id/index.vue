<template>
	<div>
		<employer-hero :is-edit-page="false"/>
		<employer-profile-sections />
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import EmployerHero from '~/components/Profile/Employer/EmployerHero';
import EmployerProfileSections from '~/components/Profile/Employer/EmployerProfileSections';

export default {
	components: {
		EmployerHero,
		EmployerProfileSections
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

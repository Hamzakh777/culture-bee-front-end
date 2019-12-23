<template>
	<div>
		<employer-hero />
		<div class="container mx-auto py-10">
			<employer-account-progress />
		</div>
		<employer-edit-profile-modals /> 
	</div>
</template>

<script>
import EmployerHero from '~/components/Profile/Employer/EmployerHero';
import EmployerAccountProgress from '~/components/Profile/Employer/EmployerAccountProgress';
import EmployerEditProfileModals from '~/components/Profile/Employer/EmployerEditProfileModals';

export default {
	components: {
		EmployerHero,
		EmployerAccountProgress,
		EmployerEditProfileModals
	}
};
</script>

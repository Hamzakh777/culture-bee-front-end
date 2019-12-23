<template>
	<div>
		<employer-hero />
		<div class="container mx-auto py-10">
			<employer-account-progress />
		</div>
	</div>
</template>

<script>
import EmployerHero from '~/components/Profile/Employer/EmployerHero';
import EmployerAccountProgress from '~/components/Profile/Employer/EmployerAccountProgress';

export default {
	components: {
		EmployerHero,
		EmployerAccountProgress
	}
};
</script>

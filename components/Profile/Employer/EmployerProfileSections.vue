<template>
	<div>
		<employer-values-section   />
		<employer-company-vision-section   />
		<employer-culture-feed   />
		<employer-why-us-section   />
		<employer-benefits-section   />
		<employer-jobs-section  />
	</div>
</template>

<script>
import {mapState} from 'vuex';
import EmployerValuesSection from './Sections/EmployerValuesSection';
import EmployerCompanyVisionSection from './Sections/EmployerCompanyVisionSection';
import EmployerCultureFeed from './Sections/EmployerCultureFeed';
import EmployerWhyUsSection from './Sections/EmployerWhyUsSection';
import EmployerBenefitsSection from './Sections/EmployerBenefitsSection';
import EmployerJobsSection from './Sections/EmployerJobsSection';

export default {
	name: 'EmployerProfileSections',

	components: {
		EmployerValuesSection,
		EmployerCompanyVisionSection,
		EmployerCultureFeed,
		EmployerWhyUsSection,
		EmployerBenefitsSection,
		EmployerJobsSection
	},

	computed: {
		...mapState('employe'
};
</script>

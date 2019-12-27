<template>
	<div>
		<employer-values-section v-if="currentProfileCreationStep >= 2" />
		<employer-company-vision-section v-if="currentProfileCreationStep >= 3" />
		<employer-culture-feed v-if="currentProfileCreationStep >= 4" />
		<employer-why-us-section v-if="currentProfileCreationStep >= 5" />
		<employer-benefits-section v-if="currentProfileCreationStep >= 6" />
		<employer-jobs-section v-if="currentProfileCreationStep === 'done'" />
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
		...mapState('employer', ['currentProfileCreationStep'])
	}
};
</script>

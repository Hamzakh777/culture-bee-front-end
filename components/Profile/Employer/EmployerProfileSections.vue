<template>
	<div>
		<employer-values-section :is-edit-page="isEditPage" />
		<employer-sections-links v-if="!isEditPage" />
		<employer-company-vision-section :is-edit-page="isEditPage" />
		<employer-culture-feed  :is-edit-page="isEditPage" />
		<employer-why-us-section  :is-edit-page="isEditPage" />
		<employer-benefits-section :is-edit-page="isEditPage" />
		<employer-jobs-section  :is-edit-page="isEditPage" />
	</div>
</template>

<script>
import { mapState } from 'vuex';
import EmployerValuesSection from './Sections/EmployerValuesSection';
import EmployerCompanyVisionSection from './Sections/EmployerCompanyVisionSection';
import EmployerCultureFeed from './Sections/EmployerCultureFeed';
import EmployerWhyUsSection from './Sections/EmployerWhyUsSection';
import EmployerBenefitsSection from './Sections/EmployerBenefitsSection';
import EmployerJobsSection from './Sections/EmployerJobsSection';
import EmployerSectionsLinks from './EmployerSectionsLinks';

export default {
	name: 'EmployerProfileSections',

	props: {
		isEditPage: {
			type: Boolean,
			required: false,
			default: false
		}
	},

	components: {
		EmployerValuesSection,
		EmployerCompanyVisionSection,
		EmployerCultureFeed,
		EmployerWhyUsSection,
		EmployerBenefitsSection,
		EmployerJobsSection,
		EmployerSectionsLinks
	},

	computed: {
		...mapState('employer', ['currentProfileCreationStep'])
	}
};
</script>

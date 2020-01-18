<template>
	<div>
		<employer-values-section v-if="currentProfileCreationStep === 1" :is-edit-page="isEditPage" />
		<employer-sections-links v-if="!isEditPage" />
		<employer-company-vision-section v-if="currentProfileCreationStep === 2"  :is-edit-page="isEditPage" />
		<employer-culture-feed v-if="currentProfileCreationStep === 3" :is-edit-page="isEditPage" />
		<employer-why-us-section v-if="currentProfileCreationStep === 4" :is-edit-page="isEditPage" />
		<employer-benefits-section v-if="currentProfileCreationStep === 5" :is-edit-page="isEditPage" />
		<employer-jobs-section v-if="currentProfileCreationStep === 6" :is-edit-page="isEditPage" />
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

	watch: {
		/**
		 * When id updates show the sections
		 */
		id(newVal) {
			if(newVal !== null && newVal !== undefined) this.fetchData();
		} 
	},

	computed: {
		...mapState('account', ['id', 'currentProfileCreationStep'])
	},

	methods: {
		fetchData() {
			// fetch the data for all teh sections
		}
	},
};
</script>

<template>
	<div>
		<edit-values-modal />
		<edit-company-vision-modal />
		<add-benefits-modal />
		<edit-why-us-modal />
		<edit-intro-modal />
	</div>
</template>

<script>
import EditValuesModal from './EditModals/EditValuesModal';
import EditCompanyVisionModal from './EditModals/EditCompanyVisionModal';
import AddBenefitsModal from './EditModals/AddBenefitsModal';
import EditWhyUsModal from './EditModals/EditWhyUsModal';
import EditIntroModal from './EditModals/EditIntroModal';

export default {
	name: 'EmployerEditProfileModals',

	components: {
		EditValuesModal,
		EditCompanyVisionModal,
		AddBenefitsModal,
		EditWhyUsModal,
		EditIntroModal
	}
};
</script>

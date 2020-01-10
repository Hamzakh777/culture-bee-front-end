<template>
	<div>
		<edit-values-modal />
		<edit-company-vision-modal />
		<add-benefits-modal />
		<edit-benefit-modal />
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
import EditBenefitModal from './EditModals/EditBenefitModal';

export default {
	name: 'EmployerEditProfileModals',

	components: {
		EditValuesModal,
		EditCompanyVisionModal,
		AddBenefitsModal,
		EditWhyUsModal,
		EditIntroModal,
		EditBenefitModal
	}
};
</script>

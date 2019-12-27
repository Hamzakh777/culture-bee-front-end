<template>
    <div>
        <edit-values-modal />
        <edit-company-vision-modal />
        <edit-benefits-modal />
        <edit-why-us-modal />
        <edit-intro-modal />
    </div>
</template>

<script>
    import EditValuesModal from './EditModals/EditValuesModal';
    import EditCompanyVisionModal from './EditModals/EditCompanyVisionModal';
    import EditBenefitsModal from './EditModals/EditBenefitsModal';
    import EditWhyUsModal from './EditModals/EditWhyUsModal';
    import EditIntroModal from './EditModals/EditIntroModal';

    export default {
        name: 'EmployerEditProfileModals',

        components: {
            EditValuesModal,
            EditCompanyVisionModal,
            EditBenefitsModal,
            EditWhyUsModal,
            EditIntroModal
        }
    }
</script>
<template>
    <div>
        <edit-values-modal />
        <edit-company-vison-modal />
        <edit-benefits-modal />
        <edit-why-us-modal />
    </div>
</template>

<script>
    import EditValuesModal from './EditModals/EditValuesModal';
    import EditCompanyVisonModal from './EditModals/EditCompanyVisonModal';
    import EditBenefitsModal from './EditModals/EditBenefitsModal';
    import EditWhyUsModal from './EditModals/EditWhyUsModal';

    export default {
        name: 'EmployerEditProfileModals',

        components: {
            EditValuesModal,
            EditCompanyVisonModal,
            EditBenefitsModal,
            EditWhyUsModal
        }
    }
</script>
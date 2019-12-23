<template>
    <div>
        <edit-values-modal />
        <edit-company-vison-modal />
        <edit-benefits-modal />
    </div>
</template>

<script>
    import EditValuesModal from './EditModals/EditValuesModal';
    import EditCompanyVisonModal from './EditModals/EditCompanyVisonModal';
    import EditBenefitsModal from './EditModals/EditBenefitsModal';

    export default {
        name: 'EmployerEditProfileModals',

        components: {
            EditValuesModal,
            EditCompanyVisonModal,
            EditBenefitsModal
        }
    }
</script>
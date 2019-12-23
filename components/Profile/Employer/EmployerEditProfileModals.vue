<template>
    <div>
        <edit-values-modal />
        <edit-company-vison-modal />
    </div>
</template>

<script>
    import EditValuesModal from './EditModals/EditValuesModal';
    import EditCompanyVisonModal from './EditModals/EditCompanyVisonModal';

    export default {
        name: 'EmployerEditProfileModals',

        components: {
            EditValuesModal,
            EditCompanyVisonModal
        }
    }
</script>
<template>
    <div>
        <employer-values-section />
        <employer-company-vision-section />
    </div>
</template>

<script>
    import EmployerValuesSection from './Sections/EmployerValuesSection';
    import EmployerCompanyVisionSection from './Sections/EmployerCompanyVisionSection';

    export default {
        name: 'EmployerProfileSections',

        components: {
            EmployerValuesSection,
            EmployerCompanyVisionSection
        }
    }
</script>
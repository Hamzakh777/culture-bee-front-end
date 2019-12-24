<template>
    <div>
        <employer-values-section />
        <employer-company-vision-section />
        <employer-culture-feed />
        <employer-why-us-section />
    </div>
</template>

<script>
    import EmployerValuesSection from './Sections/EmployerValuesSection';
    import EmployerCompanyVisionSection from './Sections/EmployerCompanyVisionSection';
    import EmployerCultureFeed from './Sections/EmployerCultureFeed';
    import EmployerWhyUsSection from './Sections/EmployerWhyUsSection';

    export default {
        name: 'EmployerProfileSections',

        components: {
            EmployerValuesSection,
            EmployerCompanyVisionSection,
            EmployerCultureFeed,
            EmployerWhyUsSection
        }
    }
</script>
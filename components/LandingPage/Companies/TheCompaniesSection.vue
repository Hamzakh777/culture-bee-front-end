<template>
    <BaseSection
        class="bg-gray-to-black"
        title="companies you'll love"
        btn-text="View all"
        :is-title-light="true"
    >
        <div class="container mx-auto">
            <!-- slider  -->
            <div>
                <companie-card class="w-31-%"/>
            </div>
        </div>
    </BaseSection>
</template>

<script>
    import CompanieCard from './CompanieCard';
    import BaseSection from '~/components/BaseComponents/BaseSection';
    
    export default {
        name: 'TheCompaniesSection',

        components: {
            CompanieCard,
            BaseSection
        },

        data() {
            return {
                companies: []
            }
        },
    }
</script>
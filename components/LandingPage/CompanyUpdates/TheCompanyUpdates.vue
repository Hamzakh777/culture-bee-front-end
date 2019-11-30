<template>
    <BaseSection
        class="pt-0"
        title="Company updates"
        btn-text="View all"
        :is-title-light="false"
    >
        <div class="container mx-auto">
            updates for the companies we follow
        </div>
    </BaseSection>
</template>

<script>
    import BaseSection from '~/components/BaseComponents/BaseSection';
    
    export default {
        name: 'TheCompanyUpdates',

        components: {
            BaseSection
        }
    }
</script>
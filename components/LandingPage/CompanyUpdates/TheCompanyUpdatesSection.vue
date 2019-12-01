<template>
    <BaseSection
        class="pt-0"
        title="Company updates"
        btn-text="View all"
        :is-title-light="false"
    >
        <div class="flex container mx-auto">
            updates for the companies we follow
            <div class="w-1/2 pr-8">
                
            </div>
            <div class="flex w-1/2">
                <div class="">

                </div>
            </div>
        </div>

    </BaseSection>
</template>

<script>
    import BaseSection from '~/components/BaseComponents/BaseSection';
    
    export default {
        name: 'TheCompanyUpdatesSection',

        components: {
            BaseSection
        }
    }
</script>
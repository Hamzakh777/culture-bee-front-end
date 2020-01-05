<template>
    <div class="py-18 bg-gray-800" id="benefits">
        <div class="container mx-auto">
            <div class="base-title-light">
                Benefits
            </div>
            <div class="flex justify-between flex-wrap mt-12">
                <benefit-card />
            </div>
        </div>
    </div>
</template>

<script>
    import BenefitCard from '../BenefitCard';

    export default {
        name: 'EmployerBenefitsSection',

        props: {
            isEditPage: {
                type: Boolean,
                required: true
            }
        },

        components: {
            BenefitCard
        }
    }
</script>
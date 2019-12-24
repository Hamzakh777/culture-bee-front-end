<template>
    <div class="flex flex-col justify-between h-118 w-31-% bg-gray-100">
        <div class="mt-6 mr-6">
            <base-close-button 
                @click="$emit('remove-the-benefit')"
            />
        </div>
        <div>
            <div class="">
                Breakfat
            </div>
        </div>
    </div>
</template>

<script>
    import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';

    export default {
        name: 'BenefitCard',
        
        components: {
            BaseCloseButton
        }
    }
</script>
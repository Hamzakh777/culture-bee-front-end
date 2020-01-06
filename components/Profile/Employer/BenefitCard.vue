<template>
    <div class="relative h-118 w-31-% bg-gray-200 bg-center bg-cover bg-no-repeat">
        <div class="flex flex-col justify-between relative z-1 h-full w-full">
            <div 
                v-if="isEditPage"
                class="flex justify-end mt-6 mr-6"
            >
                <!-- emit the id too -->
                <base-edit-pen 
                    class="h-9 w-9 mr-4 bg-gray-800 text-white hover:text-yellow text-yello"
                    :pen-class-list="['h-5', 'top-1/2', 'left-1/2', 'transform-center']"
                    @click="$emit('edit-benefit')"
                />
                <base-close-button 
                    @click="$emit('remove-the-benefit')"
                />
            </div>
            <div v-else></div>
            <div class="px-8 py-10 text-white">
                <!-- title -->
                <div class="font-D-Din text-5xl font-bold uppercase">
                    Breakfast
                </div>
                <!-- subtitle -->
                <div class="text-5-1/2 font-bold">
                    A mix of cereals, pastry and fruits available
                </div>
            </div>
        </div>
        <div class="absolute inset-0 bg-transparent-to-black opacity-75">

        </div>
    </div>
</template>

<script>
    import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';
    import BaseEditPen from '~/components/BaseComponents/BaseEditPen';

    export default {
        name: 'BenefitCard',

        props: {
            isEditPage: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        
        components: {
            BaseCloseButton,
            BaseEditPen
        }
    }
</script>
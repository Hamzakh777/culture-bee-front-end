<template>
    <div class="py-18 bg-gray-100">
        <div class="container mx-auto">
            <div class="flex justify-between mx-auto">
                <div class="base-title">Company vision</div>
                <div class="max-w-4xl px-8 text-gray-800">
                    <!-- company tagline -->
                    <div class="mb-6 text-10-1/2 font-bold">
                        {{ companyTagline }}
                    </div>
                    <!-- company ethos -->
                    <div class="text-base font-normal">
                        {{companyEthos }}
                    </div>
                </div>
                <!-- edit button -->
                <base-edit-pen
                    @click="$emit('open-the-modal-for-this-part')"
                    class="ml-16 text-gray-800 hover:text-yellow"
                />
            </div>
            <div class="flex items-stretch justify-between mt-16">
                <core-value-card 
                    v-for="(coreValue, index) in coreValues"
                    :key="index"
                    :value="coreValue"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import CoreValueCard from '../CoreValueCard';
    import BaseEditPen from '~/components/BaseComponents/BaseEditPen';

    export default {
        name: 'EmployerWhyUsSection',

        components: {
            BaseEditPen,
            CoreValueCard
        },

        computed: {
            ...mapState('employer', ['companyTagline', 'companyEthos', 'coreValues'])
        }
    }
</script>
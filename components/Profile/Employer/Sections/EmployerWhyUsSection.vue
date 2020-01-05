<template>
    <div class="py-18 bg-gray-100" id="why-us">
        <div class="container mx-auto">
            <div class="flex justify-between mx-auto">
                <div class="base-title">Why us</div>
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
                <div class="ml-16">
                    <base-edit-pen
                        v-if="isEditPage"
                        @click="$emit('open-the-modal-for-this-part')"
                        class="text-gray-800 hover:text-yellow"
                    />
                </div>
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

        props: {
            isEditPage: {
                type: Boolean,
                required: true
            }
        },

        components: {
            BaseEditPen,
            CoreValueCard
        },

        computed: {
            ...mapState('employer', ['companyTagline', 'companyEthos', 'coreValues'])
        }
    }
</script>
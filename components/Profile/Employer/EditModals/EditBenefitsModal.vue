<template>
    <base-modal 
        :is-active="isActive"
        @close="toggle"
    >
        <template #title>
            add benefits
        </template>
        <template #content>
            <div class="mb-8">
                <div class="base-title mb-4">
                    Summary
                </div>
                <input 
                    class="input-text w-full"
                    placeholder="Type a benefit in here"
                    type="text"
                >   
            </div>
            <div class="mb-8">
                <div class="base-title mb-4">
                    Subheading
                </div>
                <textarea 
                    class="input-text w-full h-42 py-3-1/2 resize-none"
                    placeholder="Enter up to 75 characters"
                    maxlength="75"
                >
                </textarea>
            </div>

            <!-- upload -->
            <div class="flex justify-between items-end mb-10">
                <div class="flex items-center">
                    <div class="base-title mr-16">upload</div>
                    <label>
                        <img src="/profile/employer/camera.svg">
                    </label>
                </div>
                <div class="h-25 w-25 bg-gray-200">

                </div>
            </div>

            <!-- buttons -->
            <div class="flex justify-between items-center">
                <div class="flex">
                    <div
                        class="h-3 w-3 rounded-full mr-2 cursor-pointer"
                        :class="{'bg-gray-800': i !== currentActiveBenefit, 'bg-yellow': i === currentActiveBenefit}"
                        v-for="i in 6"
                        :key="i"
                        @click="switchActiveBenefit(i)"
                    >
                    </div>
                </div>
                <div class="flex items-center">
                    <button
                        class="secondary-btn mr-14"
                    >
                        skip
                    </button>
                    <base-ajax-button
                        :is-loading="isLoading"
                        @click="submit"
                    >
                        Save
                    </base-ajax-button>
                </div>
            </div>
        </template>
    </base-modal>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    import BaseModal from '~/components/BaseComponents/BaseModal';
    import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';

    export default {
        name: 'EditBenefitsModal',

        components: {
            BaseModal,
            BaseAjaxButton
        },

        computed: {
            ...mapState('employer', ['benefits'])
        },

        data() {
            return {
                isActive: false,
                isLoading: false,
                currentActiveBenefit: 1 // the benefit being edited
            }
        },

        created() {
            this.$bus.$on('open-employer-benefits-modal', () => {
                this.toggle();
            });
        },

        methods: {
            ...mapMutations('employer', ['nextStep']),

            toggle() {
                this.isActive = !this.isActive;
            },

            switchActiveBenefit(num) {
                this.currentActiveBenefit = num;
            },

            submit() {
                this.toggle();
                this.nextStep();
            }
        }
    }
</script>
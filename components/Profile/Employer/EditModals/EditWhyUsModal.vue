<template>
    <base-modal 
        :is-active="isActive"
        @close="toggle"
    >
        <template #title>
            why us
        </template>
        <template #content>
            <!-- first step -->
            <div>
                <div class="flex justify-between">
                    <div class="base-title mb-3">
                        company tagline
                    </div>
                    <img class="w-6" src="/logo-small.svg">
                </div>
                <input 
                    class="input-text w-full mb-8" 
                    placeholder="Type a keyword in here"
                    type="text"
                >
                <div class="base-title mb-3">
                    company tagline
                </div>
                <textarea
                    class="input-text w-full h-48 py-3 resize-none"
                    placeholder="You can type up to 250 characters here"

                >
                </textarea>
            </div>
            <div class="flex justify-end">
                <base-ajax-button
                    :is-loading="isLoading"
                    @click="next"
                >
                    Next
                </base-ajax-button>
            </div>
        </template>
    </base-modal>
</template>

<script>
    import { mapState } from 'vuex';
    import BaseModal from '~/components/BaseComponents/BaseModal';
    import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';

    export default {
        name: 'EditWhyUsModal',

        components: {
            BaseModal,
            BaseAjaxButton
        },

        computed: {
            ...mapState('employer', ['companyTagline', 'companyEthos'])
        },

        data() {
            return {
                isActive: false,
                isLoading: false,
                currentStep: 1,
                totalSteps: 4
            }
        },

        created() {
            this.$bus.$on('open-employer-why-us-modal', () => {
                this.isActive = true;
            });
        },

        methods: {
            next() {
                console.log('next');
            },
            toggle() {
                this.isActive = !this.isActive;
            },

            submit() {
                this.toggle();
                this.nextStep();
            }
        }
    }
</script>
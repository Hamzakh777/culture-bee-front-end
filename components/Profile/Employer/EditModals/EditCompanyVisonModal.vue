<template>
    <base-modal 
        :is-active="isActive"
        @close="toggle"
    >
        <template #title>
            company vision
        </template>
        <template #content>
            <div class="base-title mb-4">
                Summary
            </div>
            <div>
                <textarea 
                    class="input-text resize-none w-full h-94 mb-8 py-6 px-6 text-sm font-semibold font-poppins"
                >
                </textarea>
            </div>
            <div class="flex justify-end">
                <base-ajax-button
                    :is-loading="isLoading"
                >
                    Add to profile
                </base-ajax-button>
            </div>
        </template>
    </base-modal>
</template>

<script>
    import {mapState} from 'vuex';
    import BaseModal from '~/components/BaseComponents/BaseModal';
    import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
    import EventBus from '~/_utils/Eventbus';

    export default {
        name: 'EditCompanyVisonModal',

        components: {
            BaseModal,
            BaseAjaxButton
        },

        computed: {
            ...mapState('employer', ['companyVision'])
        },

        data() {
            return {
                isLoading: false,
                isActive: false
            }
        },

        mounted() {
            EventBus.$on('open-employer-company-vision-modal', () => {
                this.toggle();
            });
        },

        methods: {
            toggle() {
                this.isActive = !this.isActive;
            }
        }
    }
</script>
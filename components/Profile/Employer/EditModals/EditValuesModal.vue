<template>
    <base-modal 
        :is-active.sync="isActive"
    >
        <template #title>
            Add values
        </template>
        <template #content>
            <div class="base-title">
                what does your company believe in?
            </div>
            <div>

            </div>
            <div class="flex justify-end">
                <base-ajax-button>
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
        name: 'EditValuesModal',

        components: {
            BaseModal,
            BaseAjaxButton
        },

        computed: {
            ...mapState('')
        },

        data() {
            return {
                isActive: true
            }
        },

        mounted() {
            EventBus.$on('open-employer-values-modal', () => {
                this.isActive = true;
            });
        }
    }
</script>
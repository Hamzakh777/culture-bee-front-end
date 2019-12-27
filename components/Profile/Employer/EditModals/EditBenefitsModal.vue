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
            <div class="flex justify-between">
                <div class="">
                    
                </div>
                <div>
                    <base-ajax-button
                        :is-loading="isLoading"
                    >
                        Add to profile
                    </base-ajax-button>
                </div>
            </div>
        </template>
    </base-modal>
</template>

<script>
    import { mapState } from 'vuex';
    import BaseModal from '~/components/BaseComponents/BaseModal';
    import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
    import EventBus from '~/_utils/Eventbus';

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
                isLoading: false
            }
        },

        mounted() {
            EventBus.$on('open-employer-benefits-modal', () => {
                this.toggle()
            });
        },

        methods: {
		toggle() {
			this.isActive = !this.isActive;
		}
	}
    }
</script>
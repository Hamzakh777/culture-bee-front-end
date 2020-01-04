<template>
    <base-modal
        :is-active="isActive"
        @close="toggle"
    >
        <template #title>
            Post update
        </template>
        <template #content>
            <div class="base-title mb-4">
                Share a snapshot of your culture
            </div>
            <div class="relative h-84 mt-8 mb-8 p-6 border-2 border-gray-800">
                <base-tip-box   
                    class="right-0 top-0 z-1 mt-4 mr-4"
                    title="Tip"
                    description="Remeber to keep it real"
                />
                <textarea 
                    class="input-text w-full h-full px-0 border-none text-base resize-none"
                    placeholder="Start typing"
                >

                </textarea>
            </div>
            <!-- tags -->
            <div
                class="flex items-center my-8"
            >
                <div class="base-title">
                    Share a snapshot of your culture
                </div>
                <!-- selected tags -->
                <BaseSelectedOption>
                    asdlkfj;ajdflja;dsf
                </BaseSelectedOption>
            </div>
            <!-- bottom -->
            <div
                class="relative"
            >
                <div class="absolute top-0 left-1/2 -transform-x-50 w-screen border-t-2 border-gray-800"></div>
            </div>
        </template>
    </base-modal>
</template>

<script>
    import BaseModal from '~/components/BaseComponents/BaseModal';
    import BaseTipBox from '~/components/BaseComponents/BaseTipBox';
    import BaseSelectedOption from '~/components/BaseComponents/BaseSelectedOption';

    export default {
        name: 'CompanyUpdateModal',

        components: {
            BaseModal,
            BaseTipBox
        },

        data() {
            return {
                isActive: true
            }
        },


        created() {
            this.$bus.$on('open-post-company-update-modal', () => {
                this.toggle();
            });
        },

        methods: {
            toggle() {
                this.isActive = !this.isActive;
            },
        }
    }
</script>
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
            <div class="upload flex justify-between items-end mb-10">
                <div class="flex items-center">
                    <div class="base-title mr-16">upload</div>
                    <client-only>
                        <file-upload
                            extensions="jpg,jpeg,png"
                            accept="image/png,image/jpeg,image/jpg"
                            :multiple="false"
                            :size="1024 * 1024"
                            @input-filter="inputFilter"
                            @input-file="inputFile"
                        >
                            <img 
                                class="cursor-pointer hover:opacity-75 transition-all"
                                src="/profile/employer/camera.svg"
                            >
                        </file-upload>
                    </client-only>
                </div>
                <!-- the uploaded image -->
                <div 
                    class="relative h-25 w-25 bg-center bg-cover bg-gray-300"
                >
                    <base-close-button
                        class="top-0 right-0 mt-2 mr-2"
                        style="position: absolute; height: 1.25rem; width: 1.25rem"
                    />
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
    import FileUpload from 'vue-upload-component';
    import BaseModal from '~/components/BaseComponents/BaseModal';
    import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
    import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';

    export default {
        name: 'EditBenefitsModal',

        components: {
            BaseModal,
            BaseAjaxButton,
            FileUpload,
            BaseCloseButton
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

            inputFile(newFile, oldFile, prevent) {
                if (newFile && !oldFile) {
                    
                }
                if (!newFile && oldFile) {
                    
                }
            },

            inputFilter(newFile, oldFile, prevent) {
                if (newFile && !oldFile) {
                    if (!/\.(jpg|jpeg|png)$/i.test(newFile.name)) {
                        this.alert('Your choice is not a picture');
                        return prevent();
                    }
                }
                if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
                    newFile.url = '';
                    const URL = window.URL || window.webkitURL;

                    if (URL && URL.createObjectURL) {
                        newFile.url = URL.createObjectURL(newFile.file);
                    }
                }
            },

            remveFile() {

            },

            submit() {
                this.toggle();
                this.nextStep();
            }
        }
    }
</script>
<style scoped>
.upload >>> .file-uploads {
    @apply cursor-pointer;
}
</style>
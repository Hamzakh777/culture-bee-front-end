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
                    description="Remember to keep it real"
                />
                <!-- selected img -->
                <div
                    v-if="img !== null"
                    class="absolute bottom-0 left-0 h-26 w-26 mb-5 ml-5 bg-center bg-cover"
                    :style="`background-image: url(${img.url})`"
                >
                    <base-close-button 
                        class="right-0 top-0 mt-2 mr-2"
                        style="position: absolute; width: 1.25rem; height: 1.25rem;"
                        @click="removeImg"
                    />
                </div>
                <textarea 
                    class="input-text w-full h-full px-0 border-none text-base resize-none"
                    placeholder="Start typing"
                >

                </textarea>
            </div>
            <!-- tags -->
            <div
                class="flex items-center justify-between my-8"
            >
                <div class="flex">
                    <div class="base-title mr-6 mt-2">
                        add tags
                    </div>
                    <div class="flex flex-row items-center flex-wrap">
                        <!-- selected tags -->
                        <base-selected-option
                            class="mb-4 mr-6"
                            v-for="(tag, index) in selectedTags"
                            :key="index"
                            @remove="removeTag(index)"
                        >
                            {{ tag }}
                        </base-selected-option>
                        <!-- tags select input -->
                        <tag-select 
                            :options="tags"
                            placeholder="add tag"
                            v-model="selectedTags"
                        />
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <div class="base-title mr-6">
                        pin update
                    </div>
                    <base-pin-button 
                        :pinned.sync="pin"
                    />
                </div>
            </div>
            <!-- bottom -->
            <div
                class="relative pt-6"
            >
                <div class="absolute top-0 left-1/2 -transform-x-50 w-screen border-t-2 border-gray-800"></div>
                <div class="flex justify-between items-center">
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

                    <!-- submit button  -->
                    <base-ajax-button
                        :is-loading="isLoading"
                        @click="submit"
                    >
                        Post update
                    </base-ajax-button>
                </div>
            </div>
        </template>
    </base-modal>
</template>

<script>
    import FileUpload from 'vue-upload-component';
    import TagSelect from './TagSelect';
    import BaseModal from '~/components/BaseComponents/BaseModal';
    import BaseTipBox from '~/components/BaseComponents/BaseTipBox';
    import BaseSelectedOption from '~/components/BaseComponents/BaseSelectedOption';
    import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
    import BasePinButton from '~/components/BaseComponents/BasePinButton';
    import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';

    export default {
        name: 'CompanyUpdateModal',

        components: {
            BaseModal,
            BaseTipBox,
            BaseSelectedOption,
            TagSelect,
            BaseAjaxButton,
            FileUpload,
            BasePinButton,
            BaseCloseButton
        },

        data() {
            return {
                isActive: false,
                tags: [
                    'Volunteer',
                    'Finance',
                    'CSR',
                    'Energy',
                    'IT & Computing',
                    'Networking'
                ],
                pin: false,
                isLoading: false,
                selectedTags: [],
                img: null
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

            submit() {

            },

            inputFile(newFile, oldFile, prevent) {
                if (newFile && !oldFile) {
                    // add
                    this.img = newFile;
                }
                if (!newFile && oldFile) {
                    // remove
                    this.img = newFile;
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

            removeTag(indexToRemove) {
                this.selectedTags = this.selectedTags.filter((tag, index) => index !== indexToRemove);
            },

            removeImg() {
                this.img = null;
            },
        }
    }
</script>
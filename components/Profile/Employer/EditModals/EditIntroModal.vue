<template>
	<base-modal :is-active.sync="isActive" :is-light="true">
		<template #title>Edit intro</template>
		<template #content>
			<!-- cover img and logo -->
			<div class>
				<div class="absolute top-0 left-1/2 -transform-x-50 h-47-1/2 w-full">
					<div
						:style="
							coverPhotoUrl
								? `background-image: url(${coverPhotoUrl})`
								: 'background-color: #000'
						"
						class="absolute inset-0 left-1/2 -transform-x-50 w-full bg-cover bg-center"
					></div>
                    <client-only>
                        <file-upload
                            class="absolute h-4 w-4 top-0 right-0 mr-10 mt-10 text-white"
                            extensions="gif,jpg,jpeg,png,webp"
                            accept="image/png,image/gif,image/jpeg,image/webp"
                            name="avatar"
                            v-model="files"
                            @input-file="inputFile"
                            ref="upload"
                        >
                            <base-edit-pen 
                                class="top-0 right-0 mr-10 mt-10 text-white"
                                style="position: absolute"
                            />
                        </file-upload>
                    </client-only>
				</div>
                <div class="relative z-1 flex items-end mt-17 mb-6">
                    <div class="flex items-center justify-center h-34 w-34 p-4 bg-white shadow-md">
                        <img v-if="companyLogoUrl" :src="companyLogoUrl" alt="">
                    </div>
                    <client-only>
                        <file-upload
                            class="relative ml-4 font-medium text-gray-800 cursor-pointer underline"
                            extensions="gif,jpg,jpeg,png,webp"
                            accept="image/png,image/gif,image/jpeg,image/webp"
                            name="avatar"
                            v-model="files"
                            @input-file="inputFile"
                            ref="upload"
                        >
                            <span class="cursor-pointer"></span>
                            Upload your profile photo
                        </file-upload>
                    </client-only>
                </div>
			</div>
            <!-- form -->
			<div>
                <!-- name -->
                <div class="mb-6">
                    <label class="input-label block">Name</label>
                    <input class="input-text w-full" type="text">
                </div>
                <!-- companyName -->
                <div class="mb-6"> 
                    <label class="input-label block">Company name</label>
                    <input class="input-text w-full" type="text">
                </div>
                <!-- quick pitch -->
                <div class="mb-6">
                    <label class="input-label block">Quick pitch</label>
                    <input class="input-text w-full" type="text">
                </div>
                <!-- location -->
                <div class="mb-6">
                    <label class="input-label block">Location</label>
                    <input class="input-text w-full" type="text">
                </div>
            </div>
			<div class="flex justify-end">
				<base-ajax-button :is-loading="isLoading">Add to profile</base-ajax-button>
			</div>
		</template>
	</base-modal>
</template>

<script>
import { mapState } from 'vuex';
import FileUpload from 'vue-upload-component';
import BaseModal from '~/components/BaseComponents/BaseModal';
import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
import EventBus from '~/_utils/Eventbus';
import BaseEditPen from '~/components/BaseComponents/BaseEditPen';

export default {
    name: 'EditIntroModal',


	components: {
		BaseModal,
        BaseAjaxButton,
        BaseEditPen,
        FileUpload
	},

	computed: {
		...mapState('employer', ['coverPhotoUrl', 'companyLogoUrl'])
	},

	data() {
		return {
			isLoading: false,
            isActive: false,
            files: []
		};
	},

	mounted() {
		EventBus.$on('open-employer-intro-modal', () => {
			this.isActive = true;
		});
    },
    
    methods: {
        inputFile(newFile, oldFile) {
            if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
                newFile.url = ''
                const URL = window.URL || window.webkitURL;
                if (URL && URL.createObjectURL) {
                    newFile.url = URL.createObjectURL(newFile.file);
                }
                this.files.push(newFile);
            }
        }
    }
};
</script>


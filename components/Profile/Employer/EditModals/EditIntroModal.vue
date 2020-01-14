<template>
	<base-modal 
        :is-active="isActive" 
        :is-light="true"
        @close="toggle"
    >
		<template #title>Edit intro</template>
		<template #content>
			<!-- cover img and profile -->
			<div class="modal">
				<div class="absolute top-0 left-1/2 -transform-x-50 h-47-1/2 w-full">
                    <!-- cover img -->
					<div
						:style="
							coverPhoto !== null
								? `background-image: url(${coverPhoto})`
								: 'background-color: #000'
						"
						class="absolute inset-0 left-1/2 -transform-x-50 w-full bg-cover bg-center"
					></div>
                    <client-only>
                        <file-upload
                            class="absolute z-2  h-4 w-4 top-0 right-0 mr-10 mt-10 text-white"
                            extensions="gif,jpg,jpeg,png,webp"
                            accept="image/png,image/jpeg"
                            input-id="file1"
                            :multiple="false"
                            :size="1024 * 1024"
                            @input-file="inputFileCoverPhoto"
                            ref="upload"
                        >
                            <base-app-icon
                                :class-list="[
                                    'absolute',
                                    'top-0',
                                    'right-0',
                                    'h-7',
                                    'fill-current',
                                    'text-white',
                                    'cursor-pointer',
                                    'hover:text-yellow'
                                ]"
                                name="edit-pen"
                            />
                        </file-upload>
                    </client-only>
				</div>
                <!-- profile image -->
                <div class="relative z-1 flex items-end mt-17 mb-6">
                    <div class="flex items-center justify-center h-34 w-34 p-4 bg-white shadow-md">
                        <img 
                            v-if="profileImg" 
                            :src="profileImg" 
                        >
                    </div>
                    <client-only>
                        <file-upload
                            class="relative ml-40 font-medium text-gray-800 cursor-pointer underline"
                            extensions="gif,jpg,jpeg,png,webp"
                            accept="image/png,image/jpeg"
                            input-id="file2"
                            :multiple="false"
                            :size="1024 * 1024"
                            @input-file="inputFileProfile"
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
                    <input 
                        class="input-text w-full" 
                        type="text"
                        v-model="nameCopy"
                    >
                    <base-input-error-message
						style="margin-top: 0"
						v-if="$v.nameCopy.$error"
						:error-type="'required'"
					/>
                </div>
                <!-- companyName -->
                <div class="mb-6"> 
                    <label class="input-label block">Company name</label>
                    <input 
                        class="input-text w-full" 
                        type="text"
                        v-model="companyNameCopy"
                    >
                    <base-input-error-message
                        style="margin-top: 0"
						v-if="$v.companyNameCopy.$error"
						:error-type="'required'"
					/>
                </div>
                <!-- quick pitch -->
                <div class="mb-6">
                    <label class="input-label block">Quick pitch</label>
                    <input 
                        class="input-text w-full" 
                        type="text"
                        v-model="quickPitchCopy"
                    >
                    <base-input-error-message
                        style="margin-top: 0"
						v-if="$v.quickPitchCopy.$error"
						:error-type="'required'"
					/>
                </div>
                <!-- location -->
                <div class="mb-6">
                    <label class="input-label block">Location</label>
                    <input 
                        class="input-text w-full" 
                        type="text"
                        v-model="locationCopy"
                    >
                    <base-input-error-message
						style="margin-top: 0"
						v-if="$v.locationCopy.$error"
						:error-type="'required'"
					/>
                </div>
            </div>
			<div class="flex justify-end">
				<base-ajax-button 
                    :is-loading="isLoading"
                    @click="submit"
                >
                    Add to profile
                </base-ajax-button>
			</div>
		</template>
	</base-modal>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import FileUpload from 'vue-upload-component';
import BaseModal from '~/components/BaseComponents/BaseModal';
import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';
import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';

export default {
    name: 'EditIntroModal',

	components: {
		BaseModal,
        BaseAjaxButton,
        BaseAppIcon,
        FileUpload,
        BaseInputErrorMessage
	},

	computed: {
        ...mapState('account', ['name', 'companyName', 'location', 'quickPitch', 'profileImgUrl', 'coverImgUrl']),

        coverPhoto() {
            if(this.cover !== null) {
                return this.cover.url;
            } else {
                return this.coverImgUrl;
            }
        },

        profileImg() {
            if(this.profile !== null) {
                return this.profile.url;
            } else {
                return this.profileImgUrl;
            }
        }
	},

	data() {
		return {
			isLoading: false,
            isActive: false,
            nameCopy: null,
            companyNameCopy: null,
            quickPitchCopy: null,
            locationCopy: null,
            cover: null,
            profile: null
		};
    },
    
    validations: {
        nameCopy: {
            required
        },
        companyNameCopy: {
            required
        },
        quickPitchCopy: {
            required
        },
        locationCopy: {
            required
        }
    },

    created() {
        this.$bus.$on('open-employer-intro-modal', () => {
            this.toggle();
            this.companyNameCopy = this.companyName;
            this.quickPitchCopy = this.quickPitch;
            this.locationCopy = this.location;
            this.nameCopy = this.name;
        });
    },
    
    methods: {
        ...mapActions('account', ['updateAccountDetails']),

        inputFileProfile(newFile, oldFile, prevent) {
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
            this.profile = newFile;
        },
        
        inputFileCoverPhoto(newFile, oldFile, prevent) {
            console.log('cover')
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
            this.cover = newFile;
        },
        
        async submit() {
            this.$v.$touch();
            if (this.$v.$invalid) return;
            
            this.toggleLoader();
            try {
                const formData = new FormData();

                formData.append('profileImgFile', this.profile !== null ? this.profile.file : '');
                formData.append('coverImgFile', this.cover !== null ? this.cover.file : '');
                formData.append('name', this.nameCopy);
                formData.append('location', this.locationCopy);
                formData.append('companyName', this.companyNameCopy);
                formData.append('quickPitch', this.quickPitchCopy);
                formData.append('location', this.locationCopy);

                const response = await this.updateAccountDetails(formData);
                console.log(response);
                this.toggleLoader();
            } catch (error) {
                console.log(error);
                alert('An error happened');
                this.toggleLoader();
            }
            this.toggle();
        },

        toggle() {
            this.isActive = !this.isActive;
        },

        toggleLoader() {
            this.isLoading = !this.isLoading;
        }
    }
};
</script>
<style scoped>
.modal >>> .file-uploads {
    @apply absolute;
}
</style>


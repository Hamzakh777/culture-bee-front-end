<template>
	<base-modal :is-active="isActive" @close="toggle">
		<template #title>
			{{ isEdit ? 'Edit update' : 'Post update' }}
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
					v-if="updateImg !== null && updateImg !== ''"
					class="hidden md:block absolute bottom-0 left-0 h-36 w-56 mb-5 ml-5 bg-center bg-cover"
					:style="`background-image: url(${updateImg})`"
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
					v-model="description"
				>
				</textarea>
				<base-input-error-message
					style="margin-top: 0"
					v-if="$v.description.$error"
					:error-type="'required'"
				/>
			</div>
			<!-- upload image on mobile -->
			<div class="flex md:hidden justify-between items-start">
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
						/>
					</file-upload>
				</client-only>

				<div
					v-if="updateImg !== null && updateImg !== ''"
					class="relative h-36 w-56 mb-5 ml-5 bg-center bg-cover"
					:style="`background-image: url(${updateImg})`"
				>
					<base-close-button
						class="right-0 top-0 mt-2 mr-2"
						style="position: absolute; width: 1.25rem; height: 1.25rem;"
						@click="removeImg"
					/>
				</div>
			</div>
			<div class="flex flex-col items-stretch justify-between my-8">
				<!-- tags -->
				<div class="flex flex-col lg:flex-row mb-6">
					<div class="base-title mr-6 mt-2">
						add tags
					</div>
					<div class="flex flex-col md:flex-row items-stretch flex-wrap">
						<base-free-text-input 
							v-if="selectedTags.length !== 3"
							class="mb-4 mr-4"
							@add="addTag"
						/>
						<!-- selected tags -->
						<base-selected-option
							class="w-full md:w-auto mb-4 md:mr-6"
							v-for="(tag, index) in selectedTags"
							:key="index"
							@remove="removeTag(index)"
						>
							{{ tag }}
						</base-selected-option>
					</div>
				</div>
				<!-- pin update -->
				<div class="flex justify-between items-center">
					<div class="base-title mr-6">
						pin update
					</div>
					<base-pin-button :pinned.sync="isPinned" />
				</div>
			</div>
			<!-- bottom -->
			<div class="relative pt-6">
				<div
					class="absolute top-0 left-1/2 -transform-x-50 w-screen border-t-2 border-gray-800"
				></div>
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
								class="hidden md:block cursor-pointer hover:opacity-75 transition-all"
								src="/profile/employer/camera.svg"
							/>
						</file-upload>
					</client-only>

					<!-- add an update -->
					<base-ajax-button
						class="w-full md:w-auto"
						v-if="!isEdit"
                        @click="add"
                        :is-loading="isLoading" 
                    >
						Post update
					</base-ajax-button>
					<!-- update an update -->
					<base-ajax-button
						class="w-full md:w-auto"
						v-else
                        @click="update"
                        :is-loading="isLoading" 
                    >
						Save changes
					</base-ajax-button>
				</div>
			</div>
		</template>
	</base-modal>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import FileUpload from 'vue-upload-component';
import TagSelect from './TagSelect';
import BaseModal from '~/components/BaseComponents/BaseModal';
import BaseTipBox from '~/components/BaseComponents/BaseTipBox';
import BaseSelectedOption from '~/components/BaseComponents/BaseSelectedOption';
import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
import BasePinButton from '~/components/BaseComponents/BasePinButton';
import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';
import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';
import BaseFreeTextInput from '~/components/BaseComponents/BaseFreeTextInput';

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
		BaseCloseButton,
		BaseInputErrorMessage,
		BaseFreeTextInput
	},

	computed: {
		...mapState('employer/updates', ['updates']),
		...mapState('employer', ['currentProfileCreationStep']),
		
		updateImg() {
            if(this.img !== null) {
                return this.img.url;
            } else {
                return this.imgUrl;
            }
        }
	},

	data() {
		return {
			isActive: false,
			id: null,
			tags: [
				'Achievement',
				'Challenge',
				'Diversity',
				'Office',
				'Social',
				'Team',
				'Volunteer',
				'Wellness'
			],
			description: null,
			isPinned: true,
			isLoading: false,
			selectedTags: [],
			imgUrl: null,
			img: null,
			isEdit: false
		};
	},

	validations: {
		description: {
			required
		}
	},

	created() {
		this.$bus.$on('open-post-company-update-modal', () => {
            this.toggle();
            this.reset();
		});
		this.$bus.$on('open-edit-company-update-modal', id => {
			const update = this.updates.filter(update => update.id === id)[0];

			this.toggle();
			this.isEdit = true;
			
			this.description = update.description;
			this.isPinned = update.isPinned;
			this.imgUrl = update.imgUrl;
			this.selectedTags = update.tags;
			this.id = update.id;
		});
	},

	methods: {
		...mapMutations('employer', ['incrementProfileCreationStep']),
		...mapActions('employer/updates', ['addUpdate', 'updateUpdate']),

		toggle() {
			this.isActive = !this.isActive;
		},

		async add() {
			this.$v.$touch();
			if (this.$v.$invalid) return;

            this.toggleLoader();
			try {
				const formData = new FormData();
				
                formData.append('description', this.description);
                formData.append('tags', this.tags === null ? '' : JSON.stringify(this.selectedTags));
                formData.append('imgFile', this.img === null ? '' : this.img.file);
                formData.append('isPinned', this.isPinned === true ? 1 : 0);
            
				await this.addUpdate(formData);

				this.toggle();
				if(this.currentProfileCreationStep === 2) this.incrementProfileCreationStep();
			} catch (error) {
				alert('an error happened');
				console.error(error);
            }
            this.toggleLoader();
		},

		async update() {
			this.$v.$touch();
			if (this.$v.$invalid) return;

            this.toggleLoader();
			try {
				const formData = new FormData();
				
                formData.append('description', this.description);
                formData.append('tags', this.tags === null ? '' : JSON.stringify(this.selectedTags));
                formData.append('imgFile', this.img === null ? '' : this.img.file);
				formData.append('isPinned', this.isPinned === true ? 1 : 0);
				formData.append('imgUrl', this.imgUrl === null ? '' : this.imgUrl);
				formData.append('_method', 'PUT'); // laravel method spooffing
				
				await this.updateUpdate({
					updateData: formData,
					id: this.id
				});

                this.toggle();
			} catch (error) {
				alert('an error happened');
				console.error(error);
            }
            this.toggleLoader();
		},

		inputFile(newFile, oldFile) {
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
					alert('Your choice is not a picture');
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

		addTag(tag) {
			this.selectedTags.push(tag);
		},

		removeTag(indexToRemove) {
			this.selectedTags = this.selectedTags.filter(
				(tag, index) => index !== indexToRemove
			);
		},

		removeImg() {
			if(this.isEdit) {
				this.imgUrl = null; 
			}
			this.img = null;
		},

		toggleLoader() {
			this.isLoading = !this.isLoading;
        },
        
        reset() {
            this.description = null;
            this.selectedTags = [];
            this.isPinned = false;
            this.img = null;
        }
	}
};
</script>

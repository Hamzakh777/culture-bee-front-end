<template>
	<base-modal :is-active="isActive" @close="toggle">
		<template #title>
			{{ isEdit ? 'Edit' : 'Add' }} benefit
		</template>
		<template #content>
			<div>
				<div class="mb-8">
					<div class="base-title mb-4">
						Summary
					</div>
					<input
						class="input-text w-full"
						placeholder="Type a benefit in here"
						type="text"
						v-model="benefitToEdit.title"
					/>
					<base-input-error-message
						class="mt-2"
						v-if="$v.benefitToEdit.title.$error"
						:error-type="'required'"
					/>
				</div>
				<div class="mb-8">
					<div class="base-title mb-4">
						Subheading
					</div>
					<textarea
						class="input-text w-full h-42 py-3-1/2 resize-none"
						placeholder="Enter up to 75 characters"
						maxlength="75"
						v-model="benefitToEdit.subtitle"
					>
					</textarea>
					<base-input-error-message
						class="mt-1"
						v-if="$v.benefitToEdit.subtitle.$error"
						:error-type="'required'"
					/>
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
								/>
							</file-upload>
						</client-only>
					</div>
					<!-- the uploaded image -->
					<div
						v-if="benefitToEdit.imgUrl !== null"
						class="relative h-25 w-25 bg-center bg-cover bg-gray-300"
						:style="
							`background-image: url(${benefitToEdit.imgUrl})`
						"
					>
						<base-close-button
							class="top-0 right-0 mt-2 mr-2"
							style="position: absolute; height: 1.25rem; width: 1.25rem"
							@click="removeImg"
						/>
					</div>
				</div>
			</div>

			<!-- buttons -->
			<div class="flex justify-end items-center w-full">
				<div class="flex items-center">
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
import { mapState, mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import FileUpload from 'vue-upload-component';
import BaseModal from '~/components/BaseComponents/BaseModal';
import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';
import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';

export default {
	components: {
		BaseModal,
		BaseAjaxButton,
		FileUpload,
		BaseCloseButton,
		BaseInputErrorMessage
	},

	computed: {
		...mapState('employer/benefits', ['benefits'])
	},

	data() {
		return {
			isActive: false,
			isLoading: false,
			isEdit: false,
			benefitToEdit: {
				id: null,
				title: '',
				subtitle: '',
				imgFile: null,
				imgUrl: null
			}
		};
	},

	created() {
		this.$bus.$on('open-edit-benefit-modal', id => {
			this.toggle();
			let benefitToEdit = this.benefits.filter(item => id === item.id)[0];

			benefitToEdit = JSON.parse(JSON.stringify(benefitToEdit));

			this.benefitToEdit.id = benefitToEdit.id;
			this.benefitToEdit.title = benefitToEdit.title;
			this.benefitToEdit.subtitle = benefitToEdit.subtitle;
			this.benefitToEdit.imgUrl = benefitToEdit.imgUrl;

			this.isEdit = true;
		});

		this.$bus.$on('open-add-benefit-modal', () => {
			this.toggle();
			this.isEdit = false;
		});
	},

	validations: {
		benefitToEdit: {
			title: {
				required
			},
			subtitle: {
				required
			}
		}
	},

	methods: {
		...mapActions('employer/benefits', ['updateBenefit', 'addBenefit']),

		toggle() {
			this.isActive = !this.isActive;
		},

		toggleLoader() {
			this.isLoading = !this.isLoading;
		},

		inputFile(newFile, oldFile, prevent) {
			if (newFile && !oldFile) {
				// add
				this.changeImg(newFile.file, newFile.url);
			}
			if (!newFile && oldFile) {
				// remove
				this.changeImg(null, null);
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

		changeImg(data, url) {
			this.benefitToEdit.imgFile = data;
			this.benefitToEdit.imgUrl = url;
		},

		removeImg() {
			this.changeImg(null, null);
		},

		/**
		 * validate the inputs and either update or create a benefit
		 */
		submit() {
			this.$v.$touch();
			if (this.$v.$invalid) return;

			if(this.isEdit) {
				this.update();
			} else {
				this.add();
			}
		},

		async update() {
			this.toggleLoader();
			try {
				const formData = new FormData();
				formData.append(`title`, this.benefitToEdit.title);
				formData.append(`subtitle`, this.benefitToEdit.subtitle);
				formData.append(
					`imgFile`,
					this.benefitToEdit.imgFile === null
						? ''
						: this.benefitToEdit.imgFile
				);
				formData.append(
					`imgUrl`,
					this.benefitToEdit.imgUrl === null
						? ''
						: this.benefitToEdit.imgUrl
				);
				// since sending a put request in laravel never works correctly
				// we have to do some method spooffing
				formData.append('_method', 'PUT');

				await this.updateBenefit({
					id: this.benefitToEdit.id,
					formData
				});

				this.toggle();
			} catch (error) {
				alert('An error happend');
				console.error(error);
			}
			this.toggleLoader();
		},

		async add() {
			this.toggleLoader();
			try {
				const formData = new FormData();
				formData.append(`title`, this.benefitToEdit.title);
				formData.append(`subtitle`, this.benefitToEdit.subtitle);
				formData.append(
					`imgFile`,
					this.benefitToEdit.imgFile === null
						? ''
						: this.benefitToEdit.imgFile
				);

				await this.addBenefit(formData);

				this.toggle();
			} catch (error) {
				alert('An error happened trying to add a benefit');
				console.error(error);
			} finally {
				this.toggleLoader();
			}
		}
	}
};
</script>

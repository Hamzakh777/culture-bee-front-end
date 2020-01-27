<template>
	<base-modal :is-active="isActive" @close="toggle">
		<template #title>
			add benefits
		</template>
		<template #content>
			<div
				v-for="(benefit, index) in $v.benefits.$each.$iter"
				:key="index"
				:class="{ hidden: index != currentActiveBenefit - 1 }"
			>
				<div class="mb-8">
					<div class="base-title mb-4">
						Summary
					</div>
					<input
						class="input-text w-full"
						placeholder="Type a benefit in here"
						type="text"
						v-model="benefit.title.$model"
					/>
					<base-input-error-message
						v-if="benefit.title.$error"
						:error-type="'required'"
						style="margin-top: 0.75rem"
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
						v-model="benefit.subtitle.$model"
					>
					</textarea>
					<base-input-error-message
						style="margin-top: 0.5rem"
						v-if="benefit.subtitle.$error"
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
						v-if="benefit.$model.imgFile !== null"
						class="relative h-25 w-25 bg-center bg-cover bg-gray-300"
						:style="
							`background-image: url(${benefit.$model.imgFile.url})`
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
			<div class="flex justify-between items-center">
				<div class="flex">
					<div
						class="h-3 w-3 rounded-full mr-2 cursor-pointer"
						:class="{
							'bg-gray-800': i !== currentActiveBenefit,
							'bg-yellow': i === currentActiveBenefit
						}"
						v-for="i in 6"
						:key="i"
						@click="switchActiveBenefit(i)"
					></div>
				</div>
				<div class="flex items-center">
					<button
						class="secondary-btn mr-14"
						@click.prevent="skip"
					>
						skip
					</button>
					<base-ajax-button :is-loading="isLoading" @click="submit">
						Save
					</base-ajax-button>
				</div>
			</div>
		</template>
	</base-modal>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import FileUpload from 'vue-upload-component';
import BaseModal from '~/components/BaseComponents/BaseModal';
import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';
import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';

export default {
	name: 'AddBenefitsModal',

	components: {
		BaseModal,
		BaseAjaxButton,
		FileUpload,
		BaseCloseButton,
		BaseInputErrorMessage
	},

	computed: {
		...mapState('employer', ['currentProfileCreationStep'])
	},

	data() {
		return {
			isActive: false,
			isLoading: false,
			currentActiveBenefit: 1, // the benefit being edited
			benefits: []
		};
	},

	created() {
		this.$bus.$on('open-employer-add-benefits-modal', () => {
			this.toggle();

			while (this.benefits.length !== 6) {
				const emptyValue = {
					id: 1,
					title: null,
					subtitle: null,
					imgFile: null,
					imgUrl: ''
				};
				
				this.benefits.push(emptyValue);
			}
		});
	},

	validations: {
		benefits: {
			required,
			$each: {
				title: {
					required
				},
				subtitle: {
					required
				}
			}
		}
	},

	methods: {
		...mapMutations('employer', ['incrementProfileCreationStep']),
		...mapMutations('employer', ['nextStep']),
		...mapActions('employer/benefits', ['addBenefits']),

		toggle() {
			this.isActive = !this.isActive;
		},

		toggleLoader() {
			this.isLoading = !this.isLoading;
		},

		switchActiveBenefit(num) {
			this.currentActiveBenefit = num;
		},

		inputFile(newFile, oldFile, prevent) {
			if (newFile && !oldFile) {
				// add
				this.changeImg(newFile);
			}
			if (!newFile && oldFile) {
				// remove
				this.changeImg(null);
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

		changeImg(file) {
			this.benefits[this.currentActiveBenefit - 1].imgFile = file;
		},

		removeImg() {
			this.changeImg(null, null);
		},

		async submit() {
			// validate
			const benefits = this.$v.benefits.$each.$iter;
			let isValide = true;
			this.$v.$touch();

			for (const key in benefits) {
				if (benefits.hasOwnProperty(key)) {
					if (benefits[key].$error === true) {
						isValide = false;
						// if a benefit is not valid, go to it
						this.currentActiveBenefit = parseInt(key) + 1;
					}
				}
			}

			if (isValide === false) return;

			// save
			this.toggleLoader();
			try {
				const benefits = this.prepareData();
				await this.addBenefits(benefits);

				this.nextStep();
				this.toggle();
				if(this.currentProfileCreationStep === 4) this.incrementProfileCreationStep();
			} catch (error) {
				alert('An error happened');
			}
			this.toggleLoader();
		},

		/**
		 * @return {FormData}
		 */
		prepareData() {
			const formData = new FormData();

			this.benefits.forEach((benefit, index) => {
				formData.append(`title${index + 1}`, benefit.title);
				formData.append(`subtitle${index + 1}`, benefit.subtitle);
                formData.append(`imgFile${index + 1}`, benefit.imgFile === null ? '' : benefit.imgFile.file);
			});

			return formData;
		},

		skip() {
			this.nextStep();
			this.toggle();
		}
	}
};
</script>
<style scoped>
.upload >>> .file-uploads {
	@apply cursor-pointer;
}
</style>

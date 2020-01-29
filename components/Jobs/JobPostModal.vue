<template>
	<base-modal :is-active="isActive" @close="toggle">
		<template #title>
			Post job
		</template>
		<template #content>
			<!-- first step -->
			<div v-if="currentStep === 1">
				<div class="row">
					<div class="base-title">
						COMPANY
					</div>
					<div class="lg:flex-grow">
						<!-- company -->
						<div class="lg:flex justify-between">
							<input
								class="input input-text lg:flex-grow  w-full lg:w-auto lg:mr-6"
								type="text"
							/>
							<!-- location -->
							<div class="lg:flex-grow lg:w-1/2">
								<input
									class="input input-text w-full"
									type="text"
									placeholder="location"
									v-model="location"
								/>
								<base-input-error-message
									style="margin-bottom: 1rem"
									v-if="$v.location.$error"
									:error-type="'required'"
								/>
							</div>
						</div>
						<div class="lg:flex justify-between">
							<!-- seniority -->
							<div class="lg:w-31-%">
								<v-select
									class="input"
									placeholder="Seniority"
									:options="['skill 1', 'skill 2']"
									:multiple="false"
									v-model="seniority"
								/>
								<base-input-error-message
									style="margin-bottom: 1rem"
									v-if="$v.seniority.$error"
									:error-type="'required'"
								/>
							</div>
							<!-- industry -->
							<div class="lg:w-31-%">
								<v-select
									class="input"
									placeholder="Seniority"
									:options="industriesList"
									:multiple="false"
									v-model="industry"
								/>
								<base-input-error-message
									style="margin-bottom: 1rem"
									v-if="$v.industry.$error"
									:error-type="'required'"
								/>
							</div>
							<!-- type -->
							<div class="lg:w-31-%">
								<v-select
									class="input"
									placeholder="Type"
									:options="['skill 1', 'skill 2']"
									:multiple="false"
									v-model="type"
								/>
								<base-input-error-message
									style="margin-bottom: 1rem"
									v-if="$v.type.$error"
									:error-type="'required'"
								/>
							</div>
						</div>
					</div>
				</div>
				<!-- job title -->
				<div class="row">
					<div class="base-title">
						Job Title
					</div>
					<div class="lg:flex-grow">
						<input
							type="text"
							class="input-text w-full input"
							v-model="jobTitle"
						/>
						<base-input-error-message
							style="margin-bottom: 1rem"
							v-if="$v.jobTitle.$error"
							:error-type="'required'"
						/>
					</div>
				</div>
				<!-- quick pitch -->
				<div class="row">
					<div class="base-title">
						Quick pitch
					</div>
					<div class="lg:flex-grow">
						<textarea
							type="text"
							class="input-text py-3 h-26 w-full input resize-none"
							v-model="quickPitch"
							placeholder="You can use up to 200 characters here"
							maxlength="200"
						>
						</textarea>
						<base-input-error-message
							style="margin-bottom: 1rem"
							v-if="$v.quickPitch.$error"
							:error-type="'required'"
						/>
					</div>
				</div>
				<!-- tags -->
				<div class="row">
					<div class="base-title">
						Add tags
					</div>
					<div class="lg:flex flex-grow items-start">
						<!-- tags select input -->
						<div>
							<tag-select
								class="w-full lg:pr-6"
								v-if="tags.length !== 3"
								:options="tagsList"
								placeholder="add a tag"
								v-model="tags"
							/>
							<base-input-error-message
								style="margin-bottom: 1rem"
								v-if="$v.tags.$error"
								:error-type="'required'"
							/>
						</div>
						<!-- selected tags -->
						<base-selected-option
							class="w-full lg:w-auto mb-4 mr-6"
							v-for="(tag, index) in tags"
							:key="index"
							@remove="removeTag(index)"
						>
							{{ tag }}
						</base-selected-option>
					</div>
				</div>
				<!-- skills -->
				<div class="row">
					<div class="base-title">
						Add skills
					</div>
					<div class="lg:flex flex-grow items-start">
						<div>
							<!-- skills select input -->
							<tag-select
								class="w-full lg:pr-6"
								v-if="skills.length !== 3"
								:options="skillsList"
								placeholder="add a skill"
								v-model="skills"
							/>
							<base-input-error-message
								style="margin-bottom: 1rem"
								v-if="$v.skills.$error"
								:error-type="'required'"
							/>
						</div>
						<!-- selected tags -->
						<base-selected-option
							class="w-full lg:w-auto mb-4 mr-6"
							v-for="(skill, index) in skills"
							:key="index"
							@remove="removeSkill(index)"
						>
							{{ skill }}
						</base-selected-option>
					</div>
				</div>
				<!-- application -->
				<div class="row row--col">
					<div class="base-title base-title--w-full">
						where would you like applicants to apply?
					</div>
					<div class="lg:flex justify-between">
						<div class="lg:w-1/2 lg:pr-3">
							<input
								class="input-text w-full input"
								type="email"
								v-model="applicationEmail"
								placeholder="Email address"
							/>
							<base-input-error-message
								style="margin-bottom: 1rem"
								v-if="$v.applicationEmail.$error"
								:error-type="'required'"
							/>
						</div>
						<div class="lg:w-1/2 lg:pl-3">
							<input
								class="input-text w-full input"
								type="url"
								v-model="applicationUrl"
								placeholder="Enter external link"
							/>
						</div>
					</div>
				</div>
			</div>
			<!-- second step -->
			<div v-else-if="currentStep === 2">
				<div class="row">
					<div class="base-title">
						WHY THIS ROLE?
					</div>
					<div class="lg:flex-grow">
						<textarea
							type="text"
							class="input-text py-3 h-26 w-full input resize-none"
							v-model="whyThisRole"
							placeholder="You can use up to 200 characters here"
							maxlength="200"
						>
						</textarea>
						<base-input-error-message
							style="margin-bottom: 1rem"
							v-if="$v.whyThisRole.$error"
							:error-type="'required'"
						/>
					</div>
				</div>
				<div class="row">
					<div class="base-title">
						ownership
					</div>
					<div class="lg:flex-grow">
						<base-icon-value-input
							v-for="(value, index) in ownershipValues"
							:key="index"
							:value="value"
						/>
					</div>
				</div>
				<!-- promo photo -->
				<div class="row">
					<div class="base-title">
						promo photo
					</div>
					<div class="flex justify-between items-start lg:flex-grow">
						<client-only>
							<file-upload
								input-id="file1"
								extensions="jpg,jpeg,png"
								accept="image/png,image/jpeg,image/jpg"
								:multiple="false"
								:size="1024 * 1024"
								@input-filter="inputFilter"
								@input-file="inputFilePromoPhoto"
							>
								<img
									class="cursor-pointer hover:opacity-75 transition-all"
									src="/profile/employer/camera.svg"
								/>
							</file-upload>
						</client-only>
						<!-- the uploaded image -->
						<div
							v-if="promoPhoto !== null"
							class="relative h-25 w-25 ml-6 bg-center bg-cover bg-gray-300"
							:style="`background-image: url(${promoPhoto.url})`"
						>
							<base-close-button
								class="top-0 right-0 mt-2 mr-2"
								style="position: absolute; height: 1.25rem; width: 1.25rem"
								@click="removePromoPhoto"
							/>
						</div>
					</div>
				</div>
			</div>
			<!-- third step -->
			<div v-else-if="currentStep === 3">
				<!-- applicant qualities -->
				<div class="row">
					<div class="base-title">
						applicant qualities
					</div>
					<div class="lg:flex-grow">
						<base-icon-value-input
							v-for="(quality, index) in applicantQualities"
							:key="index"
							:value="quality"
						/>
					</div>
				</div>
				<!-- about the COLLEAGUES -->
				<div class="row">
					<div class="base-title">
						ABOUT THE COLLEAGUES
					</div>
					<div class="flex-grow">
						<textarea
							type="text"
							class="input-text py-3 h-32 w-full input resize-none"
							v-model="aboutTheColleagues"
							placeholder="You can use up to 350 characters here"
							maxlength="350"
						>
						</textarea>
					</div>
				</div>
				<!-- family photo -->
				<div class="row">
					<div class="base-title">
						THE FAMILY
					</div>
					<div class="flex justify-between items-start lg:flex-grow">
						<client-only>
							<file-upload
								input-id="file2"
								extensions="jpg,jpeg,png"
								accept="image/png,image/jpeg,image/jpg"
								:multiple="false"
								:size="1024 * 1024"
								@input-filter="inputFilter"
								@input-file="inputFileFamilyPhoto"
							>
								<img
									class="cursor-pointer hover:opacity-75 transition-all"
									src="/profile/employer/camera.svg"
								/>
							</file-upload>
						</client-only>
						<!-- the uploaded image -->
						<div
							v-if="familyPhoto !== null"
							class="relative h-25 w-25 ml-6 bg-center bg-cover bg-gray-300"
							:style="`background-image: url(${familyPhoto.url})`"
						>
							<base-close-button
								class="top-0 right-0 mt-2 mr-2"
								style="position: absolute; height: 1.25rem; width: 1.25rem"
								@click="removeFamilyPhoto"
							/>
						</div>
					</div>
				</div>
			</div>
			<!-- buttons -->
			<div
				class="relative flex flex-col md:flex-row md:justify-between items-center mt-8 pt-8"
			>
				<div
					class="absolute top-0 left-1/2 -transform-x-50 w-screen h-1/2 bg-gray-900"
				></div>
				<div class="flex py-6 md:py-0">
					<div
						class="h-3 w-3 rounded-full mr-2 last:mr-0 cursor-pointer"
						:class="{
							'bg-gray-800': i !== currentStep,
							'bg-yellow': i === currentStep
						}"
						v-for="i in 3"
						:key="i"
					></div>
				</div>
				<div
					class="flex flex-col md:flex-row w-full md:w-auto items-stretch"
				>
					<button
						v-if="currentStep !== 1"
						class="secondary-btn mb-6 md:mr-14 md:mb-0"
						@click.prevent="previousStep"
					>
						back
					</button>
					<base-ajax-button
						class="w-full md:w-50"
						:is-loading="isLoading"
						@click="nextStep"
					>
						{{ currentStep === 3 ? 'Save' : 'Next' }}
					</base-ajax-button>
				</div>
			</div>
		</template>
	</base-modal>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import { mapState, mapMutations } from 'vuex';
import vSelect from 'vue-select';
import FileUpload from 'vue-upload-component';
import BaseModal from '~/components/BaseComponents/BaseModal';
import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';
import BaseSelectedOption from '~/components/BaseComponents/BaseSelectedOption';
import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
import TagSelect from '~/components/BaseComponents/BaseTagSelect';
import BaseIconValueInput from '~/components/BaseComponents/BaseIconValueInput';
import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';

export default {
	name: 'JobPostModal',

	components: {
		BaseModal,
		BaseInputErrorMessage,
		BaseCloseButton,
		BaseAjaxButton,
		BaseSelectedOption,
		TagSelect,
		BaseIconValueInput,
		vSelect,
		FileUpload
	},

	computed: {
		...mapState('employer', ['currentProfileCreationStep'])
	},

	data() {
		return {
			tagsList: ['tag 1', 'tag 2', 'tag 3'],
			skillsList: ['skill 1', 'skill 2', 'skill 3'],
			industriesList: ['industry 1', 'industry 2'],
			isActive: false,
			isLoading: false,
			currentStep: 1,
			location: '',
			seniority: '',
			industry: '',
			type: '',
			jobTitle: '',
			quickPitch: '',
			applicationUrl: '',
			applicationEmail: '',
			tags: [],
			skills: [],
			whyThisRole: '',
			ownershipValues: [],
			applicantQualities: [],
			promoPhoto: null,
			aboutTheColleagues: '',
			familyPhoto: null,
			value: {
				title: '',
				icon: ''
			}
		};
	},

	validations() {
		if (this.currentStep === 1) {
			return {
				location: {
					required
				},
				seniority: {
					required
				},
				industry: {
					required
				},
				type: {
					required
				},
				jobTitle: {
					required
				},
				quickPitch: {
					required
				},
				tags: {
					required
				},
				skills: {
					required
				},
				applicationEmail: {
					required,
					email
				}
			};
		} else if (this.currentStep === 2) {
			return {
				whyThisRole: {
					required
				}
			};
		} else if (this.currentStep === 3) {
			return {};
		}
	},

	beforeCreate() {
		this.$bus.$on('open-post-job-modal', () => {
			this.toggle();

			// ownership values
			while (this.ownershipValues.length !== 6) {
				const emptyValue = {
					title: '',
					icon: ''
				};

				this.ownershipValues.push(emptyValue);
			}

			// applicant qualities
			while (this.applicantQualities.length !== 6) {
				const emptyValue = {
					title: '',
					icon: ''
				};

				this.applicantQualities.push(emptyValue);
			}
		});
	},

	created() {},

	methods: {
		...mapMutations('employer', ['incrementProfileCreationStep']),

		toggle() {
			this.isActive = !this.isActive;
		},

		toggleLoader() {
			this.isLoading = !this.isLoading;
		},

		removeTag(indexToRemove) {
			this.tags = this.tags.filter(
				(tag, index) => index !== indexToRemove
			);
		},

		removeSkill(indexToRemove) {
			this.tags = this.tags.filter(
				(tag, index) => index !== indexToRemove
			);
		},

		inputFilePromoPhoto(newFile, oldFile) {
			if (newFile && !oldFile) {
				// add
				this.promoPhoto = newFile;
			}
			if (!newFile && oldFile) {
				// remove
				this.promoPhoto = '';
			}
		},

		inputFileFamilyPhoto(newFile, oldFile) {
			if (newFile && !oldFile) {
				// add
				this.familyPhoto = newFile;
			}
			if (!newFile && oldFile) {
				// remove
				this.familyPhoto = '';
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

		removePromoPhoto() {
			this.promoPhoto = '';
		},

		removeFamilyPhoto() {
			this.familyPhoto = '';
		},

		previousStep() {
			this.currentStep -= 1;
		},

		nextStep() {
			this.$v.$touch();
			if (this.$v.$invalid) return;
			if (this.currentStep !== 3) return (this.currentStep += 1);

			this.saveJob();
		},

		async saveJob() {
			this.toggleLoader();
			try {
				const formData = new FormData();
				formData.append('location', this.location);
				formData.append('seniority', this.seniority);
				formData.append('industry', this.industry);
				formData.append('type', this.type);
				formData.append('jobTitle', this.jobTitle);
				formData.append('quickPitch', this.quickPitch);
				formData.append('applicationUrl', this.applicationUrl);
				formData.append('applicationEmail', this.applicationEmail);
				formData.append('tags', this.tags === [] ? '': JSON.stringify(this.tags));
				formData.append('skills', this.skills === [] ? '': JSON.stringify(this.skills));
				formData.append('whyThisRole', this.whyThisRole);
				formData.append('ownershipValues', this.ownershipValues === [] ? '': JSON.stringify(this.ownershipValues));
				formData.append('applicantQualities', this.applicantQualities === [] ? '': JSON.stringify(this.applicantQualities));
				formData.append('aboutTheColleagues', this.aboutTheColleagues);
				formData.append('promoPhoto', this.promoPhoto === null ? '': this.promoPhoto.file);
				formData.append('familyPhoto', this.familyPhoto === null ? '' : this.familyPhoto.file);

				await this.$axios.post('/api/jobs', formData);

				if(this.currentProfileCreationStep === 4) this.incrementProfileCreationStep();
				this.toggle();
			} catch (error) {
				alert('An error happend');
				console.error(error);
			}
			this.toggleLoader();
		}
	}
};
</script>
<style scoped>
.row {
	@apply flex flex-col;
}
.input {
	@apply mb-4;
}
.base-title {
	@apply mb-4;
}

@media (min-width: 1024px) {
	.row {
		@apply flex-row;
	}
	.row--col {
		@apply flex-col;
	}
	.base-title {
		@apply w-60 pr-6;
	}
	.base-title--w-full {
		@apply w-full;
	}
}
</style>

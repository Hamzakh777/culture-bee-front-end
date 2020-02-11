<template>
	<base-modal :is-active="isActive" @close="toggle">
		<template #title>
			Post job
		</template>
		<template #content>
			<!-- first step -->
			<div v-if="currentStep === 1">
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
				<div class="row">
					<div class="base-title">
						Details
					</div>
					<div class="lg:flex-grow">
						<!-- company -->
						<div class="lg:flex justify-between">
							<!-- location -->
							<div class="lg:flex-grow lg:w-full">
								<input
									id="address-input"
									class="input input-text w-full"
									type="text"
									placeholder="Job location"
									ref="location"
									:value="location"
									@input="setLocation($event.target.value)"
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
									placeholder="Experience level"
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
									placeholder="Industry"
									:options="industriesList"
									:multiple="false"
									:max-height="'160px'"
									label="description"
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
									:options="typeOptions"
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
						tags
						<span class="block text-sm">E.g. team-work, startup</span>
					</div>
					<div class="lg:flex flex-grow items-start">
						<!-- tags select input -->
						<div>
							<base-free-text-input 
								v-if="tags.length !== 3"
								class="mb-4 mr-4"
								@add="addTag"
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
					<div class="base-title flex-shrink-0">
						skill tags
						<span class="block text-sm">E.g. javascript, project management</span>
					</div>
					<div class="lg:flex flex-grow items-start flex-wrap">
						<div>
							<!-- skills select input -->
							<base-free-text-input 
								v-if="skills.length !== 6"
								class="mb-4 mr-4"
								@add="addSkill"
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
							placeholder="You can use up to 500 characters here"
							maxlength="500"
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
						responsibilities
						<span class="block text-sm">List what this person will own</span>
					</div>
					<div class="lg:flex-grow">
						<base-icon-value-input
							v-for="(value, index) in ownershipValues"
							:key="index"
							:value="value"
							icon-name="checkmark"
							placeholder="Add a responsibility"
							:ability-to-select-icon="false"
						/>
					</div>
				</div>
				<!-- applicant qualities -->
				<div class="row">
					<div class="base-title">
						Skills
						<span class="block text-sm">List the skills and qualities you are looking for</span>
					</div>
					<div class="lg:flex-grow">
						<base-icon-value-input
							v-for="(quality, index) in applicantQualities"
							:key="index"
							:value="quality"
							icon-name="checkmark"
							placeholder="Add a skill or quality"
							:ability-to-select-icon="false"
						/>
					</div>
				</div>
			</div>
			<!-- third step -->
			<div v-else-if="currentStep === 3">
				<!-- about the COLLEAGUES -->
				<div class="row">
					<div class="base-title">
						Describe the team
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
				<!-- promo photo -->
				<div class="row">
					<div class="base-title">
						Add photo
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
							v-if="promoPhotoUrl !== null && promoPhotoUrl !== ''"
							class="relative h-36 w-56 ml-6 bg-center bg-cover bg-gray-300"
							:style="`background-image: url(${promoPhotoUrl})`"
						>
							<base-close-button
								class="top-0 right-0 mt-2 mr-2"
								style="position: absolute; height: 1.25rem; width: 1.25rem"
								@click="removePromoPhoto"
							/>
						</div>
					</div>
				</div>
				<!-- family photo -->
				<div class="row mt-6 lg:mt-8">
					<div class="base-title">
						Add team photo
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
							v-if="familyPhotoUrl !== null && familyPhotoUrl !== ''"
							class="relative h-36 w-56 ml-6 bg-center bg-cover bg-gray-300"
							:style="`background-image: url(${familyPhotoUrl})`"
						>
							<base-close-button
								class="top-0 right-0 mt-2 mr-2"
								style="position: absolute; height: 1.25rem; width: 1.25rem"
								@click="removeFamilyPhoto"
							/>
						</div>
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
			<!-- loader -->
			<div 
				v-if="isBigLoaderActive"
				class="absolute inset-0"
			>
				<base-loader />
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
import BaseFreeTextInput from '~/components/BaseComponents/BaseFreeTextInput';
import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';
import BaseSelectedOption from '~/components/BaseComponents/BaseSelectedOption';
import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
import BaseIconValueInput from '~/components/BaseComponents/BaseIconValueInput';
import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';
import BaseLoader from '~/components/BaseComponents/BaseLoader';
import industriesList from '~/assets/data/account/industries';

export default {
	name: 'JobPostModal',

	components: {
		BaseModal,
		BaseInputErrorMessage,
		BaseCloseButton,
		BaseAjaxButton,
		BaseSelectedOption,
		BaseIconValueInput,
		vSelect,
		FileUpload,
		BaseLoader,
		BaseFreeTextInput
	},

	watch: {
		isActive(newVal) {
			if(newVal === false) return;
			// if (process.browser && this.currentStep === 1) {
			// 	const places = require('places.js');

			// 	this.placesInstance = places({
			// 		appId: process.env.VUE_APP_ALGOLIA_PLACES_APP_ID,
			// 		apiKey: process.env.VUE_APP_ALGOLIA_PLACES_APP_KEY,
			// 		container: window.document.getElementById('address-input')
			// 	});


			// 	this.placesInstance.on('change', e => {
			// 		this.setLocation(e.suggestion.value);
			// 	});

			// 	this.placesInstance.on('clear', () => {
			// 		this.setLocation('');
			// 	});
			// }
		},

		ownershipValues: {
			handler(newVal) {
				const length = newVal.length;
				if(length === 0) {
					return this.ownershipValues.push({
						title: null,
						icon: null
					});
				}

				const element = newVal[length - 1];
				if(element.title !== null && element.title !== '' && length !== 6) {
					this.ownershipValues.push({
						title: null,
						icon: null
					});
				}
			},
			deep: true
		},

		applicantQualities: {
			handler(newVal) {
				const length = newVal.length;
				if(length === 0) {
					return this.applicantQualities.push({
						title: null,
						icon: null
					});
				}

				const element = newVal[length - 1];
				if(element.title !== null && element.title !== '' && length !== 6) {
					this.applicantQualities.push({
						title: null,
						icon: null
					});
				}
			},
			deep: true
		}
	},

	computed: {
		...mapState('employer', ['currentProfileCreationStep', 'companyName'])
	},

	data() {
		return {
			skillsList: ['skill 1', 'skill 2', 'skill 3'],
			industriesList,
			typeOptions: ['Full-time', 'Part-time', 'Contract', 'Temp', 'Job share'],
			isActive: false,
			isLoading: false,
			isBigLoaderActive: false,
			placesInstance: null,
			currentStep: 1,
			id: '',
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
			promoPhotoFile: null,
			promoPhotoUrl: null,
			aboutTheColleagues: '',
			familyPhotoFile: null,
			familyPhotoUrl: null,
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
				}
			};
		} else if (this.currentStep === 2) {
			return {
				whyThisRole: {
					required
				}
			};
		} else if (this.currentStep === 3) {
			return {
				applicationEmail: {
					required,
					email
				}
			};
		}
	},

	beforeCreate() {
		this.$bus.$on('open-post-job-modal', () => {
			this.toggle();

			// ownership values
			const lengthValues = this.ownershipValues.length;
			if(lengthValues === 0) {
				this.ownershipValues.push({
					title: null,
					icon: null
				});
			} else {
				const elementValues = this.ownershipValues[lengthValues - 1];
				if(elementValues.title !== null && elementValues.title !== '' && lengthValues !== 6) {
					this.ownershipValues.push({
						title: null,
						icon: null
					});
				}
			}


			// applicant qualities
			const lengthQualities = this.applicantQualities.length;
			if(lengthQualities === 0) {
				this.applicantQualities.push({
					title: null,
					icon: null
				});
			} else {
				const elementQualities = this.applicantQualities[lengthQualities - 1];
				if(elementQualities.title !== null && elementQualities.title !== '' && lengthQualities !== 6) {
					this.applicantQualities.push({
						title: null,
						icon: null
					});
				}
			}
		});

		this.$bus.$on('open-edit-job-modal', (id) => {
			this.toggle();
			const elementValues = this.ownershipValues[lengthValues - 1];
			if(elementValues.title !== null && elementValues.title !== '' && lengthValues !== 6) {
				this.ownershipValues.push({
					title: null,
					icon: null
				});
			}

			const elementQualities = this.applicantQualities[lengthQualities - 1];
			if(elementQualities.title !== null && elementQualities.title !== '' && lengthQualities !== 6) {
				this.applicantQualities.push({
					title: null,
					icon: null
				});
			}
			this.fetchJob(id);
		});
	},

	methods: {
		...mapMutations('employer', ['incrementProfileCreationStep']),
		...mapMutations('employer/jobs', ['addJob']),

		toggle() {
			this.isActive = !this.isActive;
		},

		toggleLoader() {
			this.isLoading = !this.isLoading;
		},

		toggleBigLoader() {
			this.isBigLoaderActive = !this.isBigLoaderActive;
		},

		addTag(tag) {
			this.tags.push(tag);
		},

		removeTag(indexToRemove) {
			this.tags = this.tags.filter(
				(tag, index) => index !== indexToRemove
			);
		},

		addSkill(skill) {
			this.skills.push(skill);
		},

		removeSkill(indexToRemove) {
			this.skills = this.skills.filter(
				(tag, index) => index !== indexToRemove
			);
		},

		/**
		 * @param {String} value
		 */
		setLocation(value) {
			this.location = value;
		},

		inputFilePromoPhoto(newFile, oldFile) {
			if (newFile && !oldFile) {
				// add
				this.promoPhotoFile = newFile.file;
				this.promoPhotoUrl = newFile.url;
			}
			if (!newFile && oldFile) {
				// remove
				this.promoPhotoFile = null;
				this.promoPhotoUrl = null;
			}
		},

		inputFileFamilyPhoto(newFile, oldFile) {
			if (newFile && !oldFile) {
				// add
				this.familyPhotoFile = newFile.file;
				this.familyPhotoUrl = newFile.url;
			}
			if (!newFile && oldFile) {
				// remove
				this.familyPhotoFile = null;
				this.familyPhotoUrl = null;
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
			this.promoPhotoFile = null;
			this.promoPhotoUrl = '';
		},

		removeFamilyPhoto() {
			this.familyPhotoFile = null;
			this.familyPhotoUrl = '';
		},

		previousStep() {
			this.currentStep -= 1;
		},

		nextStep() {
			this.$v.$touch();
			if (this.$v.$invalid) return;
			if (this.currentStep !== 3) return (this.currentStep += 1);

			if(this.id !== null && this.id !== '') {
				// if we have an id, update the job
				this.updateJob();
			} else {
				// save the job
				this.saveJob();
			}
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
				formData.append('promoPhotoFile', this.promoPhotoFile === null ? '': this.promoPhotoFile);
				formData.append('familyPhotoFile', this.familyPhotoFile === null ? '' : this.familyPhotoFile);

				const response = await this.$axios.post('/api/jobs', formData);
				
				this.addJob(response.data.job);
				if(this.currentProfileCreationStep === 5) this.incrementProfileCreationStep();
				this.toggle();
			} catch (error) {
				alert('An error happend');
				console.error(error);
			}
			this.toggleLoader();
		},

		/**
		 * @param {Number} id
		 */
		async fetchJob(id) {
			this.toggleBigLoader();
			try {
				const response  = await this.$axios.get(`api/jobs/${id}`);
				const job = response.data.job;

				this.id = job.id;
				this.location = job.location;
				this.seniority = job.seniority;
				this.industry = job.industry;
				this.type = job.type;
				this.jobTitle = job.jobTitle;
				this.quickPitch = job.quickPitch;
				this.applicationUrl = job.applicationUrl;
				this.applicationEmail = job.applicationEmail;
				this.tags = job.tags;
				this.skills = job.skills;
				this.whyThisRole = job.whyThisRole;
				this.ownershipValues = job.ownershipValues;
				this.applicantQualities = job.applicantQualities;
				this.promoPhotoUrl = job.promoPhotoUrl;
				this.aboutTheColleagues = job.aboutTheColleagues;
				this.familyPhotoUrl = job.familyPhotoUrl;
				this.createdAt = job.createdAt;
				this.userId = job.userId;
			} catch (error) {
				console.error(error);
			}
			this.toggleBigLoader();
		},

		async updateJob() {
			this.toggleLoader();
			try {
				const formData = new FormData();
				formData.append('_method', 'PUT');
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
				formData.append('promoPhotoFile', this.promoPhotoFile === null ? '': this.promoPhotoFile);
				formData.append('familyPhotoFile', this.familyPhotoFile === null ? '' : this.familyPhotoFile);
				formData.append('promoPhotoUrl', this.promoPhotoUrl);
				formData.append('FamilyPhotoUrl', this.familyPhotoUrl);

				const response = await this.$axios.post(`/api/jobs/${this.id}`, formData);

				console.log(response);

			} catch (error) {
				alert('An error happend updating the job');
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

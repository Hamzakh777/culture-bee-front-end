<template>
	<base-modal :is-active="isActive" @close="toggle">
		<template #title>
			why us
		</template>
		<template #content>
			<!-- first step -->
			<div v-if="currentStep === 1">
				<div class="flex justify-between">
					<div class="base-title mb-3">
						Your no.1 reason to join you
					</div>
					<img class="w-6" src="/logo-small.svg" />
				</div>
				<input
					class="input-text w-full mb-8"
					placeholder="Type a keyword in here"
					type="text"
					maxlength="50"
					v-model="clonedTagline"
				/>
				<base-input-error-message
					class="-mt-5"
					v-if="$v.clonedTagline.$error"
					:error-type="'required'"
				/>
				<div class="base-title mb-3">
					share the details
				</div>
				<textarea
					class="input-text w-full h-48 py-3 mb-4 resize-none"
					placeholder="You can type up to 250 characters here"
					v-model="clonedEthos"
				>
				</textarea>
				<base-input-error-message
					v-if="$v.clonedEthos.$error"
					:error-type="'required'"
				/>
			</div>
			<!-- other steps -->
			<div v-else>
				<div
					v-for="(coreValue, index) in $v.clonedCoreValues.$each.$iter"
					:key="index"
					:class="{ hidden: index != currentStep - 2 }"
				>
					<div class="flex justify-between">
						<div class="base-title mb-3">
							REASON NO.{{ parseInt(index) + 1 }}
						</div>
						<img class="w-6" src="/logo-small.svg" />
					</div>
					<input
						class="input-text w-full mb-8"
						placeholder="Type a keyword in here"
						type="text"
						v-model="coreValue.title.$model"
					/>
					<base-input-error-message
						v-if="coreValue.title.$invalid && coreValue.title.$dirty"
						class="-mt-4"
						:error-type="'required'"
					/>
					<div class="base-title mb-3">
						subheader
					</div>
					<input
						class="input-text w-full mb-8"
						placeholder="Type a keyword in here"
						type="text"
						v-model="coreValue.subtitle.$model"
					/>
					<base-input-error-message
						v-if="coreValue.subtitle.$invalid && coreValue.title.$dirty"
						class="-mt-4"
						:error-type="'required'"
					/>
					<div class="base-title mb-3">
						description
					</div>
					<textarea
						class="input-text w-full h-48 mb-4 py-3 resize-none"
						placeholder="You can type up to 250 characters here"
						v-model="coreValue.description.$model"
					>
					</textarea>
					<base-input-error-message
						v-if="coreValue.description.$invalid && coreValue.title.$dirty"
						:error-type="'required'"
					/>
				</div>
			</div>
			<!-- next button -->
			<div class="flex justify-between items-center mt-8">
				<div class="flex">
					<div
						v-for="(step, index) in totalSteps"
						:key="index"
						class="h-3 w-3 mr-3 rounded-full"
						:class="{
							'bg-yellow': index + 1 === currentStep,
							'bg-gray-800': index + 1 !== currentStep
						}"
					></div>
				</div>
				<base-ajax-button :is-loading="isLoading" @click="next">
					{{ currentStep === 4 ? 'Save' : 'Next' }}
				</base-ajax-button>
			</div>
		</template>
	</base-modal>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import BaseModal from '~/components/BaseComponents/BaseModal';
import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';
import mutateStorePropMixin from '~/mixins/base/mutateStorePropMixin';

export default {
	name: 'EditWhyUsModal',

	mixins: [mutateStorePropMixin],

	components: {
		BaseModal,
		BaseAjaxButton,
		BaseInputErrorMessage
	},

	computed: {
		...mapState('employer/whyUs', [
			'tagline',
			'ethos',
			'coreValues'
		]),
		...mapState('employer', ['currentProfileCreationStep']) 
	},

	data() {
		return {
			isActive: false,
			isLoading: false,
			currentStep: 1,
			totalSteps: 4,
			clonedTagline: null,
			clonedEthos: null,
			clonedCoreValues: [],
			isEdit: false
		};
	},

	validations() {
		if (this.currentStep === 1) {
			return {
				clonedTagline: {
					required
				},
				clonedEthos: {
					required
				}
			};
		} else {
			return {
				clonedCoreValues: {
					required,
					$each: {
						title: {
							required
						},
						subtitle: {
							required
						},
						description: {
							required
						}
					}
				}
			};
		}
	},

	created() {
		this.currentStep = 1;
		
		this.$bus.$on('open-employer-why-us-modal', () => {
			this.toggle();
			this.clonedCoreValues = this.coreValues;

			// close the data in the store
			this.clonedCoreValues = JSON.parse(JSON.stringify(this.coreValues));

			while (this.clonedCoreValues.length !== 3) {
				console.log('tes')
				const emptyValue = {
					title: '',
					subtitle: '',
					description: ''
				};
				
				this.clonedCoreValues.push(emptyValue);
			}
		});

		this.$bus.$on('open-employer-edit-why-us-modal', () => {
			this.isEdit = true;

			this.toggle();

			this.clonedTagline = this.tagline;
			this.clonedEthos = this.ethos;
			this.clonedCoreValues = this.coreValues;
			this.currentStep = 1;

			// close the data in the store
			this.clonedCoreValues = JSON.parse(JSON.stringify(this.coreValues));

			while (this.clonedCoreValues.length !== 3) {
				const emptyValue = {
					title: '',
					subtitle: '',
					description: ''
				};
				
				this.clonedCoreValues.push(emptyValue);
			}
		});
	},

	methods: {
		...mapMutations('employer', ['incrementProfileCreationStep']),
		...mapActions('employer/whyUs', ['addWhyUs']),

		next() {
			// this.$v.$touch();
			// if (this.currentStep === 1) {
			// 	if (!this.$v.$invalid) {
			// 		this.goToNextStep();
			// 	}
			// } else if (this.currentStep === 4) {
			// 	if (!this.$v.clonedCoreValues.$each.$iter[2].$invalid) this.submit();
			// } else if (!this.$v.clonedCoreValues.$each.$iter[this.currentStep - 2].$invalid) {
			// 	this.goToNextStep();
			// }
			switch (this.currentStep) {
				case 1:
					this.$v.$touch();
					if (!this.$v.$invalid) return this.goToNextStep();
					break;

				case 2:
					this.$v.clonedCoreValues.$each.$iter[0].$touch();
					if(!this.$v.clonedCoreValues.$each.$iter[0].$invalid) this.goToNextStep(); 
					break;

				case 3:
					this.$v.clonedCoreValues.$each.$iter[1].$touch();
					if(!this.$v.clonedCoreValues.$each.$iter[1].$invalid) this.goToNextStep(); 
					break;

				case 4:
					this.$v.clonedCoreValues.$each.$iter[2].$touch();
					if(!this.$v.clonedCoreValues.$each.$iter[2].$invalid) this.submit(); 
					break;
			}
		},

		goToNextStep() {
			this.currentStep += 1;
		},

		toggle() {
			this.isActive = !this.isActive;
		},

		toggleLoader() {
			this.isLoading = !this.isLoading;
		},

		toggleEdit() {
			this.idEdit = !this.idEdit;
		},

		submit() {
			this.$v.$touch();

			if (!this.$v.$invalid){
				this.add();
			};
		},

		async add() {
			this.toggleLoader();
			try {
				await this.addWhyUs({
					tagline: this.clonedTagline,
					ethos: this.clonedEthos,
					coreValues: this.clonedCoreValues,
				});

				this.toggle();
				if(this.currentProfileCreationStep === 3) this.incrementProfileCreationStep();
			} catch (error) {
				alert('An error happened');
				console.error(error);
			}
			this.toggleLoader();
		},
	}
};
</script>

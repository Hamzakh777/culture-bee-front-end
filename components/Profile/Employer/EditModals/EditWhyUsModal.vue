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
						company tagline
					</div>
					<img class="w-6" src="/logo-small.svg" />
				</div>
				<input
					class="input-text w-full mb-8"
					placeholder="Type a keyword in here"
					type="text"
					v-model="clonedTagline"
				/>
				<base-input-error-message
					class="-mt-5"
					v-if="$v.clonedTagline.$error"
					:error-type="'required'"
				/>
				<div class="base-title mb-3">
					Ethos
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
							core value
						</div>
						<img class="w-6" src="/logo-small.svg" />
					</div>
					<input
						class="input-text w-full mb-8"
						placeholder="Type a keyword in here"
						type="text"
						v-model="coreValue.title.$model"
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
					<div class="base-title mb-3">
						description
					</div>
					<textarea
						class="input-text w-full h-48 py-3 resize-none"
						placeholder="You can type up to 250 characters here"
						v-model="coreValue.description.$model"
					>
					</textarea>
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
		])
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
		});

		this.$bus.$on('open-employer-edit-why-us-modal', () => {
			this.isEdit = true;

			this.toggle();

			this.clonedTagline = this.tagline;
			this.clonedEthos = this.ethos;
			this.clonedCoreValues = this.coreValues;
		})
	},

	methods: {
		...mapMutations('employer', ['nextStep']),
		...mapActions('employer/whyUs', ['addWhyUs']),

		next() {
			this.$v.$touch();
			if (this.currentStep === 1) {
				if (!this.$v.$invalid) {
					this.goToNextStep();
				}
			} else if (this.currentStep === 4) {
				if (!this.$v.clonedCoreValues.$each.$iter[2].$invalid) this.submit();
			} else if (!this.$v.clonedCoreValues.$each.$iter[this.currentStep - 2].$invalid) {
				this.goToNextStep();
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
				this.nextStep();
			} catch (error) {
				alert('An error happened');
				console.error(error);
			}
			this.toggleLoader();
		},
	}
};
</script>

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
					:value="companyTagline"
					@input="setStoreProp('companyTagline', $event.target.value)"
				/>
				<base-input-error-message
					v-if="$v.companyTagline.$error"
					:error-type="'required'"
				/>
				<div class="base-title mb-3">
					Ethos
				</div>
				<textarea
					class="input-text w-full h-48 py-3 resize-none"
					placeholder="You can type up to 250 characters here"
					:value="companyEthos"
					@input="setStoreProp('companyEthos', $event.target.value)"
				>
				</textarea>
				<base-input-error-message
					v-if="$v.companyEthos.$error"
					:error-type="'required'"
				/>
			</div>
			<!-- other steps -->
			<div v-else>
				<div
					v-for="(coreValue, index) in $v.values.$each.$iter"
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
import { mapState, mapMutations } from 'vuex';
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

	watch: {
		values: {
			handler(newVal) {
				this.setStoreProp('coreValues', newVal);
			},
			deep: true
		}
	},

	computed: {
		...mapState('employer', [
			'companyTagline',
			'companyEthos',
			'coreValues'
		])
	},

	data() {
		return {
			isActive: false,
			isLoading: false,
			currentStep: 1,
			totalSteps: 4,
			values: []
		};
	},

	validations() {
		if (this.currentStep === 1) {
			return {
				companyTagline: {
					required
				},
				companyEthos: {
					required
				}
			};
		} else {
			return {
				values: {
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
		this.$bus.$on('open-employer-why-us-modal', () => {
			this.isActive = true;
		});

		this.values = JSON.parse(JSON.stringify(this.coreValues));
	},

	methods: {
		...mapMutations('employer', ['mutate']),

		next() {
			this.$v.$touch();
			if (this.currentStep === 1) {
				if (!this.$v.$invalid) {
					this.goToNextStep();
				}
			} else if (this.currentStep === 4) {
				if (this.$v.values.$each[4]) this.submit();
			} else {
				if (this.$v.values.$each[this.currentStep - 2]) {
					this.goToNextStep();
				}
			}
		},

		goToNextStep() {
			this.currentStep += 1;
		},

		toggle() {
			this.isActive = !this.isActive;
		},

		submit() {
			console.log('save it to the baaackend');
			// validate 

			// go to the section that's not valid
			
		}
	}
};
</script>

<template>
	<div class="py-8">
		<div class="mb-4">
			<!-- company name -->
			<input
				v-if="userType === 'employer'"
				class="input-text"
				type="text"
				placeholder="Company name"
				:value="companyName"
				@input="setStoreProp('companyName', $event.target.value)"
			/>
			<div v-if="userType === 'employer'">
				<base-input-error-message
					v-if="$v.companyName.$error"
					:error-type="'required'"
				/>
			</div>
			<!-- location -->
			<input
				class="input-text"
				type="search"
				id="address-input"
				placeholder="Location"
				:value="location"
				@input="setStoreProp('location', $event.target.value)"
			/>
			<!-- Your industry -->
			<v-select
				class="mb-4"
				:value="industry"
				@input="setStoreProp('industry', $event.Description)"
				:options="industries"
				:max-height="'250px'"
				label="Description"
				placeholder="Your industry"
			/>
			<base-input-error-message
				v-if="$v.industry.$error"
				:error-type="'required'"
			/>
			<!-- your skills -->
			<v-select
				v-if="userType === 'job-seeker'"
				placeholder="Your skills"
				:options="['skill 1', 'skill 2']"
				multiple
				@input="setStoreProp('skills', $event)"
			/>
		</div>
		<steps-nav :is-last-step="true" @prev="previousStep" @next="submit" />
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import vSelect from 'vue-select';
import StepsNav from './StepsNav';
import industries from '~/assets/data/account/industries';
import mutateStorePropMixin from '~/mixins/base/mutateStorePropMixin';
import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';

export default {
	name: 'StepAboutUser',

	mixins: [mutateStorePropMixin],

	components: {
		vSelect,
		StepsNav,
		BaseInputErrorMessage
	},

	computed: {
		...mapState('account', [
			'userType',
			'industry',
			'companyName',
			'skills',
			'location'
		])
	},

	data() {
		return {
			industries,
			placesInstance: null
		};
	},

	validations() {
		if (this.userType === 'job-seeker') {
			return {
				industry: {
					required
				}
			};
		} else {
			return {
				industry: {
					required
				},
				companyName: {
					require
				}
			};
		}
	},

	mounted() {
		if (process.browser) {
			const places = require('places.js');

			this.placesInstance = places({
				appId: process.env.VUE_APP_ALGOLIA_PLACES_APP_ID,
				apiKey: process.env.VUE_APP_ALGOLIA_PLACES_APP_KEY,
				container: document.querySelector('#address-input')
			});

			this.placesInstance.on('change', e => {
				this.setStoreProp('location', e.suggestion.value);
			});
		}
	},

	methods: {
		...mapMutations('account', ['mutate', 'previousStep']),
		...mapActions('account', ['update']),

		toggleLoader() {
			this.isLoading = !this.isLoading;
		},

		async submit() {
			this.$v.$touch();
			if (this.$v.$invalid) return;

			this.toggleLoader();
			try {
				const response = await this.update();

				console.log(response);
				this.toggleLoader();
			} catch (error) {
				console.error(error);
				this.toggleLoader();
			}
		}
	}
};
</script>
<style scoped>
.input-text {
	@apply mb-4 w-full;
}
</style>

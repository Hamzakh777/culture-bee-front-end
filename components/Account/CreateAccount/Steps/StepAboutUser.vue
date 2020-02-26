<template>
	<div class="py-8">
		<div class="mb-4">
			<!-- location -->
			<input
				id="address-input"
				class="input-text"
				type="search"
				placeholder="Location"
				:value="location"
				@input="setLocation($event.target.value)"
			/>
			<!-- Your industry -->
			<v-select
				class="mb-4"
				@input="setStoreProp('industry', $event !== null ? $event.description : null)"
				:options="industries"
				:max-height="'250px'"
				label="description"
				placeholder="Your industry"
			/>
			<base-input-error-message
				v-if="$v.industry.$error"
				:error-type="'required'"
			/>
			<!-- your skills -->
			<v-select
				v-if="role === 'job-seeker'"
				placeholder="Your skills"
				taggable
				:options="[]"
				multiple
				@input="setStoreProp('skills', $event)"
			/>
		</div>
		<steps-nav 
			:is-last-step="true" 
			@prev="previousStep" 
			@next="submit" 
			:is-loading="false"
		/>
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
			'role',
			'industry',
			'skills',
			'location',
			'id'
		])
	},

	data() {
		return {
			industries,
			placesInstance: null,
			isLoading: false
		};
    },
    
    validations: {
		industry: {
			required
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

			this.placesInstance.on('clear', () => {
				this.setStoreProp('location', '');
			});
		}
	},

	methods: {
		...mapMutations('account', ['mutate', 'previousStep']),
		...mapActions('account', ['update']),

		toggleLoader() {
			this.isLoading = !this.isLoading;
		},

		redirectAfterRegistration() {
			const route = this.role === 'job-seeker' ? '/feed' : `/employer/${this.id}/edit`;

			this.$router.push({
				path: route
			});

			// set the registration step to 1
			setTimeout(() => {
				this.setStoreProp('currentStep', 1);
			}, 2000);
		},

		setLocation(location) {
			this.setStoreProp('location', location);
		},

		async submit() {
			this.$v.$touch();
			if (this.$v.$invalid) return;
			this.toggleLoader();

			try {
                await this.update();

				this.toggleLoader();
				this.redirectAfterRegistration();
			} catch (error) {
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

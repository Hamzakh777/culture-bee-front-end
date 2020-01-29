<template>
	<div class="py-8">
		<div class="mb-4">
			<div
				class="px-4 mb-2 text-sm text-pink-500"
				v-if="isEmailOrPasswordFalse"
			>
				Email or password is wrong, please verify your credentials
			</div>
			<!-- company name -->
			<input
				class="input-text block w-full mb-5"
				type="email"
				placeholder="Email"
				v-model="email"
			/>
			<base-input-error-message
				class="-mt-2 mb-2"
				v-if="!$v.email.required && $v.email.$error"
				:error-type="'required'"
			/>
			<base-input-error-message
				class="-mt-2 mb-2"
				v-if="!$v.email.email && $v.email.$error"
				:error-type="'email'"
			/>
			<!-- password -->
			<input
				class="input-text block w-full mb-5"
				type="password"
				placeholder="password"
				v-model="password"
			/>
			<base-input-error-message
				class="-mt-2 mb-2"
				v-if="!$v.password.required && $v.password.$error"
				:error-type="'required'"
			/>
			<base-input-error-message
				class="-mt-2 mb-2"
				v-if="!$v.password.minLength && $v.password.$error"
				:error-type="'password-min-length-8'"
			/>
			<base-ajax-button
				class="w-full"
				:is-loading="isLoading"
				@click="login"
			>
				Login
			</base-ajax-button>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import { required, email } from 'vuelidate/lib/validators';
import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';
import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';

export default {
	name: 'LoginForm',

	components: {
		BaseInputErrorMessage,
		BaseAjaxButton
	},

	data() {
		return {
			email: null,
			password: null,
			isLoading: false,
			isEmailOrPasswordFalse: false
		};
	},

	validations: {
		email: {
			required,
			email
		},
		password: {
			required
		}
	},

	methods: {
		...mapMutations('account', ['setToken']),
		...mapActions('account', ['getLogedInUser']),

		async login() {
			this.$v.$touch();
			if (this.$v.$invalid) return;

			this.toggleLoader();
			try {
				const body = {
					email: this.email,
					password: this.password
				};

				// eslint-disable-next-line no-undef
				const response = await this.$axios.post('api/login', body);

				const token = response.data.access_token;
				this.$axios.defaults.headers.common.Authorization =
					'Bearer ' + token;

				this.setToken(token);
				this.toggleLoader();
				this.getLogedInUser();
                this.$router.push({
                    path: '/feed'
				});
				
			} catch (error) {
				this.toggleLoader();
				// credentials are wrong
				if (error.response.status === 400) {
					this.isEmailOrPasswordFalse = true;
					setTimeout(() => {
						this.isEmailOrPasswordFalse = false;
					}, 5000);
				}
			}
		},

		toggleLoader() {
			this.isLoading = !this.isLoading;
		}
	}
};
</script>

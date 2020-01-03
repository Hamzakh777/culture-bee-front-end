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
            >
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
            <!-- location -->
            <input 
                class="input-text block w-full mb-5"
                type="password"
                placeholder="password"
                v-model="password"
            >
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
            >
                Login
            </base-ajax-button>
        </div>
    </div>
</template>

<script>
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
    }
</script>
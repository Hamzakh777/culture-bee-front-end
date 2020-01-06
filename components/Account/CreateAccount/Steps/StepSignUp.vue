<template>
    <div class="py-12">
        <input 
            class="input-text"
            type="email"
            placeholder="Email"
            :value="email"
            @input="setProperty('email', $event.target.value)"
        >
        <base-input-error-message 
            v-if="!$v.email.required && $v.email.$error"
            :error-type="'required'"
        />
        <base-input-error-message 
            v-if="!$v.email.email && $v.email.$error"
            :error-type="'email'"
        />
        <base-input-error-message 
            v-if="isEmailAlreadyInUse"
            custom-message='Email is already in use'
        />
        <!-- password -->
        <input 
            class="input-text"
            type="password"
            placeholder="Password"
            v-model="password"
        >
        <base-input-error-message 
            v-if="!$v.password.required && $v.password.$error"
            :error-type="'required'"
        />
        <base-input-error-message 
            v-if="!$v.password.minLength && $v.password.$error"
            :error-type="'password-min-length-8'"
        />
        <!-- repeat password -->
        <input 
            class="input-text"
            type="password"
            placeholder="Confirm password"
            v-model="repeatPassword"
        >
        <base-input-error-message 
            v-if="!$v.repeatPassword.sameAsPassword && $v.repeatPassword.$error"
            :error-type="'same-as-password'"
        />
        <!-- terms and conditions -->
        <div class="mt-4 mb-6">
            <div class="flex flex-row items-center">
                <div class="self-start mt-5">
                    <base-radio-button 
                        :value="true"
                        v-model="acceptTermsAndPrivacyUse"
                    />
                </div>
                <div class="pl-6 text-xs">
                    <p class="font-medium text-gray-800">By signing up to CultureBee, you are agreeing to our Terms of Use and Privacy Policy</p>
                    <base-input-error-message 
                        class="-ml-4 pt-3"
                        v-if="!$v.acceptTermsAndPrivacyUse.required && $v.acceptTermsAndPrivacyUse.$error"
                        :error-type="'accept-t&p'"
                    />
                </div>
            </div>
        </div>
        <!-- sign up button -->
        <div class="flex flex-col items-center md:flex-row-reverse md:justify-between">
            <base-ajax-button
                class="primary-btn w-full md:w-auto mb-6 md:mb-0"
                @click="signUp"
                :is-loading="isLoading"
            >
                Sign up
            </base-ajax-button>
            <button
                class="secondary-btn"
                @click.prevent="previousStep"
            >
                Back
            </button>
    </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import {required, email, minLength, sameAs} from 'vuelidate/lib/validators';
    import BaseRadioButton from '../../../BaseComponents/BaseRadioButton';
    import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';
    import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';


    export default {
        name: 'StepSignUp', 

        components: {
            BaseRadioButton,
            BaseInputErrorMessage,
            BaseAjaxButton
        },

        computed: {
            ...mapState('account', ['email', 'userType'])
        },

        validations: {
            email: {
                required, 
                email	
            },
            password: {
                required,
                minLength: minLength(8)
            },
            repeatPassword: {
                sameAsPassword: sameAs('password')
            },
            acceptTermsAndPrivacyUse: {
                required
            }
        },

        data() {
            return {
                password: null,
                repeatPassword: null,
                acceptTermsAndPrivacyUse: false,
                isLoading: false,
                isEmailAlreadyInUse: false
            }
        },

        methods: {
            ...mapMutations('account', ['mutate', 'nextStep', 'previousStep', 'setToken']),
            /**
             * @param {String} property - the property to mutate in the store
             * @param {*} value - the mutated property new value
             */
            setProperty(property, value) {
                const payload = {
                    property,
                    with: value
                };

                this.mutate(payload);
            },

            toggleLoader() {
                this.isLoading = !this.isLoading;
            },

            async signUp() {
                this.$v.$touch();
                if(this.$v.$invalid) return;

                try {
                    const body = {
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.repeatPassword,
                        role: this.userType
                    };
                    const response = await this.$axios.post('https://culture-bee-back-end.test/api/register', body);

                    this.toggleLoader();

                    if(response.data.original !== undefined){ 
                        this.isEmailAlreadyInUse = true;
                        setTimeout(() => {
                            this.isEmailAlreadyInUse = false;
                        }, 5000);
                        this.toggleLoader();
                    } else { 
                        const token = response.data.access_token;
                        this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

                        this.toggleLoader();
                        this.setToken(token);
                        this.nextStep();
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>
<style scoped>
.input-text {
    @apply mb-4 w-full;
}
</style>
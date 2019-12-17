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
        <div class="flex flex-col items-center">
            <button
                class="primary-btn w-full mb-6"
                @click.prevent="signUp"
            >
                Sign up
            </button>
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


    export default {
        name: 'StepSignUp', 

        components: {
            BaseRadioButton,
            BaseInputErrorMessage
        },

        computed: {
            ...mapState('account/create', ['email'])
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
                acceptTermsAndPrivacyUse: false
            }
        },

        methods: {
            ...mapMutations('account/create', ['mutate', 'nextStep', 'previousStep']),
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

            signUp() {
                this.$v.$touch();
                if(!this.$v.$invalid) {
                    this.nextStep();
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
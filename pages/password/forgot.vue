<template>
    <div 
        class="fixed inset-0 z-50 md:flex bg-white overflow-y-auto"
    >
        <div 
            class="md:flex justify-center items-center md:w-1/2 bg-gray-to-black pb-5"
        >
            <login-nav class="md:hidden"/>
            <div class="w-full">
                <img
                    class="hidden md:block mb-4 md:mb-0 mx-auto h-10"
                    src="/logo-big-light.png"
                />
                <div>
                    <div class="px-4 text-white">
                        <div class="py-6 md:py-14 text-center">
                            <div class="mb-4">
                                <h4
                                    class="section-title section-title-light md:mb-6 uppercase"
                                >
                                    Forgot password
                                </h4>
                                <p
                                    class="hidden md:block max-w-xs mx-auto font-bold text-5-3/4 text-center"
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:flex justify-center items-center relative md:w-1/2 px-4 md:px-8">
            <login-nav class="hidden md:flex absolute top-0 inset-x-0"/>
            <div class="w-full max-w-md">
                <div class="py-8">
                    <div class="mb-4">
                        <!-- forgot password form  -->
                        <div
                            v-if="message === ''"
                        >
                            <p class="p mb-4">
                                Enter the email addressed associated with your account and we’ll
                                send a email with instruction to reset your password
                            </p>
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
                            <!-- reset button  -->
                            <base-ajax-button
                                class="w-full"
                                :is-loading="isLoading"
                                @click="resetPassword"
                            >
                                Reset
                            </base-ajax-button>
                        </div>
                        <!-- response message  -->
                        <div 
                            v-else
                        >
                            <p>
                                {{ message }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators';
    import baseToggleLoaderMixin from '~/mixins/base/baseToggleLoaderMixin';
    import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';
    import LoginNav from '~/components/Account/Login/LoginNav';
    import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';

    export default {
        mixins: [baseToggleLoaderMixin],

        components: {
            BaseInputErrorMessage,
            LoginNav,
            BaseAjaxButton
        },
    
        data() {
            return {
                email: '',
                message: ''
            }
        },

        validations: {
            email: {
                email,
                required
            }
        },

        methods: {
            async resetPassword() {
                this.$v.$touch();
                if (this.$v.$invalid) return;
                
                this.toggleLoader();
                try {
                    await this.$axios.post('api/password/email', {
                        email: this.email
                    });

                    this.showSuccessMessage();
                } catch (error) {
                    this.showErrorMessage();
                } finally {
                    this.toggleLoader();
                }
            },
            
            showSuccessMessage() {
                this.message = 'We sent you an email with the steps to reset your password, it may take up to 5mins to show up in your inbox';
            },

            showErrorMessage() {
                this.message = 'An error happend trying to reset your email, please make sure the email is correct and that it exists in our database';
            }
        }
    }
</script>
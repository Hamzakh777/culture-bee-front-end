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
                            <!-- email -->
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
                                v-model="password"
                                class="input-text block w-full mb-5"
                                type="password"
                                placeholder="Password"
                            />
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
                                v-model="repeatPassword"
                                class="input-text block w-full mb-5"
                                type="password"
                                placeholder="Confirm password"
                            />
                            <base-input-error-message
                                v-if="!$v.repeatPassword.sameAsPassword && $v.repeatPassword.$error"
                                :error-type="'same-as-password'"
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
    import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';
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
                message: '',
                password: null,
                repeatPassword: null,
                token: null
            }
        },

        created() {
            if(process.browser ) {
                const { token } = this.$route.query;

                if(token === undefined) {
                    // this.$router.push({
                    //     path: '/404'
                    // });
                } else {
                    this.token = token;
                    localStorage.removeItem('access_token');
                }
            }
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
            }
        },

        methods: {
            async resetPassword() {
                this.$v.$touch();
                if (this.$v.$invalid) return;

                this.toggleLoader();
                try {
                    const response = await this.$axios.post('/api/password/reset', {
                        token: this.token,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.repeatPassword
                    });

                    response.data.status === 'success' ?
                        this.showSuccessMessage() :
                        this.showErrorMessage(); 
                } catch (error) {
                    alert(error);
                } finally {
                    this.toggleLoader();
                }
            },

            showSuccessMessage() {
                this.message = "Your password has been reset succesfully, you'll be redirected to the home page where you can login";
                this.redirect();
            },

            showErrorMessage() {
                this.message = "Your password reset has faild, you'll be redirected to the login page where you can request to reset your password again";
                this.redirect();
            },

            redirect() {
                setTimeout(() => {
                    window.location = '/login';
                }, 8000);
            }
        }
    }
</script>
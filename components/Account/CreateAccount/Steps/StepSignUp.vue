<template>
    <div>
        <input 
            class="input-text"
            type="email"
            placeholder="Email"
        >
        <input 
            class="input-text"
            type="password"
            placeholder="Password"
        >
        <input 
            class="input-text"
            type="password"
            placeholder="Confirm password"
        >
        <div class="flex flex-row items-center mt-4 mb-6">
            <div>
                <base-radio-button />
            </div>
            <div class="pl-6 text-xs font-medium text-gray-800">
                By signing up to CultureBee, you are agreeing to our Terms of Use and Privacy Policy
            </div>
        </div>
        <button
            class="primary-btn w-full"
            @click.prevent="signUp"
        >
            Sign up
        </button>
    </div>
</template>

<script>
    import BaseRadioButton from '../../../BaseComponents/BaseRadioButton';

    export default {
        name: 'StepSignUp', 

        components: {
            BaseRadioButton
        },

        methods: {
            signUp() {
                console.log('sign up');
            }
        }
    }
</script>
<style scoped>
.input-text {
    @apply mb-4 w-full
}
</style>
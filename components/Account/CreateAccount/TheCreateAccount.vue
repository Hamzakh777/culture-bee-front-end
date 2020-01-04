<template>
    <div 
        class="fixed inset-0 z-50 md:flex bg-white overflow-y-auto"
    >
        <div 
            class="md:flex justify-center items-center md:w-1/2 bg-gray-to-black pb-5"
        >
            <create-account-nav class="md:hidden"/>
            <create-account-slider />
        </div>
        <div class="md:flex justify-center items-center relative md:w-1/2 px-4 md:px-8">
            <create-account-nav class="hidden md:flex absolute top-0 inset-x-0"/>
            <div class="w-full max-w-md">
                <step-user-type v-if="currentStep === 1"/>
                <step-sign-up v-else-if="currentStep === 2"/>
                <step-profile-details v-else-if="currentStep === 3"/>
                <step-about-user v-else-if="currentStep === 4" />
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import CreateAccountNav from './CreateAccountNav';
    import CreateAccountSlider from './CreateAccountSlider';
    import StepUserType from './Steps/StepUserType';
    import StepSignUp from './Steps/StepSignUp';
    import StepProfileDetails from './Steps/StepProfileDetails';
    import StepAboutUser from './Steps/StepAboutUser';

    export default {
        name: 'TheCreateAccount',

        components: {
            CreateAccountNav,
            CreateAccountSlider,
            StepUserType,
            StepSignUp,
            StepProfileDetails,
            StepAboutUser
        },

        computed: {
            ...mapState('account/create', ['currentStep'])
        },

        data() {
            return {
                userType: null
            }
        }
    }
</script>
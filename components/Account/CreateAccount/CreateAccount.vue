<template>
    <div class="fixed inset-0 z-50 bg-white overflow-y-auto">
        <div 
            class="bg-gray-to-black pb-5"
        >
            <create-account-nav />
            <create-account-slider :current-step="currentStep" />
        </div>
        <div class="px-4 pb-20">
            <div>
                <step-user-type/>
                <step-sign-up/>
                <step-profile-details/>
            </div>
        </div>
    </div>
</template>

<script>
    import CreateAccountNav from './CreateAccountNav';
    import CreateAccountSlider from './CreateAccountSlider';
    import StepUserType from './Steps/StepUserType';
    import StepSignUp from './Steps/StepSignUp';
    import StepProfileDetails from './Steps/StepProfileDetails';

    export default {
        name: 'CreateAccount',

        components: {
            CreateAccountNav,
            CreateAccountSlider,
            StepUserType,
            StepSignUp,
            StepProfileDetails
        },

        data() {
            return {
                currentStep: 1,
                userType: null
            }
        }
    }
</script>
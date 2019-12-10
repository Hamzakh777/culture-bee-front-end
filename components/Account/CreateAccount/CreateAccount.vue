<template>
    <div class="fixed inset-0 z-50 bg-white">
        <div 
            class="bg-gray-to-black"
        >
            <create-account-nav />
            <create-account-slider :current-step="currentStep" />
        </div>
        <div>

        </div>
    </div>
</template>

<script>
    import CreateAccountNav from './CreateAccountNav';
    import CreateAccountSlider from './CreateAccountSlider';

    export default {
        name: 'CreateAccount',

        components: {
            CreateAccountNav,
            CreateAccountSlider
        },

        data() {
            return {
                currentStep: 1
            }
        },
    }
</script>
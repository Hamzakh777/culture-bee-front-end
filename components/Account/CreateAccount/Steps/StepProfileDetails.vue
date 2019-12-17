<template>
    <div class="py-6">
        <div class="flex items-end mb-6">
            <div class="flex justify-center items-center p-3 w-20 h-20 border-2 border-gray-700 bg-yellow">
                <img 
                    src="/images/global/icons/smile-face.png"
                >
            </div>
            <label class="relative ml-4 font-medium text-gray-800 cursor-pointer underline">
                <input
                    class="absolute h-0 w-0 opacity-0" 
                    type="file"
                >
                Upload your profile photo
            </label>
        </div>
        <input 
            class="input-text w-full mb-4"
            type="text"
            placeholder="Name"
            :value="name"
            @input="setName($event.target.value)"
        >
        <base-input-error-message 
            v-if="!$v.name.required && $v.name.$error"
            :error-type="'required'"
        />
        <base-input-error-message 
            v-if="!$v.name.minLength && $v.name.$error"
            :error-type="'min-length-3'"
            :custom-message="'A name min length is 3'"
        />
        <steps-nav
            @next="validate"
            :no-prev="true"
        />
    </div>
</template>

<script>
    import {required, minLength} from 'vuelidate/lib/validators';
    import { mapState, mapMutations } from 'vuex';
    import StepsNav from './StepsNav';
    import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';

    export default {
        name: 'StepProfileDetails',

        components: {
            StepsNav,
            BaseInputErrorMessage
        },

        computed: {
            ...mapState('account/create', ['name'])
        },

        validations: {
            name: {
                required, 
                minLength: minLength(3)
            }
        },

        methods: {
            ...mapMutations('account/create', ['mutate', 'nextStep', 'previousStep']),

            setName(name) {
                console.log(name);
                const payload = {
                    property: 'name',
                    with: name
                };

                this.mutate(payload);
            },

            validate() {
                this.$v.$touch();
                if(!this.$v.$invalid) {
                    this.nextStep();
                }
            }
        }
    }
</script>
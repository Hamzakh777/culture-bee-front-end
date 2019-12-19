<template>
    <div class="py-6 mt-6">  
        <div class="section-title mb-5 text-center">who are you?</div> 
        <button
            class="primary-btn block mb-4 py-4 w-full border-2 border-gray-800 text-3-1/2 hover:bg-transparent"
            :class="{'bg-gray-to-black text-white': type.value === userType, 'bg-transparent text-gray-800': type.value !== userType}"
            v-for="(type, index) in userTypes"
            :key="index"
            @click.prevent="setUserType(type.value)"
        >
            {{ type.title }}
        </button>
        <base-input-error-message 
            v-if="$v.userType.$error"
            :error-type="'required'"
        />
        <button 
            class="primary-btn block py-4 w-full"
            @click.prevent="validate"
        >
            next
        </button>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import {required} from 'vuelidate/lib/validators';
    import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';

    export default {
        name: 'StepUserType',

        components: {
            BaseInputErrorMessage
        },

        computed: {
            ...mapState('account/create', ['userType'])
        },

        data() {
            return {
                userTypes: [
                    {
                        title: `I'm a job seeker`,
                        value: 'job-seeker'
                    },
                    {
                        title: `I'm an employer`,
                        value: 'employer'
                    },
                ]
            }
        },

        validations: {
            userType: {
                required
            }
        },

        methods: {
            ...mapMutations('account/create', ['mutate', 'nextStep']),

            /**
             * @param {String} type
             */
            setUserType(type) {
                try {
                    const payload = {
                        property: 'userType',
                        with: type
                    };

                    this.mutate(payload);
                } catch (error) {
                    console.error(error)
                }
            },

            /**
             * Validate if an option has been select
             * and go to next step
             */
            validate() {
                this.$v.$touch();
                if(!this.$v.$invalid) {
                    this.nextStep();
                }
            }
        }
    }
</script>
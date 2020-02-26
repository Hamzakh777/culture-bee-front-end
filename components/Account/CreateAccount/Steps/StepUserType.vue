<template>
    <div class="py-6 mt-6">  
        <div class="section-title md:mt-14 mb-5 text-center">who are you?</div> 
        <button
            class="primary-btn block mb-4 py-4 w-full border-2 border-gray-800 text-3-1/2 hover:bg-transparent"
            :class="{'bg-gray-to-black text-white': type.value === role, 'bg-transparent text-gray-800': type.value !== role}"
            v-for="(type, index) in roles"
            :key="index"
            @click.prevent="setrole(type.value)"
        >
            {{ type.title }}
        </button>
        <base-input-error-message 
            v-if="$v.role.$error"
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
        name: 'Steprole',

        components: {
            BaseInputErrorMessage
        },

        computed: {
            ...mapState('account', ['role'])
        },

        data() {
            return {
                roles: [
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
            role: {
                required
            }
        },

        methods: {
            ...mapMutations('account', ['mutate', 'nextStep']),

            /**
             * @param {String} type
             */
            setrole(type) {
                try {
                    const payload = {
                        property: 'role',
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
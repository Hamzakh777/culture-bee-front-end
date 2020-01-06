<template>
    <div class="py-8">
        <div class="mb-4">
            <!-- company name -->
            <input 
                v-if="userType === 'employer'"
                class="input-text"
                type="text"
                placeholder="Company name"
            >
            <!-- location -->
            <input 
                class="input-text"
                type="search"
                id="address-input"
                placeholder="Location"
            >
            <!-- Your industry -->
            <v-select 
                class="mb-4"
                :value="industry"
                @input="mutateStoreProp('industry', $event)"
                :options="industries"
                placeholder="Your industry"
            />
            <!-- your skills -->
            <v-select 
                v-if="userType === 'job-seeker'"
                placeholder="Your skills" 
                :options="['skill 1', 'skill 2']"
                multiple
            />
        </div>
        <steps-nav 
            :is-last-step="true"
            @prev="previousStep"
        />
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import vSelect from 'vue-select';
    import StepsNav from './StepsNav';

    export default {
        name: 'StepAboutUser',

        components: {
            vSelect,
            StepsNav
        },

        computed: {
            ...mapState('account', ['userType', 'industry'])
        },

        data() {
            return {
                industries: ['Industry 1', 'Industry 2', 'Industry 3']
            }
        },

        mounted() {
            if(process.browser) {
                const places = require('places.js');

                places({
                    appId: process.env.VUE_APP_ALGOLIA_PLACES_APP_ID,
                    apiKey: process.env.VUE_APP_ALGOLIA_PLACES_APP_KEY,
                    container: document.querySelector('#address-input')
                });
            }
        },

        methods: {
            ...mapMutations('account', ['mutate', 'previousStep']),

            /**
             * Mutate a property in the store
             * @param {String} - the name of property
             * @param {*} - the value of the property
             */
            mutateStoreProp(name, value) {
                const payload = {
                    property: name,
                    with: value
                };

                this.mutate(payload);
            }
        }
    }
</script>
<style scoped>
.input-text {
    @apply mb-4 w-full;
}
</style>
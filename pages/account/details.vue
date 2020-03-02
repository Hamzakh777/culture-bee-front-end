<template>
    <div class="pl-40 mb-26">
         <div class="flex items-end mb-18">
            <div 
                class="flex justify-center items-center p-3 w-45 h-45 border-2 border-gray-700 bg-yellow bg-center bg-cover bg-no-repeat"
            >
                <span 
                    class="text-5xl font-D-Din font-bold text-gray-800"
                    v-if="!profileImgFile"
                >
                    {{ nameInitials }}
                </span>
            </div>
            <client-only>
                <file-upload
                    class="relative ml-4 font-medium text-gray-800 cursor-pointer underline"
                    extensions="jpg,jpeg,png"
                    accept="image/png,image/jpeg,image/jpg"
                    :multiple="false"
                    :size="1024 * 1024"
                    @input-filter="inputFilter"
                    @input-file="inputFile"
                >
                    Edit your profile photo
                </file-upload>
            </client-only>
        </div>
        <div class="w-full">
            <!-- name -->
            <div class="form-group">
                <label class="input-label">
                    Name
                </label>
                <input 
                    class="input-text"
                    type="text"
                    :value="name"
                    @input="setStoreProp('name', $event.target.value)"
                >
                <base-input-error-message 
                    v-if="$v.companyName.$error"
                    :error-type="'required'"
                />
            </div>
            <!-- Company name -->
            <div class="form-group">
                <label class="input-label">
                    Company name
                </label>
                <input 
                    class="input-text"
                    type="text"
                    :value="companyName"
                    @input="setStoreProp('companyName', $event.target.value)"
                >
                <base-input-error-message 
                    v-if="$v.name.$error"
                    :error-type="'required'"
                />
            </div>
            <!-- location -->
            <div class="form-group">
                <label class="input-label">
                    Location
                </label>
                <input 
                    class="input-text"
                    type="search"
                    id="address-input"
                    placeholder="Location"
                    :value="location"
                    @input="setStoreProp('location', $event.target.value)"
                >
            </div>
            <!-- Industry -->
            <div class="form-group">
                <label class="input-label">
                    Name
                </label>
                <v-select 
                    class="mb-4"
                    :value="industry"
                    @input="setStoreProp('industry', $event)"
                    :options="industries"
                    placeholder="Your industry"
                />
            </div>
            <div class="clearfix mt-12">
                <base-ajax-button
                    class="float-right px-16"
                    :is-dark="true"
                    :is-loading="isLoading"
                    @click="update"
                >
                    Save
                </base-ajax-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapMutations } from 'vuex';
    import {required} from 'vuelidate/lib/validators';
    import FileUpload from 'vue-upload-component';
    import vSelect from 'vue-select';
    import industries from '~/assets/data/account/industries'; 
    import mutateStorePropMixin from '~/mixins/base/mutateStorePropMixin';
    import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
    import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';

    export default {
        layout: 'accountDetails',

        mixins: [mutateStorePropMixin],

        components: {
            FileUpload,
            vSelect,
            BaseAjaxButton,
            BaseInputErrorMessage
        },

        computed: {
            ...mapGetters('user', ['nameInitials']),
            ...mapState('user', ['profileImgUrl', 'name', 'location', 'industry', 'companyName', 'profileImgFile'])
        },

        data() {
            return {
                industries,
                isLoading: false,
                placesInstance: null
            }
        },

        head() {
            return {
                title: 'CultureBee - The Company Culture Curator - Account'
            };
        },

        validations: {
            name: {
                required
            },
            companyName: {
                required
            }
        },

        mounted() {
            if(process.browser) {
                const places = require('places.js');

                this.placesInstance = places({
                    appId: process.env.VUE_APP_ALGOLIA_PLACES_APP_ID,
                    apiKey: process.env.VUE_APP_ALGOLIA_PLACES_APP_KEY,
                    container: document.querySelector('#address-input')
                });

                this.placesInstance.on('change', e => {
                    this.setStoreProp('location', e.suggestion.value);
                });

                this.placesInstance.on('clear', () => {
                    this.setStoreProp('location', '');
                });
            }
        },

        methods: {
            ...mapMutations('user', ['mutate']),

            update() {
                this.$v.$touch();

                if(!this.$v.$invalid) {

                };
            },

            inputFile(newFile, oldFile, prevent) {
                if (newFile && !oldFile) {
                    // add
                    this.setStoreProp('profileImgFile', newFile);
                }
                if (!newFile && oldFile) {
                    // remove
                    this.setStoreProp('profileImgFile', newFile);
                }
            },

            inputFilter(newFile, oldFile, prevent) {
                if (newFile && !oldFile) {
                    if (!/\.(jpg|jpeg|png)$/i.test(newFile.name)) {
                        this.alert('Your choice is not a picture');
                        return prevent();
                    }
                }
                if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
                    newFile.url = '';
                    const URL = window.URL || window.webkitURL;

                    if (URL && URL.createObjectURL) {
                        newFile.url = URL.createObjectURL(newFile.file);
                    }
                }
            },
        }
    }
</script>
<style scoped>
.input-label {
    @apply inline-block mb-4;
}
.input-text {
    @apply w-full mb-8;
}
</style>
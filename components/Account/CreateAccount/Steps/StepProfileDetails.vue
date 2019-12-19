<template>
    <div class="py-6">
        <div class="flex items-end mb-6">
            <div 
                class="flex justify-center items-center p-3 w-20 h-20 border-2 border-gray-700 bg-yellow bg-center bg-cover bg-no-repeat"
                :style="'background-image: url(' + (files.length ? files[0].url : '/images/global/icons/smile-face.png') + '); background-size:' + (files.length ? 'cover' : '90% 90%') "
            >
                <!-- <img 
                    :src="files.length ? files[0].url : '/images/global/icons/smile-face.png'"
                > -->
            </div>
            <file-upload
                class="relative ml-4 font-medium text-gray-800 cursor-pointer underline"
                extensions="gif,jpg,jpeg,png,webp"
                accept="image/png,image/gif,image/jpeg,image/webp"
                name="avatar"
                v-model="files"
                @input-file="inputFile"
                ref="upload"
            >
                Upload your profile photo
            </file-upload>
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
    import FileUpload from 'vue-upload-component';
    import StepsNav from './StepsNav';
    import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';


    export default {
        name: 'StepProfileDetails',

        components: {
            StepsNav,
            BaseInputErrorMessage,
            FileUpload
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

        data() {
            return {
                files: []
            }
        },

        methods: {
            ...mapMutations('account/create', ['mutate', 'nextStep', 'previousStep']),

            inputFile(newFile, oldFile) {
                if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
                    newFile.url = ''
                    const URL = window.URL || window.webkitURL;
                    if (URL && URL.createObjectURL) {
                        newFile.url = URL.createObjectURL(newFile.file);
                    }
                    this.files.push(newFile);
                }
            },

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
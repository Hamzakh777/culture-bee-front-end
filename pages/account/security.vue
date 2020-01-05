<template>
    <div class="pl-40 mb-26">
        <div class="section-title mb-8">
            password
        </div>
        <div class="w-full">
            <div class="form-group">
                <label class="input-label">
                    Current password
                </label>
                <input 
                    class="input-text"
                    type="password"
                    v-model="currentPassword"
                >
                <base-input-error-message 
                    v-if="$v.currentPassword.$error"
                    :error-type="'required'"
                />
            </div>
            <!-- new password  -->
            <div class="form-group">
                <label class="input-label">
                    New password
                </label>
                <input 
                    class="input-text"
                    type="password"
                    v-model="newPassword"
                >
                <base-input-error-message 
                    v-if="$v.newPassword.$error"
                    :error-type="'required'"
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
    import {required, minLength, sameAs} from 'vuelidate/lib/validators';
    import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';

    export default {
        layout: 'accountDetails',

        components: {
            BaseAjaxButton
        },

        data() {
            return {
                currentPassword: '',
                newPassword: ''
            }
        },

        validations: {
            currentPassword: {
                required
            },
            newPassword: {
                required,
                minLength: minLength(8)
            }
        },

        methods: {
            updated() {
                this.$v.$touch();

                if(!this.$v.$invalid) {

                };
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
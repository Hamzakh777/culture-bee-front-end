<template>
    <div class="mb-2 -mt-2 px-4 text-xs text-pink-500">
        {{ customMessage !== '' ? customMessage : messages[errorType] }}
    </div>
</template>

<script>
    export default {
        name: 'BaseInputErrorMessage',

        props: {
            errorType: {
                type: String,
                required: true
            },
            customMessage: {
                type: String,
                default: ''
            }
        },

        data() {
            return {
                messages: {
                    'required': 'This input is required',
                    'email': 'Please write a valid email',
                    'same-as-password': 'The password must be identical',
                    'password-min-length-8': 'Password min lenght is 8',
                    'accept-t&p': 'Please accept the T&P',
                    'accept-gdpr': 'Please accept GDPR T&C'
                }
            }
        },
    }
</script>
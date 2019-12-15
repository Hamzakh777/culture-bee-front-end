<template>
    <div class="px-4 text-xs text-pink-600">
        {{ messages[errorType] }}
    </div>
</template>

<script>
    export default {
        name: 'BaseInputErrorMessage',

        props: {
            errorType: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                messages: {
                    'required': 'This input is required'
                }
            }
        },
    }
</script>
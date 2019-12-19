<template>
    <div class="flex flex-row items-center  px-4 py-3 bg-gray-100">
        <div class="relative h-6 w-6 rounded-full bg-pink-500">
            <div class="icon-x absolute h-4 w-4 top-1/2 left-1/2" style="transform: translate(-50%,-50%) rotate(45deg)"></div>
        </div>
        <div class="pl-3 text-gray-700 font-medium text-sm">
            {{ messages[errorType] }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BaseBigInputErrorMessage',

        props: {
            errorType: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                messages: {
                    'required': 'This input is required',
                    'email': 'Please write a valid email',
                    'same-as-password': 'The password must be identical',
                    'password-min-length-8': 'Password min lenght is 8',
                    'accept-t&p': 'Please accept the T&P'
                }
            }
        },
    }
</script>

<style scoped>
.icon-x::before, .icon-x::after {
    content: '';
    @apply absolute top-1/2 left-1/2 transform-center bg-white;
}

.icon-x::before {
    height: 2px;
    @apply w-3;
}

.icon-x::after {
    width: 2px; 
    @apply h-3;
}
</style>
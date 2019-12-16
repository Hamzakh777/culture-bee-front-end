<template>
    <div class="flex flex-col items-center">
        <button
            class="primary-btn w-full mb-6"
            @click.prevent="$emit('next')"
        >
            {{ isLastStep ? 'Finish' : 'Next' }}
        </button>
        <button
            class="secondary-btn"
        >
            Back
        </button>
    </div>
</template>

<script>
    export default {
        name: 'StepsNav',

        props: {
            isLastStep: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
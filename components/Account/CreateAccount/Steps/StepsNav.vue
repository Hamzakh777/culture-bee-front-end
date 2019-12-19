<template>
    <div class="flex flex-col items-center md:flex-row md:justify-between">
        <button
            class="primary-btn w-full md:w-auto mb-6 md:mb-0"
            @click.prevent="$emit('next')"
        >
            {{ isLastStep ? 'Finish' : 'Next' }}
        </button>
        <button
            v-if="!noPrev"
            class="secondary-btn"
            @click.prevent="$emit('prev')"
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
            },
            noPrev: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
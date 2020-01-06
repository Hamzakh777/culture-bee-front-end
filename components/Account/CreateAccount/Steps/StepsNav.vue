<template>
    <div class="flex flex-col-reverse items-center md:flex-row md:justify-between">
        <button
            v-if="!noPrev"
            class="secondary-btn"
            @click.prevent="$emit('prev')"
        >
            Back
        </button>
        <base-ajax-button
            class="primary-btn w-full md:w-auto mb-6 md:mb-0"
            @click="$emit('next')"
            :is-loading="isLoading"
        >
            {{ isLastStep ? 'Finish' : 'Next' }}
        </base-ajax-button>
    </div>
</template>

<script>
    import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';

    export default {
        name: 'StepsNav',

        components: {
            BaseAjaxButton
        },

        props: {
            isLastStep: {
                type: Boolean,
                default: false
            },
            noPrev: {
                type: Boolean,
                default: false
            },
            isLoading: {
                type: Boolean,
                required: false,
                default: false
            }
        }
    }
</script>
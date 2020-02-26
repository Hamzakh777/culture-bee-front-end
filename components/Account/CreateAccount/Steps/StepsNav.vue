<template>
    <div class="flex flex-col-reverse items-center md:flex-row md:justify-between">
        <button
            v-if="!noPrev"
            @click.prevent.stop="$emit('prev')"
            class="secondary-btn"
        >
            Back
        </button>
        <base-ajax-button
            class="primary-btn w-full md:w-auto mb-6 md:mb-0"
            :is-loading="isLoading"
            @click="$emit('next')"
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
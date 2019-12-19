<template>
    <button
        class="btn-yellow relative"
        @click.prevent="click"
    >
        <base-loader-dots 
            class="absolute top-1/2 left-1/2 transform-center h-5"
            v-if="isLoading"
        />
        <span 
            :class="{'opacity-0': isLoading}"
        >
            <slot></slot>
        </span>
    </button>
</template>

<script>
    import BaseLoaderDots from './BaseLoaderDots';

    export default {
        name: 'BaseAjaxButton',

        components: {
            BaseLoaderDots
        },

        props: {
            isLoading: {
                type: Boolean,
                required: true
            }
        },

        methods: {
            click() {
                if(this.isLoading === false) this.$emit('click');
            }
        }
    }
</script>
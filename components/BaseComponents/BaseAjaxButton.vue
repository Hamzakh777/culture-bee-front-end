<template>
    <button
        class="relative"
        :class="{'primary-btn': !isDark, 'primary-btn primary-btn--black': isDark}"
        @click.prevent.stop="click"
    >
        <base-loader-dots 
            class="absolute top-1/2 left-1/2 transform-center h-5"
            :class="{'text-gray-800': !isDark, 'text-yellow': isDark}"
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
            },
            isDark: {
                type: Boolean,
                required: false,
                default: false
            }
        },

        methods: {
            click() {
                if(this.isLoading === false) this.$emit('click');
            }
        }
    }
</script>
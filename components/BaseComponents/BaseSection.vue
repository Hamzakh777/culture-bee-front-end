<template>
    <div class="py-12 md:py-32 lg:py-42">
        <div class="relative container mx-auto mb-8 md:mb-16">
            <div 
                class="section-title px-4 md:px-0"
                :class="{'section-title-light': isTitleLight}"
            >
                {{title}}
            </div>
            <button
                class="btn-yellow hidden md:inline-block absolute right-0 top-0 mt-1"
                @click.prevent="$emit('btn-clicked')"
            >
                {{btnText}}
            </button>
        </div>
        <slot></slot>
        <div class="block md:hidden mt-8 px-4">
            <button
                class="btn-yellow w-full mx-auto max-w-3xl my-1"
                @click.prevent="$emit('btn-clicked')"
            >
                {{btnText}}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BaseSection',

        props: {
            title: {
                type: String,
                required: true
            },
            btnText: {
                type: String, 
                required: true
            },
            isTitleLight: {
                type: Boolean, 
                required: false,
                default: false
            }
        }
    }
</script>
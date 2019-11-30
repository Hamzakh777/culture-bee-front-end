<template>
    <div class="py-42">
        <div class="relative container mx-auto mb-16">
            <div 
                class="section-title pr-32"
                :class="{'section-title-light': isTitleLight}"
            >
                {{title}}
            </div>
            <button
                class="btn-yellow absolute right-0 top-0 mt-1"
                @click.prevent="$emit('btn-clicked')"
            >
                {{btnText}}
            </button>
        </div>
        <slot></slot>
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
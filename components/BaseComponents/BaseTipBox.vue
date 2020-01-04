<template>
    <div    
        v-if="isOpen"
        class="absolute w-50 py-4 pl-4 pr-8 text-gray-800"
        style="background-color: #E9E9E9"
    >
        <base-close-button 
            class="right-0 top-0 mt-2 mr-2"
            style="height: 1.25rem; width: 1.25rem; position: absolute"
            @click="close"
        /> 
        <div class="mb-2 text-sm font-bold">
            {{title}}
        </div>
        <div class="text-xs font-normal">
            {{description}}
        </div>
    </div>
</template>

<script>
    import BaseCloseButton from './BaseCloseButton';

    export default {
        name: 'BaseTipBox',

        props: {
            title: {
                type: String,
                required: false,
                default: 'Tip'
            },
            description: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                isOpen: true
            }
        },

        components: {
            BaseCloseButton
        },

        methods: {
            close() {
                this.isOpen = false;
            }
        }
    }
</script>
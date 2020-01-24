<template>
    <div class="inline-block relative mb-4 text-sm font-bold text-gray-800">
        <div 
            class="relative flex justify-center items-center px-10 py-4 border-2 border-gray-800 cursor-pointer"
            @click="toggle"
        >
            <div class="plus"></div>
            <span class="pl-2">{{ placeholder }}</span>
        </div>
        <!-- list -->
        <div 
            v-if="isOpen"
            class="absolute z-10 bottom-0 min-w-full min-h-full px-4 py-3 bg-white border-2 border-gray-800 overflow-scroll"
            style="max-height: 300px"
            v-on-clickaway="toggle"
        >
            <div
                class="relative pl-7 mb-4 last:mb-0"
                v-for="(option, index) in filteredOptions"
                :key="index"
                @click="change(option)"
            >
                <div
                    class="absolute top-0 left-0 flex items-center justify-center h-5 w-5 border-2 border-gray-800"
                >
                    <div 
                        class="h-3 w-3 bg-yellow"
                        :class="option.isSelected ? 'block': 'hidden'"
                    >
                    </div>
                </div>
                <span>{{ option.value }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mixin as clickaway } from 'vue-clickaway';

    export default {
        name: 'BaseTagSelect',

        mixins: [clickaway],

        model: {
            prop: 'value',
            event: 'change'
        },

        props: {
            placeholder: {
                type: String,
                required: true
            },
            value: {
                type: [Array]
            },
            options: {
                type: Array,
                required: true
            },
        },

        computed: {
            filteredOptions() {
                return this.options.map(option => {
                    const isSelected = this.value.includes(option);
                    return {
                        value: option,
                        isSelected,
                    }
                })
            }
        },

        data() {
            return {
                isOpen: false
            }
        },

        methods: {
            toggle() {
                this.isOpen = !this.isOpen;
            },

            change(option) {
                const exists = this.value.indexOf(option.value);
                let newSelection = this.value;

                console.log(exists);
                if(exists === -1) {
                    // add it
                    newSelection.push(option.value); 
                } else {
                    // remove
                    newSelection = newSelection.filter((item) => item !== option.value)
                }

                this.$emit('change', newSelection);
                this.toggle();
            }
        }
    }
</script>
<style scoped>
.plus {
	@apply relative h-3 w-3 cursor-pointer;
}
.plus::before,
.plus::after {
	content: '';
	@apply absolute top-1/2 left-1/2 transform-center rounded-full bg-gray-800;
}
.plus::before {
	height: 3px;
	@apply w-full;
}
.plus::after {
    width: 3px;
    @apply h-full;
}
</style>
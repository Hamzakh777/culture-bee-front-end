<template>
    <div class="relative">
        <div class="absolute top-1/2 left-0 -transform-y-50 w-10/12 ml-6 text-sm text-gray-900 font-semibold" v-if="!value">
            {{placeholder}}
        </div>
        <select 
            class="relative h-12 w-full pl-3 pr-7 border-gray-700 border-2 rounded-none bg-white text-sm text-gray-900 font-semibold focus:outline-none"
            :value="value"
            @input="$emit('input', $event.target.value)"
        >
            <option 
                v-for="(option, index) in options"
                :key="index"
                :value="option"
            >
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'BaseSelectInput',

        model: {
            prop: 'value',
            event: 'input'
        },

        props: {
            options: {
                type: Array,
                required: true
            },
            placeholder: {
                type: String, 
                required: true
            },
            value: {
                type: [String, Number]
            }
        }
    }
</script>

<style scoped>
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(/icons/arrow-down.svg) 94% no-repeat 
}
select::before { 
    content: '';
    @apply absolute right-0 h-3 w-3 border-t-2 border-r-2 border-blue;
}
/* CAUTION: IE hackery ahead */
select::-ms-expand { 
    display: none; /* remove default arrow on ie10 and ie11 */
}
</style>
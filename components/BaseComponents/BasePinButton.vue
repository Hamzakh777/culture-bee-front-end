<template>
    <div 
        class="flex items-center justify-center h-12-1/2 w-12-1/2 cursor-pointer"
        :class="{'bg-black text-white': !pinned, 'bg-yellow text-gray-800': pinned}"
        @click="$emit('update:pinned', !pinned)"
    >
        <base-app-icon 
            name="pin"
            :class-list="['h-7', 'fill-current']"
        />
    </div>
</template>

<script>
    import BaseAppIcon from './BaseAppIcon';

    export default {
        name: 'BasePinButton',

        components: {
            BaseAppIcon
        },

        props: {
            pinned: {
                type: [Boolean, Number],
                required: true
            }
        }
    }
</script>
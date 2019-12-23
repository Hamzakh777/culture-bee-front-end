<template>
    <div 
        class="relative h-7 w-2"
        @click="$emit('click')"
    >
        <base-app-icon
            name="edit-pen"
            :class-list="['absolute', 'top-0', 'right-0', 'h-7', 'fill-current', 'text-white', 'cursor-pointer', 'hover:text-yellow']"
        />
    </div>
</template>

<script>
    import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';

    export default {
        name: 'BaseEditPen',

        components: {
            BaseAppIcon
        }
    }
</script>
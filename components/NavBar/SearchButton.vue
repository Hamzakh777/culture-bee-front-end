<template>
    <div class="relative h-12-1/2 w-12-1/2 bg-gray-800 text-white">
        <BaseAppIcon
            :name="'search'"
            :classList="['absolute', 'top-1/2', 'left-1/2', 'h-6', 'transform-center', 'fill-current', 'stroke-current']"
        />
    </div>
</template>

<script>
    import BaseAppIcon from '../BaseComponents/BaseAppIcon';

    export default {
        name: 'SearchButton',

        components: {
            BaseAppIcon
        }
    }
</script>
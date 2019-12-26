<template>
    <div class="flex justify-between bg-white shadow-md">
        <div class="flex-grow flex items-center px-8 py-6">
            <base-app-icon 
                name="edit-pen"
                :class-list="['h-7', 'fill-current', 'text-gray-800']"
            />
            <div class="pl-4 text-5-1/2 text-gray-800 font-bold">
                Post an update
            </div>
        </div>
        <div class="flex items-stretch">
            <div class="icon-wrapper">
                <base-app-icon 
                    name="camera"
                    :class-list="iconClassList"
                />  
            </div>
            <div class="icon-wrapper">
                <base-app-icon 
                    name="video-camera"
                    :class-list="iconClassList"
                />  
            </div>
        </div>
    </div>
</template>

<script>
    import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';

    export default {
        name: 'FeedPostUpdate',

        components: {
            BaseAppIcon
        },

        data() {
            return {
                iconClassList: ['h-8', 'stroke-current', 'fill-white', 'text-black', 'hover:text-gray-300', 'cursor-pointer']
            }
        },
    }
</script>

<style scoped>
.icon-wrapper {
    @apply flex justify-center items-center w-27-1/2 border-l-2 border-gray-900;
}
</style>
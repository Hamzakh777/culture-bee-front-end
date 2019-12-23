<template>
    <div class="relative h-138 bg-gray-to-black">
        <div class="container flex items-end relative z-1 h-full py-12 mx-auto">
            <div class="flex items-stretch">
                <!-- logo -->
                <div class="flex items-center h-45 w-45 p-5 bg-white">

                </div>
                <!-- company info -->
                <div class="flex flex-col justify-between ml-14">
                    <div>
                        <div class="text-13 text-white font-D-Din tracking-tight uppercase font-bold">Name of the company</div>
                    </div>

                    <div class="secondary-btn text-yellow">Edit intro</div>
                </div>
            </div>

            <!-- edit button -->
            <base-app-icon
                name="edit-pen"
                :class-list="['absolute', 'top-0', 'right-0', 'h-7', 'mt-16', 'fill-current', 'text-white', 'cursor-pointer', 'hover:text-yellow']"
            />
        </div>
        <!-- bg image -->
        <div class="absolute inset-0 z-0"></div>
    </div>
</template>

<script>
    import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';

    export default {
        name: 'EmployerHero',

        components: {
            BaseAppIcon
        }
    }
</script>
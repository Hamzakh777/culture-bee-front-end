<template>
    <div class="bg-gray-100">
        <div class="container flex justify-between mx-auto py-20">
            <div class="w-72 pr-9">
                <slot name="left-col"></slot>
            </div>
            <div class="flex-grow">
                <slot name="right-col"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheFeedGrid'
    }
</script>

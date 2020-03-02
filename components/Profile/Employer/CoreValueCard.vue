<template>
    <div class="card w-full lg:w-32-% mb-8 px-8 py-12 bg-white">
        <!-- title -->
        <div class="mb-4 lg:mb-6 font-D-Din text-8 lg:text-5xl uppercase font-bold text-gray-800" style="overflow-wrap: break-word;">
            {{ value.title }}
        </div>
        <!-- sub title -->
        <div class="mb-6 text-5-1/2 font-bold text-gray-800" style="overflow-wrap: break-word;">
            {{ value.subtitle }}
        </div>
        <!-- description -->
        <div class="text-xs md:text-base font-normal text-gray-800" style="overflow-wrap: break-word;">
            {{ value.description }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CoreValueCard',

        props: {
            value: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
.card {
    box-shadow: 0 0 10px rgba(0,0,0,0.18)
}
</style>
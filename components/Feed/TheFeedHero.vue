<template>
    <div class="py-12 bg-gray-to-black-to-bottom-right">
        <div class="container flex justify-between items-center mx-auto">
            <div class="card h-48">
                <div class="base-title">
                    ARE YOU HIRING?
                </div>
                <div class="description">
                    Attract top talent with a job ad that they will remember
                </div>
            </div>
            <div class="card h-56 border-2 border-yellow">
                <div class="base-title">
                    BE INSPIRED
                </div>
                <div class="description">
                    Follow companies for culture inspiration
                </div>
                <nuxt-link 
                    class="primary-btn mt-6 px-14"
                    to="#"
                >
                    Browse
                </nuxt-link>
            </div>
            <div class="card h-48">
                <div class="base-title">
                    view updates
                </div>
                <div class="description">
                    Attract top talent with a job ad that they will remember
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheFeedHero'
    }
</script>

<style scoped>
.card {
    @apply flex flex-col justify-center items-center w-1/3 py-8 px-6 bg-white text-center;
}
.description {
    @apply max-w-xs text-xs text-gray-800 font-normal;
}
</style>
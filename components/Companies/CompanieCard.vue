<template>
    <div 
        class="relative h-94 w-31-% bg-cover bg-center shadow-md"
        style="background-image: url('/images/companies/image-1.jpg')"
    >
        <!-- follow button -->
        <div class="absolute top-0 right-0 mt-8 mr-8 cursor-pointer">
            <div class="absolute h-4 w-4 top-1/2 -transform-y-50 -ml-6">
                <div class="yellow-sm-bar absolute top-1/2 left-1/2 transform-center"></div>
                <div class="yellow-sm-bar absolute top-1/2 left-1/2" style="transform: translate(-50%, -50%) rotate(90deg)"></div>
            </div>
            <span class="text-xs text-white font-bold uppercase tracking-widest">follow</span>
        </div>

        <!-- company icon -->
        <div class="flex justify-center items-center absolute bottom-0 left-0 mb-18 ml-8 w-26 h-26 p-2 bg-white">
            <img 
                class="w-full"
                src="/logos/brave-gentle-man.png" 
                alt=""
            >
        </div>

        <!-- tags list -->
        <div class="flex items-center absolute bottom-0 left-0 right-0 h-10 bg-white px-8 font-poppins text-xs font-bold uppercase tracking-widest text-gray-800">
            <span
                class="mr-6 md:mr-4"
                v-for="(tag, index) in tags"
                :key="index"
            >
                {{ tag }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CompanyCard',

        data() {
            return {
                tags: ['ethical', 'startup', 'fashion']
            }
        },
    }
</script>

<style>
.yellow-sm-bar {
    height: 3px;
    width: 0.625rem;
    @apply bg-yellow;
}
</style>
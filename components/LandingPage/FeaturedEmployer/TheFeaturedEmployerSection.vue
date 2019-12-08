<template>
    <div class="py-10 md:py-20 lg:py-42 md:bg-yellow">
        <div class="container mx-auto">
            <div class="section-title py-8 md:py-12 lg:py-16 px-4 md:px-0 bg-yellow">
                featured employer
            </div>
            <div 
                class="relative lg:h-184"
            >
                <div class="md:absolute md:inset-0 w-full h-54 md:h-auto bg-center bg-cover" style="background-image: url('/images/featured-employer/image-1.jpg')"></div>
                <img 
                    class="hidden md:block absolute z-1 top-0 right-0 w-54"
                    style="transform: translate(-5rem, -50%)"
                    src="/images/featured-employer/we-love.png" 
                >
                <div
                    class="lg:absolute bottom-0 md:right-0 z-1 md:transform-y-50 px-6 md:px-16 py-6 md:py-12-1/2 mr-14 w-full md:w-168 bg-white"
                >
                    <span class="sub-title mb-4">featured</span>
                    <h4 class="text-xl md:text-8 font-bold text-gray-700 leading-tight">
                        Lily’s Kitchen has collaborated with Dog’s Trust this Christmas
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheFeaturedEmployerSection',

        components: {
            
        }
    }
</script>
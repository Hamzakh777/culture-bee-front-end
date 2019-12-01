<template>
    <div class="py-42 bg-yellow">
        <div class="container mx-auto">
            <div class="section-title mb-16">
                featured employer
            </div>
            <div 
                class="relative h-184 bg-center bg-cover"
                style="background-image: url('/images/featured-employer/image-1.jpg')"
            >
                <img 
                    class="absolute top-0 right-0 w-54"
                    style="transform: translate(-5rem, -50%)"
                    src="/images/featured-employer/we-love.png" 
                >
                <div
                    class="absolute bottom-0 right-0 transform-y-50 px-16 py-12-1/2 mr-14 w-168 bg-white"
                >
                    <span class="sub-title mb-4">featured</span>
                    <h4 class="text-8 font-bold text-gray-700 leading-tight">
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
<template>
    <div
        class="flex flex-col relative w-full"
        style="height: 84vh"
    >   
        <!-- the slider wrapper -->
        <div class="relative flex-grow">
            <!-- the slider -->
            <div class="container relative mx-auto p-10 h-full bg-cover bg-center" style="background-image: url('/images/blog/hero-1.jpg')">
                <span class="section-title section-title-light">hot topic</span>
            </div>
            <!-- the white card -->
            <div class="container absolute left-1/2 bottom-0 -transform-x-50">
                <div class="absolute bottom-0 left-0 z-1 ml-10 px-16 py-12-1/2 w-140 bg-white">
                    <span class="sub-title mb-6">Startups</span>
                    <h3 class="text-8 text-gray-900 font-poppins font-bold">A four-day week is being adopted by this startup</h3>
                </div>
            </div>
        </div>
        <div class="relative h-14 w-full bg-yellow">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheLandingPageHero',
        
        data: () => ({
            corouselItems: [
                1, 2,3,4,5
            ]
        })
    }
</script>
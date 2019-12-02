<template>
    <!-- the height should be dynamically calculated using the window height - nav height -->
	<div 
        id="hero"
        class="flex flex-col relative w-full" 
        style="height: 84vh"
    >
		<!-- the slider wrapper -->
		<div class="container mx-auto relative flex-grow">
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div
                        class="swiper-slide bg-cover bg-center"
                        style="background-image: url('/images/blog/hero-1.jpg')"
                        v-for="i in 5"
                        :key="i"
                    >
                        <div
                            class="container relative mx-auto p-10 h-full"
                        >
                            <span class="section-title section-title-light absolute left-0 top-0 mt-10 ml-10">hot topic</span>
                        </div>
                    </div>
                </div>
                <div class="button-prev arrow left-0 -ml-24" style="transform: rotate(-135deg)"></div>
                <div class="button-next arrow right-0 -mr-24"  style="transform: rotate(45deg)"></div>
            </div>
			<!-- the white card -->
			<div class="container absolute left-1/2 bottom-0 z-1 h-1 -transform-x-50">
				<div class="absolute bottom-0 left-0 z-10 ml-10 px-16 py-12-1/2 w-140 bg-white">
					<span class="sub-title mb-6">Startups</span>
					<h3
						class="text-8 text-gray-900 font-poppins font-bold"
					>A four-day week is being adopted by this startup</h3>
				</div>
			</div>
		</div>
		<div class="relative h-14 z-10 w-full bg-yellow"></div>
	</div>
</template>

<script>
export default {
    name: 'TheLandingPageHero',

	data: () => ({
        corouselItems: [1, 2, 3, 4, 5],
        swiperOption: {
            slidesPerView: 1,
            spaceBetween: 50,
            grabCursor: true,
            loop: true,
            loopedSlides: 2,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev'
            },
            watchSlidesVisibility: true
        }
    })
};
</script>

<style scoped>
.swiper-container {
    @apply h-full overflow-visible;
}
.swiper-wrapper .swiper-slide {
	@apply opacity-75;
}
.swiper-wrapper .swiper-slide.swiper-slide-visible{
	@apply opacity-100;
}
.arrow {
    @apply absolute z-10 top-1/2 -transform-y-50 h-4 w-4 border-t-2 border-r-2 border-yellow;
}
</style>
<template>
    <!-- the height should be dynamically calculated using the window height - nav height -->
	<div 
        id="hero"
        class="flex flex-col relative md:w-full" 
        style="height: 84vh"
    >
		<!-- the slider wrapper -->
		<div class="container flex flex-col md:block mx-auto relative md:flex-grow">
            <div v-swiper:mySwiper="swiperOption" class="h-80 md:h-full">
                <div class="swiper-wrapper">
                    <div
                        class="swiper-slide bg-cover bg-no-repeat bg-center"
                        style="background-image: url('/images/blog/hero-1.jpg')"
                        v-for="i in 5"
                        :key="i"
                    >
                        <div
                            class="container relative mx-auto p-10 h-full"
                        >
                            <span class="section-title section-title-light absolute left-0 top-0 mt-4 ml-4 md:mt-10 md:ml-10">hot topic</span>
                        </div>
                    </div>
                </div>
                <div class="button-prev arrow left-0 -ml-24" style="transform: rotate(-135deg)"></div>
                <div class="button-next arrow right-0 -mr-24"  style="transform: rotate(45deg)"></div>
            </div>
			<!-- the white card -->
			<div class="container relative md:absolute md:left-0 md:right-0 md:bottom-0 z-1 md:h-1">
				<div class="md:absolute md:bottom-0 md:left-0 z-10 md:ml-10 px-4 md:px-16 py-12-1/2 w-full md:w-140 bg-white">
					<span class="sub-title mb-6">Startups</span>
					<h3
						class="text-5-3/4 md:text-8 text-gray-900 font-poppins font-bold"
					>A four-day week is being adopted by this startup</h3>
				</div>
			</div>
		</div>
		<div class="relative h-14 z-10 w-full bg-yellow">
            <div class="flex items-center flex-row justify-startabsolute top-0 bottom-0 text-8">
                <span></span>
            </div>
        </div>
	</div>
</template>

<script>
export default {
    name: 'TheLandingPageHero',

	data: () => ({
        slides: [
            {
                img: '',
                title: ''
            }
        ],
        words: [
            {
                text: 'Innovators',
                classList: ['font-bold']
            },
            {
                text: 'Leaders',
                classList: ['font-semibold']
            },
            {
                text: 'out-the-box thinkers',
                classList: ['font-light']
            },
            {
                text: 'Innovators',
                classList: ['font-light']
            },
        ],
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
    @apply overflow-visible;
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
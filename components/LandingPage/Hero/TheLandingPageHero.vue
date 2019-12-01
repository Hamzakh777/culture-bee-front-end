<template>
    <!-- the height should be dynamically calculated using the window height - nav height -->
	<div 
        id="hero"
        class="flex flex-col relative w-full" 
        style="height: 84vh"
    >
		<!-- the slider wrapper -->
		<div class="container mx-auto relative flex-grow">
			<!-- the slider -->
            <vueper-slides
                class="no-shadow h-full"
                :visible-slides="1"
                :bullets="false"
                :dragging-distance="70"
                :disableArrowsOnEdges="true"
				:slide-multiple="true"
				:arrows-outside="true"
            >
                <template v-slot:arrow-left>
                    <div class="btn-circular-arrow text-gray-700">

                    </div>
                </template>
                <template v-slot:arrow-right>
					<div class="btn-circular-arrow">

                    </div>
                </template>
                <vueper-slide
                    class="h-full"
                    v-for="i in 5"
                    :key="i"
                >
                    <template v-slot:content>
                        <div
                            class="container relative mx-auto p-10 h-full bg-cover bg-center"
                            style="background-image: url('/images/blog/hero-1.jpg')"
                        >
                            <span class="section-title section-title-light absolute left-0 top-0 mt-10 ml-10">hot topic</span>
                        </div>
                    </template>
                </vueper-slide>
			</vueper-slides>
			<!-- the white card -->
			<div class="container absolute left-1/2 bottom-0 z-1 h-full -transform-x-50">
				<div class="absolute bottom-0 left-0 z-10 ml-10 px-16 py-12-1/2 w-140 bg-white">
					<span class="sub-title mb-6">Startups</span>
					<h3
						class="text-8 text-gray-900 font-poppins font-bold"
					>A four-day week is being adopted by this startup</h3>
				</div>
			</div>
		</div>
		<div class="relative h-14 w-full bg-yellow"></div>
	</div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';

export default {
    name: 'TheLandingPageHero',
    
    components: {
        VueperSlides,
		VueperSlide
    },

	data: () => ({
		corouselItems: [1, 2, 3, 4, 5]
	})
};
</script>

<style>
@import '~/assets/css/plugins/vueper-slider.css';

#hero .vueperslides__parallax-wrapper {
    padding-bottom: 0 !important;
    height: 100%;
}
#hero .vueperslides__inner {
    height: 100%;
}

#hero .vueperslides__arrow--next  {
	right: 0;
	transform: translate(7rem, -50%);
}
#hero .vueperslides__arrow--prev {
	left: 0;
	transform: translate(-7rem, -50%);
}

/* opacity */
#hero .vueperslide {
    opacity: .6;
}
#hero .vueperslide--active {
    opacity: 1;
}

/* showing inactive slides */
#hero .vueperslides__track, .vueperslides__parallax-wrapper {
	overflow: visible;
}
</style>
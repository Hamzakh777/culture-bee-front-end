<template>
	<div class="w-full">
		<img
			class="hidden md:block mb-4 md:mb-0 mx-auto h-10"
			src="/logo-big-light.png"
		/>
        <!-- the reason for duplicating the component is that the swiper library doesn't render properly when a prop changes -->
        <div 
            :class="{'hidden': role !== 'job-seeker'}"
        >
            <!-- employer slider -->
            <div 
                v-swiper:mySwiperEmployer="swiperOption1" 
                class="px-4 text-white"
            >
                <div class="swiper-wrapper py-6 md:py-14 text-center">
                    <div class="swiper-slide swiper-no-swiping mb-4">
                        <h4
                            class="section-title section-title-light md:mb-6 uppercase"
                        >
                            Join us today
                        </h4>
                        <p
                            class="hidden md:block max-w-xs mx-auto font-bold text-5-3/4 text-center"
                        >
                            Start connecting through culture
                        </p>
                    </div>
                    <div
                        v-for="(slide, index) in slides"
                        :key="index"
                        class="swiper-slide swiper-no-swiping mb-5"
                    >
                        <h4 class="section-title section-title-light uppercase">
                            {{ slide.jobSeeker.title }}
                        </h4>
                        <p
                            class="hidden md:block max-w-xs mx-auto font-bold text-5-3/4 text-center"
                        >
                            {{ slide.jobSeeker.description  }}
                        </p>
                    </div>
                </div>
                <div
                    class="swiper-pagination swiper-pagination-create-account swiper-pagination-create-account--1"
                ></div>
            </div>
        </div>
        <!-- job seeker -->
        <div
            :class="{'hidden': role === 'job-seeker'}"
        >
            <div 
                v-swiper:mySwiperJobSeeker="swiperOption2" 
                class="px-4 text-white"
            >
                <div class="swiper-wrapper py-6 md:py-14 text-center">
                    <div class="swiper-slide swiper-no-swiping mb-4">
                        <h4
                            class="section-title section-title-light md:mb-6 uppercase"
                        >
                            Join us today
                        </h4>
                        <p
                            class="hidden md:block max-w-xs mx-auto font-bold text-5-3/4 text-center"
                        >
                            Start connecting through culture
                        </p>
                    </div>
                    <div
                        v-for="(slide, index) in slides"
                        :key="index"
                        class="swiper-slide swiper-no-swiping mb-5"
                    >
                        <h4 class="section-title section-title-light uppercase">
                            {{ slide.employer.title }}
                        </h4>
                        <p
                            class="hidden md:block max-w-xs mx-auto font-bold text-5-3/4 text-center"
                        >
                            {{ slide.employer.description }}
                        </p>
                    </div>
                </div>
                <div
                    class="swiper-pagination swiper-pagination-create-account swiper-pagination-create-account--2"
                ></div>
            </div>
        </div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'CreateAccountSlider',

	watch: {
		currentStep(newVal) {
            this.mySwiperJobSeeker.slideTo(newVal - 1);
            this.mySwiperEmployer.slideTo(newVal - 1);
		}
	},

	computed: {
		...mapState('account', ['currentStep', 'role'])
	},

	data() {
		return {
			swiperOption1: {
				slidesPerView: 1,
				spaceBetween: 64,
				pagination: {
					el: '.swiper-pagination-create-account--1'
				}
            },
            swiperOption2: {
				slidesPerView: 1,
				spaceBetween: 64,
				pagination: {
					el: '.swiper-pagination-create-account--2'
				}
            },
            slides: [
                {
                    jobSeeker: {
                        title: 'hi job seeker',
                        description:
                            "You're just a few steps away from discovering real company journeys"
                    },
                    employer: {
                        title: 'WELCOME EMPLOYER',
                        description:
                            "You're just a few steps away from sharing your real journey with job seekers"
                    }
                },
                {
                    jobSeeker: {
                        title: 'tell us about you',
                        description:
                            'We just need a few details to get you started'
                    },
                    employer: {
                        title: 'tell us about you',
                        description:
                            'We just need a few details to get you started'
                    }
                },
                {
                    jobSeeker: {
                        title: 'tell us about you',
                        description:
                            'The details you enter here will be visible on your profile and will help employers discover your journey'
                    },
                    employer: {
                        title: 'About the company',
                        description:
                            'The details you enter here will be visible on your employer profile and will help job seekers discover your journey'
                    }
                }
            ]
		};
	}
};
</script>
<style>
.swiper-pagination-create-account .swiper-pagination-bullet {
	@apply h-3 w-3 mx-1 rounded-full bg-white opacity-100;
}
.swiper-pagination-create-account .swiper-pagination-bullet.swiper-pagination-bullet-active {
	@apply bg-yellow;
}
.swiper-pagination-create-account {
    bottom: 10px;
    @apply w-full left-0;
}
</style>

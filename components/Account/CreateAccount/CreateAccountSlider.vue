<template>
	<div class="w-full">
		<img
			class="hidden md:block mb-6 mx-auto h-10"
			src="/logo-big-light.svg"
		/>
		<div v-swiper:mySwiper="swiperOption" class="px-4 text-white">
			<div class="swiper-wrapper py-6 text-center">
				<div class="swiper-slide swiper-no-swiping mb-4">
					<h4
						class="section-title section-title-light md:mb-6 uppercase"
					>
						Join us today
					</h4>
					<p
						class="hidden md:block max-w-xs mx-auto font-bold text-5-3/4 text-center"
					>
						Lorem ipsum dolor sit amet, consectetur
					</p>
				</div>
				<div
					v-for="(slide, index) in slides"
					:key="index"
					class="swiper-slide swiper-no-swiping mb-5"
				>
					<h4 class="section-title section-title-light uppercase">
						{{ userType === 'job-seeker' ? slide.jobSeeker.title : slide.employer.title }}
					</h4>
					<p
						class="hidden md:block max-w-xs mx-auto font-bold text-5-3/4 text-center"
					>
						{{ userType === 'job-seeker' ? slide.jobSeeker.description : slide.employer.description }}
					</p>
				</div>
			</div>
			<div
				class="swiper-pagination swiper-pagination-create-account"
			></div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'CreateAccountSlider',

	watch: {
		currentStep(newVal) {
			this.mySwiper.slideTo(newVal - 1);
		}
	},

	computed: {
		...mapState('account/create', ['currentStep', 'userType'])
	},

	data() {
		return {
			swiperOption: {
				slidesPerView: 1,
				spaceBetween: 64,
				pagination: {
					el: '.swiper-pagination-create-account'
				}
            },
            slides: [
                {
                    jobSeeker: {
                        title: 'hi job seeker',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque.'
                    },
                    employer: {
                        title: 'WELCOME EMPLOYER',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque.'
                    }
                },
                {
                    jobSeeker: {
                        title: 'tell us about you',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque.'
                    },
                    employer: {
                        title: 'tell us about you',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque.'
                    }
                },
                {
                    jobSeeker: {
                        title: 'tell us about you',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque.'
                    },
                    employer: {
                        title: 'About the company',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque.'
                    }
                }
            ]
		};
	}
};
</script>
<style>
.swiper-pagination-create-account .swiper-pagination-bullet {
	@apply h-3 w-3 rounded-full bg-white opacity-100;
}
.swiper-pagination-create-account
	.swiper-pagination-bullet.swiper-pagination-bullet-active {
	@apply bg-yellow;
}
</style>

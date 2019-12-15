<template>
	<BaseSection
		id="companies-section"
		class="bg-gray-to-black"
		title="companies you'll love"
		btn-text="View all"
		:is-title-light="true"
	>
		<div class="relative container mx-auto px-4">
			<div 
				v-swiper:mySwiper="swiperOption"
				class="h-118 overflow-visible"
			>
                <div class="swiper-wrapper">
					<companie-card  
						class="swiper-slide"
						v-for="i in 5"
                        :key="i"
						style="width: 90%"
						:class="{'self-start': i === 1, 'self-center': i%2 === 0, 'self-end': i%3 === 0}"
					/>
                </div>
            </div>
            <div class="btn-circular-arrow-prev swiper-companies-prev"></div>
            <div class="btn-circular-arrow-next swiper-companies-next"></div>
		</div>
	</BaseSection>
</template>

<script>
import CompanieCard from './CompanieCard';
import BaseSection from '~/components/BaseComponents/BaseSection';

export default {
	name: 'TheCompaniesSection',

	components: {
		CompanieCard,
		BaseSection,
	},

	data() {
		return {
			companies: [],
			swiperOption: {
				slidesPerView: 3,
				spaceBetween: 64,
				breakpoints: {
					// when window width is >= 640px
					640: {
						slidesPerView: 1,
						centeredSlides: true,
						spaceBetween: 40
					},
					900: {
						slidesPerView: 3,
						centeredSlides: false,
						spaceBetween: 64
					}
				},
				navigation: {
					nextEl: '.swiper-companies-next',
					prevEl: '.swiper-companies-prev'
				},
				watchSlidesVisibility: true
			}
		};
	}
};
</script>

<style scoped>
.swiper-container {
	@apply overflow-visible;
}
.swiper-wrapper .swiper-slide {
	@apply opacity-50;
}
.swiper-wrapper .swiper-slide.swiper-slide-visible{
	@apply opacity-100;
}
.btn-circular-arrow-prev, .btn-circular-arrow-next {
	@apply hidden;

	@media(min-width: 1024px) {
		@apply block
	}
}
</style>
<template>
	<div class="py-6 lg:py-18 bg-gray-800" id="benefits">
		<div class="container mx-auto">
			<div class="base-title-light">
				Benefits
			</div>
			<div 
				v-if="isMobile"
				class="md:flex md:justify-between md:flex-wrap mt-12"
				v-swiper:mySwiper="swiperOption"
			>
				<div class="swiper-wrapper">
					<benefit-card 
						class="swiper-slide h-68"
						v-for="(benefit, index) in benefits"
						:key="index"
						:is-edit-page="isEditPage" 
						:benefit="benefit"
					/>
				</div>
			</div>
			<div 
				v-else
				class="md:flex md:justify-between md:flex-wrap mt-12"
			>
				<benefit-card 
					v-for="(benefit, index) in benefits"
					:key="index"
					:is-edit-page="isEditPage" 
					:benefit="benefit"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BenefitCard from '../BenefitCard';

export default {
	name: 'EmployerBenefitsSection',

	props: {
		isEditPage: {
			type: Boolean,
			required: true
		}
	},

	components: {
		BenefitCard
    },
    
    computed: {
        ...mapState('employer/benefits', ['benefits'])
	},

	data() {
		return {
			isMobile: false,
			swiperOption: {
				slidesPerView: 1,
				spaceBetween: 64,
				breakpoints: {
					// when window width is >= 640px
					640: {
						slidesPerView: 1,
						centeredSlides: true,
						spaceBetween: 40
					}
				}
			}
		}
	},

	beforeMount() {
		if(process.browser) {
			const innerWidth = window.innerWidth;
			if(innerWidth < 768) this.isMobile = true;
		}
	},

	mounted() {
		try {
			this.fetchBenefits(this.$route.params.id);
		} catch (error) {
			alert('An error happend trying to load benefits')
			console.error(error);
		}
	},

	methods: {
		...mapActions('employer/benefits', ['fetchBenefits'])
	}
};
</script>
<style scoped>
.swiper-slide {
	@apply h-94;
}
</style>

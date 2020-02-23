<template>
	<div id="benefits" class="py-6 lg:py-18 bg-gray-800">
		<div class="container mx-auto">
			<div class="flex justify-between items-center">
				<div class="base-title-light">
					Benefits
				</div>
				<button
					v-if="isEditPage"
					@click.prevent="$bus.$emit('open-add-benefit-modal')"
					class="primary-btn"
				>
					Add benefit
				</button>
			</div>
			<client-only>
				<div
					v-if="isMobile"
					v-swiper:mySwiper="swiperOption"
					class="md:flex md:justify-between md:flex-wrap mt-12"
				>
					<div class="swiper-wrapper">
						<benefit-card
							v-for="(benefit, index) in benefitsToShow"
							:key="index"
							:is-edit-page="isEditPage && !isDummyContent"
							:benefit="benefit"
							class="swiper-slide h-68"
						/>
					</div>
				</div>
				<div v-else class="md:flex md:justify-between md:flex-wrap mt-12">
					<benefit-card
						v-for="(benefit, index) in benefitsToShow"
						:key="index"
						:is-edit-page="isEditPage && !isDummyContent"
						:benefit="benefit"
					/>
				</div>
			</client-only>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BenefitCard from '../BenefitCard';
import dummyBenefits from '~/mocks/Employer/benefits';

export default {
	name: 'EmployerBenefitsSection',

	components: {
		BenefitCard
	},

	props: {
		isEditPage: {
			type: Boolean,
			required: false,
			default: false
		}
	},

	watch: {
		benefitsToShow(newVal) {
			if(newVal === dummyBenefits) {
				this.isDummyContent = true;
			} else {
				this.isDummyContent = false;
			}
		}
	},

	computed: {
		...mapState('employer', ['id']),
		...mapState('employer/benefits', ['benefits']),

		benefitsToShow() {
			// if user has no value and he is on the edit page, we show dummy content
			if(this.benefits.length === 0 && this.isEditPage) {
				return dummyBenefits;
			} else { 
				return this.benefits;
			}
		}
	},

	data() {
		return {
			isMobile: false,
			isDummyContent: false,
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
		};
	},

	beforeMount() {
		if (process.browser) {
			const innerWidth = window.innerWidth;
			if (innerWidth < 768) this.isMobile = true;
		}
	},

	mounted() {
		if(process.browser) {
			try {
				this.fetchBenefits(this.id);
			} catch (error) {
				alert('An error happend trying to load benefits');
			}
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

<template>
	<BaseSection
		id="companies-section"
		class="bg-gray-to-black"
		title="companies you'll love"
		btn-text="View all"
		:is-title-light="true"
	>
		<div class="container mx-auto">
			<!-- slider  -->
			<vueper-slides
                class="no-shadow"
                :visible-slides="3"
                :bullets="false"
                :dragging-distance="70"
                :disableArrowsOnEdges="true"
				:slide-multiple="true"
				:arrows-outside="false"
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
                    v-for="i in 5"
                    :key="i"
                >
                    <template v-slot:content>
                        <companie-card  
							style="width: 90%"
							:class="{'self-start': i === 1, 'self-center': i%2 === 0, 'self-end': i%3 === 0}"
						/>
                    </template>
                </vueper-slide>
			</vueper-slides>
		</div>
	</BaseSection>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import CompanieCard from './CompanieCard';
import BaseSection from '~/components/BaseComponents/BaseSection';

export default {
	name: 'TheCompaniesSection',

	components: {
		CompanieCard,
		BaseSection,
		VueperSlides,
		VueperSlide
	},

	data() {
		return {
			companies: []
		};
	}
};
</script>

<style>
@import '~/assets/css/plugins/vueper-slider.css';

#companies-section .vueperslides__track, .vueperslides__parallax-wrapper {
	overflow: visible;
}
#companies-section .vueperslide {
	opacity: 0.35;
	margin-left: 2%;
	transition: 0.3s opacity ease-out;
}
#companies-section .vueperslide--visible {
	opacity: 1;
	margin-left: 0;
}
</style>
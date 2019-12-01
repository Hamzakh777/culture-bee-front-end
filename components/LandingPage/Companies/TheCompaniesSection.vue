<template>
	<BaseSection
		class="bg-gray-to-black"
		title="companies you'll love"
		btn-text="View all"
		:is-title-light="true"
	>
		<div class="container mx-auto">
			<!-- slider  -->
			<VueperSlides
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
						<BaseAppIcon
							:name="'arrow'"
							:class-list="['absolute', 'top-1/2', 'left-1/2', 'transform-center', 'h-4', 'stroke-current']"
						/>
                    </div>
                </template>
                <template v-slot:arrow-right>
					<div class="btn-circular-arrow">

                    </div>
                </template>
                <VueperSlide
                    v-for="i in 5"
                    :key="i"
                >
                    <template v-slot:content>
                        <companie-card  
							style="width: 90%"
							:class="{'self-start': i === 1, 'self-center': i%2 === 0, 'self-end': i%3 === 0}"
						/>
                    </template>
                </VueperSlide>
			</VueperSlides>
		</div>
	</BaseSection>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import CompanieCard from './CompanieCard';
import BaseSection from '~/components/BaseComponents/BaseSection';
import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';

export default {
	name: 'TheCompaniesSection',

	components: {
		CompanieCard,
		BaseSection,
		VueperSlides,
		VueperSlide,
		BaseAppIcon
	},

	data() {
		return {
			companies: []
		};
	}
};
</script>

<style>
.vueperslides__arrow {
	@apply h-16 w-16 opacity-100;
	transition: 0.3s opacity ease-out;
}
.vueperslides__arrow:focus {
	@apply outline-none;
}
.vueperslides__arrow--next  {
	right: 0;
	transform: translate(50%, -50%);
}
.vueperslides__arrow--prev {
	left: 0;
	transform: translate(-50%, -50%);
}
.vueperslides__track, .vueperslides__parallax-wrapper {
	overflow: visible;
}
.vueperslide {
	opacity: 0.35;
	margin-left: 2%;
	transition: 1s opacity ease-out;
}
.vueperslide--visible {
	opacity: 1;
	margin-left: 0;
}
</style>
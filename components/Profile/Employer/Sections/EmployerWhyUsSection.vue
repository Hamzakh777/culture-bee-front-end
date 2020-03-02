<template>
	<div class="relative py-4 lg:py-18 bg-gray-100" id="why-us">
		<div class="container mx-auto">
			<div class="flex flex-col md:flex-row md:justify-between mx-auto">
				<div class="base-title flex-shrink-0">Why us</div>
				<div class="max-w-4xl md:px-8 text-gray-800">
					<!-- company tagline -->
					<div class="mb-6 text-5-1/2 md:text-10-1/2 font-bold">
						{{ taglineToShow }}
					</div>
					<!-- company ethos -->
					<div class="text-xs md:text-base font-normal">
						{{ ethosToShow }}
					</div>
				</div>
				<!-- edit button -->
				<div class="absolute md:static top-0 right-0 mt-14 mr-6 lg:mt-0 lg:mr-0 lg:ml-16">
					<base-edit-pen
						v-if="isEditPage"
						@click="$bus.$emit('open-employer-edit-why-us-modal')"
						class="text-gray-800 hover:text-yellow"
						:pen-class-list="['h-8', 'md:h-7']"
					/>
				</div>
			</div>
			<div class="flex flex-col justify-start lg:flex-row lg:items-stretch lg:justify-between mt-16">
				<core-value-card
					v-for="(coreValue, index) in coreValuesToShow"
					:key="index"
					:value="coreValue"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CoreValueCard from '../CoreValueCard';
import BaseEditPen from '~/components/BaseComponents/BaseEditPen';
import dummyWhyus from '~/mocks/Employer/whyUs';

export default {
	name: 'EmployerWhyUsSection',

	props: {
		isEditPage: {
			type: Boolean,
			required: false,
			default: false
		}
	},

	components: {
		BaseEditPen,
		CoreValueCard
	},

	computed: {
		...mapState('employer/whyUs', [
			'tagline',
			'ethos',
			'coreValues'
		]),

		/**
		 * The tagline to show, so we can show dummy content if user has nothing yet
		 */
		taglineToShow() {
			if(this.isEditPage && (this.tagline === '' || this.tagline === undefined)) {
				return dummyWhyus.tagline;
			} else {
				return this.tagline;
			}
		},

		/**
		 * The ethos to show, so we can show dummy content if user has nothing yet
		 */
		ethosToShow() {
			if(this.isEditPage && (this.ethos === '' || this.ethos === undefined)) {
				return dummyWhyus.ethos;
			} else {
				return this.ethos;
			}
		},

		/**
		 * The core values to show, so we can show dummy content if user has nothing yet
		 */
		coreValuesToShow() {
			if(this.isEditPage && (this.ethos === '' || this.ethos === undefined)) {
				return dummyWhyus.coreValues;
			} else {
				return this.coreValues;
			}
		}
	},

	mounted() {
		if(process.browser) {
			try {
				this.fetchWhyUs(this.$route.params.id);
			} catch (error) {
				console.error(error);
			}
		}
	},

	methods: {
		...mapActions('employer/whyUs', ['fetchWhyUs'])
	}
};
</script>

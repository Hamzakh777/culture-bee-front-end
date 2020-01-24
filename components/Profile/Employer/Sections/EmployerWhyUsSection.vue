<template>
	<div class="relative py-4 lg:py-18 bg-gray-100" id="why-us">
		<div class="container mx-auto">
			<div class="flex flex-col md:flex-row md:justify-between mx-auto">
				<div class="base-title">Why us</div>
				<div class="max-w-4xl md:px-8 text-gray-800">
					<!-- company tagline -->
					<div class="mb-6 text-5-1/2 md:text-10-1/2 font-bold">
						{{ tagline }}
					</div>
					<!-- company ethos -->
					<div class="text-xs md:text-base font-normal">
						{{ ethos }}
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
					v-for="(coreValue, index) in coreValues"
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

export default {
	name: 'EmployerWhyUsSection',

	props: {
		isEditPage: {
			type: Boolean,
			required: true
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
		])
	},

	created() {
		try {
			this.fetchWhyUs(this.$route.params.id);
		} catch (error) {
			alert('An error happend trying to load company feed updates');
			console.error(error);
		}
	},

	methods: {
		...mapActions('employer/whyUs', ['fetchWhyUs'])
	}
};
</script>

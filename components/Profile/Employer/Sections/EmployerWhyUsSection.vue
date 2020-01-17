<template>
	<div class="py-18 bg-gray-100" id="why-us">
		<div class="container mx-auto">
			<div class="flex justify-between mx-auto">
				<div class="base-title">Why us</div>
				<div class="max-w-4xl px-8 text-gray-800">
					<!-- company tagline -->
					<div class="mb-6 text-10-1/2 font-bold">
						{{ tagline }}
					</div>
					<!-- company ethos -->
					<div class="text-base font-normal">
						{{ ethos }}
					</div>
				</div>
				<!-- edit button -->
				<div class="ml-16">
					<base-edit-pen
						v-if="isEditPage"
						@click="$bus.$emit('open-employer-edit-why-us-modal')"
						class="text-gray-800 hover:text-yellow"
					/>
				</div>
			</div>
			<div class="flex items-stretch justify-between mt-16">
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

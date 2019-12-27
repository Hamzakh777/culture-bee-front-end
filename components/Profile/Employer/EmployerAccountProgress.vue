<template>
	<div class="p-16 bg-gray-100">
		<!-- step title -->
		<div
			class="text-13 font-bold font-D-Din text-black uppercase tracking-tight"
		>{{ steps[currentProfileCreationStep].section }}</div>
		<!-- progress bar -->
		<div class="flex justify-between mt-5 mb-9">
			<div
				v-for="step in totalSteps"
				:key="step"
				:class="{ 'bg-yellow': step === currentProfileCreationStep }"
				class="h-4 bg-gray-200"
				style="width: 16.4%"
			></div>
		</div>
		<!-- step details -->
		<div class="flex px-8 py-10 border-2 border-gray-900 bg-white">
			<div>
				<img :src="steps[currentProfileCreationStep].iconUrl" class="w-14" />
			</div>
			<div class="pl-8">
				<!-- step title -->
				<div class="mb-3 font-bold text-black text-5-1/2">{{ steps[currentProfileCreationStep].title }}</div>
				<!-- step description -->
				<div
					class="font-normal text-black text-base"
				>{{ steps[currentProfileCreationStep].description }}</div>
			</div>
		</div>
		<div class="flex justify-end items-center mt-10">
			<button
				@click="prevStep"
				v-if="currentProfileCreationStep !== 1"
				class="secondary-btn mr-16"
			>
				back
			</button>
			<button @click="next" class="primary-btn">{{ steps[currentProfileCreationStep].nextButtonText }}</button>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import steps from './steps';
// eslint-disable-next-line no-unused-vars
import EventBus from '@/_utils/EventBus';

export default {
	name: 'EmployerAccountProgress',

	computed: {
		...mapState('employer', ['currentProfileCreationStep'])
	},

	data() {
		return {
			steps
		};
	},

	mounted() {
		// listen to some events so we can move automatically to next step
	},

	methods: {
		...mapMutations('employer', ['prevStep']),

		next() {
			EventBus.$emit(
				this.steps[this.currentProfileCreationStep].nextEventName
			);
		}
	}
};
</script>

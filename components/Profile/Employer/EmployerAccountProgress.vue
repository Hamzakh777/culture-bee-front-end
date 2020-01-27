<template>
	<div class="relative px-6 py-10 md:p-16 bg-gray-100">
		<div class="relative z-1">
			<!-- step title -->
			<div
				class="text-8 md:text-13 font-bold font-D-Din text-black uppercase tracking-tight"
			>{{ steps[currentStep].section }}</div>
			<!-- progress bar -->
			<div class="flex justify-between mt-4 md:mt-5 mb-4 md:mb-9">
				<div
					v-for="step in totalSteps"
					:key="step"
					:class="{ 'bg-yellow': step === currentStep }"
					class="h-3 md:h-4 bg-gray-200"
					style="width: 16%"
				></div>
			</div>
			<!-- step details -->
			<div class="flex flex-col items-center md:items-start md:flex-row px-8 py-10 border-2 border-gray-900 bg-white">
				<div>
					<img :src="steps[currentStep].iconUrl" class="w-14 mb-6 md:mb-0" />
				</div>
				<div class="md:pl-8">
					<!-- step title -->
					<div class="mb-3 font-bold text-black text-5-1/2 text-center md:text-left">{{ steps[currentStep].title }}</div>
					<!-- step description -->
					<div
						class="font-normal text-black text-base text-center md:text-left"
					>{{ steps[currentStep].description }}</div>
				</div>
			</div>
			<div class="flex justify-between lg:justify-end items-center mt-10">
				<button
					@click="prev"
					v-if="currentStep !== 1"
					class="secondary-btn mr-16"
				>
					back
				</button>
				<button @click="next" class="primary-btn">{{ steps[currentStep].nextButtonText }}</button>
			</div>
		</div>
		<div class="md:hidden absolute top-0 bottom-0 left-1/2 w-screen -transform-x-50 bg-gray-100"></div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import steps from './steps';
// eslint-disable-next-line no-unused-vars

export default {
	name: 'EmployerAccountProgress',

	computed: {
		...mapState('employer', ['currentProfileCreationStep'])
	},

	watch: {
		currentProfileCreationStep(newVal) {
			this.currentStep = newVal;
		}
	},

	data() {
		return {
			totalSteps: [0,1,2,3,4,5],
			currentStep: 0,
			steps
		};
	},

	created() {
		this.currentStep = JSON.parse(JSON.stringify(this.currentProfileCreationStep));
	},

	methods: {
		prev() {
			this.currentStep -= 1;
		},

		next() {
			this.$bus.$emit(
				this.steps[this.currentProfileCreationStep].nextEventName
			);
		}
	}
};
</script>

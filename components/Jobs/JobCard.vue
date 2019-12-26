<template>
	<div class="flex justify-between items-stretch px-10 py-12 border border-gray-300">
		<!-- company logo and follow button -->
		<div class="flex flex-col w-32 h-40 border border-gray-100 bg-white">
			<div class="flex justify-center items-center flex-grow p-4">
				<img src alt />
			</div>
			<div class="flex items-center justify-center relative h-12-1/2 bg-gray-800">
				<base-follow-button class="text-center" />
			</div>
		</div>
		<!-- job details -->
		<div class="flex flex-col justify-between px-10 pt-4 flex-grow">
			<div>
				<!-- role -->
				<div class="sub-title">jUNIOR, PART-TIME</div>
				<!-- job title -->
				<div class="text-8 font-bold text-gray-800">Job title goes here</div>
			</div>
			<!-- location -->
			<div class="small-text">LONDON, SE17</div>
            <!-- job tags  -->
            <div 
                v-if="isJobSeekerView" 
                class="flex"
            >
				<div
					v-for="(tag, index) in tags"
					:key="index"
					:class="{ 'ml-5': index !== 0 }"
					class="small-text"
				>{{ tag }}</div>
			</div>
		</div>
		<!-- job tags and date -->
		<div class="flex flex-col justify-between text-right">
			<base-like-icon v-if="isJobSeekerView" class="relative h-19" />
			<div class="small-text">yesterday</div>
			<div v-if="!isJobSeekerView" class="flex">
				<div
					v-for="(tag, index) in tags"
					:key="index"
					:class="{ 'ml-5': index !== 0 }"
					class="small-text"
				>{{ tag }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import BaseFollowButton from '~/components/BaseComponents/BaseFollowButton';
import BaseLikeIcon from '~/components/BaseComponents/BaseLikeIcon';

export default {
	name: 'JobCarb',

	components: {
		BaseFollowButton,
		BaseLikeIcon
	},

	props: {
		// we want to show/hide some components (favorite)
		// depending on who is viewing the job card
		isJobSeekerView: {
			type: Boolean,
			required: false,
			default: false
		}
	},

	data() {
		return {
			tags: ['FASHION', 'Ethical', 'hacking']
		};
	},

	methods: {
		/**
		 * Toggle following the comany
		 */
		followCompany() {}
	}
};
</script>

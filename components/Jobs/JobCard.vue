<template>
	<div 
		class="flex flex-col md:flex-row justify-between items-stretch mb-4 lg:mb-8 px-0 md:px-10 pt-10 md:py-12 border border-gray-300 cursor-pointer"
		@click="viewJob"
	>
		<!-- company logo and follow button -->
		<div 
			class="hidden lg:flex flex-col w-32 h-40 border border-gray-100 bg-white"
		>
			<div class="flex justify-center items-center flex-grow p-4">
				<img :src="job.owner.profile_img_url" />
			</div>
			<div class="flex items-center justify-center relative h-12-1/2 bg-gray-800">
				<base-follow-button class="text-center" />
			</div>
		</div>
		<!-- job details -->
		<div class="flex flex-col justify-between mb-5 md:mb-0 px-6 md:px-10 pt-0 md:pt-4 flex-grow">
			<div class="mb-4">
				<div class="flex items-start justify-start mb-2">
					<!-- seniority -->
					<div class="sub-title mr-4">{{ job.seniority }}</div>
					<!-- logo -->
					<img 
						class="block lg:hidden h-5"
						style="max-width: 140px"
						:src="job.owner.profile_img_url" 
					>
				</div>
				<!-- job title -->
				<div class="text-5-1/2 lg:text-8 font-bold text-gray-800">{{ job.jobTitle }}</div>
			</div>
			<!-- location -->
			<div class="small-text">{{ job.location }}</div>
            <!-- job tags  -->
            <div 
                v-if="isJobSeekerView" 
                class="flex"
            >
				<div
					v-for="(tag, index) in job.tags"
					:key="index"
					:class="{ 'ml-5': index !== 0 }"
					class="small-text"
				>{{ tag }}</div>
			</div>
		</div>
		<!-- job tags and date -->
		<div class="flex flex-col justify-between px-6 md:px-0 mb-8 text-right">
			<base-like-icon v-if="isJobSeekerView" class="relative h-19" />
			<!-- created at -->
			<div class="hidden md:block small-text">{{ job.createdAt }}</div>
			<!-- tags -->
			<div v-if="!isJobSeekerView" class="flex">
				<div
					v-for="(tag, index) in job.tags"
					:key="index"
					:class="{ 'ml-5': index !== 0 }"
					class="small-text"
				>{{ tag }}</div>
			</div>
		</div>
		<!-- follow card - shows up on mobile only -->
		<div class="flex lg:hidden items-center justify-center relative h-12-1/2 bg-gray-800">
			<base-follow-button class="text-center" />
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
		},
		job: {
			type: Object,
			required: true
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
		followCompany() {},

		viewJob() {
			return this.$router.push(`/jobs/${this.job.id}`);
		}
	}
};
</script>

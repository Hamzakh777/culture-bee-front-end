<template>
	<div
		v-if="isVisible"
		@click="viewJob"
		class="flex flex-col md:flex-row justify-between items-stretch relative mb-4 lg:mb-8 px-0 md:px-10 pt-10 md:py-12 border border-gray-300 cursor-pointer"
	>
		<!-- loader  -->
		<div 
			v-if="isLoading"
			class="absolute inset-0"
		>
			<base-loader />
		</div>
		<!-- company logo and follow button -->
		<div
			class="hidden lg:flex flex-col w-32 h-40 border border-gray-100 bg-white"
		>
			<div class="flex justify-center items-center flex-grow p-4">
				<img :src="job.owner.profile_img_url" />
			</div>
			<div
				class="flex items-center justify-center relative h-12-1/2 bg-gray-800"
			>
				<base-follow-button class="text-center" />
			</div>
		</div>
		<!-- job details -->
		<div
			class="flex flex-col justify-between mb-5 md:mb-0 px-6 md:px-10 pt-0 md:pt-4 flex-grow"
		>
			<div class="mb-4">
				<div class="flex items-start justify-start mb-2">
					<!-- seniority -->
					<div class="sub-title mr-4">{{ job.seniority }}</div>
					<!-- logo -->
					<img
						:src="job.owner.profile_img_url"
						class="block lg:hidden h-5"
						style="max-width: 140px"
					/>
				</div>
				<!-- job title -->
				<div class="text-5-1/2 lg:text-8 font-bold text-gray-800">
					{{ job.jobTitle }}
				</div>
			</div>
			<!-- location -->
			<div class="small-text">{{ job.location }}</div>
			<!-- job tags  -->
			<div v-if="isJobSeekerView" class="flex">
				<div
					v-for="(tag, index) in job.tags"
					:key="index"
					:class="{ 'ml-5': index !== 0 }"
					class="small-text"
				>
					{{ tag }}
				</div>
			</div>
		</div>
		<!-- job tags and date -->
		<div
			class="flex flex-col justify-between px-6 md:px-0 mb-8 lg:mb-0 text-right"
		>
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
				>
					{{ tag }}
				</div>
			</div>
		</div>
		<div 
			v-if="isEdit"
			class="hidden lg:flex flex-col items-end justify-between pl-16"
		>
			<div class="relative">
				<button
					class="flex justify-center items-center h-12 w-12 bg-gray-800 focus:outline-none"
					@click.stop="toggleActionsDropdown"
				>
					<div 
						class="h-1-1/2 w-1-1/2 mx-1/2 rounded-full bg-yellow"
						v-for="i in 3" 
						:key="i"
					>
					</div>
				</button>
				<!-- actions dropdown  -->
				<div 
					v-if="isActionsDropdownActive"
					class="absolute top-0 right-0 mt-14 bg-white shadow-md"
				>
					<button
						class="action-btn border-gray-300 border-b-2"
						@click.stop="deleteJob"
					>
						Delete
					</button>
					<button
						class="action-btn"
						@click.job="expireJob"
					>
						Expire
					</button>
				</div>
			</div>
			<button 
				class="primary-btn"
				@click.stop="$bus.$emit('open-edit-job-modal')"
			>
				Edit job
			</button>
		</div>
		<!-- follow card - shows up on mobile only -->
		<div
			class="flex lg:hidden items-center justify-center relative h-12-1/2 bg-gray-800"
		>
			<base-follow-button class="text-center" />
		</div>
	</div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import BaseFollowButton from '~/components/BaseComponents/BaseFollowButton';
import BaseLoader from '~/components/BaseComponents/BaseLoader';
import BaseLikeIcon from '~/components/BaseComponents/BaseLikeIcon';
import baseToggleLoaderMixin from '~/mixins/base/baseToggleLoaderMixin';

export default {
	name: 'JobCarb',

	mixins: [clickaway, baseToggleLoaderMixin],

	components: {
		BaseFollowButton,
		BaseLikeIcon,
		BaseLoader
	},

	props: {
		// we want to show/hide some components (favorite)
		// depending on who is viewing the job card
		isJobSeekerView: {
			type: Boolean,
			required: false,
			default: false
		},
		isEdit: {
			type: Boolean,
			required: false, 
			default: false
		},
		job: {
			type: Object,
			required: true
		},
	},

	data() {
		return {
			tags: ['FASHION', 'Ethical', 'hacking'],
			isActionsDropdownActive: false,
			isVisible: true // used to hide the card when delete or expire toggled
		};
	},

	methods: {
		toggleActionsDropdown() {
			this.isActionsDropdownActive = !this.isActionsDropdownActive;
		},


		/**
		 * Toggle following the comany
		 */
		followCompany() {},

		viewJob() {
			return this.$router.push(`/jobs/${this.job.id}`);
		},
		
		async deleteJob() {
			this.toggleLoader();
			try {
				await this.$axios.delete(`api/jobs/${this.job.id}`);

				this.isVisible = false;
			} catch (error) {
				alert('An error happened trying to delete the job');
				console.error(error);
			}
			this.toggleLoader();
		},

		async expireJob() {
			//
		}
	}
};
</script>
<style scoped>
.action-btn {
	@apply px-6 py-4 text-sm font-bold text-black;
}	
</style>

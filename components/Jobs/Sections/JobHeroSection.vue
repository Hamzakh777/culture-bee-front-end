<template>
	<div class="relative md:h-138 bg-gray-to-black">
		<div class="relative h-full">
			<div
				class="container flex items-end relative z-1 h-full py-12 mx-auto"
			>
				<div class="flex flex-col md:flex-row items-start w-full">
					<!-- logo -->
					<div 
						class="flex md:hidden items-center h-45 w-45 mt-42 md:mt-0 p-5 bg-white overflow-hidden"
					>
						<img 
							v-if="profileImgUrl !== null && profileImgUrl !== undefined"
							:src="profileImgUrl"
						>
					</div>
					<!-- follow card -->
					<div class="hidden md:block" style="max-width: 10rem">
                        <company-follow-card
                            :logo-url="profileImgUrl"
							:following="following"
							@unfollow="unfollow"
							@follow="follow"
                            class="h-45 w-36 border-none"
                        />
                        <!-- location -->
                        <div class="hidden lg:block job-info pt-5 px-3 text-center">
                            {{ location }}
                        </div>
                    </div>
					<!-- apply button - shows up on mobile only -->
					<button
						v-if="role === 'job-seeker' || !isLoggedIn"
						class="primary-btn md:hidden mt-8 w-full"
						@click="handleApplyClick"
					>
						Apply
					</button>
					<!-- company info -->
					<div
						class="hidden md:flex flex-grow flex-col items-stretch justify-between lg:justify-start ml-14 bg-white md:bg-transparent text-gray-800 md:text-white"
					>
						<div class="flex justify-between lg:justify-start mt-2 mb-8">
							<!-- seniority -->
							<div class="job-info">
								{{ seniority }}
							</div>
							<!-- tags -->
							<div class="flex lg:hidden mx-4">
								<span
									v-for="(tag, index) in tags"
									:key="index"
									class="job-info mr-2 last:mr-0"
								>
									{{ tag }}
								</span>
							</div>
							<!-- location -->
							<div class="lg:hidden job-info">
								{{ location }}
							</div>
							<!-- posted date -->
							<span
								class="hideen lg:block ml-6 text-sm font-bold tracking-widest uppercase text-white"
							>
								posted: {{ createdAt }}
							</span>
						</div>
						<div>
							<div>
								<!-- jot title -->
								<div
									class="mb-3 text-13 font-D-Din tracking-tight uppercase font-bold tracking-wide leading-none"
								>
									{{ jobTitle }}
								</div>
								<!-- quick pitch -->
								<div class="lg:mb-6 max-w-xs text-5-1/2 md:text-base lg:text-normal lg:text-sm font-bold">
									{{ quickPitch }}
								</div>
								<!-- tags -->
								<div class="hidden lg:flex">
									<span
										v-for="(tag, index) in tags"
										:key="index"
										class="job-info mr-4 last:mr-0"
									>
										{{ tag }}
									</span>
								</div>
							</div>
						</div>
					</div>
					<!-- apply button - shows up on table and desktop only -->
					<button
						v-if="role === 'job-seeker' || !isLoggedIn"
						class="primary-btn hidden md:inline-block self-end mb-4 px-14 w-auto"
						@click="handleApplyClick"
					>
						Apply
					</button>
				</div>
				<div class="absolute top-0 right-0 mt-4 mr-4 md:mr-8">
					<!-- follow button -->
					<base-follow-button 
						class="md:hidden" 
						:following="following"
						@unfollow="unfollow"
						@follow="follow"
					/>
					<!-- posted date -->
					<span
						class="hidden md:block lg:hidden text-xs font-bold tracking-widest uppercase text-white"
					>
						posted: {{ createdAt }}
					</span>
				</div>
			</div>
			<!-- bg image -->
			<div class="absolute inset-0 z-0 bg-center bg-cover bg-center">
				<div
					:style="
						coverImgUrl !== undefined && coverImgUrl !== null
							? `background-image: url(${coverImgUrl})`
							: ''
					"
					class="absolute inset-0 z-0 bg-cover bg-center"
				></div>
				<div
					class="absolute inset-0 z-1 opacity-50 bg-gray-to-black"
				></div>
			</div>
		</div>

		<!-- company info -->
		<div
			class="container flex md:hidden flex-col justify-between py-8 bg-white text-gray-800"
		>
			<div>
				<div class="flex flex-col">
					<div
						class="mb-2 text-8 font-D-Din tracking-tight uppercase font-bold tracking-wide leading-none"
					>
						{{ jobTitle }}
					</div>
					<!-- location -->
					<div class="text-xs font-bold">
						{{ location }}
					</div>
				</div>

				<!-- quick pitch -->
				<div class="max-w-xs mt-6 text-2xl font-bold">
					{{ quickPitch }}
				</div>

				<!-- seniority -->
				<div class="job-info mt-6 underline">
					{{ seniority }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import CompanyFollowCard from '~/components/Companies/CompanyFollowCard';
import BaseFollowButton from '~/components/BaseComponents/BaseFollowButton';

export default {
	name: 'HeroSection',

	components: {
		CompanyFollowCard,
		BaseFollowButton
	},

	computed: {
		...mapState('account', [
			'role'
		]),
		...mapState('employer', [
			'profileImgUrl',
			'coverImgUrl',
			'companyName',
			'following'
		]),
		...mapState('job', [
			'jobTitle',
			'location',
			'quickPitch',
			'seniority',
			'tags',
			'createdAt'
		]),
		...mapGetters('account', ['isLoggedIn'])
	},

	methods: {
		...mapActions('employer', ['follow', 'unfollow']),

		handleApplyClick() {
			if(this.isLoggedIn) {
				this.$bus.$emit('open-job-application-modal');
			} else {
				this.$bus.$emit('open-job-authenticate-modal');
			}
		}
	}
};
</script>
<style scoped>
.job-info {
	@apply text-yellow text-xxs font-bold uppercase tracking-widest;
}

@media(min-width: 1024px) {
	.job-info {
		@apply text-sm;
	}
}
</style>

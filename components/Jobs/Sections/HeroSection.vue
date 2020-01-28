<template>
	<div class="relative md:h-138 bg-gray-to-black">
		<div class="relative h-full">
			<div
				class="container flex items-end relative z-1 h-full py-12 mx-auto"
			>
				<div class="flex flex-col md:flex-row items-stretch w-full">
					<!-- logo -->
					<div class="hidden md:block">
                        <company-follow-card
                            :logo-url="profileImgUrl"
                            class="h-45 w-36 border-none"
                        />
                        <!-- location -->
                        <div class="hidden lg:block job-info pt-5 px-3 text-center">
                            {{ location }}
                        </div>
                    </div>
					<!-- company info -->
					<div
						class="hidden md:flex flex-grow flex-col items-stretch justify-between ml-14 bg-white md:bg-transparent text-gray-800 md:text-white"
					>
						<div class="flex justify-between mt-2 mb-8">
							<!-- seniority -->
							<div class="job-info">
								{{ seniority }}
							</div>
							<!-- tags -->
							<div class="flex mx-4">
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
						</div>
						<div>
							<!-- jot title -->
							<div
								class="mb-3 text-13 font-D-Din tracking-tight uppercase font-bold tracking-wide leading-none"
							>
								{{ jobTitle }}
							</div>
							<!-- quick pitch -->
							<div class="max-w-xs text-5-1/2 font-bold">
								{{ quickPitch }}
							</div>
						</div>
					</div>
				</div>
				<div class="absolute top-0 right-0 mt-4 mr-4 md:mr-8">
					<!-- follow button -->
					<base-follow-button class="md:hidden" />
					<!-- posted date -->
					<span
						class="text-xs font-bold tracking-widest uppercase text-white"
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
import { mapState } from 'vuex';
import CompanyFollowCard from '~/components/Companies/CompanyFollowCard';
import BaseFollowButton from '~/components/BaseComponents/BaseFollowButton';

export default {
	name: 'HeroSection',

	components: {
		CompanyFollowCard,
		BaseFollowButton
	},

	computed: {
		...mapState('employer', [
			'profileImgUrl',
			'coverImgUrl',
			'companyName'
		]),
		...mapState('job', [
			'jobTitle',
			'location',
			'quickPitch',
			'seniority',
			'tags',
			'createdAt'
		])
	}
};
</script>
<style scoped>
.job-info {
	@apply text-yellow text-xxs font-bold uppercase tracking-widest;
}
</style>

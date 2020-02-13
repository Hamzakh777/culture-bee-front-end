<template>
	<div class="relative md:h-138 bg-gray-to-black">
		<div class="relative h-full">
			<div class="container flex items-end relative z-1 h-full py-12 mx-auto">
				<div class="flex flex-col md:flex-row items-stretch w-full">
					<!-- logo -->
					<div 
						class="flex items-center h-45 w-45 mt-42 md:mt-0 p-5 bg-white overflow-hidden"
					>
						<img 
							v-if="profileImgUrl !== null && profileImgUrl !== undefined"
							:src="profileImgUrl"
						>
					</div>
					<!-- company info -->
					<div class="hidden md:flex flex-col justify-between ml-14 bg-white md:bg-transparent text-gray-800 md:text-white">
						<div>
							<div class="flex items-center">
								<div
									class="mb-3 text-13 font-D-Din tracking-tight uppercase font-bold tracking-wide leading-none"
								>
									{{ companyName }}
								</div>
								<!-- location -->
								<div class="ml-3 -mb-2 text-sm font-bold">
									{{ location }}
								</div>
							</div>

							<!-- quick pitch -->
							<div class="max-w-xs text-5-1/2 font-bold">
								{{ quickPitch }}
							</div>
						</div>

						<div
							v-if="isEditPage"
							@click="openEditIntro"
							class="secondary-btn text-yellow cursor-pointer"
						>
							Edit intro
						</div>
						<nuxt-link
							v-else
							class="secondary-btn text-yellow cursor-pointer"
							to="/"
						>
							{{ jobsTotal }} Jobs
						</nuxt-link>
					</div>
				</div>

				<!-- edit button -->
				<base-app-icon
					v-if="isEditPage"
					:class-list="[
						'absolute',
						'top-0',
						'right-0',
						'h-7',
						'mt-16',
						'mr-8',
						'fill-current',
						'text-white',
						'cursor-pointer',
						'hover:text-yellow'
					]"
					name="edit-pen"
					@click="openEditIntro"
				/>

				<!-- follow button -->
				<base-follow-button 
					v-if="!isEditPage"
					class="absolute bottom-0 right-0"
				/>
			</div>
			<!-- bg image -->
			<div 
				class="absolute inset-0 z-0 bg-center bg-cover bg-center"
			>
				<div class="absolute inset-0 z-0 bg-cover bg-center" :style=" coverImgUrl !== undefined && coverImgUrl !== null ? `background-image: url(${coverImgUrl})` : ''"></div>
				<div class="absolute inset-0 z-1 opacity-50 bg-gray-to-black"></div>
			</div>
		</div>

		<!-- company info -->
		<div class="container flex md:hidden flex-col justify-between py-8 bg-white text-gray-800">
			<div>
				<div class="flex flex-col">
					<div
						class="mb-2 text-8 font-D-Din tracking-tight uppercase font-bold tracking-wide leading-none"
					>
						{{ companyName }}
					</div>
					<!-- location -->
					<div class="text-xs font-bold">
						{{ location }}
					</div>
				</div>

				<!-- quick pitch -->
				<div class="max-w-xs mt-6 text-5 font-bold">
					{{ quickPitch }}
				</div>
			</div>

			<div
				v-if="isEditPage"
				@click="openEditIntro"
				class="secondary-btn text-yellow cursor-pointer mt-6"
			>
				Edit intro
			</div>
			<nuxt-link
				v-else
				class="secondary-btn text-yellow cursor-pointer"
				to="/"
			>
				{{ jobsTotal }} Jobs
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';
import BaseFollowButton from '~/components/BaseComponents/BaseFollowButton';

export default {
	name: 'EmployerHero',

	components: {
        BaseAppIcon,
        BaseFollowButton
	},

	props: {
		isEditPage: {
			type: Boolean,
			required: false,
			default: false
		}
	},

	computed: {
		...mapState('employer', ['quickPitch', 'profileImgUrl', 'coverImgUrl', 'companyName', 'location']),
		...mapGetters('employer/jobs', ['jobsTotal'])
	},

	methods: {
		openEditIntro() {
			this.$bus.$emit('open-employer-intro-modal');
		}
	}
};
</script>

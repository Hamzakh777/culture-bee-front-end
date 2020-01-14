<template>
	<div class="relative h-138 bg-gray-to-black">
		<div class="container flex items-end relative z-1 h-full py-12 mx-auto">
			<div class="flex items-stretch w-full">
				<!-- logo -->
				<div class="flex items-center h-45 w-45 p-5 bg-white"></div>
				<!-- company info -->
				<div class="flex flex-col justify-between ml-14  text-white">
					<div>
						<div class="flex items-center">
							<div
								class="mb-3 text-13 font-D-Din tracking-tight uppercase font-bold tracking-wide leading-none"
							>
								Name of the company
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
						{{ totalJobs }} Jobs
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
			:style=" coverImgUrl != false ? `background-image: url(${coverImgUrl})` : ''"
		>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
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
		...mapState('employer', ['quickPitch', 'totalJobs']),
		...mapState('account', ['location', 'quickPitch', 'profileImgUrl', 'coverImgUrl'])
	},

	methods: {
		openEditIntro() {
			this.$bus.$emit('open-employer-intro-modal');
		}
	}
};
</script>

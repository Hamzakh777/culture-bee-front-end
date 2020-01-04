<template>
	<div>
		<div
			class="relative bg-gray-200 bg-center bg-cover"
			:class="{
				'h-54 md:h-80': size === 'small',
				'h-54 md:h-123': size === 'medium',
				'h-54 md:h-82-10/1-%': size === 'big',
			}"
		>

			<!-- like icon -->
			<base-like-icon 
				v-if="role === 'job-seeker'"
				class="top-0 right-0 md:mt-8"
			/>

			<!-- edit remove buttons -->
			<div
				v-else-if="isEditing === true"
				class="absolute top-0 right-0 flex items-center mt-4 mr-4"
			>
				<base-edit-pen 
					class="flex items-center justify-center h-8 w-8 mr-2 bg-gray-700 text-white"
					:pen-class-list="['relative', 'h-4']"
				/>
				<base-close-button
					style="height: 2rem; width: 2rem"
				/>
			</div>

			<!-- info card -->
			<div 
				v-if="size === 'big'"
				class="absolute bottom-0 left-0 mr-19 px-7-1/2 py-9 bg-white"
			>
				<span class="sub-title mb-5">update</span>
				<h4 class="mb-5 text-lg md:text-8 font-bold text-gray-800">Lorem ipsum dolor sit amet, consectetur </h4>
				<div class="text-xs font-bold text-gray-800 tracking-widest uppercase">
					<span 
						class="inline-block mb-2 mr-4"
						v-for="(tag, index) in tags"
						:key="index"
					>
						{{ tag }}
					</span>
				</div>
			</div>
		</div>
		<div 
			v-if="size !== 'big'"
			class="px-7-1/2 py-9 bg-white"
		>
			<span class="inline-block sub-title mb-5">update</span>
			<h4 class="mb-5 text-lg md:text-5-3/4 font-bold text-gray-800">Lorem ipsum dolor sit amet, consectetur </h4>
			<div class="text-xs font-bold text-gray-800 tracking-widest uppercase">
				<span 
					class="inline-block mb-2 mr-4"
					v-for="(tag, index) in tags"
					:key="index"
				>
					{{ tag }}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import BaseLikeIcon from '~/components/BaseComponents/BaseLikeIcon';
import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';
import BaseEditPen from '~/components/BaseComponents/BaseEditPen';

export default {
	name: 'CompanyUpdateCard',

	props: {
		size: {
			type: String,
			required: false,
			default: 'small'
        }
    },
    
    components: {
		BaseLikeIcon,
		BaseCloseButton,
		BaseEditPen
	},

	computed: {
		...mapState('user', ['role']),
		...mapState('employer', ['isEditing'])
	},
	
	data() {
		return {
			tags: ['volunteer', 'csr', 'pride']
		}
	},
};
</script>

<style scoped>
.big-card-height {
	height: 82.1%;
}
</style>


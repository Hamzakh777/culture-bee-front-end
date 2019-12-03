<template>
	<div>
		<div
			class="relative bg-gray-200 bg-center bg-cover"
			:class="{
				'h-80': size === 'small',
				'h-123': size === 'medium'
			}"
			:style="size === 'big' ? 'height: 82.1%': ''"
		>
			<base-like-icon class="top-0 right-0 mt-8"/>
			<div 
				v-if="size === 'big'"
				class="absolute bottom-0 left-0 mr-19 px-7-1/2 py-9 bg-white"
			>
				<span class="sub-title mb-5">update</span>
				<h4 class="mb-5 text-8 font-bold text-gray-800">Lorem ipsum dolor sit amet, consectetur </h4>
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
			<h4 class="mb-5 text-4-3/4 font-bold text-gray-800">Lorem ipsum dolor sit amet, consectetur </h4>
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
import BaseLikeIcon from '~/components/BaseComponents/BaseLikeIcon';

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
		BaseLikeIcon
	},
	
	data() {
		return {
			tags: ['volunteer', 'csr', 'pride']
		}
	},
};
</script>

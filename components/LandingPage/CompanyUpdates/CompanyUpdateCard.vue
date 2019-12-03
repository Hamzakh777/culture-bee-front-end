<template>
	<div>
		<div
			class="relative bg-gray-200 bg-center bg-cover"
			:class="{
				'h-80': size === 'small',
				'h-123': size === 'medium',
				'h-full': size == 'big'
			}"
		>
			<div class="absolute top-0 right-0 mt-8 h-19 w-19 bg-black text-white">
                <BaseAppIcon
                    name="like"
                    :classList="['absolute', 'top-1/2', 'left-1/2', 'h-8', 'transform-center', 'fill-current', 'cursor-pointer']"
                />
			</div>
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
import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';

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
        BaseAppIcon
	},
	
	data() {
		return {
			tags: ['volunteer', 'csr', 'pride']
		}
	},
};
</script>

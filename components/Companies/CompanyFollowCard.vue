<template>
	<div class="flex flex-col w-32 h-40 border border-gray-100 bg-white">
		<div class="flex justify-center items-center flex-grow p-4">
			<img :src="logoUrl" alt />
		</div>
		<div
			class="flex items-center justify-center relative h-16 bg-gray-800"
		>
			<base-follow-button 
				:following="following"
				@unfollow="$emit('unfollow')"
				@follow="$emit('follow')"
                class="text-center" 
            />
		</div>
	</div>
</template>

<script>
import BaseFollowButton from '~/components/BaseComponents/BaseFollowButton';

export default {
    name: 'CompanyFollowCard',
    
    props: {
        logoUrl: {
            type: String,
            required: false,
            default: ''
		},
		following: {
			type: Boolean,
			required: true
		}
    },

	components: {
		BaseFollowButton
	}
};
</script>

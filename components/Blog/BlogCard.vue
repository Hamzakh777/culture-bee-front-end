<template>
    <div class="shadow-md">
		<div
			:style="`background-image: url(${post.coverImgUrl})`"
			class="relative h-138 bg-gray-200 bg-center bg-cover"
		>
			<!-- like icon -->
			<base-like-icon class="top-0 right-0 md:mt-8" />
		</div>
		<div class="px-7-1/2 py-9 bg-white">
			<span class="inline-block sub-title mb-5">Blog</span>
			<h4 class="mb-5 text-lg md:text-8 font-bold text-gray-800">
				{{ post.title }}
			</h4>
			<div
				class="text-xs font-bold text-gray-800 tracking-widest uppercase"
			>
				<span
					v-for="(tag, index) in post.tags"
					:key="index"
					class="inline-block mb-2 mr-4"
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
        name: 'BlogCard',
        
        components: {
            BaseLikeIcon
        },

        props: {
            post: {
                type: Object,
                required: true
            }
        }
    }
</script>
<template>
	<div
		class="flex items-center justify-center relative top-0 right-0 cursor-pointer"
		@click.stop="handleClick"
	>
		<div class="relative h-4 w-4 mr-3">
			<div
				class="yellow-sm-bar absolute top-1/2 left-1/2 transform-center"
			></div>
			<div
				class="yellow-sm-bar absolute top-1/2 left-1/2"
				style="transform: translate(-50%, -50%) rotate(90deg)"
			></div>
		</div>
		<span class="text-xs text-white font-bold uppercase tracking-widest"
			>
				{{ following ? 'unfollow' : 'follow' }}
			</span
		>
	</div>
</template>

<script>
export default {
	name: 'BaseFollowButton',

	props: {
		following: {
			type: Boolean,
			required: true
		}
	},

	methods: {
		handleClick() {
			if(this.following) {
				this.$emit('unfollow');
			} else {
				this.$emit('follow');
			}
		}
	}
};
</script>

<style>
.yellow-sm-bar {
	height: 3px;
	width: 0.625rem;
	@apply bg-yellow;
}
</style>

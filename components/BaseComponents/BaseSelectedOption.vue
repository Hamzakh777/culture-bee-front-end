<template>
	<div class="relative pl-5 pr-12 py-4 border-2 border-gray-800 text-sm font-bold">
		<base-close-button
			class="right-0 top-1/2 -transform-y-50 mr-4" 
			style="position: absolute; height: 1.25rem; width: 1.25rem"
			@click="$emit('remove')"
		/>
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BaseCloseButton from './BaseCloseButton';

export default {
	name: 'BaseSelectedOption',

	components: {
		BaseCloseButton
	}
};
</script>
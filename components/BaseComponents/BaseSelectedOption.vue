<template>
	<div class="relative pl-4 pr-12 py-2 border border-gray-800 text-sm">
		<base-close-button 
			style="position: absolute; height: 1.5rem; width: 1.5rem"
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
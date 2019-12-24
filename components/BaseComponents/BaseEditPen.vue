<template>
	<div @click="$emit('click')" class="relative h-7 w-2">
		<base-app-icon
			:class-list="[
				'absolute',
				'top-0',
				'right-0',
				'fill-current',
				'cursor-pointer'
			].concat(penClassList)"
			name="edit-pen"
		/>
	</div>
</template>

<script>
import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';

export default {
	name: 'BaseEditPen',

	components: {
		BaseAppIcon
	},

	props: {
		penClassList: {
			type: Array,
			required: false,
			default() {
				return ['h-7'];
			}
		}
	}
};
</script>

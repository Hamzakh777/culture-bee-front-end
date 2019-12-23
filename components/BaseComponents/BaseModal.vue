<template>
	<div v-if="isActive" class="fixed inset-0 z-100">
		<div
			:class="additionalClasses"
			v-on-clickaway="close"
			@mouseleave="$emit('mouse-leave')"
			class="absolute top-1/2 left-1/2 transform-center w-11/12 h-full max-w-4xl z-100 bg-white overflow-y-auto"
			style="max-height: 45rem"
		>
			<div class="relative h-18 bg-gray-to-black-to-bottom-right">
				<div
					class="pl-10 pt-3 pr-20 font-D-Din text-white text-8 uppercase font-bold"
				>
					<slot name="title"></slot>
				</div>
				<!-- close button -->
				<div
					@click="close"
					class="absolute right-0 top-1/2 h-9 w-9 bg-yellow -transform-y-50 mr-10"
				>
					<div class="cross"></div>
				</div>
			</div>
			<!-- the content -->
			<div class="px-10 py-8">
				<slot name="content"></slot>
			</div>
		</div>
		<!-- dark overlay -->
		<div class="absolute inset-0 z-0 bg-gray-900 opacity-50"></div>
	</div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
	name: 'BaseModal',

	mixins: [clickaway],

	props: {
		// can be used to add other classes or overwrite the default ones
		additionalClasses: {
			type: Array,
			required: false,
			default() {
				return [];
			}
		},
		isActive: {
			type: Boolean,
			required: true,
			default: false
		}
	},

	methods: {
		close() {
			this.$emit('update:isActive', false);
		}
	}
};
</script>
<style>
.cross::after,
.cross::before {
	content: '';
	transform: translate(-50%, -50%) rotate(45deg);
	@apply absolute top-1/2 left-1/2 bg-gray-800;
}

.cross::after {
	width: 3px;
	@apply h-5;
}

.cross::before {
	height: 3px;
	@apply w-5;
}
</style>

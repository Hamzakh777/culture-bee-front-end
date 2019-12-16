<template>
	<label class="relative pl-10 pt-1 capitalize text-base cursor-pointer">
		<div class="inline-block">
			<slot></slot>
		</div>
		<input
			type="checkbox"
			class="checkbox absolute h-0 w-0 opacity-0"
			:checked="isChecked"
			:value="value"
			@change="change"
		/>
		<span
			class="checkmark absolute top-1/2 left-0 -transform-y-50 h-8 w-8 border-2"
			:class="{'border-white': isLight, 'border-gray-700': !isLight}"
		></span>
	</label>
</template>

<script>
export default {
	name: 'BaseCheckbox',

	model: {
		prop: 'modelValue',
		event: 'change'
	},

	props: ['modelValue', 'value', 'isLight'],

	computed: {
		isChecked() {
			if (this.value === undefined) {
				return false;
			}
			const found = this.modelValue.indexOf(this.value);
			if (found !== -1) {
				return true;
			} else {
				return false;
			}
		}
	},

	methods: {
		change() {
			const modelValue = this.modelValue.slice();
			const found = modelValue.indexOf(this.value);
			if (found !== -1) {
				modelValue.splice(found, 1);
			} else {
				modelValue.push(this.value);
			}
			this.$emit('change', modelValue);
		}
	}
};
</script>
<style>
/* Create a custom checkbox */
.checkmark:after {
    content: "";
    @apply hidden absolute inset-0 m-1-1/2 bg-yellow;
}

/* Show custom checkmark when checkbox is selected */
.checkbox:checked ~ .checkmark:after {
    @apply block;
}
</style>

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
			class="checkmark absolute top-1/2 left-0 -transform-y-50 h-10 w-10 border-2 border-gray-700"
		></span>
	</label>
</template>

<script>
export default {
	name: 'BaseRadioButton',

	model: {
		prop: 'modelValue',
		event: 'change'
	},

	props: ['modelValue', 'value'],

	computed: {
		isChecked() {
			if (this.value === undefined) {
				return false;
			}
			
			if (this.modelValue === this.value) {
				return true;
			} else {
				return false;
			}
		}
	},

	methods: {
		change() {
			let newValue = '';
			if(this.modelValue === this.value) {
				newValue = ''
			} else {
				newValue = this.value;
			}
			this.$emit('change', newValue);
		}
	}
};
</script>

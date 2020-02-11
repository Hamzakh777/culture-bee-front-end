<template>
	<div>
        <div
            class="relative flex items-center h-14 pl-4 pr-10 border-2 border-gray-700 bg-white overflow-hidden"
            :class="{'mb-4': isError}"
        >
            <input
                class="text-sm text-gray-900 font-semibold focus:outline-none"
                v-model.trim="text"
                type="text"
                @keypress.enter="add"
            />
            <img
                class="h-4 absolute right-0 top-1/2 -transform-y-50 transition-all transition-100 transition-ease-out cursor-pointer"
                :class="{
                    'opacity-100 mr-4': text.length !== 0,
                    ' opacity-0 -mr-10': text.length === 0
                }"
                src="/icons/checkmark.svg"
                @click="add"
            />
        </div>
        <base-input-error-message 
            v-if="isError" 
            :error-type="'required'" 
        />
    </div>
</template>

<script>
import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';

export default {
	name: 'BaseFreeTextInput',

	components: {
		BaseInputErrorMessage
	},

	data() {
		return {
			text: '',
			isError: false
		};
	},

	methods: {
		add() {
			if (this.text.length === 0) {
				this.isError = true;
			} else {
				this.$emit('add', this.text);
				this.isError = false;
				this.text = '';
			}
		}
	}
};
</script>

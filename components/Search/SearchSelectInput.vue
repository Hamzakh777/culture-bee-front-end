<template>
	<div v-on-clickaway="close" class="relative lg:z-1">
		<!-- toggle button  -->
		<div
			@click="toggle"
			class="select-head relative flex items-center h-12 w-full pl-6 pr-7 border-gray-700 border-2 rounded-none text-sm text-gray-900 font-semibold focus:outline-none cursor-pointer"
		>
			<span>
				{{ placeholder }}
			</span>
			<div 
                class="absolute top-1/2 right-0 h-2-1/2 w-2-1/2 mr-4 border-t-4 border-r-4 border-gray-800"
                style="transform: translateY(-50%) rotate(135deg)"
            >
            </div>
		</div>
		<!-- list -->
		<div
			v-if="isOpen"
			v-on-clickaway="toggle"
			class="absolute z-10 top-0 min-w-full min-h-full mt-14 px-4 py-3 bg-white border-2 border-gray-800 overflow-scroll"
			style="max-height: 300px"
		>
			<div
				v-for="(option, index) in filteredOptions"
				:key="index"
				class="relative flex items-center px-4 py-3 mb-4 last:mb-0 border-2 border-gray-800"
			>
				<div
					@click="change(option)"
					class="relative flex items-center justify-center h-6 w-6 mr-3 border-2 border-gray-800 cursor-pointer"
				>
					<div
						:class="option.isSelected ? 'block' : 'hidden'"
						class="h-4 w-4 bg-yellow"
					></div>
				</div>
				<span class="font-bold text-gray-800">{{ option.value }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
	name: 'SearchSelectInput',

	mixins: [clickaway],

	props: {
		options: {
			type: Array,
			required: true
		},
		placeholder: {
			type: String,
			required: true
		},
		value: {
			type: Array
		}
	},

	data() {
		return {
			isOpen: false
		};
	},

	computed: {
		filteredOptions() {
			return this.options.map(option => {
				const isSelected = this.value.includes(option);
				return {
					value: option,
					isSelected
				};
			});
		}
	},

	methods: {
		toggle() {
			this.isOpen = !this.isOpen;
        },
        
        close() {
            this.isOpen = false;
        },

		change(option) {
			const exists = this.value.indexOf(option.value);
			let newSelection = this.value;

			if (exists === -1) {
				// add it
				newSelection.push(option.value);
			} else {
				// remove
				newSelection = newSelection.filter(
					item => item !== option.value
				);
			}

			this.$emit('change', newSelection);
			this.toggle();
		}
	}
};
</script>

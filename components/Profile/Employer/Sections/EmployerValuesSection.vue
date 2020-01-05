<template>
	<div class="py-14 bg-gray-800">
		<div class="container flex items-center mx-auto">
			<div class="flex-grow flex justify-between">
				<div
					v-for="(value, name, index) in valuesToShow"
					:key="index"
					class="flex items-center pr-6 text-white opacity-75 hover:opacity-100 hover:text-yellow"
				>
					<div
						class="flex items-center justify-center h-14 w-14 rounded-full border-2"
						style="border-color: currentColor"
					>
						<font-awesome-icon :icon="value.icon" class="text-8" />
					</div>
					<div class="ml-5 max-w-xs text-sm font-bold">
						{{ value.title }}
					</div>
				</div>
			</div>
            <base-edit-pen
				v-if="isEditPage" 
				class="ml-16 text-white hover:text-yellow"
				@click="$bus.$emit('open-employer-values-modal')"
			/>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import BaseEditPen from '~/components/BaseComponents/BaseEditPen';

export default {
	name: 'EmployerValuesSection',

	props: {
		isEditPage: {
			type: Boolean,
			required: true
		}
	},

	components: {
		BaseEditPen
	},

	computed: {
		...mapState('employer', ['values']),

		valuesToShow() {
			let data = {};

			for (const key in this.values) {
				if (this.values.hasOwnProperty(key)) {
					const value = this.values[key];
					if(value.title !== '' && value.title !== null) {
						data[key] = value;
					}
				}
			}
			
			return data;
		}
	}
};
</script>

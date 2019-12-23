<template>
	<div class="py-14 bg-gray-800">
		<div class="container flex items-center mx-auto">
			<div class="flex-grow flex justify-between">
				<div
					v-for="(value, name, index) in values"
					:key="index"
					class="flex items-center pr-6 text-white opacity-75 hover:opacity-100 hover:text-yellow"
				>
					<div
						class="flex items-center justify-center h-16 w-16 rounded-full border-2"
						style="border-color: inherit"
					>
						<font-awesome-icon :icon="value.icon" class="text-8" />
					</div>
					<div class="ml-5 max-w-xs text-sm font-bold">
						{{ value.title }}
					</div>
				</div>
			</div>
            <base-edit-pen class="ml-16"/>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import BaseEditPen from '~/components/BaseComponents/BaseEditPen';

export default {
	name: 'EmployerValuesSection',

	components: {
		BaseEditPen
	},

	computed: {
		...mapState('employer', ['values'])
	}
};
</script>

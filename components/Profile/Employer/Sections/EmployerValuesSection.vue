<template>
	<div class="py-14 bg-gray-800">
		<div class="container flex items-center mx-auto">
			<div class="flex-grow flex justify-between">
				<div
					v-for="(value, index) in valuesToShow"
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
import { mapState, mapActions } from 'vuex';
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
		...mapState('employer/values', ['values']),

		valuesToShow() {
			return this.values.filter(
				value => value.icon !== null && value.title !== null && value.icon !== '' && value.title !== '' 
			);
		}
	},

	mounted() {
		try {
			this.fetchValues(this.$route.params.id);
		} catch (error) {
			alert('An error happend trying to load company values');
		}
	},

	methods: {
		...mapActions('employer/values', ['fetchValues'])
	}
};
</script>

<template>
	<div class="relative py-8 bg-gray-800">
		<div class="container flex items-center mx-auto">
			<div class="flex flex-grow flex-col lg:flex-row justify-between">
				<div
					v-for="(value, index) in valuesToShow"
					:key="index"
					class="flex items-center relative pl-16 md:pl-16 md:pr-20 ml-12 mb-16 lg:ml-0 lg:mb-0 last:mb-0 md:pr-6 text-white opacity-75 hover:opacity-100 hover:text-yellow"
				>
					<div
						class="flex items-center justify-center absolute top-1/2 -transform-y-50 left-0 h-16 w-16 md:h-14 md:w-14 rounded-full border-2"
						style="border-color: currentColor"
					>
						<font-awesome-icon 
							:icon="value.icon" 
							class="h-6 text-13 md:h-5 md:text-8"
						/>
					</div>
					<div class="w-11/12 ml-5 max-w-xs text-sm font-bold">
						{{ value.title }}
					</div>
				</div>
			</div>
			<div class="absolute top-0 right-0 mr-8 mt-8 lg:mr-0 lg:mt-0 lg:static">
				<base-edit-pen
					v-if="isEditPage"
					class="ml-16 text-white hover:text-yellow"
					@click="$bus.$emit('open-employer-values-modal')"
					:pen-class-list="['h-8', 'md:h-7']"
				/>
			</div>
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
			required: false,
			default: false
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

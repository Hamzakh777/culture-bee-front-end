<template>
	<div class="py-18" id="vision">
		<div class="container flex justify-between mx-auto">
			<div class="base-title">Company vision</div>
			<div class="max-w-4xl px-8">
				<div class="text-5-1/2 font-bold text-gray-800">
					<base-splited-paragraphs :text="description" />
				</div>
			</div>
			<!-- edit button -->
			<div class="ml-16">
				<base-edit-pen
					v-if="isEditPage"
					@click="edit"
					class="text-gray-800 hover:text-yellow"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BaseSplitedParagraphs from '~/components/BaseComponents/BaseSplitedParagraphs';
import BaseEditPen from '~/components/BaseComponents/BaseEditPen';

export default {
	name: 'EmployerCompanyVisionSection',

	props: {
		isEditPage: {
			type: Boolean,
			required: true
		}
	},

	components: {
        BaseSplitedParagraphs,
        BaseEditPen
	},

	computed: {
		...mapState('employer/vision', ['description'])
	},

	mounted() {
		try {
			this.fetchVision(this.$route.params.id);
		} catch (error) {
			alert('An error happend trying to load company vision');
			console.error(error);
		}
	},

	methods: {
		...mapActions('employer/vision', ['fetchVision']),

		edit() {
			this.$bus.$emit('open-employer-edit-company-vision-modal');
		}
	}
};
</script>

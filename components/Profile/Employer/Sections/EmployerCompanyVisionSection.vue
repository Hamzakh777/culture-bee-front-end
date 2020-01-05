<template>
	<div class="py-18">
		<div class="container flex justify-between mx-auto">
			<div class="base-title">Company vision</div>
			<div class="max-w-4xl px-8">
				<div class="text-5-1/2 font-bold text-gray-800">
					<base-splited-paragraphs :text="companyVision" />
				</div>
			</div>
			<!-- edit button -->
			<base-edit-pen
				v-if="isEditPage"
				@click="edit"
				class="ml-16 text-gray-800 hover:text-yellow"
			/>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
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
		...mapState('employer', ['companyVision'])
	},

	methods: {
		edit() {
			this.$bus.$emit('open-employer-company-vision-modal');
		}
	}
};
</script>

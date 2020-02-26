<template>
	<div class="relative py-6 lg:pt-18 lg:pb-0" id="vision">
		<div class="container flex flex-col md:flex-row md:justify-between mx-auto">
			<div class="base-title mb-8">Company vision</div>
			<div class="max-w-4xl md:px-8">
				<div class="text-5-1/2 font-bold text-gray-800">
					<base-splited-paragraphs 
						:text="descriptionToShow" 
					/>
				</div>
			</div>
			<!-- edit button -->
			<div class="absolute md:static top-0 right-0 mt-14 mr-6 lg:mt-0 lg:mr-0 lg:ml-16">
				<base-edit-pen
					v-if="isEditPage"
					@click="edit"
					:pen-class-list="['h-8', 'md:h-7']"
					class="h-12 text-gray-800 hover:text-yellow"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BaseSplitedParagraphs from '~/components/BaseComponents/BaseSplitedParagraphs';
import BaseEditPen from '~/components/BaseComponents/BaseEditPen';
import dummyVision from '~/mocks/Employer/vision';

export default {
	name: 'EmployerCompanyVisionSection',

	props: {
		isEditPage: {
			type: Boolean,
			required: false,
			default: false
		}
	},

	components: {
        BaseSplitedParagraphs,
        BaseEditPen
	},

	computed: {
		...mapState('employer/vision', ['description']),
		/**
		 * Since we want to show dummy content when the user has not inputed his
		 */
		descriptionToShow() {
			if(this.isEditPage && (this.description === '' || this.description === undefined)) {
				return dummyVision;
			} else {
				return this.description;
			}
		}
	},

	mounted() {
		if(process.browser) {
			try {
				this.fetchVision(this.$route.params.id);
			} catch (error) {
				console.error(error);
			}
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

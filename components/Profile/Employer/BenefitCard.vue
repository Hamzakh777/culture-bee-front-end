<template>
	<div
		:style="
			benefit.imgUrl !== null
				? `background-image: url(${benefit.imgUrl})`
				: ''
		"
		class="relative h-118 mb-14 w-31-% bg-gray-200 bg-center bg-cover bg-no-repeat"
	>
		<div class="flex flex-col justify-between relative z-1 h-full w-full">
			<div v-if="isEditPage" class="flex justify-end mt-6 mr-6">
				<!-- emit the id too -->
				<base-edit-pen
					:pen-class-list="[
						'h-5',
						'top-1/2',
						'left-1/2',
						'transform-center'
					]"
					class="h-8 w-8 mr-4 bg-gray-800 text-white hover:text-yellow text-yellow cursor-pointer"
					@click="$bus.$emit('open-edit-benefit-modal', benefit.id)"
				/>
				<base-close-button 
					@click="handleDeleteClick" 
				/>
			</div>
			<div v-else></div>
			<div class="px-8 py-10 text-white">
				<!-- title -->
				<div class="font-D-Din text-5xl font-bold uppercase">
					{{ benefit.title }}
				</div>
				<!-- subtitle -->
				<div class="text-5-1/2 font-bold">
					{{ benefit.subtitle }}
				</div>
			</div>
		</div>
		<base-loader v-if="isLoading" />
		<div class="absolute inset-0 bg-transparent-to-black opacity-75"></div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';
import BaseEditPen from '~/components/BaseComponents/BaseEditPen';
import BaseLoader from '~/components/BaseComponents/BaseLoader';

export default {
	name: 'BenefitCard',

	props: {
		isEditPage: {
			type: Boolean,
			required: false,
			default: false
		},
		benefit: {
			type: Object,
			required: true
		}
	},

	components: {
		BaseCloseButton,
		BaseEditPen,
		BaseLoader
	},

	data() {
		return {
			isLoading: false
		}
	},

	methods: {
		...mapActions('employer/benefits', ['deleteBenefit']),

		toggleLoader() {
			this.isLoading = !this.isLoading;
		},

		async handleDeleteClick() {
			this.toggleLoader();
			try {
				await this.deleteBenefit(this.benefit.id);

			} catch (error) {
				alert('An error happened');
				console.error(error);
			}
			this.toggleLoader();
		}
	},
};
</script>

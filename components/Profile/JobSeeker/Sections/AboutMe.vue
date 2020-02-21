<template>
	<div id="vision" class="relative py-6 lg:pt-18 lg:pb-0">
		<div
			class="container flex flex-col md:flex-row md:justify-between mx-auto"
		>
			<div class="base-title mb-8">About Me</div>
			<div class="max-w-4xl md:px-8">
				<div class="text-5-1/2 font-bold text-gray-800">
					<base-splited-paragraphs :text="aboutMe" />
				</div>
			</div>
			<div>
				<div class="base-title mb-8">Contact</div>
				<p class="text-gray-700">email here</p>
				<p class="text-gray-700">0979871398</p>
			</div>
			<!-- edit button -->
			<div
				class="absolute md:static top-0 right-0 mt-14 mr-6 lg:mt-0 lg:mr-0 lg:ml-16"
			>
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
import BaseEditPen from '~/components/BaseComponents/BaseEditPen';
import BaseSplitedParagraphs from '~/components/BaseComponents/BaseSplitedParagraphs';

export default {
	name: 'AboutMeSection',

	components: {
		BaseEditPen,
		BaseSplitedParagraphs
	},

	data() {
		return {
			aboutMe:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sapiente minima hic est ullam earum quis quisquam delectus! Dignissimos quis, nihil nisi ullam quae facilis ipsam eligendi esse, earum suscipit vero qui quas adipisci molestiae.'
		};
	},

	methods: {}
};
</script>

<template>
	<div id="vision" class="relative py-6 lg:pt-18 lg:pb-0">
		<div
			class="container flex flex-col md:flex-row md:justify-between mx-auto"
		>
			<div class="base-title mb-8">About Me</div>
			<div class="max-w-4xl md:px-8">
				<div class="text-5-1/2 font-bold text-gray-800">
					<base-splited-paragraphs :text="aboutMeToShow" />
				</div>
			</div>
			<div>
				<div class="base-title mb-8">Contact</div>
				<p class="text-gray-700">{{ email }} </p>
				<p class="text-gray-700">{{ phoneNumber }}</p>
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
import { mapState, mapActions } from 'vuex';
import dummyAboutMe from '~/mocks/JobSeeker/aboutMe';
import BaseEditPen from '~/components/BaseComponents/BaseEditPen';
import BaseSplitedParagraphs from '~/components/BaseComponents/BaseSplitedParagraphs';

export default {
	name: 'AboutMeSection',

	components: {
		BaseEditPen,
		BaseSplitedParagraphs
	},

	props: {
		isEditPage: {
			type: Boolean,
			required: false,
			default: false
		}
	},

	computed: {
		...mapState('job-seeker/about-me', ['aboutMe', 'phoneNumber']),
		...mapState('job-seeker', ['email']),

		/**
		 * Since we want to show dummy content when the user has not inputed his
		 */
		aboutMeToShow() {
			if (
				this.isEditPage &&
				(this.aboutMe === '' || this.aboutMe === undefined)
			) {
				return dummyAboutMe;
			} else {
				return this.aboutMe;
			}
		}
	},

	mounted() {
		if (process.browser) {
			const userId = this.$route.params.id;
			if (userId === null || userId === undefined) return;
			try {
				this.fetchAboutMe(userId);
			} catch (error) {
				console.error(error);
			}
		}
	},

	methods: {
		...mapActions('job-seeker/about-me', ['fetchAboutMe']),

		edit() {
			this.$bus.$emit('open-job-seeker-about-me-modal');
		}
	}
};
</script>

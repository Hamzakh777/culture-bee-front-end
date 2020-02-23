<template>
	<div class="py-4 lg:py-18" id="updates">
		<div class="container mx-auto">
			<div class="flex items-center justify-between">
				<div class="base-title">Culture feed</div>
				<button
					v-if="isEditPage"
					class="primary-btn"
					@click="$bus.$emit('open-post-company-update-modal')"
				>
					Post update
				</button>
			</div>
			<!-- updates -->
			<div v-if="updates.length !== 0" class="flex flex-col md:flex-row md:justify-between mt-16">
				<div class="w-full md:w-1/2 md:pr-8">
					<feed-card
						v-for="(update,
						index) in slicedFeedElements.firstColElements"
						:key="update.id"
						:update="update"
						:is-edit-page="isEditPage"
						:size="(index + 1) % 2 === 0 ? 'medium' : 'small'"
					/>
				</div>
				<div class="w-full md:w-1/2 md:pl-8">
					<feed-card
						v-for="(update,
						index) in slicedFeedElements.secondColElements"
						:key="update.id"
						:update="update"
						:is-edit-page="isEditPage"
						:size="(index + 1) % 2 !== 0 ? 'medium' : 'small'"
					/>
				</div>
			</div>
			<div v-else>
				<div class="py-12 text-2xl text-center text-gray-800">
					There are no updates to show here, keep scrolling
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CompanyUpdateCard from '~/components/Companies/CompanyUpdateCard';
import FeedCard from '~/components/Feed/FeedCard';

export default {
	name: 'EmployerCultureFeed',

	props: {
		isEditPage: {
			type: Boolean,
			required: false,
			default: false
		}
	},

	components: {
		CompanyUpdateCard,
		FeedCard
	},

	computed: {
		...mapState('employer', ['id']),
		...mapState('employer/updates', ['updates']),

		/**
		 * Slice the updates elements array into two arrays
		 * @return {Object} - object with two properties where each property is a feed elements array
		 */
		// eslint-disable-next-line
			slicedFeedElements() {
			const updates = JSON.parse(JSON.stringify(this.updates));
			const updatesLength = updates.length;
			const arrSpliceIndex =
				updatesLength % 2 ? updatesLength / 2 : (updatesLength + 1) / 2;

			return {
				firstColElements: updates.slice(0, arrSpliceIndex),
				secondColElements: updates.slice(arrSpliceIndex)
			};
		}
	},

	mounted() {
		if(process.browser) {
			try {
				this.fetchUpdates(this.id);
			} catch (error) {
				alert('An error happend trying to load company feed updates');
			}
		}
	},

	methods: {
		...mapActions('employer/updates', ['fetchUpdates'])
	}
};
</script>

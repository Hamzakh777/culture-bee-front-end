<template>
	<div>
		<the-feed-hero />
		<the-feed-grid>
			<template #left-col>
				<profile-details-card />
			</template>
			<template #right-col>
				<div class="p-9 bg-white">
					<feed-post-update />
					<!-- <feed-not-loged-in /> -->
					<div class="py-10">
						<feed-card
							v-for="(update,
							index) in employerUpdates"
							:key="update.id"
							:update="update"
							:is-edit-page="false"
						/>
						<feed-card
							v-for="(update,
							index) in updates"
							:key="update.id"
							:update="update"
							:is-edit-page="false"
						/>
					</div>
					<div class="relative h-20 w-full" v-if="isLoading">
						<base-loader />
					</div>
				</div>
			</template>
		</the-feed-grid>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import baseToggleLoaderMixin from '~/mixins/base/baseToggleLoaderMixin';
import TheFeedHero from '~/components/Feed/TheFeedHero';
import TheFeedGrid from '~/components/Feed/TheFeedGrid';
import ProfileDetailsCard from '~/components/Feed/Profile/ProfileDetailsCard';
import FeedPostUpdate from '~/components/Feed/FeedPostUpdate';
import FeedCard from '~/components/Feed/FeedCard';
// import FeedNotLogedIn from '~/components/Feed/FeedNotLogedIn';
import BaseLoader from '~/components/BaseComponents/BaseLoader';

export default {
	head() {
		return {
			title: 'CultureBee - The Company Culture Curator - Feed'
		};
	},

	components: {
		TheFeedHero,
		TheFeedGrid,
		ProfileDetailsCard,
		FeedPostUpdate,
		BaseLoader,
		FeedCard
	},

	mixins: [baseToggleLoaderMixin],

	watch: {
		isBottomOfPage(newVal) {
			if (newVal === true && this.isLoading === false) {
				this.fetchFeedData();
			}
		}
	},

	data() {
		return {
			updates: [],
			isBottomOfPage: false,
			currentPage: 1,
			lastPage: 1
		};
	},

	computed: {
		...mapState('employer/updates', {
			employerUpdates: 'updates'
		}),
	},

	mounted() {
		if (process.browser) {
			// add onscroll event listener to enable infinite scroll by detecting
			// if we reached the bottom of the page or not
			window.onscroll = () => {
				this.isBottomOfPage =
					document.documentElement.scrollTop + window.innerHeight ===
					document.documentElement.offsetHeight;
			};

			this.fetchFeedData();
		}
	},

	methods: {
		async fetchFeedData() {
			try {
				this.toggleLoader();
				const response = await this.$axios.post(`api/feed?page=${this.currentPage}`);

				this.currentPage = response.data.paginationData.current_page;
				this.lastPage = response.data.paginationData.last_page;
				if (this.currentPage === 1) {
					this.updates = response.data.updates;
				} else {
					this.updates.concat(response.data.updates);
				}
			} catch (error) {
				console.error(error);
			} finally {
				this.toggleLoader();
			}
		}
	}
};
</script>

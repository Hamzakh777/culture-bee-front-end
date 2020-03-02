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
				</div>
			</template>
		</the-feed-grid>
	</div>
</template>

<script>
import TheFeedHero from '~/components/Feed/TheFeedHero';
import TheFeedGrid from '~/components/Feed/TheFeedGrid';
import ProfileDetailsCard from '~/components/Feed/Profile/ProfileDetailsCard';
import FeedPostUpdate from '~/components/Feed/FeedPostUpdate';
// import FeedNotLogedIn from '~/components/Feed/FeedNotLogedIn';

export default {
	components: {
		TheFeedHero,
		TheFeedGrid,
		ProfileDetailsCard,
		FeedPostUpdate
		// FeedNotLogedIn
	},

	head() {
		return {
			title: 'CultureBee - The Company Culture Curator - Feed'
		};
	}
};
</script>

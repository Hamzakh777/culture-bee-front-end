<template>
	<div>
		<div class="relative z-1 py-8 bg-alabaster">
			<div class="flex justify-center container mx-auto">
				<search-filter />
			</div>
		</div>
		<div v-if="isLoading" class="relative h-screen w-screen">
			<base-loader />
		</div>
		<div v-else class="container mx-auto py-16 min-h-screen">
			<search-results />
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import SearchFilter from '~/components/Search/SearchFilter';
import SearchResults from '~/components/Search/SearchResults';
import BaseLoader from '~/components/BaseComponents/BaseLoader';

export default {
	components: {
		SearchFilter,
		SearchResults,
		BaseLoader
	},

	computed: {
		...mapState('search', ['isLoading'])
	}
};
</script>

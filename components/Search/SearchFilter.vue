<template>
	<div class="w-full max-w-190">
		<div class="flex justify-between mb-6 px-20">
			<button
				v-for="(searchCategory, index) in searchCategories"
				:key="index"
				:class="{
					'base-title--underline': searchCategory.value === category
				}"
				@click.stop="setStoreProp('category', searchCategory.value)"
				class="base-title focus:outline-none"
			>
				{{ searchCategory.name }}
			</button>
		</div>
		<!-- search input  -->
		<div
			class="flex items-center mb-6 py-6 border-t-2 border-b-2 border-gray-700"
		>
			<base-app-icon
				:classList="['h-8 text-gray-700 fill-current ']"
				name="search"
			/>
			<input
				:value="query"
				@input="searchQueryChanged($event.target.value)"
				class="flex-grow ml-4 text-5-1/2 font-semibold bg-transparent text-gray-700 placeholder-gray-700 focus:outline-none"
				placeholder="Type to search"
				type="text"
			/>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';
import mutateStorePropMixin from '~/mixins/base/mutateStorePropMixin';
import baseBayWatch from '~/mixins/base/baseBayWatch';

export default {
	name: 'SearchFitler',

	components: {
		BaseAppIcon
	},

	mixins: [mutateStorePropMixin, baseBayWatch],

	data() {
		return {
			searchCategories: [
				{
					name: 'Employers',
					value: 'employers'
				},
				{
					name: 'Updates',
					value: 'updates'
				},
				{
					name: 'Jobs',
					value: 'jobs'
				}
			],
			timer: null
		};
	},

	computed: {
		...mapState('search', ['category', 'query'])
	},

	methods: {
		...mapMutations('search', ['mutate']),

		searchQueryChanged(value) {
			// Don't trigger a request on each input - each letter added
			clearTimeout(this.timer);
			this.timer = setTimeout(() => {
				this.setStoreProp('query', value);
			}, 250);
		},
	}
};
</script>

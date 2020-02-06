<template>
	<div class="w-full max-w-190">
		<div class="flex justify-between mb-6">
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
				@input="setStoreProp('query', $event.target.value)"
				class="flex-grow ml-4 text-5-1/2 font-semibold bg-transparent text-gray-700 placeholder-gray-700 focus:outline-none"
				placeholder="Type to search"
				type="text"
			/>
		</div>
		<!-- filters -->
		<div class="flex">
			<!-- industries -->
			<base-select-input
				:options="['1', '2']"
				@input="setStoreProp('industry', $event)"
				class="flex-grow mr-4 w-24-%"
				placeholder="Industries"
			/>
			<!-- type  -->
			<base-tag-select
				:options="['1', '2']"
				@input="setStoreProp('type', $event)"
				class="flex-grow mr-4 w-24-%"
				placeholder="Type"
			/>
			<!-- seniority  -->
			<v-select
				:options="['1', '2']"
				@input="setStoreProp('seniority', $event)"
				class="flex-grow mr-4 w-24-%"
				placeholder="Seniority"
			/>
			<!-- location  -->
			<v-select
				:options="['1', '2']"
				@input="setStoreProp('location', $event)"
				class="flex-grow w-24-%"
				placeholder="Location"
			/>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import vSelect from 'vue-select';
import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';
import BaseTagSelect from '~/components/BaseComponents/BaseTagSelect';
import mutateStorePropMixin from '~/mixins/base/mutateStorePropMixin';
import baseBayWatch from '~/mixins/base/baseBayWatch';

export default {
	name: 'SearchFitler',

	components: {
		BaseAppIcon,
		BaseTagSelect,
		vSelect
	},

	mixins: [mutateStorePropMixin, baseBayWatch],

	data() {
		return {
			searchCategories: [
				{
					name: '',
					value: ''
				},
				{
					name: '',
					value: ''
				},
				{
					name: '',
					value: ''
				}
			]
		};
	},

	computed: {
		...mapState('search', [''])
	}
};
</script>

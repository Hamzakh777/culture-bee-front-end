<template>
	<div class="w-full max-w-190">
		<div class="flex justify-around lg:justify-between mb-4 lg:mb-6">
			<button 
				v-for="(jobCategory, index) in jobsCategories"
				:key="index"
				class="base-title text-lg md:text-xl lg:text-3xl focus:outline-none"
				:class="{'base-title--underline': jobCategory.value === category}"
				@click.stop="setStoreProp('category', jobCategory.value)"
			>
				{{ jobCategory.name }}
			</button>
			<button
				class="primary-btn hidden md:block"
				@click.prevent="$bus.$emit('open-post-job-modal')"
			>
				Post a job
			</button>
		</div>
		<!-- search input  -->
		<div
			class="flex items-center mb-6 py-4 lg:py-6 border-t-2 border-b-2 border-gray-700"
		>
			<base-app-icon
				name="search"
				:classList="['h-8 text-gray-700 fill-current ']"
			/>
			<input
				class="flex-grow ml-4 text-base lg:text-5-1/2 font-semibold bg-transparent text-gray-700 placeholder-gray-700 focus:outline-none"
				placeholder="Type to search"
				type="text"
				:value="query"
				@input="setStoreProp('query', $event.target.value)"
			/>
		</div>
		<!-- filters -->
		<div class="flex flex-col lg:flex-row">
			<!-- industries -->
			<search-select-input 
				class="w-full mb-4 lg:w-24-% mr-4"
				:options="['1', '2']"
				placeholder="Industries"
				:value="industries"
				@change="setStoreProp('industries', $event)"
			/>
			<!-- type  -->
			<search-select-input 
				class="w-full mb-4 lg:w-24-% mr-4"
				:options="['1', '2']"
				placeholder="Type"
				:value="type"
				@change="setStoreProp('type', $event)"
			/>
			<!-- seniority  -->
			<search-select-input 
				class="w-full mb-4 lg:w-24-% mr-4"
				:options="['1', '2']"
				placeholder="Seniority"
				:value="seniority"
				@change="setStoreProp('seniority', $event)"
			/>
			<!-- location  -->
			<search-select-input 
				class="w-full lg:w-24-%"
				:options="['1', '2']"
				placeholder="Location"
				:value="locations"
				@change="setStoreProp('locations', $event)"
			/>
		</div>
		<!-- add update button  -->
		<button
			class="primary-btn w-full mt-6 md:hidden"
			@click.prevent="$bus.$emit('open-post-job-modal')"
		>
			Post a job
		</button>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import vSelect from 'vue-select';
import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';
import mutateStorePropMixin from '~/mixins/base/mutateStorePropMixin';
import baseBayWatch from '~/mixins/base/baseBayWatch';
import SearchSelectInput from '~/components/Search/SearchSelectInput';

export default {
	name: 'JobsFilter',

	mixins: [mutateStorePropMixin, baseBayWatch],

	components: {
		BaseAppIcon,
		vSelect,
		SearchSelectInput
	},

	computed: {
		...mapState('employer/jobs/search', ['category', 'locations', 'type', 'seniority', 'query', 'industries'])
	},

	data() {
		return {
			jobsCategories: [
				{
					name: 'live jobs',
					value: 'live'
				},
				{
					name: 'expired jobs',
					value: 'expired'
				}
			]
		}
	},

	created() {
		this.bayWatch(['type', 'category', 'query', 'seniority', 'industries', 'locations'], this.fetchJobs.bind(this));

		this.fetchJobs();
	},

	methods: {
		...mapMutations('employer/jobs/search', ['mutate']),
		...mapActions('employer/jobs/search', ['fetchJobs'])
	},
};
</script>

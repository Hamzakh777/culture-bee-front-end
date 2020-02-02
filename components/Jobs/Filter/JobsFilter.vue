<template>
	<div class="w-full max-w-190">
		<div class="flex justify-between mb-6">
			<button 
				v-for="(jobCategory, index) in jobsCategories"
				:key="index"
				class="base-title focus:outline-none"
				:class="{'base-title--underline': jobCategory.value === category}"
				@click.stop="setStoreProp('category', jobCategory.value)"
			>
				{{ jobCategory.name }}
			</button>
			<button
				class="primary-btn"
				@click.prevent="$bus.$emit('open-post-job-modal')"
			>
				Post a job
			</button>
		</div>
		<!-- search input  -->
		<div
			class="flex items-center mb-6 py-6 border-t-2 border-b-2 border-gray-700"
		>
			<base-app-icon
				name="search"
				:classList="['h-8 text-gray-700 fill-current ']"
			/>
			<input
				class="flex-grow ml-4 text-5-1/2 font-semibold bg-transparent text-gray-700 placeholder-gray-700 focus:outline-none"
				placeholder="Type to search"
				type="text"
				:value="query"
				@input="setStoreProp('query', $event.target.value)"
			/>
		</div>
		<!-- filters -->
		<div class="flex">
			<!-- industries -->
			<v-select
				class="flex-grow mr-4 w-24-%"
				:options="['1', '2']"
				placeholder="Industries"
				@input="setStoreProp('industry', $event)"
			/>
			<!-- type  -->
			<v-select 
				class="flex-grow mr-4 w-24-%" 
				:options="['1', '2']" 
				placeholder="Type" 
				@input="setStoreProp('type', $event)"
			/>
			<!-- seniority  -->
			<v-select 
				class="flex-grow mr-4 w-24-%" 
				:options="['1', '2']" 
				placeholder="Seniority" 
				@input="setStoreProp('seniority', $event)"
			/>
			<!-- location  -->
			<v-select 
				class="flex-grow w-24-%" 
				:options="['1', '2']" 
				placeholder="Location" 
				@input="setStoreProp('location', $event)"
			/>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import vSelect from 'vue-select';
import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';
import mutateStorePropMixin from '~/mixins/base/mutateStorePropMixin';
import baseBayWatch from '~/mixins/base/baseBayWatch';

export default {
	name: 'JobsFilter',

	mixins: [mutateStorePropMixin, baseBayWatch],

	components: {
		BaseAppIcon,
		vSelect
	},

	computed: {
		...mapState('employer/jobs/search', ['category', 'industry', 'type', 'seniority', 'query'])
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
		this.bayWatch(['type', 'category', 'query', 'seniority', 'industry'], this.fetchJobs.bind(this));

		this.fetchJobs();
	},

	methods: {
		...mapMutations('employer/jobs/search', ['mutate']),
		...mapActions('employer/jobs/search', ['fetchJobs'])
	},
};
</script>

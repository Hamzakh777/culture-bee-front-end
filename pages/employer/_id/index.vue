<template>
	<div>
		<div v-if="isLoading" class="relative h-screen">
			<base-loader />
		</div>
		<div v-else>
			<employer-hero :is-edit-page="false"/>
			<employer-profile-sections />
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
import baseToggleLoaderMixin from '~/mixins/base/baseToggleLoaderMixin';
import EmployerHero from '~/components/Profile/Employer/EmployerHero';
import EmployerProfileSections from '~/components/Profile/Employer/EmployerProfileSections';
import BaseLoader from '~/components/BaseComponents/BaseLoader';

export default {
	mixins: [baseToggleLoaderMixin],

	components: {
		EmployerHero,
		EmployerProfileSections,
		BaseLoader
	},

	data() {
		return {
			isLoading: true
		}
	},

	async mounted() {
		if(process.browser) {
			try {
				await this.getProfileDetails(this.$route.params.id);
			} catch (error) {
				console.error(error);
			} finally {
				this.toggleLoader();
			}
		}
	},

	beforeCreate() {
		if (process.browser) {
			require('swiper/dist/css/swiper.css')
			const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
			Vue.use(VueAwesomeSwiper);
		}
	},

	methods: {
		...mapActions('employer', ['getProfileDetails'])
	}
};
</script>

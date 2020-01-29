<template>
	<div>
		<div v-if="isLoading" class="relative h-screen">
			<base-loader />
		</div>
		<div v-else>
			<employer-hero :is-edit-page="true" />
			<div class="container mx-auto py-10">
				<employer-account-progress />
			</div>
			<employer-profile-sections :is-edit-page="true" />
			<employer-edit-profile-modals />
			<job-post-modal />
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { mapActions, mapState } from 'vuex';
import baseToggleLoaderMixin from '~/mixins/base/baseToggleLoaderMixin';
import EmployerHero from '~/components/Profile/Employer/EmployerHero';
import EmployerAccountProgress from '~/components/Profile/Employer/EmployerAccountProgress';
import EmployerEditProfileModals from '~/components/Profile/Employer/EmployerEditProfileModals';
import EmployerProfileSections from '~/components/Profile/Employer/EmployerProfileSections';
import JobPostModal from '~/components/Jobs/JobPostModal';
import BaseLoader from '~/components/BaseComponents/BaseLoader';

export default {
	components: {
		EmployerHero,
		EmployerAccountProgress,
		EmployerEditProfileModals,
		EmployerProfileSections,
		JobPostModal,
		BaseLoader
	},
	mixins: [baseToggleLoaderMixin],


	computed: {
		...mapState('account', ['id'])
	},

	async created() {
		this.toggleLoader();
		try {
			await this.getProfileDetails(this.$route.params.id);
			
			if(parseInt(this.$route.params.id) !== this.id) {
				this.$router.push('/404');
			}
		} catch (error) {
			alert('An error happend trying to load company vision');
		}
		this.toggleLoader();
	},

	beforeCreate() {
		if (process.browser) {
			require('swiper/dist/css/swiper.css');
			const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr');
			Vue.use(VueAwesomeSwiper);
		}
	},

	methods: {
		...mapActions('employer', ['getProfileDetails'])
	}
};
</script>

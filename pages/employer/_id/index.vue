<template>
	<div>
		<employer-hero :is-edit-page="false"/>
		<employer-profile-sections />
	</div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
import baseToggleLoaderMixin from '~/mixins/base/baseToggleLoaderMixin';
import EmployerHero from '~/components/Profile/Employer/EmployerHero';
import EmployerProfileSections from '~/components/Profile/Employer/EmployerProfileSections';

export default {
	mixins: [baseToggleLoaderMixin],

	components: {
		EmployerHero,
		EmployerProfileSections
	},

	async created() {
		this.toggleLoader();
		try {
			await this.getProfileDetails(this.$route.params.id);
		} catch (error) {
			if(process.browser) {
				alert('An error happend trying to load company vision');
				console.log(error);
			}
		}
		this.toggleLoader();
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
	},
};
</script>

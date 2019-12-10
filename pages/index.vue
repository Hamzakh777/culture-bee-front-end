<template>
	<div class="overflow-x-hidden">
		<the-landing-page-hero />
		<create-account/>
		<div class="hidd">
			<the-companies-section />
			<the-blog-section />
			<the-company-updates-section />
			<the-featured-employer-section />
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import TheLandingPageHero from '~/components/LandingPage/Hero/TheLandingPageHero';
import TheCompaniesSection from '~/components/LandingPage/Companies/TheCompaniesSection';
import TheBlogSection from '~/components/LandingPage/Blog/TheBlogSection';
import TheCompanyUpdatesSection from '~/components/LandingPage/CompanyUpdates/TheCompanyUpdatesSection';
import TheFeaturedEmployerSection from '~/components/LandingPage/FeaturedEmployer/TheFeaturedEmployerSection';
import CreateAccount from '~/components/Account/CreateAccount/CreateAccount';

export default {
	components: {
		TheLandingPageHero,
		TheCompaniesSection,
		TheBlogSection,
		TheCompanyUpdatesSection,
		TheFeaturedEmployerSection,
		CreateAccount
	},

	beforeMount () {
		if (process.browser) {
			require('swiper/dist/css/swiper.css')
			const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
			Vue.use(VueAwesomeSwiper)
		}
	},
};
</script>

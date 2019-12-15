<template>
	<div class="overflow-x-hidden">
		<the-landing-page-hero />
		<the-create-account class=""/>
		<the-companies-section />
		<the-blog-section />
		<the-company-updates-section />
		<the-featured-employer-section />
	</div>
</template>

<script>
import Vue from 'vue';
import TheLandingPageHero from '~/components/LandingPage/Hero/TheLandingPageHero';
import TheCompaniesSection from '~/components/LandingPage/Companies/TheCompaniesSection';
import TheBlogSection from '~/components/LandingPage/Blog/TheBlogSection';
import TheCompanyUpdatesSection from '~/components/LandingPage/CompanyUpdates/TheCompanyUpdatesSection';
import TheFeaturedEmployerSection from '~/components/LandingPage/FeaturedEmployer/TheFeaturedEmployerSection';
import TheCreateAccount from '~/components/Account/CreateAccount/TheCreateAccount';

export default {
	components: {
		TheLandingPageHero,
		TheCompaniesSection,
		TheBlogSection,
		TheCompanyUpdatesSection,
		TheFeaturedEmployerSection,
		TheCreateAccount
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

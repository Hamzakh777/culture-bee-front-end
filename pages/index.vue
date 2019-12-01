<template>
	<div>
		<the-landing-page-hero />
		<the-companies-section />
        <the-blog-section />
		<the-company-updates-section />
		<the-featured-employer-section />
	</div>
</template>

<script>
import TheLandingPageHero from '~/components/LandingPage/Hero/TheLandingPageHero';
import TheCompaniesSection from '~/components/LandingPage/Companies/TheCompaniesSection';
import TheBlogSection from '~/components/LandingPage/Blog/TheBlogSection';
import TheCompanyUpdatesSection from '~/components/LandingPage/CompanyUpdates/TheCompanyUpdatesSection';
import TheFeaturedEmployerSection from '~/components/LandingPage/FeaturedEmployer/TheFeaturedEmployerSection';

export default {
	components: {
		TheLandingPageHero,
		TheCompaniesSection,
		TheBlogSection,
		TheCompanyUpdatesSection,
		TheFeaturedEmployerSection
	}
};
</script>

<template>
	<div>
		<div v-if="isLoading" class="relative h-screen">
			<base-loader />
		</div>
		<div v-else>
			<hero-section />
			<about-this-job />
			<skills-section />
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import SkillsSection from '~/components/Jobs/Sections/SkillsSection';
import AboutThisJob from '~/components/Jobs/Sections/AboutThisJob';
import HeroSection from '~/components/Jobs/Sections/HeroSection';
import baseToggleLoaderMixin from '~/mixins/base/baseToggleLoaderMixin';
import BaseLoader from '~/components/BaseComponents/BaseLoader';

export default {
	components: {
		SkillsSection,
		AboutThisJob,
		BaseLoader,
		HeroSection
	},

	mixins: [baseToggleLoaderMixin],

	computed: {
		...mapState('job', ['userId'])
	},

	async created() {
		this.toggleLoader();
		try {
			// await this.fetchJob(this.$route.params.id);
			await this.getProfileDetails(this.userId);
		} catch (error) {
			alert('An error happend trying to load company vision');
		}
		this.toggleLoader();
	},

	methods: {
		...mapActions('employer', ['getProfileDetails']),
		...mapActions('job', ['fetchJob'])
	}
};
</script>

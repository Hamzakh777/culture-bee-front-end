<template>
    <div>
        <div v-if="isLoading" class="relative h-screen">
            <base-loader />
        </div>
        <div v-else>
            <job-seeker-hero />
            <about-me :is-edit-page="true" />
            <!-- edit modals  -->
            <job-seeker-edit-modals />
        </div>
    </div>
</template>

<script>
     import { mapActions } from 'vuex';
    import baseToggleLoaderMixin from '~/mixins/base/baseToggleLoaderMixin';
    import JobSeekerHero from '~/components/Profile/JobSeeker/Hero';
    import AboutMe from '~/components/Profile/JobSeeker/Sections/AboutMe';
    import JobSeekerEditModals from '~/components/Profile/JobSeeker/JobSeekerEditModals';
    import BaseLoader from '~/components/BaseComponents/BaseLoader';

    export default {
        mixins: [baseToggleLoaderMixin],

        head() {
            return {
                title: 'CultureBee - The Company Culture Curator - Edit profile'
            };
		},

        components: {
            JobSeekerHero,
            AboutMe,
            JobSeekerEditModals,
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

        methods: {
            ...mapActions('job-seeker', ['getProfileDetails'])
        }
    }
</script>

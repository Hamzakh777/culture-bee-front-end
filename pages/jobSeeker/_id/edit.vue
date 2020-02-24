<template>
    <div>
        <job-seeker-hero />
        <about-me :is-edit-page="true" />
        <!-- edit modals  -->
        <job-seeker-edit-modals />
    </div>
</template>

<script>
    import JobSeekerHero from '~/components/Profile/JobSeeker/Hero';
    import AboutMe from '~/components/Profile/JobSeeker/Sections/AboutMe';
    import JobSeekerEditModals from '~/components/Profile/JobSeeker/JobSeekerEditModals';

    export default {
        components: {
            JobSeekerHero,
            AboutMe,
            JobSeekerEditModals
        }
    }
</script>

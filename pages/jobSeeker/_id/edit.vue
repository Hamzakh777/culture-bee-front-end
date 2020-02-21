<template>
    <div>
        <job-seeker-hero />
        <about-me />
    </div>
</template>

<script>
    import JobSeekerHero from '~/components/Profile/JobSeeker/Hero';
    import AboutMe from '~/components/Profile/JobSeeker/Sections/AboutMe';
    
    export default {
        components: {
            JobSeekerHero,
            AboutMe
        }
    }
</script>

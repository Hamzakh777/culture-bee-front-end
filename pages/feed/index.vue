<template>
    <div>
        <the-feed-hero />   
        <the-feed-grid> 
            <template #left-col>
                <profile-details-card />
            </template> 
            <template #right-col>
                here we will have the right col
            </template> 
        </the-feed-grid>
    </div>
</template>

<script>
    import TheFeedHero from '~/components/Feed/TheFeedHero';
    import TheFeedGrid from '~/components/Feed/TheFeedGrid';
    import ProfileDetailsCard from '~/components/Feed/Profile/ProfileDetailsCard';

    export default {
        components: {
            TheFeedHero,
            TheFeedGrid,
            ProfileDetailsCard
        }    
    }
</script>
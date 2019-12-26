<template>
    <div class="mt-16">
        <!-- companies section -->
        <div>
            <div class="base-title">
                GET CULTURE INSPO FROM OTHER COMPANIES
            </div>
            <div class="flex justify-between flex-wrap mt-10">
                <companie-card 
                    class="mb-8"
                    v-for="i in 6"
                    :key="i"
                />
            </div>
            <div class="flex justify-center mt-4">
                <nuxt-link 
                    class="primary-btn mx-auto px-16 text-center"
                    to="#"
                >
                    Discover more
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    import CompanieCard from '../Companies/CompanieCard';

    export default {
        name: 'FeedNotLogedIn',

        components: {
            CompanieCard
        }
    }
</script>
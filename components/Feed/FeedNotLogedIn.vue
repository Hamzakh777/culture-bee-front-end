<template>
    <div>
        <!-- companies section -->
        <div class="mt-16">
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
        <!-- handpicker update by culture bee -->
        <div class="mt-16">
            <div class="base-title mb-10">
                HAND-PICKED BY CULTUREBEE
            </div>
            <div>
                <feed-card :update="handPickedUpdate" />
            </div>
        </div>
    </div>
</template>

<script>
    import CompanieCard from '../Companies/CompanieCard';
    import FeedCard from './FeedCard';

    export default {
        name: 'FeedNotLogedIn',

        components: {
            CompanieCard,
            FeedCard
        },

        data() {
            return {
                handPickedUpdate: {
                    logoUrl: '/logos/brave-gentle-man.png',
                    coverImgUrl: '/images/company-updates/update-1.jpg',
                    tags: ['volunteer', 'csr', 'pride'],
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                }
            }
        },
    }
</script>
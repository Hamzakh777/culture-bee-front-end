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
        <!-- jobs section -->
        <div class="mt-16">
            <div class="base-title mb-10">
                jobs from featured employers
            </div>
            <div>
                <job-card 
                    class="mb-6"
                    :is-job-seeker-view="true"
                />
                <job-card 
                    :is-job-seeker-view="true"
                />
            </div>
            <nuxt-link 
                class="primary-btn block w-48 mx-auto mt-10 px-8 text-center"
                to="/search/jobs"
            >
                See more
            </nuxt-link>
        </div>
        <!-- from cutlure bee blog -->
        <!-- jobs section -->
        <div class="mt-16">
            <div class="base-title mb-10">
                FROM THE CULTUREBEE BLOG
            </div>
            <div>
                <blog-card 
                    v-for="(post, index) in blogPosts"
                    :key="index"
                    :post="post"
                />
            </div>
            <nuxt-link 
                class="primary-btn block w-48 mx-auto mt-10 px-8 text-center"
                to="/search/jobs"
            >
                See more
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    import CompanieCard from '../Companies/CompanieCard';
    import JobCard from '../Jobs/JobCard';
    import BlogCard from '../Blog/BlogCard';
    import FeedCard from './FeedCard';

    export default {
        name: 'FeedNotLogedIn',

        components: {
            CompanieCard,
            FeedCard,
            JobCard,
            BlogCard
        },

        data() {
            return {
                handPickedUpdate: {
                    logoUrl: '/logos/brave-gentle-man.png',
                    coverImgUrl: '/images/company-updates/update-1.jpg',
                    tags: ['volunteer', 'csr', 'pride'],
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                },
                jobs: [],
                blogPosts: [
                    {
                        id: 1,
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                        tags: ['featured'],
                        coverImgUrl: '/images/blog/image-1.jpg'
                    }
                ]
            }
        },
    }
</script>
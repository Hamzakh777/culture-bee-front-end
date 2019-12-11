<template>
    <div 
        class="px-4 text-white"
        v-swiper:mySwiper="swiperOption"
    >
        <div class="swiper-wrapper py-6 text-center">
            <div class="swiper-slide mb-4">
                <h4 class="section-title section-title-light uppercase">Join us today</h4>
            </div>
            <div
                v-for="(slide, index) in jobSeekerSlides"    
                :key="index"
                class="swiper-slide mb-5"
            > 
                <h4 class="section-title section-title-light uppercase">{{ slide.title }}</h4>
                <p class="hidden">{{ slide.description }}</p>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-create-account"></div>
    </div>
</template>

<script>
    export default {
        name: 'CreateAccountSlider',

        props: {
            currentStep: {
                type: Number,
                required: true
            }
        },

        watch: {
            currentStep(newVal) {
                console.log(newVal)
            } 
        },

        data() {
            return {
                swiperOption: {
                    slidesPerView: 1,
                    spaceBetween: 64,
                    pagination: {
                        el: '.swiper-pagination-create-account'
                    }
                },
                jobSeekerSlides: [
                    {
                        title: 'hi job seeker',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque.'
                    },
                    {
                        title: 'tell us about you',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque.'
                    },
                    {
                        title: 'tell us about you',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque.'
                    },
                    {
                        title: 'your industry',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque.'
                    },
                ]
            }
        },

        mounted() {
            if(process.browser) {
                this.mySwiper.slideTo(2)
            }
        }
    }
</script>
<style>
.swiper-pagination-create-account .swiper-pagination-bullet {
    @apply h-3 w-3 rounded-full bg-white opacity-100;
}
.swiper-pagination-create-account .swiper-pagination-bullet.swiper-pagination-bullet-active {
    @apply bg-yellow;
}
</style>
<template>
    <BaseSection
        title="culturebee blog"
        btn-text="View blog"
    >
        <div class="container mx-auto">
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <BlogCard 
                        class="swiper-slide"
                        v-for="i in 5"
                        :key="i"
                    />
                </div>
                <div class="swiper-button-prev btn-circular-arrow"></div>
                <div class="swiper-button-next btn-circular-arrow"></div>
            </div>
        </div>
    </BaseSection>
</template>

<script>
    import BlogCard from './BlogCard';
    import BaseSection from '~/components/BaseComponents/BaseSection';

    export default {
        components: {
            BaseSection,
            BlogCard
        },

        data() {
            return {
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween:64,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
    }
</script>
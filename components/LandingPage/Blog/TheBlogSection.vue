<template>
    <BaseSection
        title="culturebee blog"
        btn-text="View blog"
    >
        <div class="relative container mx-auto">
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <BlogCard 
                        class="swiper-slide"
                        v-for="i in 5"
                        :key="i"
                    />
                </div>
            </div>
            <div class="btn-circular-arrow-prev swiper-blog-prev"></div>
            <div class="btn-circular-arrow-next swiper-blog-next"></div>
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
                        nextEl: '.swiper-blog-next',
                        prevEl: '.swiper-blog-prev'
                    }
                }
            }
        },
    }
</script>
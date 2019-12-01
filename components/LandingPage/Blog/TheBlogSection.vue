<template>
    <BaseSection
        title="culturebee blog"
        btn-text="View blog"
    >
        <div class="container mx-auto">
            <BlogCard class="w-31-%"/>
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
        }
    }
</script>
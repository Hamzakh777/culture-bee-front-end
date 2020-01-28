<template>
    <div class="py-6 bg-gallery">
        <div class="container md:flex mx-auto">
            <div class="section-title">
                skills
            </div>
            <div class="md:flex items-start flex-wrap mt-8 md:mt-0 md:pl-8 lg:pl-16 md:pt-3">
                <div
                    v-for="(skill, index) in skills"
                    :key="index"
                    class="mb-4 last:mb-0 md:mr-4 py-3 px-4 md:px-6 bg-white text-center text-xs text-gray-900 tracking-widest font-bold"
                >
                    {{ skill }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'JobSkillsSection',

        computed: {
            ...mapState('job', ['skills'])
        },
    }
</script>
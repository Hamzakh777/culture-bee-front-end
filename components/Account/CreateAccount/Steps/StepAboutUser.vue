<template>
    <div class="py-8">
        <div class="mb-4">
            <input 
                class="input-text"
                type="text"
                placeholder="Location"
            >
            <input 
                class="input-text"
                type="text"
                placeholder=""
            >
            <v-select placeholder="Your industry" :options="[]"/>
        </div>
        <steps-nav :is-last-step="true"/>
    </div>
</template>

<script>
    import vSelect from 'vue-select';
    import StepsNav from './StepsNav';

    export default {
        name: 'StepAboutUser',

        components: {
            vSelect,
            StepsNav
        },

        data() {
            return {
                industries: ['Industry 1', 'Industry 2', 'Industry 3']
            }
        },
    }
</script>
<style scoped>
.input-text {
    @apply mb-4 w-full;
}
</style>
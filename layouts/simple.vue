<template>
    <div>
        <nuxt/>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {

        created() {
            if(process.browser) {
                this.retrieveToken();
            }
        },

        methods: {
            ...mapMutations('account', ['retrieveToken'])
        }
    }
</script>
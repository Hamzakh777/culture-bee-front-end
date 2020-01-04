<template>
    <div>
        <footer-top 
            v-if="!isLoggedIn"
        />
        <footer-bottom />
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import FooterTop from './FooterTop';
    import FooterBottom from './FooterBottom';

    export default {
        name: 'TheFooter',

        components: {
            FooterTop,
            FooterBottom
        },

        computed: {
            ...mapGetters('user', ['isLoggedIn'])
        },
    }
</script>
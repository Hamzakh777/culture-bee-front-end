<template>
	<div>
        <the-nav-bar />
		<nuxt />
        <the-footer />
        <company-update-modal />
	</div>
</template>
<script>
import {mapMutations, mapGetters, mapActions} from 'vuex';
import TheNavBar from '@/components/NavBar/TheNavBar';
import TheFooter from '@/components/Footer/TheFooter';
import CompanyUpdateModal from '@/components/Companies/CompanyUpdateModal';

export default {
    
    components: {
        TheNavBar,
        TheFooter,
        CompanyUpdateModal
    },

    computed: {
        ...mapGetters('account', ['isLoggedIn', 'accessToken'])
    },

    created() {
        if(process.browser) {
            this.retrieveToken();
        }
        if(this.isLoggedIn) {
            this.getLogedInUser();
        }
    },

    methods: {
        ...mapMutations('account', ['retrieveToken']),
        ...mapActions('account', ['getLogedInUser'])
    }
};
</script>

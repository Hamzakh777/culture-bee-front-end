<template>
	<div>
        <the-nav-bar />
		<nuxt />
        <the-footer />
        <company-update-modal />
	</div>
</template>
<script>
import TheNavBar from '@/components/NavBar/TheNavBar';
import TheFooter from '@/components/Footer/TheFooter';
import CompanyUpdateModal from '@/components/Companies/CompanyUpdateModal';

export default {
    components: {
        TheNavBar,
        TheFooter,
        CompanyUpdateModal
    }
};
</script>

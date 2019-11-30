<template>
	<div>
        <the-nav-bar />
		<nuxt />
        <the-footer />
	</div>
</template>
<script>
import TheNavBar from '@/components/NavBar/TheNavBar';
import TheFooter from '@/components/Footer/TheFooter';

export default {
    components: {
        TheNavBar,
        TheFooter
    }
};
</script>

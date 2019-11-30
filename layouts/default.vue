<template>
	<div>
        <the-nav-bar />
		<nuxt />
	</div>
</template>
<script>
import TheNavBar from '@/components/NavBar/TheNavBar';

export default {
    components: {
        TheNavBar
    }
};
</script>

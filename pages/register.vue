<template>
	<div>
		<the-create-account />
	</div>
</template>

<script>
import Vue from 'vue';
import TheCreateAccount from '~/components/Account/CreateAccount/TheCreateAccount';

export default {
	components: {
		TheCreateAccount
	},

	layout: 'simple',

	beforeMount() {
		if (process.browser) {
			require('swiper/dist/css/swiper.css');
			const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr');
			Vue.use(VueAwesomeSwiper);
		}
	},

	head() {
		return {
			title: 'CultureBee - The Company Culture Curator - Sign up'
		};
	}
};
</script>

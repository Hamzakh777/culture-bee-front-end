export default {
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#000' },
	/*
	 ** Global CSS
	 */
	css: ['swiper/dist/css/swiper.css'],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		'~/plugins/svg-icon',
		'~/plugins/vuelidate',
		{
			src: '~/plugins/swiper',
			mode: 'client'
		}
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss'
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/proxy',
		'@nuxtjs/pwa',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
		'vue-scrollto/nuxt'
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {
		proxy: true
	},
	proxy: {
		'/api':  'https://culture-bee-back-end.herokuapp.com/'
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			config.resolve.alias['~src'] = '/';
			config.resolve.alias['~components'] = '/components';
			config.resolve.alias['~baseComponents'] = '/components/BaseComponents';
		}
	},
	purgeCSS: {
		whitelist: [
			'stroke-current',
			'fill-current',
			'w-31-%',
			'w-10-%',
			'w-40-%',
			'w-45-%',
			'md:w-10-%',
			'md:w-31-%',
			'md:w-40-%',
			'md:w-45-%',
			'swiper-button-disabled'
		]
	}
};

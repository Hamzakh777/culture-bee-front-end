<template>
	<div class="container relative z-50 mx-auto pt-6">
		<div
			class="relative z-50 flex justify-between items-center pb-6 px-4 lg:px-0"
		>
			<img
				src="/logo-big.png"
				class="hidden md:inline-block h-11-1/4"
				alt="culturebee logo"
			/>
			<img
				src="/logo-small.svg"
				class="inline-block md:hidden h-11-1/4"
				alt="culturebee logo"
			/>
			<!-- post update button -->
			<button></button>
			<div>
				<div class="flex items-center">
					<div class="hidden lg:inline-block">
						<nuxt-link to="#">
							<span class="page-link">Employer</span>
						</nuxt-link>
						<nuxt-link to="#">
							<span class="page-link">Location</span>
						</nuxt-link>
					</div>
					<SearchButton />
					<nuxt-link
						class="hidden md:inline-block btn-yellow h-12-1/2"
						to="/login"
					>
						Sign in
					</nuxt-link>
					<div
						@click="toggleMobileMenu"
						class="relative md:hidden h-12-1/2 w-12-1/2 p-2 bg-yellow cursor-pointer"
					>
						<div class="absolute top-1/2 left-1/2 transform-center">
							<div
								v-for="i in 3"
								:key="i"
								class="w-5 h-1/2 mb-1 bg-black last:mb-0"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="hidden lg:flex justify-between py-4">
            <a 
                href=""
                class="text-xs text-gray-900 font-bold tracking-widest"
                v-for="(filter, index) in filters"
                :key="index"
            >
                {{ filter }}
            </a>
        </!-->

		<!-- mobile menu -->
		<div
			v-if="isOpen"
			class="fixed z-40 inset-0 w-full px-12 pt-32 bg-gray-to-black text-white overflow-y-auto"
		>
			<div class="flex flex-col justify-between w-full h-full">
				<div>
					<nuxt-link to="#">
						<span class="page-link-mobile mb-8">Employer</span>
					</nuxt-link>
					<nuxt-link to="#">
						<span class="page-link-mobile mb-6">Location</span>
					</nuxt-link>
					<nav-filters-dropdown />
				</div>
				<button class="inline-block  btn-yellow h-12-1/2 mb-10">
					Sign in
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import SearchButton from './SearchButton';
import NavFiltersDropdown from './NavFiltersDropdown';
import filters from '~/mocks/NavBar/filters';
// import EventBus from '~/components/EventBus';

export default {
	name: 'TheNavBar',

	components: {
		SearchButton,
		NavFiltersDropdown
	},

	data: () => ({
		filters,
		isOpen: false
	}),

	methods: {
		toggleMobileMenu() {
			this.isOpen = !this.isOpen;
			console.log('adf');
		}
	}
};
</script>

<style scoped>
.page-link {
	@apply text-sm font-semibold text-gray-700 mr-10;
}
.page-link-mobile {
	@apply .page-link block text-white text-base font-semibold;
}
</style>

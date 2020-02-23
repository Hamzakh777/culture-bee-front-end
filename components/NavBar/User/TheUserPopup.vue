<template>
	<div
		v-if="isOpen"
		v-on-clickaway="toggle"
		@click="toggle"
		class="absolute top-0 right-0 w-64 mt-24 border-2 border-gray-800 bg-white"
	>
		<div class="row flex items-center border-b-2 border-gray-800">
			<div
				class="flex justify-center items-center h-12-1/2 w-12-1/2 bg-yellow uppercase text-gray-800 font-bold text-center"
			>
				{{ nameInitials }}
			</div>
			<div class="pl-5">
				<div
					class="font-D-Din font-bold text-gray-800 uppercase text-2xl"
				>
					{{ name }}
				</div>
				<nuxt-link 
					class="link" 
					:to="viewProfileLink"
				>
					View profile
				</nuxt-link>
			</div>
		</div>
		<div class="row border-b-2 border-gray-800">
			<nuxt-link 
				class="link block mb-4" 
				:to="editProfileLink"
			>
				Edit profile
			</nuxt-link>
			<nuxt-link 
				class="link block mb-4" 
				to="/account/details"
			>
				Account details
			</nuxt-link>
			<nuxt-link 
				v-if="role === 'employer'"
				class="link block" 
				to="/jobs"
			>
				Your jobs
			</nuxt-link>
		</div>
		<div class="row">
			<div
				class="link block cursor-pointer" 
				@click="logout"
			>
				Logout
			</div>
		</div>
	</div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import { mapGetters, mapState, mapActions } from 'vuex';

export default {
	name: 'TheUserPopup',

	mixins: [clickaway],

	computed: {
		...mapGetters('account', ['nameInitials']),
		...mapState('account', ['name', 'id', 'role']),

		editProfileLink() {
			if(this.role === 'job-seeker') {
				return `/jobseeker/${this.id}/edit`;
			} 
			return `/employer/${this.id}/edit`;
		},

		viewProfileLink() {
			if(this.role === 'job-seeker') {
				return `/jobseeker/${this.id}`;
			} 
			return `/employer/${this.id}`
		}
	},

	data() {
		return {
			isOpen: false
		};
	},

	created() {
		this.$bus.$on('open-navbar-user-popup', () => {
			this.toggle();
		});
	},

	methods: {
		...mapActions('account', ['logout']),

		toggle() {
			this.isOpen = !this.isOpen;
		}
	}
};
</script>
<style scoped>
.row {
	@apply p-5;
}
</style>

<template>
	<base-modal :is-active="isActive" @close="toggle">
		<template #title>
			Apply to
		</template>
		<template #content>
			<div class="flex flex-col md:flex-row md:justify-between">
				<!-- new to cultureBee - register  -->
				<div class="flex flex-col justify-between w-full md:w-1/2 py-4 md:pr-12">
					<div>
						<div class="base-title mb-6">
							new to culturebee?
						</div>
						<p class="p text-sm">
							Create an account to apply
						</p>
					</div>
					<button
						@click.prevent="signUp"
						class="primary-btn w-full mt-5"
					>
						Sign up
					</button>
				</div>
				<!-- already a member  -->
				<div
					class="flex flex-col justify-between w-full md:w-1/2 mt-6 md:mt-0 pt-8 pb-4 md:pl-12 md:py-4 border-t-2 md:border-t-0 md:border-l-2 border-gray-800"
				>
					<div>
						<div class="base-title mb-6">
							already a member?
						</div>
						<p class="p text-sm">
							Sign in to apply for this job
						</p>
					</div>
					<button
						@click.prevent="signIn"
						class="primary-btn block mt-5 py-3 w-full border-2 border-gray-800 bg-transparent text-3-1/2 hover:bg-transparent"
					>
						Sign in to apply
					</button>
				</div>
			</div>
		</template>
	</base-modal>
</template>

<script>
import { mapMutations } from 'vuex';
import BaseModal from '~/components/BaseComponents/BaseModal';

export default {
	name: 'JobApplyAuthenticate',

	components: {
		BaseModal
	},

	data() {
		return {
			isActive: false
		};
	},

	created() {
		this.$bus.$on('open-job-authenticate-modal', () => {
			this.toggle();
		});
	},

	methods: {
		...mapMutations('account', ['mutate']),

		toggle() {
			this.isActive = !this.isActive;
		},

		signIn() {
			const payload = {
				property: 'redirectUrlOnAuth',
				with: this.$router.path
			};

			this.mutate(payload);
			this.setRoleToJobSeeker();
			this.$router.push({
				path: '/login'
			});
		},

		signUp() {
			const payload = {
				property: 'redirectUrlOnAuth',
				with: this.$router.path
			};

			this.mutate(payload);
			this.setRoleToJobSeeker();
			this.$router.push({
				path: '/register'
			});
		},

		setRoleToJobSeeker() {
			const payload = {
				property: 'role',
				with: 'job-seeker'
			};

			this.mutate(payload);
		}
	}
};
</script>

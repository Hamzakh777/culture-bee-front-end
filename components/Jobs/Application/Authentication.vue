<template>
	<base-modal :is-active="isActive" @close="toggle">
		<template #title>
			Apply to
		</template>
		<template #content>
			<div class="flex justify-between">
				<!-- new to cultureBee - register  -->
				<div class="flex flex-col justify-between w-1/2 py-4 pr-12">
					<div>
						<div class="base-title mb-6">
							new to culturebee?
						</div>
						<p class="p text-sm">
							Apply to this job by creating a CultureBee
							profile.<br />
							This would only take around 5 mins.
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
					class="flex flex-col justify-between w-1/2 pl-12 py-4 border-l-2 border-gray-800"
				>
					<div>
						<div class="base-title mb-6">
							already a member?
						</div>
						<p class="p text-sm">
							Sign in to apply for this job with your CultureBee
							profile
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
import { mapState, mapMutations } from 'vuex';
import BaseModal from '~/components/BaseComponents/BaseModal';

export default {
	name: 'JobApplyAuthenticate',

	components: {
		BaseModal
	},

	data() {
		return {
			isActive: true
		};
	},

	created() {
		this.$bus.$on('open-job-authenticate-modal', () => {
			this.toggle();
		});
	},

	methods: {
		toggle() {
			this.isActive = !this.isActive;
		},

		signIn() {
			//
		},

		signUp() {
			//
		}
	}
};
</script>

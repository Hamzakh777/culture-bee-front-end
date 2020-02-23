<template>
	<div
		:style="
			employer.coverImgUrl !== null
				? `background-image: url(${employer.coverImgUrl})`
				: ''
		"
		class="relative h-123 w-31-% bg-cover bg-center shadow-md bg-gray-200"
	>
		<!-- follow button -->
		<div class="absolute z-10 top-0 right-0 mt-8 mr-8 cursor-pointer">
			<base-follow-button
				:following="following"
				@unfollow="unfollow"
				@follow="follow"
			/>
		</div>

		<!-- company icon -->
		<div
			class="flex justify-center items-center absolute z-10 bottom-0 left-0 mb-18 ml-8 w-26 h-26 p-2 bg-white"
		>
			<img :src="employer.profileImgUrl" class="w-full" alt="" />
		</div>

		<!-- overlay  -->
		<div
			class="absolute z-1 inset-0 bg-transparent-to-black opacity-75"
		></div>

		<!-- tags list -->
		<div
			class="flex items-center absolute z-10 bottom-0 left-0 right-0 h-10 bg-white px-8 py-6 font-poppins text-xs font-bold uppercase tracking-widest text-gray-800"
		>
			<span
				v-for="(tag, index) in tags"
				:key="index"
				class="mr-6 md:mr-4"
			>
				{{ tag }}
			</span>
		</div>
	</div>
</template>

<script>
import BaseFollowButton from '~/components/BaseComponents/BaseFollowButton';

export default {
	name: 'CompanyCard',

	components: {
		BaseFollowButton
	},

	props: {
		employer: {
			type: Object
		}
	},

	data() {
		return {
			tags: ['ethical', 'startup', 'fashion'],
			following: false
		};
	},

	mounted() {
		if (this.employer !== undefined) {
			this.following = this.employer.following;
		}
		this.$bus.$on('employer-follow', id => {
			if (id === this.employer.id) {
				this.following = true;
			}
		});
		this.$bus.$on('employer-unfollow', id => {
			if (id === this.employer.id) {
				this.following = false;
			}
		});
	},

	methods: {
		async follow() {
			this.following = true;
			this.$bus.$emit('employer-follow', this.employer.id);
			try {
				await this.$axios.post(`/api/user/${this.employer.id}/follow`);
			} catch (error) {
				console.error(error);
			}
		},

		async unfollow() {
			this.following = false;
			this.$bus.$emit('employer-unfollow', this.employer.id);
			try {
				await this.$axios.post(
					`/api/user/${this.employer.id}/unfollow`
				);
			} catch (error) {
				console.error(error);
			}
		}
	}
};
</script>

<style>
.yellow-sm-bar {
	height: 3px;
	width: 0.625rem;
	@apply bg-yellow;
}
</style>

<template>
	<div class="relative mb-12 shadow-md bg-white">
		<div
			:style="
				update.imgUrl !== null
					? `background-image: url(${update.imgUrl})`
					: ''
			"
			class="relative h-138 bg-gray-200 bg-center bg-cover"
		>
			<!-- like icon -->
			<base-like-icon
				v-if="!isEditPage"
				:isLiked="isLiked"
				@click="handleLiking"
				class="top-0 right-0 md:mt-8"
			/>

			<!-- edit remove buttons -->
			<div
				v-else-if="isEditing === true && isEditPage === true"
				class="absolute top-0 right-0 flex items-center mt-4 mr-4"
			>
				<base-edit-pen
					:pen-class-list="['relative', 'h-4']"
					@click="handleUpdateClick"
					class="flex items-center justify-center h-8 w-8 mr-2 bg-gray-700 text-white"
				/>
				<base-close-button
					@click="handleDelete"
					style="height: 2rem; width: 2rem"
				/>
			</div>

			<!-- company logo -->
			<a
				:href="baseUrl + `/employer/${update.owner.id}`"
				class="hidden md:flex justify-center items-center absolute top-0 left-0 h-32 w-32 mt-8 ml-8 p-2 bg-white"
			>
				<img :src="update.owner.profileImgUrl" class="w-full" />
			</a>
		</div>
		<div class="px-7-1/2 py-9 bg-white">
			<span class="inline-block sub-title mb-5">update</span>
			<h4
				style="word-wrap: break-word;"
				class="mb-5 text-lg md:text-8 font-bold text-gray-800"
			>
				<div v-if="!isSeeMore" @click="seeMore" class="cursor-pointer">
					{{ strippedDescription }}
				</div>
				<div
					v-else
					v-html="linkifiedDescription"
					class="update-description"
				></div>
			</h4>
			<div
				class="text-xs font-bold text-gray-800 tracking-widest uppercase"
			>
				<span
					v-for="(tag, index) in update.tags"
					:key="index"
					class="inline-block mb-2 mr-4"
				>
					{{ tag }}
				</span>
			</div>
		</div>
		<base-loader v-if="isLoading" />
	</div>
</template>

<script>
import linkifyHtml from 'linkifyjs/html';
import { mapState, mapActions } from 'vuex';
import BaseLikeIcon from '~/components/BaseComponents/BaseLikeIcon';
import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';
import BaseEditPen from '~/components/BaseComponents/BaseEditPen';
import BaseLoader from '~/components/BaseComponents/BaseLoader';

export default {
	name: 'FeedCard',

	components: {
		BaseLikeIcon,
		BaseEditPen,
		BaseCloseButton,
		BaseLoader
	},

	props: {
		update: {
			type: Object,
			required: true
		},
		isEditPage: {
			type: Boolean,
			required: false,
			default: false
		}
	},

	computed: {
		...mapState('user', ['role']),
		...mapState('employer', ['isEditing']),

		linkifiedDescription() {
			return linkifyHtml(this.update.description);
		},

		descriptionLength() {
			return this.update.description.length;
		},

		strippedDescription() {
			if (this.descriptionLength > 100) {
				return this.update.description.slice(0, 99) + '...';
			} else {
				return this.update.description;
			}
		}
	},

	data() {
		return {
			isLoading: false,
			baseUrl: process.env.BASE_URL,
			isLiked: false,
			isSeeMore: false
		};
	},

	mounted() {
		this.isLiked = this.update.isLiked;
	},

	methods: {
		...mapActions('employer/updates', ['deleteUpdate']),

		async handleDelete() {
			this.toggleLoader();
			try {
				await this.deleteUpdate(this.update.id);
			} catch (error) {
				alert('An error happened');
			}
			this.toggleLoader();
		},

		handleUpdateClick() {
			this.$bus.$emit('open-edit-company-update-modal', this.update.id);
		},

		toggleLoader() {
			this.isLoading = !this.isLoading;
		},

		toggleLike() {
			this.isLiked = !this.isLiked;
		},

		seeMore() {
			this.isSeeMore = true;
		},

		async handleLiking() {
			this.toggleLike();

			try {
				const url = `/api/update/${this.update.id}/liking`;

				const response = await this.$axios.post(url);

				if (this.isLiked !== response.data.isLiked) {
					this.toggleLike();
				}
			} catch (error) {
				this.toggleLike();
			}
		}
	}
};
</script>

<style scoped>
.update-description >>> .linkified {
	@apply underline text-yellow;
}

.update-description >>> .linkified:hover {
	@apply;
}
</style>

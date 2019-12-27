<template>
	<base-modal :is-active="isActive" @close="toggle">
		<template #title>Add values</template>
		<template #content>
			<div class="base-title mb-6">what does your company believe in?</div>
			<div class="mb-8">
				<div
					v-for="(value, key, index) in values"
					:key="index"
					class="flex flex-row items-center w-full mb-3 p-2 border-2 border-gray-800"
				>
					<!-- icon -->
					<div class="w-10"></div>
					<input
						:value="value.title"
						@input="setTitle(key, $event.target.value)"
						class="flex-grow input-text border-none"
						type="text"
						placeholder="Add value"
					/>
					<div class="relative w-10 h-4">
						<base-close-button
							v-if="value.title !== '' && value.title !== null"
							@click="resetValue(key)"
							style="height: 1.5rem; width: 1.5rem"
						/>
					</div>
				</div>
			</div>
			<div class="flex justify-end">
				<base-ajax-button :is-loading="isLoading" @click="submit">Add to profile</base-ajax-button>
			</div>
		</template>
	</base-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import BaseModal from '~/components/BaseComponents/BaseModal';
import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';

export default {
	name: 'EditValuesModal',

	components: {
		BaseModal,
		BaseAjaxButton,
		BaseCloseButton
	},

	data() {
		return {
			isActive: false,
			isLoading: false
		};
	},

	computed: {
		...mapState('employer', ['values'])
	},

	created() {
		this.$bus.$on('open-employer-values-modal', () => {
			this.toggle();
		});
	},

	methods: {
		...mapMutations('employer', [
			'setValueTitle',
			'resetValue',
			'nextStep'
		]),

		submit() {
			this.toggle();
			this.nextStep();
		},

		toggle() {
			this.isActive = !this.isActive;
		},

		setTitle(key, title) {
			const payload = {
				key,
				title
			};

			this.setValueTitle(payload);
		}
	}
};
</script>

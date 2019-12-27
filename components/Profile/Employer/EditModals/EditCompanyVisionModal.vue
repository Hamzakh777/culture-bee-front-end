<template>
	<base-modal :is-active="isActive" @close="toggle">
		<template #title>company vision</template>
		<template #content>
			<div class="base-title mb-4">Summary</div>
			<div>
				<textarea
					class="input-text resize-none w-full h-94 mb-8 py-6 px-6 text-sm font-semibold font-poppins"
					:value="companyVision"
					@input="setVision($event.target.value)"
				></textarea>
			</div>
			<div class="flex justify-end">
				<base-ajax-button 
					:is-loading="isLoading"
					@click="submit"
				>
				Add to profile
			</base-ajax-button>
			</div>
		</template>
	</base-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import BaseModal from '~/components/BaseComponents/BaseModal';
import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';

export default {
	name: 'EditCompanyVisionModal',

	components: {
		BaseModal,
		BaseAjaxButton
	},

    data() {
        return {
            isLoading: false,
            isActive: false
        };
    },

	computed: {
		...mapState('employer', ['companyVision'])
	},

	created() {
		this.$bus.$on('open-employer-company-vision-modal', () => {
			this.toggle();
		});
	},

	methods: {
		...mapMutations('employer', ['mutate', 'nextStep']),

		toggle() {
			this.isActive = !this.isActive;
		},

		setVision(value) { 
			const payload = {
				property: 'companyVision',
				with: value
			};

			this.mutate(payload);
		},

		submit() {
			// make some ajax request bla bla bla
			this.toggle();
			this.nextStep();
		}
	}
};
</script>

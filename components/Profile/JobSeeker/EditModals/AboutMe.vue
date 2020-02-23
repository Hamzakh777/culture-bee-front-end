<template>
    <base-modal :is-active="isActive" @close="toggle">
		<template #title>company vision</template>
		<template #content>
			<div class="base-title mb-4">Summary</div>
			<div>
				<textarea
					class="input-text resize-none w-full h-94 mb-8 py-6 px-6 text-sm font-semibold font-poppins"
					v-model="clonedDescription"
				></textarea>
				<base-input-error-message
					style="margin-top: -2rem"
					v-if="$v.clonedDescription.$error"
					:error-type="'required'"
				/>
			</div>
			<div class="flex justify-end">
				<base-ajax-button :is-loading="isLoading" @click="submit">
					Add to profile
				</base-ajax-button>
			</div>
		</template>
	</base-modal>
</template>

<script>
    import { mapActions, mapMutations, mapState } from 'vuex';
    import { required } from 'vuelidate/lib/validators';
    import BaseModal from '~/components/BaseComponents/BaseModal';
    import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
    import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';

    export default {
        name: 'AboutMeModal',

        components: {
            BaseModal,
            BaseAjaxButton,
            BaseInputErrorMessage
        }
    }
</script>
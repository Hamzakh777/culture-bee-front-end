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
	name: 'EditCompanyVisionModal',

	components: {
		BaseModal,
		BaseAjaxButton,
		BaseInputErrorMessage
	},

	data() {
		return {
			isLoading: false,
			isActive: false,
			isEdit: false,
			clonedDescription: null
		};
	},

	validations: {
		clonedDescription: {
			required
		}
	},


	computed: {
		...mapState('employer/vision', ['description']),
		...mapState('employer', ['currentProfileCreationStep']) 
	},

	created() {
		this.$bus.$on('open-employer-company-vision-modal', () => {
			this.clonedDescription = null;
			this.toggle();
		});

		this.$bus.$on('open-employer-edit-company-vision-modal', () => {
			this.clonedDescription = this.description;
			this.toggle();
		})
	},

	methods: {
		...mapMutations('employer', ['incrementProfileCreationStep']),
		...mapActions('employer/vision', ['addVision', 'updateVision']),

		toggle() {
			this.isActive = !this.isActive;
		},

		toggleLoader() {
			this.isLoading = !this.isLoading;
		},

		toggleEdit() {
			this.idEdit = !this.idEdit;
		},

		submit() {
			this.$v.$touch();

			if (!this.$v.$invalid){

				switch (this.isEdit) {
					case true:
						this.update();

						break;
					case false:
						this.add();

						break;
				}
			};
		},

		async add() {
			this.toggleLoader();
			try {
				await this.addVision({
					description: this.clonedDescription
				});

				this.toggle();
				if(this.currentProfileCreationStep === 1) this.incrementProfileCreationStep();
			} catch (error) {
				alert('An error happened');
			}
			this.toggleLoader();
		},
		
		async updated() {
			this.toggleLoader();
			try {
				await this.updateVision({
					description: this.clonedDescription
				});

				this.toggle();
			} catch (error) {
				alert('An error happened');
			}
			this.toggleLoader();
		},
	}
};
</script>

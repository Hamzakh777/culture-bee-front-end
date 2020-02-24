<template>
    <base-modal :is-active="isActive" @close="toggle">
		<template #title>About me</template>
		<template #content>
			<div class="base-title mb-4">Description</div>
			<div>
				<textarea
					class="input-text resize-none w-full h-94 mb-8 py-6 px-6 text-sm font-semibold font-poppins"
					v-model="clonedAboutMe"
				></textarea>
				<base-input-error-message
					style="margin-top: -2rem"
					v-if="$v.clonedAboutMe.$error"
					:error-type="'required'"
				/>
			</div>
			<!-- phone number -->
			<div class="mb-22">
				<div class="base-title mb-4">Phone number</div>
				<vue-phone-number-input 
					v-model="clonedPhoneNumber" 
					default-country-code="GB"
					:only-countries="['GB']"
				/>
			</div>
			<div class="flex justify-end">
				<base-ajax-button :is-loading="isLoading" @click="submit">
					save
				</base-ajax-button>
			</div>
		</template>
	</base-modal>
</template>

<script>
    import { mapActions, mapMutations, mapState } from 'vuex';
	import { required } from 'vuelidate/lib/validators';
	import VuePhoneNumberInput from 'vue-phone-number-input';
	import 'vue-phone-number-input/dist/vue-phone-number-input.css';
	import baseToggleLoaderMixin from '~/mixins/base/baseToggleLoaderMixin';
    import BaseModal from '~/components/BaseComponents/BaseModal';
	import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
    import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';

    export default {
		name: 'AboutMeModal',
		
		mixins: [baseToggleLoaderMixin],

        components: {
            BaseModal,
            BaseAjaxButton,
			BaseInputErrorMessage,
			VuePhoneNumberInput
		},
		
		computed: {
			...mapState('job-seeker/about-me', ['aboutMe', 'phoneNumber'])	
		},

		data() {
			return {
				isActive: false,
				clonedAboutMe: '',
				clonedPhoneNumber: '',
				isEdit: false
			}
		},

		validations: {
			clonedAboutMe: {
				required
			}
		},

		created() {
			this.$bus.$on('open-job-seeker-about-me-modal', () => {
				if(this.aboutMe !== null && this.aboutMe !== '') {
					this.clonedAboutMe = this.aboutMe;
					this.isEdit = true;
				} else {
					this.clonedAboutMe = null;
				}
				this.toggle();
			});
		},

		methods: {
			...mapActions('job-seeker/about-me', ['addAboutMe', 'updateAboutMe']),

			toggle() {
				this.isActive = !this.isActive;
			},

			submit() {
				if(this.isEdit) {
					this.update();
				} else {
					this.add();
				}
			},

			async add() {
				this.toggleLoader();
				try {
					await this.addAboutMe({
						aboutMe: this.clonedAboutMe,
						phoneNumber: this.clonedPhoneNumber
					});

					this.toggle();
				} catch (error) {
					console.error(error);
				}
				this.toggleLoader();
			},

			async update() {
				this.toggleLoader();
				try {
					const formData = new FormData();
					formData.append('_method', 'PUT');
					formData.append('aboutMe', this.clonedAboutMe);
					formData.append('phoneNumber', this.clonedPhoneNumber);

					await this.updateAboutMe(formData);

					this.toggle();
				} catch (error) {
					console.error(error);
				}
				this.toggleLoader();
			}
		}
    }
</script>
<template>
	<base-modal :is-active="isActive" @close="toggle">
		<template #title>
			add benefits
		</template>
		<template #content>
			<div
                v-for="(benefit, index) in $v.companyBenefits.$each.$iter"
                :key="index"
                :class="{ hidden: index != (currentActiveBenefit - 1) }"
            >
				<div class="mb-8">
					<div class="base-title mb-4">
						Summary
					</div>
					<input
						class="input-text w-full"
						placeholder="Type a benefit in here"
						type="text"
						v-model="benefit.title.$model"
					/>
					<base-input-error-message
						v-if="benefit.title.$error"
						:error-type="'required'"
					/>
				</div>
				<div class="mb-8">
					<div class="base-title mb-4">
						Subheading
					</div>
					<textarea
						class="input-text w-full h-42 py-3-1/2 resize-none"
						placeholder="Enter up to 75 characters"
						maxlength="75"
						v-model="benefit.subtitle.$model"
					>
					</textarea>
					<base-input-error-message
						v-if="benefit.subtitle.$error"
						:error-type="'required'"
					/>
				</div>

				<!-- upload -->
				<div class="upload flex justify-between items-end mb-10">
					<div class="flex items-center">
						<div class="base-title mr-16">upload</div>
						<client-only>
							<file-upload
								extensions="jpg,jpeg,png"
								accept="image/png,image/jpeg,image/jpg"
								:multiple="false"
								:size="1024 * 1024"
								@input-filter="inputFilter"
								@input-file="inputFile"
							>
								<img
									class="cursor-pointer hover:opacity-75 transition-all"
									src="/profile/employer/camera.svg"
								/>
							</file-upload>
						</client-only>
					</div>
					<!-- the uploaded image -->
					<div
                        v-if="benefit.$model.imgFile !== null"
						class="relative h-25 w-25 bg-center bg-cover bg-gray-300"
					>
						<base-close-button
							class="top-0 right-0 mt-2 mr-2"
							style="position: absolute; height: 1.25rem; width: 1.25rem"
                            @click="removeImg"
						/>
					</div>
				</div>
			</div>

			<!-- buttons -->
			<div class="flex justify-between items-center">
				<div class="flex">
					<div
						class="h-3 w-3 rounded-full mr-2 cursor-pointer"
						:class="{
							'bg-gray-800': i !== currentActiveBenefit,
							'bg-yellow': i === currentActiveBenefit
						}"
						v-for="i in 6"
						:key="i"
						@click="switchActiveBenefit(i)"
					></div>
				</div>
				<div class="flex items-center">
					<button class="secondary-btn mr-14" @click.prevent="skip">
						skip
					</button>
					<base-ajax-button :is-loading="isLoading" @click="submit">
						Save
					</base-ajax-button>
				</div>
			</div>
		</template>
	</base-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import FileUpload from 'vue-upload-component';
import BaseModal from '~/components/BaseComponents/BaseModal';
import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';
import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';

export default {
	name: 'AddBenefitsModal',

	components: {
		BaseModal,
		BaseAjaxButton,
		FileUpload,
		BaseCloseButton,
		BaseInputErrorMessage
    },
    
    watch: {
		companyBenefits: {
			handler(newVal) {
                console.log('setting benefits');
				this.setBenefits(newVal);
			},
			deep: true
		}
	},

	computed: {
		...mapState('employer/benefits', ['benefits'])
	},

	data() {
		return {
			isActive: false,
			isLoading: false,
			companyBenefits: [],
			currentActiveBenefit: 1 // the benefit being edited
		};
	},

	created() {
		this.$bus.$on('open-employer-add-benefits-modal', () => {
			this.toggle();
        });
        
        // close the data from the vuex store here
        this.companyBenefits = JSON.parse(JSON.stringify(this.benefits));
	},

	validations: {
		companyBenefits: {
			required,
			$each: {
				title: {
					required
				},
				subtitle: {
					required
				}
			}
		}
	},

	methods: {
        ...mapMutations('employer', ['nextStep']),
        ...mapMutations('employer/benefits', ['setBenefits']),

		toggle() {
			this.isActive = !this.isActive;
		},

		switchActiveBenefit(num) {
			this.currentActiveBenefit = num;
		},

		inputFile(newFile, oldFile, prevent) {
			if (newFile && !oldFile) {
                // add
                const benefits = this.companyBenefits;
                benefits[this.currentActiveBenefit].imgFile = newFile;

                this.companyBenefits = benefits;                
			}
			if (!newFile && oldFile) {
                // remove
                this.companyBenefits[this.currentActiveBenefit].imgFile = null;
			}
		},

		inputFilter(newFile, oldFile, prevent) {
			if (newFile && !oldFile) {
				if (!/\.(jpg|jpeg|png)$/i.test(newFile.name)) {
					this.alert('Your choice is not a picture');
					return prevent();
				}
			}
			if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
				newFile.url = '';
				const URL = window.URL || window.webkitURL;

				if (URL && URL.createObjectURL) {
					newFile.url = URL.createObjectURL(newFile.file);
				}
			}
		},

		removeImg() {
            this.companyBenefits[this.currentActiveBenefit].imgFile = null;
        },

		submit() {
			this.toggle();
			this.nextStep();
		}
	}
};
</script>
<style scoped>
.upload >>> .file-uploads {
	@apply cursor-pointer;
}
</style>

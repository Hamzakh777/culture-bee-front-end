<template>
    <base-modal :is-active="isActive" @close="toggle">
		<template #title>
			Edit benefit
		</template>
		<template #content>
			<div>
				<div class="mb-8">
					<div class="base-title mb-4">
						Summary
					</div>
					<input
						class="input-text w-full"
						placeholder="Type a benefit in here"
						type="text"
						v-model="benefitToEdit.title"
					/>
					<base-input-error-message
						class="mt-2"
						v-if="$v.benefitToEdit.title.$error"
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
						v-model="benefitToEdit.subtitle"
					>
					</textarea>
					<base-input-error-message
						class="mt-1"
						v-if="$v.benefitToEdit.subtitle.$error"
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
						v-if="benefitToEdit.imgUrl != false"
						class="relative h-25 w-25 bg-center bg-cover bg-gray-300"
						:style="
							`background-image: url(${benefitToEdit.imgUrl})`
						"
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
			<div class="flex justify-end items-center w-full">
				<div class="flex items-center">
					<base-ajax-button :is-loading="isLoading" @click="submit">
						Save
					</base-ajax-button>
				</div>
			</div>
		</template>
	</base-modal>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex';
    import { required } from 'vuelidate/lib/validators';
    import FileUpload from 'vue-upload-component';
    import BaseModal from '~/components/BaseComponents/BaseModal';
    import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
    import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';
    import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';

    export default {

        components: {
            BaseModal,
            BaseAjaxButton,
            FileUpload,
            BaseCloseButton,
            BaseInputErrorMessage
        },

        computed: {
            ...mapState('employer/benefits', ['benefits'])
        },

        data() {
            return {
                isActive: false,
                isLoading: false,
                benefitToEdit: {
                    title: '',
                    subtitle: '',
                    imgFile: null,
                    imgUrl: null
                }
            };
        },

        created() {
            this.$bus.$on('open-edit-benefit-modal', (id) => {
                this.toggle();
                const benefitToEdit = this.benefits.filter((item) => id === item.id)[0];

                this.benefitToEdit = JSON.parse(JSON.stringify(benefitToEdit));
            })
        },

        validations: {
            benefitToEdit: {
                title: {
                    required
                },
                subtitle: {
                    required
                }
            }
        },

        methods: {
            toggle() {
                this.isActive = !this.isActive;
            },

            toggleLoader() {
                this.isLoading = !this.isLoading;
            },

            inputFile(newFile, oldFile, prevent) {
                if (newFile && !oldFile) {
                    // add
                    this.changeImg(newFile.file, newFile.url);
                }
                if (!newFile && oldFile) {
                    // remove
                    this.changeImg(null, null);
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

            changeImg(data, url) {
                this.benefitToEdit.imgFile = data;
                this.benefitToEdit.imgUrl = url
            },

            removeImg() {
                this.changeImg(null, null);
            },

            submit() {
                this.$v.$touch();
                if (this.$v.$invalid) return ;
            }
        },
    }
</script>

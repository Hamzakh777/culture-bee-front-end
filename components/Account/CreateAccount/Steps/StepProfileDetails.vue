<template>
	<div class="py-6">
		<div class="flex items-end mb-6">
			<div
				class="flex justify-center items-center p-3 w-20 h-20 border-2 border-gray-700 bg-center bg-cover bg-no-repeat"
				:class="{'bg-yellow': profileImgFile === null}"
				:style="
					'background-image: url(' +
						(profileImgFile !== null
							? profileImgFile.url
							: '/images/global/icons/smile-face.png') +
						'); background-size:' +
						(profileImgFile !== null ? 'cover' : '90% 90%')
				"
			></div>
			<file-upload
				class="relative ml-4 font-medium text-gray-800 cursor-pointer underline"
				extensions="gif,jpg,jpeg,png,webp"
				accept="image/png,image/gif,image/jpeg,image/webp"
				name="avatar"
				@input-file="inputFile"
				ref="upload"
			>
				Upload your profile photo
			</file-upload>
		</div>
		<input
			class="input-text w-full mb-4"
			type="text"
			placeholder="Name"
			:value="name"
			@input="setName($event.target.value)"
		/>
		<base-input-error-message
			v-if="!$v.name.required && $v.name.$error"
			:error-type="'required'"
		/>
		<base-input-error-message
			v-if="!$v.name.minLength && $v.name.$error"
			:error-type="'min-length-3'"
			:custom-message="'A name min length is 3'"
		/>
		<steps-nav @next="submit" :no-prev="true" :is-loading="isLoading" />
	</div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import { mapState, mapMutations, mapActions } from 'vuex';
import FileUpload from 'vue-upload-component';
import StepsNav from './StepsNav';
import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';

export default {
	name: 'StepProfileDetails',

	components: {
		StepsNav,
		BaseInputErrorMessage,
		FileUpload
	},

	computed: {
		...mapState('account', ['name', 'profileImgFile'])
	},

	validations: {
		name: {
			required,
			minLength: minLength(3)
		}
	},

	data() {
		return {
			isLoading: false
		};
	},

	methods: {
		...mapMutations('account', ['mutate', 'nextStep', 'previousStep']),
		...mapActions('account', ['update']),

		toggleLoader() {
			this.isLoading = !this.isLoading;
		},

		inputFile(newFile, oldFile) {
			if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
				newFile.url = '';
				const URL = window.URL || window.webkitURL;
				if (URL && URL.createObjectURL) {
					newFile.url = URL.createObjectURL(newFile.file);
				}
				const payload = {
					property: 'profileImgFile',
					with: newFile
				};
				this.mutate(payload);
			}
		},

		setName(name) {
			const payload = {
				property: 'name',
				with: name
			};

			this.mutate(payload);
		},

		submit() {
			this.$v.$touch();
			if (this.$v.$invalid) return;

			this.nextStep();
		}
	}
};
</script>

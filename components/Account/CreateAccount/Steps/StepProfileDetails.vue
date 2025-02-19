<template>
	<div class="py-6">
		<div class="flex items-end mb-6">
			<div
				v-if="role === 'employer'"
				class="flex justify-center items-center p-3 w-20 h-20 border-2 border-gray-700 bg-center bg-cover bg-no-repeat"
				:class="{'bg-yellow': profileImgFile === null}"
			>
				<img 
					class="w-98-%"
					:src="profileImgFile !== null
							? profileImgFile.url
							: ''"
				>
			</div>
			<div
				v-else-if="role === 'job-seeker'"
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
				{{ role === 'employer' ? 'Upload your logo' : 'Upload your profile photo' }}
			</file-upload>
		</div>
		<!-- name  -->
		<input
			class="input-text w-full mb-4"
			type="text"
			:placeholder="role === 'employer' ? 'Contact name' : 'Name'"
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
		<!-- company name -->
		<div class="w-full mb-4" v-if="role === 'employer'">
			<input
				class="input-text w-full mb-4"
				type="text"
				placeholder="Company name"
				:value="companyName"
				@input="setStoreProp('companyName', $event.target.value)"
			/>
			<base-input-error-message
				v-if="$v.companyName.$error"
				:error-type="'required'"
			/>
		</div>
		<steps-nav @next="submit" :no-prev="true" :is-loading="isLoading" />
	</div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import { mapState, mapMutations, mapActions } from 'vuex';
import FileUpload from 'vue-upload-component';
import StepsNav from './StepsNav';
import mutateStorePropMixin from '~/mixins/base/mutateStorePropMixin';
import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';

export default {
	name: 'StepProfileDetails',

	mixins: [mutateStorePropMixin],

	components: {
		StepsNav,
		BaseInputErrorMessage,
		FileUpload
	},

	computed: {
		...mapState('account', ['name', 'profileImgFile', 'companyName', 'role'])
	},

	validations() {
		if (this.role === 'job-seeker') {
			return {
				name: {
					required,
					minLength: minLength(3)
				},
			};
		} else {
			return {
				name: {
					required,
					minLength: minLength(3)
				},
				companyName: {
					required
				}
			};
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

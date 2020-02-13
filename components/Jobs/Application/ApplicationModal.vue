<template>
	<base-modal :is-active="isActive" @close="toggle">
		<template #title>
			Apply to 
		</template>
		<template #content>
			<div class="row">
				<div class="base-title flex-shrink-0">
					contact info
				</div>
				<div class="lg:flex-grow text-gray-800">
					<div class="flex flex-row mb-4">
						<!-- profile img  -->
						<div
							:style="`background-image: url(${profileImgUrl})`"
							class="flex-shrink-0 h-26 w-26 rounded-full bg-center bg-cover bg-gray-100"
						></div>
						<!-- profile info  -->
						<div class="pl-4 pt-6">
							<!-- name  -->
							<div class="text-base font-medium">
								{{ name }}
							</div>
							<!-- headline on profile - quick pitch  -->
							<div>
								{{ quickPitch }}
							</div>
						</div>
					</div>
					<p class="text-sm font-normal">
						Your CultureBee profile will be sent with your
						application so that employers can see what you're all
						about and what's important to you
					</p>
				</div>
			</div>
			<!-- upload cv  -->
			<div class="row">
				<div class="base-title flex-shrink-0">
                    CV
                </div>
				<div class="flex flex-row items-center">
                    <div>
                        <client-only>
                            <file-upload
                                accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                extensions="pdf,docx,doc"
                                :multiple="false"
                                :size="1024 * 1024 * 5"
                                @input-file="inputFile"
                            >
                                <div class="primary-btn block mt-5 px-14 py-3 w-full border-2 border-gray-800 bg-transparent text-3-1/2 hover:bg-transparent cursor-pointer">
                                    + upload CV
                                </div>
                            </file-upload>
                        </client-only>
                        <p class="text-xs text-gray-300">
                            DOC, DOCS, PDF (5MB)
                        </p>
                    </div>
                    <div 
                        v-if="cvFile !== null"
                        class="flex flex-row items-center pl-14"
                    >
                        <span class="pr-6">
                            {{ cvFile.name }}
                        </span>
                        <base-close-button 
                            @click="removeFile"
                        />
                    </div>
                </div>
			</div>
			<!-- buttons -->
			<div
				class="relative mt-8 pt-8"
			>
				<div
					class="absolute top-0 left-1/2 -transform-x-50 w-screen h-1/2 bg-gray-900"
				></div>
				<div
					class="flex justify-end w-full md:w-auto items-stretch"
				>
					<base-ajax-button
						:is-loading="isLoading"
						@click="apply"
					>
						Send your application
					</base-ajax-button>
				</div>
			</div>
		</template>
	</base-modal>
</template>

<script>
import { mapState } from 'vuex';
import FileUpload from 'vue-upload-component';
import baseToggleLoaderMixin from '~/mixins/base/baseToggleLoaderMixin';
import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';
import BaseModal from '~/components/BaseComponents/BaseModal';

export default {
	name: 'JobApplicationModal',

	components: {
		BaseModal,
        BaseAjaxButton,
        FileUpload,
        BaseCloseButton
	},

	mixins: [baseToggleLoaderMixin],

	computed: {
        ...mapState('account', ['profileImgUrl', 'name', 'quickPitch']),
        ...mapState('job', ['jobTitle'])
	},

	data() {
		return {
            isActive: false,
            cvFile: null
		};
	},

	created() {
		this.$bus.$on('open-job-application-modal', () => {
			this.toggle();
		});
	},

	methods: {
		toggle() {
			this.isActive = !this.isActive;
        },
        
        inputFile(newFile, oldFile) {
			if (newFile && !oldFile) {
				// add
				this.cvFile = newFile;
			}
			if (!newFile && oldFile) {
				// remove
				this.cvFile = newFile;
			}
        },
        
        removeFile() {
            this.cvFile = null;
        },

		apply() {
			//
		}
	}
};
</script>
<style scoped>
.row {
	@apply flex flex-col;
}
.input {
	@apply mb-4;
}
.base-title {
	@apply mb-4;
}

@media (min-width: 1024px) {
	.row {
		@apply flex-row;
	}
	.row--col {
		@apply flex-col;
	}
	.base-title {
		@apply w-60 pr-6;
	}
	.base-title--w-full {
		@apply w-full;
	}
}
</style>

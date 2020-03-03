<template>
	<div class="flex flex-col items-center justify-start p-9 bg-white">
		<div
			class="flex items-center justify-center h-45 w-45 mb-9 p-4 border-2 border-black bg-white"
		>
			<img :src="profileImgUrl" />
		</div>
		<div class="w-45 pb-5 border-b-2 border-black text-center" style="word-wrap: break-word;">
			<div class="base-title mb-4">
				{{ isEmployer ? companyName : name }}
			</div>
			<div class="mb-6 font-bold text-sm text-black">
				{{ quickPitch }}
			</div>
			<!-- location -->
			<div 
                v-if="location"
                class="small-text flex items-start justify-center mb-5"
            >
				<base-app-icon
					:class-list="['flex-shrink-0', 'h-4', 'mr-1', 'fill-current', 'text-black']"
					name="location-pin"
				/>
				{{ location }}
			</div>
			<!-- category -->
			<div 
                v-if="isEmployer"
                class="small-text"
            >
				{{ industry }}
			</div>
		</div>
		<nuxt-link
			class="primary-btn primary-btn--black w-45 mt-8 text-center"
			:to="editProfileLink"
		>
			Edit profile
		</nuxt-link>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';

export default {
	name: 'ProfileDetailsCard',

	components: {
		BaseAppIcon
	},

	computed: {
		...mapState('account', [
			'role',
			'name',
			'companyName',
			'quickPitch',
			'industry',
			'location',
			'profileImgUrl',
			'id'
        ]),
        
        editProfileLink() {
            if(this.role === 'job-seeker') {
                return `/jobseeker/${this.id}/edit`;
            }

            return `/employer/${this.id}/edit`;
        },

        isEmployer() {
            return this.role === 'employer';
        }
	}
};
</script>

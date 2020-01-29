<template>
	<div class="py-8">
		<div class="container mx-auto">
			<div class="section-title mb-4">
				About this job
			</div>
			<div class="lg:flex justify-between flex-wrap">
				<!-- why this role -->
				<div class="section">
					<div class="sub-section-title">
						Why this role?
					</div>
					<div class="p">
						{{ whyThisRole }}
					</div>
				</div>
				<!-- what you'll own -->
				<div class="section">
					<div class="sub-section-title">
						What you’ll own
					</div>
					<ul>
						<li
							v-for="(responsibility, index) in responsibilities"
							:key="index"
							class="relative pl-4"
						>
							{{ responsibility.title }}
							<div class="absolute left-0 top-0 h-1 w-1 mt-3 rounded-full bg-gray-800"></div>
						</li>
					</ul>
				</div>
				<!-- promo photo -->
				<div 
					v-if="promoPhotoUrl"
					class="section relative h-68 md:h-72 my-4"
				>
					<div
						class="absolute md:relative left-1/2 -transform-x-50 inset-y-0 w-screen md:w-full md:h-full bg-cover bg-center"
						:style="`background-image: url(${promoPhotoUrl})`"
					></div>
				</div>
				<!-- what you'll bring - qualities -->
				<div class="section">
					<div class="sub-section-title mb-8">
						What you’ll bring
					</div>
					<div>
						<div class="relative">
							<div
								class="relative mb-4 pl-10"
								v-for="(quality, index) in qualities"
								:key="index"
							>
								<img
									class="absolute top-0 left-0 h-4"
									src="/icons/checkmark.svg"
								/>
								<p 
									class="p"
									:class="{'font-bold': index === 0}"
								>
									{{ quality.title }}
								</p>
							</div>
						</div>
					</div>
				</div>
				<!-- family photo -->
				<div 
					v-if="familyPhotoUrl"
					class="section lg:order-6 relative h-68 md:h-72 my-4 md:my-0"
				>
					<div
						class="absolute md:relative left-1/2 -transform-x-50 inset-y-0 w-screen md:w-full md:h-full bg-cover bg-center"
						:style="`background-image: url(${familyPhotoUrl})`"
					></div>
				</div>
				<!-- work family description - aboutTheColleagues -->
				<div class="section">
					<div class="sub-section-title">
						Your work family
					</div>
					<p class="p">
						{{ aboutTheColleagues }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'JobAbout',

	computed: {
		...mapState('job', [
			'whyThisRole',
			'applicantQualities',
			'promoPhotoUrl',
			'familyPhotoUrl',
			'aboutTheColleagues',
			'ownershipValues'
		]),

		responsibilities() {
			return this.ownershipValues.filter((responsibility) => {
				return responsibility.title !== '' && responsibility.title !== null
			})
		},

		qualities() {
			return this.applicantQualities.filter((quality) => {
				return quality.title !== '' && quality.title !== null
			})
		}
	}
};
</script>
<style scoped>
.section {
	@apply py-4;
}

@media(min-width: 768px) {
    .section {
        @apply py-6;
    }
}

@media(min-width: 1024px) {
	.section {
		@apply w-46-%;
	}
}
</style>

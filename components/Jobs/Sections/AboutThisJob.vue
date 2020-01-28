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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit, sed do
					</div>
				</div>
				<!-- what you'll own -->
				<div class="section">
					<div class="sub-section-title">
						What you’ll own
					</div>
					<div class="p">
						{{ whyThisRole }}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit, sed do
					</div>
				</div>
				<!-- promo photo -->
				<div class="section relative h-68 md:h-72 my-4">
					<div
						class="absolute md:relative left-1/2 -transform-x-50 inset-y-0 w-screen md:w-full md:h-full bg-pink-500"
					></div>
				</div>
				<!-- what you'll bring - qualities -->
				<div class="section">
					<div class="sub-section-title mb-8">
						What you’ll bring
					</div>
					<div>
						<div class="relative pl-10">
							<img
								class="absolute top-0 left-0 h-4"
								src="/icons/checkmark.svg"
							/>
							<p class="p">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Exercitationem ratione sequi
								aspernatur omnis totam officia deleniti iusto
								molestiae quaerat cupiditate?
							</p>
						</div>
					</div>
				</div>
				<!-- family photo -->
				<div class="section lg:order-6 relative h-68 md:h-72 my-4 md:my-0">
					<div
						class="absolute md:relative left-1/2 -transform-x-50 inset-y-0 w-screen md:w-full md:h-full bg-pink-500"
					></div>
				</div>
				<!-- work family description - aboutTheColleagues -->
				<div class="section">
					<div class="sub-section-title">
						Your work family
					</div>
					<p class="p">
						{{ aboutTheColleagues }}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit, sed do
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'AboutThisJob',

	computed: {
		...mapState('job', [
			'whyThisRole',
			'applicantQualities',
			'promoPhotoUrl',
			'familyPhotoUrl',
			'aboutTheColleagues'
		])
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

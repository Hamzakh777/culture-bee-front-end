<template>
	<BaseSection
		class="pt-0"
		title="Company updates"
		btn-text="View all"
		:is-title-light="false"
	>
		<div class="container mx-auto">
			<div class="updates-wrapper">
				<company-update-card size="big"/>
				<div>
					<company-update-card />
					<company-update-card :size="'medium'"/>
				</div>
				<div>
					<company-update-card :size="'medium'"/>
					<company-update-card />
				</div>
			</div>
		</div>
	</BaseSection>
</template>

<script>
import CompanyUpdateCard from './CompanyUpdateCard';
import BaseSection from '~/components/BaseComponents/BaseSection';

export default {
	name: 'TheCompanyUpdatesSection',

	components: {
        BaseSection,
        CompanyUpdateCard
	}
};
</script>

<style scoped>
.updates-wrapper {
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	/* grid-template-rows: 20rem 30.75rem; */
	grid-template-rows: auto auto;
	grid-gap: 2rem;
}
.main-update {
	grid-area: 1 / 1 / 3 / 2;
	@apply bg-yellow;
}
</style>

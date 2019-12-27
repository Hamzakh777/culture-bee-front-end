<template>
    <div class="py-18">
        <div class="container mx-auto">
            <div class="flex items-center justify-between">
                <div class="base-title">Company feed</div>
                <button
                    class="primary-btn"
                    @click="$emit('open-modal-to-add-new-update')"
                >
                    Post update
                </button>
            </div>
            <!-- updates -->
			<div class="updates-wrapper mt-16">
				<company-update-card 
					class="hidden md:block"
					size="big"
				/>
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
    </div>  
</template>

<script>
    import CompanyUpdateCard from '~/components/Companies/CompanyUpdateCard';

    export default {
        name: 'EmployerCultureFeed',

        components: {
            CompanyUpdateCard
        }
    }
</script>

<style scoped>
.updates-wrapper {
	@media(min-width: 1024px) {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		grid-template-rows: auto auto;
		grid-gap: 2rem;
	}
}
.main-update {
	grid-area: 1 / 1 / 3 / 2;
	@apply bg-yellow;
}
</style>

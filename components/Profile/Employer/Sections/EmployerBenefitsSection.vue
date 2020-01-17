<template>
	<div class="py-18 bg-gray-800" id="benefits">
		<div class="container mx-auto">
			<div class="base-title-light">
				Benefits
			</div>
			<div class="flex justify-between flex-wrap mt-12">
				<benefit-card 
                    v-for="(benefit, index) in benefits"
                    :key="index"
                    :is-edit-page="isEditPage" 
                    :benefit="benefit"
                />
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BenefitCard from '../BenefitCard';

export default {
	name: 'EmployerBenefitsSection',

	props: {
		isEditPage: {
			type: Boolean,
			required: true
		}
	},

	components: {
		BenefitCard
    },
    
    computed: {
        ...mapState('employer/benefits', ['benefits'])
	},

	mounted() {
		try {
			this.fetchBenefits(this.$route.params.id);
		} catch (error) {
			alert('An error happend trying to load benefits')
			console.error(error);
		}
	},

	methods: {
		...mapActions('employer/benefits', ['fetchBenefits'])
	}
};
</script>

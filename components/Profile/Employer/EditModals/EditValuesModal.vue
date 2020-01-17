<template>
	<base-modal :is-active="isActive" @close="toggle">
		<template #title>Add values</template>
		<template #content>
			<div class="base-title mb-6">
				what does your company believe in?
			</div>
			<div class="mb-8">
				<div
					v-for="(value, index) in clonedValues"
					:key="index"
					class="flex flex-row items-center w-full mb-3 p-2 border-2 border-gray-800"
				>
					<!-- icon -->
					<div 
						class="relative w-10 ml-4"
					>
						<!-- plus -->
						<div 
							v-if="value.icon === null || value.icon === ''"
							class="plus"
							@click="setActiveIconSelector(index)"
						>
						</div>
						<div
							v-else
							class="absolute top-1/2 left-1/2 transform-center flex justify-center items-center h-12 w-12 rounded-full border-2 border-gray-800 cursor-pointer"
							@click="setActiveIconSelector(index)"
						>
							<font-awesome-icon
								:icon="value.icon"
								class="h-5 text-13"
							/>
						</div>

						<!-- list to choose an icon -->
						<div 
							class="absolute top-0 left-0 z-10 mt-8"
							v-if="activeIconSelector === index"
							v-on-clickaway="setActiveIconSelector"
						>
							<v-select
								:options="fontawesomeIcons"
								:clearable="false"
								class="bg-white w-40 shadow-xl"
								v-model="value.icon"
							>
								<!-- selected option -->
								<template
									v-slot:selected-option="slotProps"
								>
									<font-awesome-icon
										:icon="slotProps.label"
										class="h-5 text-13"
									/>
								</template>
								<!-- dropdown -->
								<template v-slot:option="slotProps">
									<font-awesome-icon
										:icon="slotProps.label"
										class="h-5 text-13"
									/>
								</template>
							</v-select>
						</div>
					</div>
					<input
						class="flex-grow input-text border-none"
						type="text"
						placeholder="Add value"
						v-model="value.title"
					/>
					<div class="relative w-10 h-4">
						<base-close-button
							v-if="(value.title !== '' && value.title !== null) || (value.icon !== '' && value.icon !== null)"
							@click="resetValue(index)"
							style="height: 1.5rem; width: 1.5rem"
						/>
					</div>
				</div>
			</div>
			<div class="flex justify-end">
				<base-ajax-button 
					:is-loading="isLoading" 
					@click="submit"
				>
					Add to profile
				</base-ajax-button
				>
			</div>
		</template>
	</base-modal>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import { mapState, mapMutations, mapActions } from 'vuex';
import vSelect from 'vue-select';
import BaseModal from '~/components/BaseComponents/BaseModal';
import BaseAjaxButton from '~/components/BaseComponents/BaseAjaxButton';
import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';
import fontawesomeIcons from '~/assets/data/fontawesomeIcons';

export default {
	name: 'EditValuesModal',

	mixins: [clickaway],

	components: {
		BaseModal,
		BaseAjaxButton,
		BaseCloseButton,
		vSelect
	},

	data() {
		return {
			fontawesomeIcons,
			isActive: false,
			isLoading: false,
			clonedValues: null,
			activeIconSelector: null 
		};
	},

	computed: {
		...mapState('employer/values', ['values']),
		...mapState('account', ['currentProfileCreationStep'])
	},

	created() {
		this.$bus.$on('open-employer-values-modal', () => {
			this.toggle();
			// close the data in the store
			this.clonedValues = JSON.parse(JSON.stringify(this.values));

			while (this.clonedValues.length !== 7) {
				const emptyValue = {
					title: null,
					icon: null
				};
				
				this.clonedValues.push(emptyValue);
			}
		});
	},

	methods: {
		...mapMutations('employer', ['nextStep']),
		...mapActions('employer/values', ['addValues']),

		async submit() {
			this.toggleLoader();
			try {
				const valuesToSend = this.clonedValues.filter(value => {
					return value.title !== '' && value.title !== null && value.icon !== null
				});

				await this.addValues({
					values: valuesToSend
				});

				this.toggle();
				if(this.currentProfileCreationStep === 1) this.nextStep();
			} catch (error) {
				alert('An error happened');
			}
			this.toggleLoader();
		},

		toggle() {
			this.isActive = !this.isActive;
		},

		toggleLoader() {
			this.isLoading = !this.isLoading;
		},

		resetValue(index) {
			this.clonedValues[index].title = '';
			this.clonedValues[index].icon = '';
		},

		setActiveIconSelector(index = null) {
			if(this.activeIconSelector === null) {
				this.activeIconSelector = index;
			} else {
				this.activeIconSelector = null;
			}
		}
	}
};
</script>
<style scoped>
.plus {
	@apply relative h-4 w-4 mx-auto cursor-pointer;
}
.plus::before,
.plus::after {
	content: '';
	@apply absolute top-1/2 left-1/2 transform-center rounded-full bg-gray-800;
}
.plus::before {
	height: 3px;
	@apply w-full;
}
.plus::after {
	width: 3px;
	@apply h-full;
}
</style>

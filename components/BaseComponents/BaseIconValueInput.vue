<template>
	<div
		class="flex flex-row items-center w-full mb-3 lg:mb-6 p-2 border-2 border-gray-800"
	>
		<!-- icon -->
		<div class="relative w-10 ml-4">
			<!-- plus -->
			<div
				v-if="value.icon === null || value.icon === ''"
				@click="toggleIconList"
				class="plus"
			></div>
			<div
				v-else
				@click="toggleIconList"
				class="absolute top-1/2 left-1/2 transform-center flex justify-center items-center h-12 w-12 rounded-full border-2 border-gray-800 cursor-pointer"
			>
				<font-awesome-icon :icon="value.icon" class="h-5 text-13" />
			</div>

			<!-- list to choose an icon -->
			<div
				v-if="isIconListActive"
				v-on-clickaway="toggleIconList"
				class="absolute top-0 left-0 z-10 mt-8"
			>
				<v-select
					:options="fontawesomeIcons"
					:clearable="false"
					v-model="value.icon"
					class="bg-white w-40 shadow-xl"
				>
					<!-- selected option -->
					<template v-slot:selected-option="slotProps">
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
			v-model="value.title"
			class="flex-grow input-text border-none"
			type="text"
			:placeholder="placeholder"
		/>
		<div class="relative w-10 h-4 -mt-2">
			<base-close-button
				v-if="
					(value.title !== '' && value.title !== null) ||
						(value.icon !== '' && value.icon !== null)
				"
				@click="reset"
				style="height: 1.5rem; width: 1.5rem"
			/>
		</div>
	</div>
</template>

<script>
import vSelect from 'vue-select';
import { mixin as clickaway } from 'vue-clickaway';
import fontawesomeIcons from '~/assets/data/fontawesomeIcons';
import BaseCloseButton from '~/components/BaseComponents/BaseCloseButton';

export default {
	name: 'BaseIconValueInput',

	components: {
		BaseCloseButton,
		vSelect
	},

	mixins: [clickaway],

	props: {
		value: {
			type: Object,
			required: true
		},
		placeholder: {
			type: String,
			required: false,
			default: 'Add value'
		}
	},

	data() {
		return {
			fontawesomeIcons,
			activeIconSelector: null,
			isIconListActive: false
		};
	},

	methods: {
		reset() {
			this.value.icon = null;
			this.value.title = null;
		},

		toggleIconList() {
			this.isIconListActive = !this.isIconListActive;
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

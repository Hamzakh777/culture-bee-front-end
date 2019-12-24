<template>
    <div
        @click="$emit('click')"
        class="absolute right-0 top-1/2 h-9 w-9 bg-yellow -transform-y-50 mr-10"
    >
        <div class="cross"></div>
    </div>
</template>

<script>
    export default {
        name: 'BaseCloseButton'
    }
</script>

<style scoped>
.cross::after,
.cross::before {
	content: '';
	transform: translate(-50%, -50%) rotate(45deg);
	@apply absolute top-1/2 left-1/2 bg-gray-800;
}

.cross::after {
	width: 3px;
	@apply h-5;
}

.cross::before {
	height: 3px;
	@apply w-5;
}  
</style>
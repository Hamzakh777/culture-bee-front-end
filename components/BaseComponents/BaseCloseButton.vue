<template>
    <div
        @click="$emit('click')"
        class="relative h-8 w-8 bg-yellow cursor-pointer"
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
	width: 2px;
	height: 60%;
}

.cross::before {
	height: 2px;
	width: 60%;
}  
</style>
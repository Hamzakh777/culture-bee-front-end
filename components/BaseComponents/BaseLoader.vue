<template>
    <div class="absolute inset-0 z-100" :style="`background-color: ${backgroundColor}`">
        <div class="absolute top-1/2 left-1/2 transform-center h-7-1/2 w-7-1/2">
            <div class="h-7-1/2 w-7-1/2 rounded-full bg-transparent border-4 border-light-teal border-l-teal spinning-loader"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseLoader',

    props: {
        backgroundColor: {
            type: String,
            default: 'rgba(255,255,255, 0.7)'
        }
    }
}
</script>

<style scoped>
.loader::after {
    background-color: transparent
}

.spinning-loader {
    border-left-color: #36C0C3;
    animation-name: rotate-s-loader;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    animation-timing-function: linear;
}
        
@keyframes rotate-s-loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>

<template>
    <div>
        <img 
            src="/logo-big.svg" 
            class="hidden md:inline-block h-11-1/4"
            alt="culturebee logo"
        >
        <img 
            src="/logo-small.svg" 
            class="inline-block md:hidden h-11-1/4"
            alt="culturebee logo"
        >
    </div>
</template>

<script>
    export default {
        name: 'BaseLogo'
    }
</script>
<template>
    <div>
        <img 
            :src="isLight ? '/logo-big-light.svg' : '/logo-big.png'" 
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
        name: 'BaseLogo',

        props: {
            isLight: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
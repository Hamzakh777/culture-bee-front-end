<template>
    <div class="flex flex-row justify-between items-center p-4">
        <BaseLogo/>
        <nuxt-link
            class="btn-yellow"
            to="/register"
        >
            Sign up
        </nuxt-link>
    </div>
</template>

<script>
    import BaseLogo from '../../BaseComponents/BaseLogo';

    export default {
        name: 'LoginNav',

        components: {
            BaseLogo
        }
    }
</script>
<template>
    <div class="flex flex-row justify-between items-center p-4">
        <BaseLogo
            class="lg:opacity-0"
        />
        <nuxt-link
            class="btn-yellow"
            to="/login"
        >
            Sign in
        </nuxt-link>
    </div>
</template>

<script>
    import BaseLogo from '../../BaseComponents/BaseLogo';

    export default {
        name: 'CreateAccountNav',

        components: {
            BaseLogo
        }
    }
</script>
<template>
    <div class="flex flex-row justify-between items-center p-4">
        <BaseLogo/>
        <button
            class="btn-yellow"
        >
            Sign in
        </button>
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
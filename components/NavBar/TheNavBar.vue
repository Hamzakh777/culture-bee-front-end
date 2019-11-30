<template>
    <div
        class="container mx-auto pt-7-1/2"
    >
        <div class="flex justify-between items-center pb-6 border-b-3 border-gray-700">
            <img 
                src="../../assets/logo.png" 
                class="h-11-1/4"
                alt="culturebee logo"
            >
            <div>
                <div class="flex items-center">
                    <SearchButton/>
                    <button
                        class="btn-yellow h-12-1/2"
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </div>
        <div class="flex justify-between py-4">
            <a 
                href=""
                class="text-xs text-gray-900 font-bold tracking-widest"
                v-for="(filter, index) in filters"
                :key="index"
            >
                {{ filter }}
            </a>
        </div>
    </div>
</template>

<script>
    import SearchButton from './SearchButton';
    import filters from '~/mocks/NavBar/filters';

    export default {
        name: 'TheNavBar',

        components: {
            SearchButton
        },

        data: () => ({
            filters
        }),
    }
</script>
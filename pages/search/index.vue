<template>
    <div>
        <div class="py-16 bg-alabaster">
            <div class="flex justify-center container mx-auto">
                <search-filter />
            </div>
        </div>
    </div>
</template>

<script>
    import SearchFilter from '~/components/Search/SearchFilter';

    export default {
        components: {
            SearchFilter
        }    
    }
</script>
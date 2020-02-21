<template>
    <div>
        this is the search results 
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'SearchResults',

        computed: {
            ...mapState('search', ['category'])
        }
    }
</script>

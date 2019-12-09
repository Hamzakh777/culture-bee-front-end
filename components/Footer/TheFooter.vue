<template>
    <div>
        <footer-top />
        <footer-bottom />
    </div>
</template>

<script>
    import FooterTop from './FooterTop';
    import FooterBottom from './FooterBottom';

    export default {
        name: 'TheFooter',

        components: {
            FooterTop,
            FooterBottom
        }
    }
</script>
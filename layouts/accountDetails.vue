<template>
    <div>
        <the-nav-bar />
        <div class="container flex min-h-screen mx-auto pt-26 border-gray-800 border-t-2">
            <div class="w-54 px-6">
                <div class="section-title pb-10 mb-18 border-b-2 border-gray-800 text-13 leading-none">
                    account details
                </div>
                <div class="row">
                    <nuxt-link 
                        class="link"
                        to="/account/details"
                    >
                        Edit details
                    </nuxt-link>
                </div>
                <div class="row">
                    <nuxt-link 
                        class="link"
                        to="/account/details"
                    >
                        Account overview
                    </nuxt-link>
                </div>
                <div class="row">
                    <nuxt-link 
                        class="link"
                        to="/account/details"
                    >
                        Billing
                    </nuxt-link>
                </div>
            </div>
            <div class="flex-grow">
                <nuxt />
            </div>
        </div>
        <the-footer />
        <company-update-modal />
    </div>
</template>

<script>
    import TheNavBar from '@/components/NavBar/TheNavBar';
    import TheFooter from '@/components/Footer/TheFooter';
    import CompanyUpdateModal from '@/components/Companies/CompanyUpdateModal';

    export default {
        components: {
            TheNavBar,
            TheFooter,
            CompanyUpdateModal
        }
    }
</script>
<style scoped>
.row {
    @apply w-full py-6 border-b-2 border-gray-800;
}
.row:last-child {
    @apply border-none;
}
</style>

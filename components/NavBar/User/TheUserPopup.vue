<template>
    <div
        v-if="isOpen"
        class="absolute top-0 right-0 w-64 mt-24 bg-white"
        v-on-clickaway="toggle"
    >
        <div class="row flex items-center border-b-2 border-gray-800">
            <div class="flex justify-center items-center h-12-1/2 w-12-1/2 bg-yellow uppercase text-gray-800 font-bold text-center">
                {{ nameInitials }}
            </div>
            <div class="pl-5">
                <div class="font-D-Din font-bold text-gray-800 uppercase text-2xl">
                    {{ name }}
                </div>
                <nuxt-link 
                    class="link"
                    to="/profile"
                >
                    View profile
                </nuxt-link>
            </div>
        </div>
        <div class="row border-b-2 border-gray-800">
            <nuxt-link 
                class="link block mb-4"
                to="/profile"
            >
                Edit profile
            </nuxt-link>
            <nuxt-link 
                class="link block mb-4"
                to="/profile"
            >
                Account details
            </nuxt-link>
            <nuxt-link 
                class="link block"
                to="/profile"
            >
                Your jobs
            </nuxt-link>
        </div>
        <div class="row">
            <nuxt-link 
                class="link block"
                to="/profile"
            >
                Logout
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    import { mixin as clickaway } from 'vue-clickaway';
    import { mapGetters, mapState } from 'vuex';

    export default {
        name: 'TheUserPopup',

        mixins: [clickaway],

        computed: {
            ...mapGetters('user', ['nameInitials']),
            ...mapState('user', ['name'])
        },

        data() {
            return {
                isOpen: true
            }
        },

        created() {
            this.$bus.$on('open-navbar-user-popup', () => {
                this.toggle();
            })
        },

        methods: {
            toggle() {
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>
<style scoped>
.row {
    @apply p-5;
}
</style>
<template>
    <div class="flex flex-col items-center justify-start p-9 bg-white">
        <div class="flex items-center justify-center h-45 w-45 mb-9 p-5 border-2 border-black bg-white">
            <img src="/tala-logo.png">
        </div>
        <div class="w-45 pb-5 border-b-2 border-black text-center">
            <div class="base-title mb-4">
                FLISS MORSE
            </div>
            <div class="mb-6 font-bold text-sm text-black">
                We are Tala
            </div>
            <!-- location -->
            <div class="small-text flex items-center justify-center mb-5">
                <base-app-icon 
                    name="location-pin"
                    :class-list="['h-4', 'mr-1','fill-current', 'text-black']"
                />
                se17, london
            </div>
            <!-- category -->
            <div class="small-text">
                ethical fashion
            </div>  
        </div>
        <nuxt-link 
            class="primary-btn primary-btn--black w-45 mt-8 text-center"
            to="/profile"
        >
            Edit profile
        </nuxt-link>
    </div>
</template>

<script>
    import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';

    export default {
        name: 'ProfileDetailsCard',

        components: {
            BaseAppIcon
        }
    }
</script>

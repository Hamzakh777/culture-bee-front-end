<template>
    <div>
        <!-- hero section -->
        <div class="h-100-vh bg-gray-to-black">
            <div class="w-full px-4 bg-gray-to-black">
                <div class="container mx-auto flex flex-row justify-between items-center py-6">
                    <img 
                        class="h-10"
                        src="/logo-big-light.svg" 
                        alt="culturebee"
                    >
                    <button class="btn-yellow">
                        Gain early access
                    </button>
                </div>  
            </div>
        </div>
        <!-- mainling list sign up section -->
        <div class="py-18 px-4">
            <div class="container mx-auto max-w-5xl">
                <h2 class="section-title mb-10 text-center">
                    EARLY ACCESS & PRODUCT UPDATES
                </h2>
                <div class="flex flex-row items-stretch w-full max-w-3xl mx-auto mb-8">
                    <input 
                        class="input-text flex-grow h-auto mr-8 border-2 border-gray-700"
                        type="text"
                        placeholder="Email"
                    >
                    <button
                        class="btn-yellow w-45"
                    >
                        Sign up
                    </button>
                </div>
                <small class="block text-center">By signing up to CultureBee, you are agreeing to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></small>
            </div>
        </div>
        <!-- section - brand culture -->
        <div class="py-24 px-4 bg-gray-to-black text-white">
            <div class="container mx-auto">
                <div class="block mb-14 text-center text-lg font-bold text-white">Featuring brands like</div>
                <div class="flex justify-between items-center max-w-full"> 
                    <img 
                        v-for="(icon, index) in featuredBrands"
                        style="width: 10%"
                        :key="index"
                        :src="`/images/splash-page/${icon}`" 
                        alt=""
                    >
                </div>
                <div class="flex flex-row justify-between mt-32">
                    <div class="flex flex-col justify-center w-1/2 pr-8">
                        <h2 class="section-title section-title-light mb-16">See inside a brand’s culture without leaving your seat</h2>
                        <p class="block text-base font-normal max-w-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                    <div class="w-1/2">
                        <img 
                            class="w-full"
                            src="/images/splash-page/section-3-img.png" 
                            alt="culture bee profile employer"
                        >
                    </div>
                </div>
            </div>
        </div>
        <!-- section - job adverts -->
        <div class="py-32 px-4">
            <div class="container mx-auto">
                <div class="flex flex-row justify-between">
                    <div class="w-1/2">
                        <img 
                            class="w-full"
                            src="/images/splash-page/section-4-img.png" 
                            alt="culturebee job adverts"
                        >
                    </div>
                    <div class="flex flex-col justify-center w-1/2 pl-8">
                        <h2 class="section-title">
                            JOB ADVERTS WITH 100% TRANSPARENCY
                        </h2>
                        <p class="text-base font-normal max-w-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- section cta -->
        <div class="py-32 bg-black text-white">
            <div class="mb-12">
                <img 
                    class="w-full mx-auto max-w-5xl"
                    src="/images/splash-page/section-5-img.jpg" 
                    alt=""
                >
            </div>
            <div class="container flex flex-col items-center mx-auto">
                <div class="inline-block">
                    <div class="text-8 font-din-condensed font-bold">BECOME A PART OF THE PLATFORM</div>
                    <div class="mb-10 uppercase font-din-condensed font-bold">
                        <div class="leading-none" style="font-size: 100px">Join us on</div>
                        <div class="leading-none" style="font-size: 85px">culturebee</div>
                    </div>  
                    <input 
                        class="input-text w-full mb-6"
                        type="text"
                        placeholder="Email"
                    >
                    <button class="btn-yellow w-full mb-6">
                        Sign up
                    </button>
                    <small class="block text-center">We promise not to use your data in any way that we wouldn’t want ours to be used</small>
                </div>
            </div>
        </div>
        <!-- footer -->
        <FooterBottom/>
    </div>
</template>

<script>
    import FooterBottom from '~/components/Footer/FooterBottom';

    export default {
        layout: 'simple',

        components: {
            FooterBottom
        },

        data() {
            return {
                featuredBrands: [
                    'flacon-io.png',
                    'trustpilot.png',
                    'kahoot.png',
                    'veriteer.png',
                    'min-doktor.png',
                    'wolt.png'
                ]
            }
        },
    }
</script>

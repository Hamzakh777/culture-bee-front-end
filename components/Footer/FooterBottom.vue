<template>
    <div class="w-full h-auto lg:h-25 py-14 lg:py-0 bg-purple">
        <div class="max-w-md md:max-w-5xl w-full h-full mx-auto px-4 lg:px-0">
            <div class="flex flex-col md:flex-row md:justify-between md:items-center h-full">
                <div class="max-w-xs mx-auto w-full md:w-31-% mb-5 md:mb-0">
                    <div class="flex justify-between">
                        <a 
                            class="inline-block px-2 lg:px-0 text-white font-semibold text-xs"
                            v-for="(link, index) in footerLinks"
                            :key="index"
                            :href="link.href" 
                        >
                            {{ link.name }}
                        </a>
                    </div>
                </div>
                <div class="w-full mx-auto md:w-31-% text-center mb-5 md:mb-0">
                    <a 
                        class="inline-block relative h-7 w-7 mx-2 text-yellow hover:text-white"
                        v-for="(link, index) in socialLinks"
                        :key="index"
                        :href="link.href"
                    >
                        <BaseAppIcon
                            :name="link.icon"
                            :classList="['absolute', 'top-1/2', 'left-1/2', 'h-6', 'transform-center', 'fill-current']"
                        />
                    </a>
                </div>
                <div class="w-full mx-auto md:w-31-%">
                    <a 
                        href="mailto:nicola@culturebee.io"
                        class="btn-yellow block w-full md:w-45 mx-auto py-4 lg:py-2-1/2 text-center"
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';

    export default {
        name: 'FooterBottom',

        components: {
            BaseAppIcon
        },

        data() {
            return {
                footerLinks: [
                    {
                        name: 'Privacy Policy',
                        href: '/privacy-policy'
                    }
                ],
                socialLinks: [
                    {
                        icon: 'twitter',
                        href: 'https://twitter.com/TeamCultureBee'
                    },
                    {
                        icon: 'linkedin-letters',
                        href: 'https://www.linkedin.com/company/40887338/'
                    },
                    {
                        icon: 'facebook-logo',
                        href: 'https://www.facebook.com/CultureBee-2396002807322462/'
                    },
                    {
                        icon: 'instagram',
                        href: 'https://www.instagram.com/teamculturebee/'
                    }
                ]
            }
        },
    }
</script>
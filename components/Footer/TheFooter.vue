<template>
    <div>
        <div class="flex flex-col items-center justify-center w-full lg:h-168 py-14 bg-gray-to-black">
            <h2 class="section-title-light text-3xl mb:text-10-1/2 lg:text-13 mb-8 lg:mb-14">Sign up</h2>
            <div class="w-full max-w-md px-4 lg:px-0 lg:max-w-5xl">
                <div class="flex flex-col justify-center lg:flex-row lg:justify-between w-full lg:mb-14">
                    <input 
                        class="input-text w-full mb-5-1/2 lg:mb-0 lg:w-31-%"
                        placeholder="Name"
                        type="text"
                        v-model.trim="name"
                    >
                    <input 
                        class="input-text w-full mb-5-1/2 lg:mb-0 lg:w-31-%"
                        placeholder="Email"
                        type="email"
                        v-model.trim="email"
                    >
                    <input 
                        class="input-text w-full mb-5-1/2 lg:mb-0 lg:w-31-%"
                        placeholder="Password"
                        type="password"
                        v-model="password"
                    >
                </div>
                <button
                    class="btn-yellow block w-full lg:w-31-% h-12-1/2 mx-auto"
                >
                    Sign up
                </button>
            </div>
        </div>
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
                            href="/contact"
                            class="btn-yellow block w-full md:w-45 mx-auto py-4 lg:py-2-1/2 text-center"
                        >
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';

    export default {
        name: 'TheFooter',

        components: {
            BaseAppIcon
        },

        data: () => ({
            name: null,
            email: null,
            password: null,
            footerLinks: [
                {
                    name: 'About us',
                    href: '/about-us'
                },
                {
                    name: 'FAQs',
                    href: '/faqs'
                },
                {
                    name: 'Legal',
                    href: '/Legal'
                },
                {
                    name: 'Your data',
                    href: '/your-data'
                }
            ],
            socialLinks: [
                {
                    icon: 'twitter',
                    href: '#'
                },
                {
                    icon: 'linkedin-letters',
                    href: '#'
                },
                {
                    icon: 'facebook-logo',
                    href: '#'
                },
                {
                    icon: 'instagram',
                    href: '#'
                }
            ]
        }),
    }
</script>
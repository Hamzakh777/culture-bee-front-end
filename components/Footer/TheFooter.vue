<template>
    <div>
        <div class="flex flex-col items-center justify-center w-full h-168 bg-gray-to-black">
            <h2 class="section-title-light mb-14">Sign up</h2>
            <div class="w-full max-w-5xl">
                <div class="flex justify-between w-full mb-14">
                    <input 
                        class="input-text w-31-%"
                        placeholder="Name"
                        type="text"
                        v-model.trim="name"
                    >
                    <input 
                        class="input-text w-31-%"
                        placeholder="Email"
                        type="email"
                        v-model.trim="email"
                    >
                    <input 
                        class="input-text w-31-%"
                        placeholder="Password"
                        type="password"
                        v-model="password"
                    >
                </div>
                <button
                    class="btn-yellow block w-31-% h-12-1/2 mx-auto"
                >
                    Sign up
                </button>
            </div>
        </div>
        <div class="w-full h-25 bg-purple">
            <div class="max-w-5xl w-full h-full mx-auto">
                <div class="flex justify-between items-center h-full">
                    <div class="w-31-%">
                        <div class="flex justify-between">
                            <a 
                                class="text-white font-semibold text-xs"
                                v-for="(link, index) in footerLinks"
                                :key="index"
                                :href="link.href" 
                            >
                                {{ link.name }}
                            </a>
                        </div>
                    </div>
                    <div class="w-31-% text-center">
                        icons here
                    </div>
                    <div class="w-31-%">
                        <a 
                            href="/contact"
                            class="btn-yellow block w-45 mx-auto py-2-1/2 text-center"
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
    export default {
        name: 'TheFooter',

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
            ]
        }),
    }
</script>
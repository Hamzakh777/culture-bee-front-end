<template>
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
</template>

<script>
    export default {
        name: 'FooterTop',

        data() {
            return {
                name: null,
                email: null,
                password: null,
            }
        },
    }
</script>
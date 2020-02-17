<template>
	<div 
        class="fixed inset-0 z-50 md:flex bg-white overflow-y-auto"
    >
        <div 
            class="md:flex justify-center items-center md:w-1/2 bg-gray-to-black pb-5"
        >
            <login-nav class="md:hidden"/>
            <div class="w-full">
                <img
                    class="hidden md:block mb-4 md:mb-0 mx-auto h-10"
                    src="/logo-big-light.png"
                />
                <div>
                    <div class="px-4 text-white">
                        <div class="py-6 md:py-14 text-center">
                            <div class="mb-4">
                                <h4
                                    class="section-title section-title-light md:mb-6 uppercase"
                                >
                                    welcome back
                                </h4>
                                <p
                                    class="hidden md:block max-w-xs mx-auto font-bold text-5-3/4 text-center"
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:flex justify-center items-center relative md:w-1/2 px-4 md:px-8">
            <login-nav class="hidden md:flex absolute top-0 inset-x-0"/>
            <div class="w-full max-w-md">
				<login-form/>
            </div>
        </div>
    </div>
</template>

<script>
import LoginNav from '~/components/Account/Login/LoginNav';
import LoginForm from '~/components/Account/Login/LoginForm';

export default {

	components: {
		LoginNav,
		LoginForm
	},

	layout: 'simple'
};
</script>

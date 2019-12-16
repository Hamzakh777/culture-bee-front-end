<template>
    <div class="py-6">
        <div class="flex items-end mb-6">
            <div class="flex justify-center items-center p-3 w-20 h-20 border-2 border-gray-700 bg-yellow">
                <img 
                    src="/images/global/icons/smile-face.png"
                >
            </div>
            <label class="relative ml-4 font-medium text-gray-800 cursor-pointer underline">
                <input
                    class="absolute h-0 w-0 opacity-0" 
                    type="file"
                >
                Upload your profile photo
            </label>
        </div>
        <input 
            class="input-text w-full mb-6"
            type="text"
            placeholder="Name"
        >
        <steps-nav/>
    </div>
</template>

<script>
    import StepsNav from './StepsNav';

    export default {
        name: 'StepProfileDetails',

        components: {
            StepsNav
        }
    }
</script>
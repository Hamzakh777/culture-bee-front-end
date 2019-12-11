<template>
    <div class="py-6 mt-6">  
        <div class="section-title mb-5 text-center">who are you?</div> 
        <button
            class="primary-btn block mb-4 py-4 w-full bg-gray-to-black text-white text-3-1/2"
            v-for="(type, index) in userTypes"
            :key="index"
            @click.prevent="setType(type.value)"
        >
            {{ type.title }}
        </button>
        <button 
            class="primary-btn block py-4 w-full"
            @click.prevent="$emit('next')"
        >
            next
        </button>
    </div>
</template>

<script>
    export default {
        name: 'StepUserType',

        data() {
            return {
                userTypes: [
                    {
                        title: `I'm a job seeker`,
                        value: 'job-seeker'
                    },
                    {
                        title: `I'm an employer`,
                        value: 'employer'
                    },
                ]
            }
        }
    }
</script>
<template>
    <div class="container mx-auto py-16 pl-90">
        <a 
            v-for="(link, index) in links"
            :key="index"
            class="sub-title sub-title--no-underline mr-16"
            href="#" 
            v-scroll-to="link.sectionId"
        >
            {{ link.name }}
        </a>
    </div>
</template>

<script>
    export default {
        name: 'EmployerSectionsLinks',

        data() {
            return {
                links: [
                    {
                        sectionId: '#vision',
                        name: 'Our vision'
                    },
                    {
                        sectionId: '#updates',
                        name: 'Updates'
                    },
                    {
                        sectionId: '#why-us',
                        name: 'Why us?'
                    },
                    {
                        sectionId: '#benefits',
                        name: 'Benefits'
                    },
                    {
                        sectionId: '#jobs',
                        name: 'Jobs'
                    },
                ]
            }
        },
    }
</script>

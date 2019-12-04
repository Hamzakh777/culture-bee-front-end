<template>
    <div class="w-full mb-6">
        <div 
            class="flex items-center justify-between w-full h-12 cursor-pointer"
            @click="toggle"
        >
            <span class="text-base font-semibold">Filters</span>
            <div 
                class="h-2 w-2 border-t-2 border-r-2 border-white transition-all transition-100 transition-ease-in-out"
                :style="isOpen ? 'transform: rotate(-45deg); margin-bottom: -8px' : 'transform: rotate(135deg)'"
            ></div>
        </div>
        <div
            v-if="isOpen"
            class="pt-4"
        >
            <input 
                class="w-full text-base mb-7-1/2 py-3-1/2 border-b-2 border-white bg-transparent"
                placeholder="Type to search"
                type="text"
            >
            <div
                class="mb-7-1/2"
                v-for="(group, index) in filtersGroups"
                :key="index"
            >
                <h4 class="block mb-4 text-xl uppercase font-din-condensed font-bold">{{group.groupName}}</h4>
                <span
                    class="block mb-2 text-3-1/2 font-semibold"
                    v-for="(filter, index2) in group.filters"
                    :key="index2"
                >
                    {{filter}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavFiltersDropdown',

        data() {
            return {
                isOpen: false,
                filtersGroups: [
                    {
                        groupName: 'INDUSTRIES',
                        filters: ['Tech', 'Health & wellness', 'Ecommerce', 'Fashion']
                    },
                    {
                        groupName: 'EMPLOYER FEATURES',
                        filters: ['Flexible hours', 'Duvet days', '4 day week', 'Remote working']
                    },
                    {
                        groupName: 'LOCATIONS',
                        filters: ['London', 'Manchester', 'Birmingham', 'Liverpool']
                    },
                ]
            }
        },

        methods: {
            toggle() {
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>
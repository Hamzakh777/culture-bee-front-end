<template>
    <div 
        class="absolute h-10 w-10 md:h-19 md:w-19 bg-black text-white"
    >
        <BaseAppIcon
            name="like"
            :classList="['absolute', 'top-1/2', 'left-1/2', 'h-5', 'md:h-8', 'transform-center', 'stroke-current', 'stroke-w-2', 'hover:fill-light-white', 'cursor-pointer'].concat(isLiked ? ['fill-white'] : [])"
            @click.native="$emit('click')"
        />
    </div>
</template>

<script>
    import BaseAppIcon from '~/components/BaseComponents/BaseAppIcon';

    export default {
        name: 'BaseLikeIcon',

        components: {
            BaseAppIcon
        },

        props: {
            isLiked: {
                type: Boolean,
                required: true
            }
        }
    }
</script>
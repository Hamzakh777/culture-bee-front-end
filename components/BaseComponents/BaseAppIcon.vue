<template>
    <svgicon
        @click="$emit('click')"
        :class="classList"
        :name="name"
    >
    </svgicon>
</template>

<script>
import '../Icons';

export default {
    name: 'BaseAppIcon',

    props: {
        name: {
            type: String,
            required: true,
        },
        classList: {
            type: Array,
            required: false
        }
    },
};
</script>

<style>
.AppIcon {
  display: inline-block;
  vertical-align: none;
}

.AppIcon--fill {
  fill: none;
}
</style>
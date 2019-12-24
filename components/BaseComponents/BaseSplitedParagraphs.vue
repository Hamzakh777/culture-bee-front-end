<template>
    <div>
        <p
			v-for="(paragraph, index) in splited"
			:key="index"
            class="mb-4"
			:class="{
				'text-5-1/2 text-blue-400 font-bold': index === 0,
				'text-base text-blue-800 font-medium': index !== 0
			}"
		>
			{{ paragraph }}
		</p>
    </div>
</template>

<script>
    export default {
        name: 'BaseSplitedParagraphs',

        props: {
            text: {
                type: String,
                required: true
            }
        },

        computed: {
            // split string by detecting line brake
            splited() {
                return this.text.match(/[^\r\n]+/g);
            }
        }
    }
</script>

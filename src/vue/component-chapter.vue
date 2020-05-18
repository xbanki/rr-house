<!-- eslint-disable vue/no-v-html -->

<template>
	<div v-bind:id="`chapter-${chapterData.htmlId}`"
		class="component-chapter p-4 w-full"
		v-html="chapterData.content">
		{{ chapterData.title }}
	</div>
</template>

<script lang="ts">
	export default {
		name: 'component-chapter',
		props: {

            /**
             * Chapter data. see `@/lib/chapter.ts` file for object property details.
             */
			chapterData: {
				type: Object,
				default: null,
				required: true
			}
		}
	};
</script>

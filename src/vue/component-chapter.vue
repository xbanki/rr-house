<template>
	<div class="component-chapter"/>
</template>

<script lang="ts">
	export default {
		name: 'component-chapter',
		props: {

            /**
             * Chapter data. see `root.vue` component for object property details.
             */
			chapterData: {
				type: Object,
				default: null,
				required: true
			}
		}
	};
</script>

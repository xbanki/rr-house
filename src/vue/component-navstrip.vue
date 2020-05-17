<template>
	<div class="component-navstrip">
		<!-- Component Navstrip -->
	</div>
</template>

<script lang="ts">
    export default {
        name: 'component-navstrip',
        props: {
			chapters: {
				type: Array,
				default: null,
				required: true
			}
		}
    };
</script>

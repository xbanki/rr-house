<template>
	<div class="bg-red-600 component-hero w-full">
		<div class="fixed hero-header">
			<img class="pl-6 pt-6 w-16"
				src="../svg/logo-symbol-black.svg">
		</div>
	</div>
</template>

<style lang="scss" scoped>
    .component-hero {
        clip: rect(0, auto, auto, 0);
        overflow: hidden;
        height: 40rem;
    }
</style>

<script lang="ts">
	export default {
		name: 'component-hero'
	};
</script>

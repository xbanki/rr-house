<template>
	<div class="bg-red-600 component-hero relative w-full z-20">
		<div class="absolute h-full hero-inner w-full">
			<div class="fixed hero-header">
				<img class="pl-6 pt-6 w-16"
					src="../svg/logo-symbol-white.svg">
			</div>
			<img v-bind:src="this.$data.image">
		</div>
	</div>
</template>

<style lang="scss" scoped>
    .component-hero {
        height: 40rem;

        .hero-inner {
            clip: rect(0, auto, auto, 0);
            overflow: hidden;
        }
    }
</style>

<script lang="ts">
    import heroImage from '@/img/hero-img-1.jpg';

	export default {
        name: 'component-hero',
        data: (): object => {
           const data = {
               image: heroImage
           };

           return data;
        }
	};
</script>

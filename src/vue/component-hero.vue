<template>
	<div class="bg-blue-600 component-hero relative w-full z-20">
		<div class="absolute h-full hero-inner w-full">
			<div class="fixed hero-header z-10">
				<img class="pl-6 pt-6 w-16"
					src="../svg/logo-symbol-white.svg">
			</div>
			<div class="absolute content-center flex flex-col h-full items-center justify-center text-center w-full z-10">
				<div>
					<h1 class="heading text-4xl text-gray-100">
						Professionaalne projekteerimine & ehitus
					</h1>
					<p class="text-gray-200 text-lg">
						Meil on kokku pea 18 aastat kogemust ehitus alal. Töötame professionaalselt, hoides üleval meie
						<br>
						kõrgeid ja kvaliteetseid standardeid kõigi nõudnikumate klientide ja projektidega.
					</p>
					<div class="pt-4">
						<button class="heading hero-button mr-2">
							Huvitatud? Räägime
						</button>
						<button class="heading hero-button ml-2">
							Loe Lähemalt
						</button>
					</div>
				</div>
			</div>
			<img class="hero-image"
				v-bind:src="this.$data.image">
		</div>
	</div>
</template>

<style lang="scss" scoped>
    .component-hero {
        height: 40rem;

        .hero-inner {
            clip: rect(0, auto, auto, 0);
            overflow: hidden;

            .hero-image {
                filter: blur(3px) brightness(75%);
                height: 56rem;
                width: 100%;
            }
        }
    }

    button {
        &.hero-button {
            @apply border-3 border-teal-400 duration-100 ease-in-out px-4 py-2 rounded-none text-base text-teal-400 transition;

            &:hover {
                @apply border-teal-200 text-teal-200;
            }

            &:focus, &:active {
                @apply border-teal-300 text-teal-300 rounded-none;
                outline: none !important;
            }
        }
    }
</style>

<script lang="ts">
    import heroImage from '@/img/hero-img-1.jpg';

    const heroTextPhrases: Array<string> = ['Firmadele', 'Isikutele', 'Sinule'];

	export default {
        name: 'component-hero',
        data: (): object => {
           const data = {
               image: heroImage,
               phrases: heroTextPhrases
           };

           return data;
        }
	};
</script>

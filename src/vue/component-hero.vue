<template>
	<div class="bg-blue-600 component-hero relative w-full z-20">
		<div class="absolute h-full hero-inner w-full">
			<div class="absolute filter h-full w-full z-10"/>
			<div class="fixed hero-header z-10">
				<img class="pl-6 pt-6 w-16"
					src="../svg/logo-symbol-white.svg">
			</div>
			<div class="absolute content-center flex flex-col h-full items-center justify-center text-center w-full z-10">
				<div>
					<h1 class="heading text-4xl text-gray-100">
						Professionaalne projekteerimine & ehitus
					</h1>
					<p class="text-gray-100 text-lg">
						Meil on kokku pea 18 aastat kogemust ehitus alal. Töötame professionaalselt, hoides üleval meie
						<br>
						kõrgeid ja kvaliteetseid standardeid kõigi nõudnikumate klientide ja projektide ees.
					</p>
					<div class="bg-gray-700 h-1 mt-2 mx-auto rounded-full w-8"/>
					<div class="pt-4">
						<button class="heading hero-button mr-2"
							v-on:click="scrollToChapter('foo')">
							Huvitatud? Räägime
						</button>
						<button class="heading hero-button ml-2"
							v-on:click="scrollToChapter('bar')">
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

        .filter {
            background: rgba(3, 253, 182, 0.6);
        }

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
        },
        methods: {
            scrollToChapter(chapterName: string): void {
                return console.error(chapterName);
            }
        }
	};
</script>

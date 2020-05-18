<template>
	<div class="bg-gray-100 h-full min-h-full min-w-full overflow-hidden relative root w-full z-10">
		<div class="absolute bg-white content-wrapper h-full lg:w-256 mx-auto relative shadow-md top-0 xl:w-256">
			<div class="fixed navbar z-10">
				<img class="pl-6 pt-6 w-16"
					src="../svg/logo-symbol-black.svg">
			</div>
			<component-hero/>
			<div class="h-full items-wrapper w-full">
				<div class="content-items float-left h-full lg:w-extra w-full xl:w-extra">
					<component-chapter v-for="chapter of this.$data.chapters"
						v-bind:key="chapter.internalId"
						v-bind:chapterData="chapter"/>
				</div>
				<div class="float-right h-full hidden lg:block my-4 nav-track w-72 xl:block">
					<component-navstrip v-bind:chapters="this.$data.chapters"/>
				</div>
			</div>
			<component-footer/>
		</div>
		<!--<div class="absolute bg-brand-500 top-0 top-color-block w-full"/> //-->
	</div>
</template>

<style lang="scss">
	@import "tailwindcss/base";
	@import "tailwindcss/components";
    @import "tailwindcss/utilities";

    body, html {
        scroll-behavior: smooth;
        height: 100%;
        width: 100%;
    }

    .top-color-block {
        height: 40rem;
    }

    @import "../scss/index.scss";
</style>

<script lang="ts">
    import componentHero from '@/vue/component-hero.vue';
    import componentFooter from '@/vue/component-footer.vue';
    import componentChapter from '@/vue/component-chapter.vue';
    import componentNavstrip from '@/vue/component-navstrip.vue';

    import aboutContent from '@/html/chapter-about.html';
    import servicesContent from '@/html/chapter-services.html';
    import concactContent from '@/html/chapter-contact.html';

    import { Chapter } from '@/lib/chapter.ts';

	export default {
		name: 'root',
		components: {
            componentChapter,
            componentFooter,
            componentHero,
            componentNavstrip
        },
        data: (): object => {
            const chapters: Array<Chapter> = [
                {
                    chapterId: 1,
                    content: aboutContent,
                    htmlId: 'about',
                    title: ' Meie Ettevõttest'
                },
                {
                    chapterId: 2,
                    content: servicesContent,
                    htmlId: 'services',
                    title: 'Meie Teenused'
                },
                {
                    // Hoonete remont ja renoveerimine
                    chapterId: 3,
                    content: concactContent,
                    htmlId: 'contact',
                    title: 'Võta Ühendust'
                }
            ];

            return {
                chapters
            };
        }
	};
</script>

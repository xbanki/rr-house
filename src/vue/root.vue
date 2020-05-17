<template>
	<div class="bg-gray-100 h-full min-h-full min-w-full overflow-hidden relative root w-full z-10">
		<div class="absolute bg-white content-wrapper h-full lg:w-4/5 mx-auto relative shadow-md top-0 xl:w-3/5">
			<div class="fixed navbar z-10">
				<img class="pl-6 pt-6 w-16"
					src="../svg/logo-symbol-black.svg">
			</div>
			<component-hero/>
			<div class="h-full items-wrapper w-full">
				<div class="content-items float-left h-full w-8/12">
					<component-chapter v-for="chapter of this.$data.chapters"
						v-bind:key="chapter.internalId"
						v-bind:chapterData="chapter"/>
				</div>
				<div class="float-right h-full hidden lg:block nav-track w-4/12 xl:block">
					<component-navstrip v-bind:chapters="this.$data.chapters"/>
				</div>
			</div>
			<component-footer/>
		</div>
		<div class="absolute bg-brand-500 top-0 top-color-block w-full"/>
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

    /**
     * Representation of a chapter object.
     * 
     * Uses Vue methods which expose risks
     * of XSS, therefore using user-generated content inside of chapters is strongly
     * discouraged.
     */
    interface Chapter {

        /**
         * Internal ID. Used for Vue component tracking.
         */
        chapterId: number;

        /**
         * Title of chapter which will be rendered at the top of the component,
         * along with being passed in to the navbar 
         */
        title: string;

        /**
         * HTML identifier which will be used for meta data that will be sent to the
         * navigation strip component.
         */
        htmlId: string;

        /**
         * `optional` - HTML content which to render inside of chapter component.
         * WARNING: Big XSS risk if user-inputed data is used.
         */
        content?: string;
    }

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
                    title: ' Meie Ettevõttest',
                    htmlId: 'about'
                },
                {
                    chapterId: 2,
                    title: 'Meie Teenused',
                    htmlId: 'services'
                },
                {
                    chapterId: 3,
                    content: 'Hoonete remont ja renoveerimine',
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

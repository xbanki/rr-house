<template>
	<div class="absolute bg-gray-100 h-full min-h-full min-w-full overflow-hidden root w-full">
		<div class="bg-white content-wrapper h-full lg:shadow-sm lg:w-4/5 mx-auto xl:shadow-sm xl:w-3/5">
			<component-hero/>
			<div class="h-full items-wrapper w-full">
				<div class="content-items float-left h-full w-8/12">
					<component-chapter-about/>
					<component-chapter-services/>
					<component-chapter-contact/>
				</div>
				<div class="float-right h-full nav-track w-4/12">
					<component-navstrip/>
				</div>
			</div>
			<component-footer/>
		</div>
	</div>
</template>

<style lang="scss">
	@import "tailwindcss/base";
	@import "tailwindcss/components";
	@import "tailwindcss/utilities";
</style>

<script lang="ts">
    import componentHero from '@/vue/component-hero.vue';
    import componentFooter from '@/vue/component-footer.vue';
    import componentNavstrip from '@/vue/component-navstrip.vue';
    import componentChapterAbout from '@/vue/component-chapter-about.vue';
    import componentChapterContact from '@/vue/component-chapter-contact.vue';
    import componentChapterServices from '@/vue/component-chapter-services.vue';

	export default {
		name: 'root',
		components: {
            componentChapterAbout,
            componentChapterContact,
            componentChapterServices,
            componentFooter,
            componentHero,
            componentNavstrip
		}
	};
</script>

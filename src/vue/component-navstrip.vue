<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/max-len -->
<!-- eslint-disable max-len -->

<template>
	<div class="component-navstrip">
		<div class="w-full">
			<div v-for="chapter of chapters"
				v-bind:key="chapter.internalId"
				class="block chapter-item cursor-pointer duration-100 group h-16 select-none transition-all w-full">
				<div class="float-left h-16 pl-12 py-6 w-16">
					<div class="border-b-8 border-l-8 border-t-8 border-transparent h-0 hidden selected-arrow w-0"/>
				</div>
				<div class="duration-100 float-left group-focus:text-brand-600 group-hover:text-brand-400 h-16 heading leading-loose p-2 text-2xl text-gray-700 w-56">
					{{ chapter.title }}
				</div>
				<svg class="float-right h-16 pr-8 py-4 w-16"
					v-html="chapter.icon"/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
    .chapter-item {
        div.selected-arrow {
            border-left-color: #03fdb6;
            @apply duration-100 transition-all;
        }

        &.active-chaper {
            div.selected-arrow {
                @apply block;
            }

            @apply bg-red-500;
        }
    }
</style>

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

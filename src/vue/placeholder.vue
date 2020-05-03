<template>
	<div class="content-center flex flex-col h-full items-center justify-center placeholder text-center w-full">
		<h1 class="font-semibold heading lg:text-5xl md:text-5xl text-4xl text-gray-700 xl:text-5xl">
			Vabandame!
		</h1>
		<p class="lg:text-lg md:text-lg text-gray-600 text-sm xl:text-lg">
			Meie koduleht on hetkel uuendamisel.
		</p>
		<p class="lg:text-lg md:text-lg text-gray-600 text-sm xl:text-lg">
			Rohkema informatsiooni jaoks, saadke meile meil aadressile: <a href="mailto: info@rrhouse.ee"
                class="mail-link">
                info@rrhouse.ee
            </a>
		</p>
		<img src="../svg/logo-symbol-gray.svg"
			class="h-10 my-4 w-10">
	</div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
	@import "tailwindcss/base";
	@import "tailwindcss/components";
	@import "tailwindcss/utilities";

    body, html {
         height: 100%;
        width: 100%;
    }

    .heading {
        font-family: 'Poppins', sans-serif;
    }

    .mail-link {
        transition: all linear 0.08s;

        &:hover {
            color: #cbd5e0;
        }
    }
</style>

<script lang="ts">
    export default {
        name: 'placeholder'
    };
</script>

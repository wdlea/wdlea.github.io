<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import Navbar from "$lib/navbar/Navbar.svelte";
	import Wave from "$lib/assets/wave.svelte";
	import Footer from "./Footer.svelte";
	import WavesBackground from "$lib/assets/WavesBackground.mp4";
	import WaveDown from "$lib/assets/wave_down.svelte";
	import { fade } from "svelte/transition";
	import { page } from "$app/state";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen relative">
	<section class="p-10 h-[40svh] relative overflow-clip text-sky-50">
		<h1 class="font-serif text-4xl sm:text-6xl font-bold">William Leader</h1>
		<span class="text-xl ml-3">Websites done better.</span>
	</section>

	<div class="mx-0">
		<div class="*:min-w-full drop-shadow -mb-5 -z-10 overflow-clip">
			<Wave />
		</div>

		<div class="bg-sky-50 pb-20">
			<Navbar />

			{#key page.url}
				<div
					class="mb-10 overflow-x-clip"
					transition:fade={{ duration: 100 }}
				>
					{@render children?.()}
				</div>
			{/key}
		</div>

		<div
			class="*:min-w-full drop-shadow *:object-top *:-z-10 overflow-clip"
		>
			<WaveDown />
		</div>
	</div>

	<Footer />
</div>

<div class="fixed min-h-screen min-w-screen object-cover -z-50 pointer-events-none inset-0">
	<video
		src={WavesBackground}
		muted
		autoplay
		playsinline
		loop
		class="object-cover object-left w-full h-full"
	></video>
</div>

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
	<section class="p-10 pb-0 relative overflow-clip text-blue-50">
		<h1 class="font-serif text-4xl font-bold">William Leader</h1>
		<span class="text-xl ml-3">Websites done better.</span>
	</section>

	<div class="mx-0">
		<div class="*:min-w-full drop-shadow -mb-5 -z-10 overflow-clip">
			<Wave />
		</div>

		<div class="bg-blue-50 py-20">
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

	<video
		src={WavesBackground}
		muted
		autoplay
		playsinline
		loop
		class="fixed min-h-screen min-w-screen object-cover -z-50 pointer-events-none object-left -top-28"
	></video>
</div>
<Footer />

<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import Navbar from "$lib/navbar/Navbar.svelte";
	import Wave from "$lib/assets/wave.svelte";
	import Footer from "./Footer.svelte";
	import WaveDown from "$lib/assets/wave_down.svelte";
	import { fade, fly } from "svelte/transition";
	import { page } from "$app/state";
	import { onMount } from "svelte";
	import { afterNavigate, onNavigate } from "$app/navigation";
	import LaunchAnimation from "./LaunchAnimation.svelte";
	import prevScrollPosition from "$lib/PrevScrollPosition";
	import { MediaQuery } from "svelte/reactivity";

	let { children } = $props();

	let firstLoad = $state(false);
	let hasJS = $state(false);

	let scrollPosition = $state(0);

	onMount(() => {
		hasJS = true; // because to run this, js must be enabled

		let id = setInterval(() => {
			prevScrollPosition.set(scrollPosition);
			console.log("POS", $prevScrollPosition);
		}, 200);

		return () => {
			clearInterval(id);
		};
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	afterNavigate(({ from }) => {
		scrollTo({ top: $prevScrollPosition });

		firstLoad = from == null;
	});

	let noMotion = new MediaQuery("(prefers-reduced-motion: reduce)", false);

	let showAnimation = $derived(firstLoad && hasJS && !noMotion.current);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<svelte:window bind:scrollY={scrollPosition} />

{#if showAnimation}
	<LaunchAnimation bind:showAnimation />
{:else}
	<div class={`min-h-[100svh] w-full relative`}>
		<section class="p-10 h-[40svh] relative overflow-clip text-sky-50">
			<h1 class="font-serif text-4xl sm:text-6xl font-bold">
				William Leader
			</h1>
			<span class="text-xl ml-3">Websites done better.</span>
		</section>

		<div class="*:min-w-full drop-shadow -mb-5 -z-10 overflow-clip">
			<Wave />
		</div>

		<div class="bg-sky-50 pb-20 max-w-screen overflow-x-clip">
			<Navbar />
			{#key page.url}
				<div class="relative mb-10 overflow-x-clip">
					{@render children?.()}
				</div>
			{/key}
		</div>

		<div
			class="*:min-w-full drop-shadow *:object-top *:-z-10 overflow-clip"
		>
			<WaveDown />
		</div>

		<Footer />
	</div>
{/if}

<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import Navbar from "$lib/navbar/Navbar.svelte";
	import Wave from "$lib/assets/wave.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<section class="p-10 pb-0 text-blue-950 relative bg-blue-100 overflow-clip">
	<h1 class="font-serif text-4xl font-bold">William Leader</h1>
	<span class="text-xl">Websites done better.</span>

	<img class="-mx-10 min-w-screen drop-shadow-2xl -z-10" src={Wave} alt="" />
</section>
<Navbar />
<div class="min-h-screen bg-blue-50">
	{@render children?.()}
</div>

<script lang="ts">
    import { page } from "$app/state";
    import pages from "$lib/pages";
    import prevScrollPosition from "$lib/PrevScrollPosition";
    import Highlight from "./Highlight.svelte";
    import NavLink from "./NavLink.svelte";

    let pageIndex = $derived(
        pages.findIndex((p) => p.path == page.url.pathname),
    );

    let scrollPosition = $state(0);
</script>

<svelte:head>
    <title>William Leader - {pages[pageIndex].title ?? "404"}</title>
</svelte:head>

<svelte:window bind:scrollY={scrollPosition} />

<div
    class="bg-sky-100 shadow-inner w-fit mx-auto rounded-full p-2 my-3 md:mt-0 sticky"
>
    <nav
        class="w-fit rounded-full flex flex-row items-center justify-stretch text-center relative z-0"
    >
        <Highlight index={Math.max(pageIndex, 0)} totalPages={pages.length} />

        {#each pages as { title: name, path: link }}
            <NavLink
                {name}
                {link}
                onclick={() => {
                    prevScrollPosition.set(scrollPosition);
                }}
            />
        {/each}
    </nav>
</div>

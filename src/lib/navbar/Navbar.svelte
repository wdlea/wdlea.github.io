<script lang="ts">
    import { page } from "$app/state";
    import pages from "$lib/pages";
    import Highlight from "./Highlight.svelte";
    import NavLink from "./NavLink.svelte";
</script>

<div
    class="bg-blue-100 shadow-inner w-fit mx-auto rounded-full p-2 my-3 md:mt-0 sticky"
>
    <nav class="w-fit rounded-full flex flex-row items-center justify-stretch text-center relative z-0">
        <Highlight
            index={Math.max(pages.findIndex((p) => p.path == page.url.pathname), 0)}
            totalPages={pages.length}
        />

        {#each pages as { title: name, path: link }}
            <NavLink {name} {link} />
        {/each}
    </nav>
</div>

<script lang="ts">
    import { page } from "$app/state";
    import pages from "$lib/pages";
    import Highlight from "./Highlight.svelte";
    import NavLink from "./NavLink.svelte";
</script>

<div
    class="bg-blue-100 dark:bg-blue-700 shadow-inner w-fit mx-auto rounded-full p-2 my-3 md:mt-0 sticky"
>
    <nav class="w-fit rounded-full flex flex-row justify-stretch relative z-0">
        <Highlight
            index={pages.findIndex((p) => p.path == page.url.pathname)}
            totalPages={pages.length}
        />

        {#each pages as { title: name, path: link }}
            <NavLink {name} {link} />
        {/each}
    </nav>
</div>

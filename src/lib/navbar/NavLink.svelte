<script lang="ts">
    import { page } from "$app/state";

    let { link, name }: { link: string; name: string } = $props();
    let is_current = $derived(page.url.pathname == link);
</script>

<a
    class={`exclude-a-styling no-underline p-3 h-full basis-0 min-w-28 text-center rounded-full translate-x-0 motion-safe:transition-all delay-200 duration-200 ${is_current ? "text-sky-50 motion-reduce:shadow motion-reduce:bg-sky-500 font-bold" : "text-sky-950"}`}
    href={link}
    data-sveltekit-preload-data
>
    {name}
</a>

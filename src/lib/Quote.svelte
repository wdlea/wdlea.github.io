<script lang="ts">
    let { source, children, lightMark }: { source?: string | undefined; children: any; lightMark?: boolean | undefined } =
        $props();
</script>

<div class="relative z-0 my-3 text-left">
    <div class="italic mx-3">
        {@render children?.()}
    </div>
    <div class={`absolute -left-1 -top-3 text-9xl ${lightMark ? "text-sky-200" : "text-sky-400"} font-serif -z-10 *:size-20 size-0`}>
        "
    </div>

    <p class="!m-0 font-bold">{source}</p>
</div>

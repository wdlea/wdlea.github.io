<script lang="ts">
    let {
        title,
        children,
        blueish
    }: { title?: string | undefined; children?: any | undefined, blueish?: boolean | undefined } = $props();
</script>

<section class={`p-10 ${blueish ? "text-sky-50 bg-sky-500 shadow-inner" : ""}`}>
    {#if title}
        <h2 class="font-serif text-xl font-black mt-5 mb-2 -ml-5">{title}</h2>
    {/if}
    {#if children}
        <div class="text-justify">
            {@render children()}
        </div>
    {/if}
</section>

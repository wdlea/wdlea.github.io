<script lang="ts">
    let {
        title,
        children,
    }: { title?: string | undefined; children?: any | undefined } = $props();
</script>

<section class="mx-10">
    {#if title}
        <h2 class="font-serif text-xl font-bold mt-5 -ml-5">{title}</h2>
    {/if}
    {#if children}
        <div class="text-justify">
            {@render children()}
        </div>
    {/if}
</section>

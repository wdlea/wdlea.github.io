<script lang="ts">
    let {
        title,
        children,
    }: { title?: string | undefined; children?: any | undefined } = $props();
</script>

<section>
    {#if title}
        <h2 class="font-serif text-2xl font-bold ml-5 mt-5">{title}</h2>
    {/if}
    <div class="ml-10">
        {#if children}
            {@render children()}
        {/if}
    </div>
</section>

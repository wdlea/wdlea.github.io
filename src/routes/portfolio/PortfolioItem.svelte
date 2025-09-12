<script lang="ts">
    import EmptyCard from "$lib/EmptyCard.svelte";

    let {
        title,
        children,
        img,
        href,
    }: {
        title: string;
        children?: any | undefined;
        img: string;
        href?: string | undefined;
    } = $props();
</script>

<EmptyCard>
    <div class="grid grid-cols-1">
        <img src={img} class="col-start-1" alt=""/>
        <h3 class="text-xl font-bold mt-5">{title}</h3>

        {@render children?.()}

        {#if href}
            <a
                {href}
                class="bg-blue-500 text-blue-50 p-3 rounded shadow hover:shadow-inner text-center font-bold"
                >Check it Out</a
            >
        {/if}
    </div>
</EmptyCard>

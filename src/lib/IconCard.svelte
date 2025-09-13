<script lang="ts">
    import EmptyCard from "./EmptyCard.svelte";

    let {
        icon,
        title,
        children,
    }: {
        icon?: any | undefined;
        title: string;
        children?: any | undefined;
    } = $props();
</script>

<EmptyCard>
    {#if icon}
        <div
            class="*:h-14 *:w-14 z-0 *:-mb-14 *:-ml-2 *:!fill-blue-100"
        >
            {@render icon()}
        </div>
    {/if}

    <div class="p-5">
        <h3 class="z-10 font-bold text-xl">{title}</h3>

        {@render children?.()}
    </div>
</EmptyCard>

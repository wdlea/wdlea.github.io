<script lang="ts">
    import EmptyCard from "$lib/EmptyCard.svelte";
    import Button from "$lib/Button.svelte";

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
    <div
        class="grid grid-cols-2 md:grid-cols-[1fr_1fr_2fr] grid-rows-[1fr] gap-5 auto-rows-min"
    >
        <img
            src={img}
            class="col-start-1 md:col-start-3 col-span-full row-span-3 row-end-auto rounded place-self-center"
            alt=""
        />

        <div class="col-start-1 md:row-start-1 col-span-2 justify-self-stretch">
            <h3 class="text-xl font-bold mt-5">{title}</h3>

            {@render children?.()}
        </div>

        <div
            class="col-span-2 row-span-2 *:col-span-2 grid grid-cols-subgrid gap-2"
        >
            {#if href}
                <Button {href}>Check it Out</Button>
            {/if}
            <div class="hidden lg:grid grid-cols-subgrid *:col-span-1 rounded-full shadow-inner p-2 *:rounded-full">
                <span
                    class="place-self-center font-bold"
                    >Want something like this?
                </span>

                <Button href="/contact">Get in Touch</Button>
            </div>
        </div>
    </div>
</EmptyCard>

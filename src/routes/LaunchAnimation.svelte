<script lang="ts">
    import { onMount } from "svelte";
    import { quadInOut } from "svelte/easing";
    import { MediaQuery } from "svelte/reactivity";
    import { fade, fly } from "svelte/transition";

    let { showAnimation = $bindable() } = $props();

    const LINES = ["Let's", "Build", "Your", "Digital", "Legacy."];

    const INITIAL_DELAY = 200;
    const WORD_DELAY = 700;
    const FINAL_DELAY = 1000;

    const ANIMATION_DURATION =
        LINES.length * WORD_DELAY + INITIAL_DELAY + FINAL_DELAY;

    let slide_settings: { duration: number; x: number } = {
        duration: 500,
        x: -500,
    };

    onMount(() => {
        setTimeout(() => {
            showAnimation = false;
        }, ANIMATION_DURATION);
    });
</script>

<svelte:window onclick={() => (showAnimation = false)} />
<div
    out:fade={{ duration: 300, easing: quadInOut }}
    class="fixed bg-sky-500 w-full h-full z-40 flex flex-col text-6xl font-serif text-sky-50 font-bold p-10"
>
    {#each LINES as line, idx}
        <span
            in:fly|global={{
                delay: idx * WORD_DELAY + INITIAL_DELAY,
                ...slide_settings,
            }}>{line}</span
        >
    {/each}
</div>

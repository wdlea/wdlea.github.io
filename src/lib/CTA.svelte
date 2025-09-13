<script>
    import { inview } from "svelte-inview";

    let isVisible = $state(false);
</script>

<div
    class="relative rounded-full shadow-inner h-14 *:absolute *:top-2 *:bottom-2 *:p-2 bg-sky-100 my-5 justify-center space-x-2 items-center max-w-sm mx-auto"
    use:inview={{rootMargin: "-30%"}}
    oninview_enter={() => isVisible = true}
    oninview_leave={() => isVisible = false}
>
    <p class="text-xl font-serif text-left left-2">Ready for a new site?</p>
    <a
        href="/contact"
        class={`${isVisible ? "left-3/5" : "left-2"} text-center transition-all duration-300 ease-in-out right-2 font-bold rounded-full bg-gradient-epic text-sky-50 shadow hover:shadow-inner`}
        >Contact Me</a
    >
</div>

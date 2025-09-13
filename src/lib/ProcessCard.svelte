<script lang="ts">
    let { index, title, children, subtitle } = $props();
</script>

<div class="relative shadow rounded p-5 rounded-l-none">
    <div
        class="absolute top-0 left-0 bg-gradient-to-bl from-blue-700 to-blue-800 text-blue-50 rounded-full w-10 h-10 flex items-center justify-center font-serif text-2xl font-bold -ml-5.5 -mt-5 shadow"
    >
        {index}
    </div>

    <div class="p-5">
        <div class="mb-2">
            <h3 class="z-10 font-bold text-xl">{title}</h3>
            <p class="italic">{subtitle}</p>
        </div>
        {#if children}
            <div class="space-y-2">
                {@render children()}
            </div>
        {/if}
    </div>
</div>

<script lang="ts">
    let { icon, title, children } = $props();
</script>

<div class="relative shadow rounded p-5 my-5 dark:bg-blue-800">
    <div class="*:h-14 *:w-14 z-0 *:-mb-14 *:-ml-2 *:!fill-blue-100 dark:*:!fill-blue-700">
        {@render icon()}
    </div>

    <div class="p-5">
        <h3 class="z-10 font-bold text-xl">{title}</h3>

        {#if children}
            {@render children()}
        {/if}
    </div>
</div>

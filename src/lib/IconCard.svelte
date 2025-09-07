<script lang="ts">
    let { icon, title, children } = $props();
</script>

<div class="relative bg-blue-50 shadow rounded p-5 my-5">
    <img src={icon} alt="" class="h-14 w-14 z-0 -mb-14 -ml-2" />

    <div class="p-5">
        <h3 class="z-10 font-bold text-xl text-blue-950">{title}</h3>

        {#if children}
            {@render children()}
        {/if}
    </div>
</div>

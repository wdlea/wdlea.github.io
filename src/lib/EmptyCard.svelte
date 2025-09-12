<script lang="ts">
    let { children }: { children?: any | undefined } = $props();
</script>

<div class="relative shadow rounded p-5 my-5">
    {@render children?.()}
</div>

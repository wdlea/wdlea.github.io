<script lang="ts">
    let { href, children } = $props();
</script>

<a
    {href}
    class="bg-blue-500 text-blue-50 p-3 rounded shadow hover:shadow-inner text-center font-bold"
    >{@render children?.()}</a
>

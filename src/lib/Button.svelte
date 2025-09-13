<script lang="ts">
    let { href, children } = $props();
</script>

<a
    {href}
    class="bg-sky-500 text-sky-50 p-3 rounded shadow hover:shadow-inner text-center font-bold"
    >{@render children?.()}</a
>

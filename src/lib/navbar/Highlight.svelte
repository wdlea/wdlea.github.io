<script lang="ts">
    let { index, totalPages }: { index: number | null | undefined; totalPages: number } = $props();
</script>

<div class="absolute w-full h-full top-0 left-0 rounded-full">
    <div
        class={`motion-reduce:hidden h-full absolute top-0 py-[inherit] motion-safe:transition-[left] !duration-1000 ease-outback`}
        style={`left: ${((index ?? 0) / totalPages) * 100}%; width: ${100/totalPages}%`}
    >
        <div class="bg-blue-500 rounded-full w-full h-full shadow"></div>
    </div>
</div>

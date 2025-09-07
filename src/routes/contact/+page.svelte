<script>
    import { browser } from "$app/environment";
    import Section from "$lib/Section.svelte";

    const name = "me";
    const join = "@";

    const domain = "williamleader.com";

    let email = $derived(browser ? name + join + domain : undefined);
</script>

<Section title="Contact Me">
    <p>If you would like a high quality website, please email me:</p>

    {#if email}
        <a class="text-blue-500 underline" href={`mailto:${email}`}>{email}</a>
    {:else}
        <p>
            To prevent spam, my email only loads in when JavaScript is enabled.
            Please enable JavaScript, then reload this page. My email will
            appear here.
        </p>
    {/if}
</Section>

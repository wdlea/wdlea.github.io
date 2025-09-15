<script>
    import { browser } from "$app/environment";
    import Signature from "$lib/assets/signature.svelte";
    import Section from "$lib/Section.svelte";

    const name = "me";
    const join = "@";

    const domain = "williamleader.com";

    let email = $derived(browser ? name + join + domain : undefined);
</script>

<Section title="Contact Me">
    <p>
        Would you like a website that drives results and upholds your business
        values? Do you want a website that performs well and looks beautiful on
        a range of screen sizes?
    </p>
</Section>

<Section title="Get in Touch" blueish>
    <p>
        Hi There, <br />
        Feel free to reach out me, whether you want to start your digital journey
        or have any questions. We can organise a video call, so that I can understand
        your vision and you can understand my capabilities. Then, we can both make
        the call whether we are right for each other.
    </p>
    <Signature />

    <p class="mt-10">
        If you are ready to start building your digital legacy, or have
        questions. You can email me at:
    </p>

    {#if email}
        <a class="text-sky-50 underline" href={`mailto:${email}`}>{email}</a>
    {:else}
        <p>
            To prevent spam, my email only loads in when JavaScript is enabled.
            Please enable JavaScript, then reload this page. My email will
            appear here.
        </p>
    {/if}
</Section>

<Section title="Not sure yet?">
    <p>
        <strong>I don't bite</strong>, if you have any questions, just reach
        out. Your questions help me to improve my website. I cater to a wide
        range of business sizes.
    </p>

    <ul class="space-y-2 py-5 pl-3">
        <li>
            <strong
                >Have you got an idea for a groundbreaking website/app, and want
                to know how much it will cost?</strong
            > Just Email.
        </li>
        <li>
            <strong>Can I work with a certain tool?</strong> Just Email.
        </li>
        <li>
            <strong>Can I redesign your existing website?</strong> Yes.
        </li>
        <li>
            <strong
                >Considering getting a website for your business, and on a
                budget?</strong
            > Just Email.
        </li>
        <li>
            <strong>Can you make a website in this style?</strong> Just Email.
        </li>
        <li>
            <strong
                >Can you make a website that's better than my competitor's one?</strong
            > Definitely.
        </li>
    </ul>

    <p>
        Check out the rest of this website. For an overview of what I can do go
        to my <a class="text-sky-500 underline" href="/">Home Page</a>. For my
        past projects, check out my
        <a class="text-sky-500 underline" href="/portfolio">Portfolio</a>.
    </p>
</Section>

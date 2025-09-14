<script>
    import Section from "$lib/Section.svelte";
    import PortfolioItem from "./PortfolioItem.svelte";
    import ScreenshotThis from "$lib/assets/Screenshot This.png";
    import ScreenshotNursingChampioNZ from "$lib/assets/Screenshot Nursing ChampionNZ.png";
    import Quote from "$lib/Quote.svelte";
</script>

<Section title="So, what can you do?">
    <p>
        This site was only launched on 13 September 2025, I am currently in the
        process of getting references from previous clients. Please check back
        in about a week for more.
    </p>
    <PortfolioItem
        title="Nursing ChampioNZ"
        img={ScreenshotNursingChampioNZ}
        href={"https://www.nursingchampionz.nz"}
    >
        <p>This was my very first professional website.</p>

        <Quote source="Jocelyn Peach">
            <p>
                William has worked with me over the past year to set up my
                website and publish interviews and other items on my website
                <a href="https://www.nursingchampionz.nz" class="underline text-sky-500"
                    >www.nursingchampionz.nz</a
                >. He has been patient, listened carefully, offered advice and
                delivered in a timely manner. I am so pleased with his work and
                highly recommend him.
            </p>
        </Quote>
    </PortfolioItem>

    <PortfolioItem title="This Website" img={ScreenshotThis} href={"/"}>
        <p>
            This is a simple static site incorporating page transitions, video
            backgrounds and a monochrome palette.
        </p>
        <p>
            This is what I can create with free reign over the styling of the
            site.
        </p>
        <p>
            This site is also responsive, this means that it is designed for a
            range of screens and will automatically update it's layout to fit.
            If you're on laptop, you can try this out by resizing the window, on
            mobile, you could rotate your screen.
        </p>
    </PortfolioItem>
</Section>

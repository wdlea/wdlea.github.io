<script>
    import Section from "$lib/Section.svelte";
    import PortfolioItem from "./PortfolioItem.svelte";
    import ScreenshotThis from "$lib/assets/Screenshot This.png";
</script>

<Section title="So, what can you do?">
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

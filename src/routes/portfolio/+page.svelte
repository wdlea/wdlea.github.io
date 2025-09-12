<script>
    import Section from "$lib/Section.svelte";
    import PortfolioItem from "./PortfolioItem.svelte";
    import ScreenshotThis from "$lib/assets/Screenshot This.png"

</script>
<Section title="So, what can you do?">
    <PortfolioItem title="This Website" img={ScreenshotThis} href={"/"}>
        hello
    </PortfolioItem>
</Section>
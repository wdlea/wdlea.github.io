<script>
    import IconCard from "$lib/IconCard.svelte";
    import Section from "$lib/Section.svelte";
    import up_arrow from "$lib/assets/up_arrow.svg";
    import star from "$lib/assets/star.svg";
</script>

<Section title={`Stop Settling for a Website That's Just "There"`}>
    Your website is often the first impression you make. In a crowded digital
    world, "good enough" just isn't enough. A good website should set you apart
    from the crowd, and showcase your businesses ability to deliver results.

    <div class="lg:flex lg:justify-stretch lg:space-x-5 lg:*:w-1/3">
        <IconCard icon={up_arrow} title="Built for Growth"
            >Your website should grow with your business. I can produce stunning
            websites for all business sizes. From basic, single page sites for
            smaller ventures to online portals for larger enterprises.
        </IconCard>
        <IconCard icon={star} title="Flawless Everywhere">
            More and more clients' first choice is becoming to use mobiles when
            accessing your site. So why should your website only work well on
            desktop? I deliver responsive designs that adapt to a variety of
            screen sizes.
        </IconCard>
        <IconCard icon={star} title="Cutting Edge and Blazingly Fast">
            I use modern tools to develop your website to ensure it is secure,
            cost-effective and blazingly fast for customers. 
        </IconCard>
    </div>
</Section>

<script>
    import IconCard from "$lib/IconCard.svelte";
    import Section from "$lib/Section.svelte";
    import up_arrow from "$lib/assets/up_arrow.svg";
    import star from "$lib/assets/star.svg";
    import flame from "$lib/assets/flame.svg";
    import ProcessCard from "$lib/ProcessCard.svelte";
    import Cta from "$lib/CTA.svelte";
</script>

<Section title={`Stop Settling for a Website That's Just "There"`}>
    Your website is often the first impression you make. In a crowded digital
    world, "good enough" just isn't enough. A good website should set you apart
    from the crowd, and showcase your business's ability to deliver results.

    <div class="lg:flex lg:justify-stretch lg:space-x-5 lg:*:w-1/3">
        <IconCard icon={up_arrow} title="Built for Growth"
            >Your website should grow with your business. I can produce stunning
            websites for all business sizes. From basic, single page sites for
            smaller ventures to online portals for larger enterprises.
        </IconCard>
        <IconCard icon={star} title="Flawless Everywhere">
            Many potential customers choose to use mobile when accessing your
            site. So why should your website only work well on desktop? I
            deliver responsive designs that adapt to a variety of screen sizes
            by designing for small screens first, then scaling up.
        </IconCard>
        <IconCard icon={flame} title="Cutting Edge and Blazingly Fast">
            I use modern tooling to develop your website to ensure it is secure,
            cost-effective and fast for customers.
        </IconCard>
    </div>
</Section>
<Cta/>

<Section title="My process for perfection">
    <div class="border-l-4 border-blue-600 space-y-10 pb-10 mt-10">
        <ProcessCard
            index="1"
            title="Consultation"
            subtitle="Getting to know you"
        >
            <p>
                Before I even begin working on your website, I must first
                understand your needs and motivations. In this phase, we will
                have in depth discussions about your site's aesthetics,
                functionality, budget and target audience to ensure the final
                site fits you perfectly.
            </p>
            <p>
                I can also redesign existing websites to modernise, improve and
                add features.
            </p>
            <p>
                By the end of this stage, we will have a clear vision about what
                the site will be, as well as an estimated final cost for the
                site.
            </p>
        </ProcessCard>
        <ProcessCard index="2" title="Creation" subtitle="Bringing It to Life">
            <p>
                Once I have a solid idea about what you want done, I will get to
                work. I use modern technologies to ensure that the site looks
                professional, is secure and loads quickly.
            </p>

            <p>
                Throughout development, I will consult you for feedback to
                ensure that the design is perfect for you.
            </p>
        </ProcessCard>
        <ProcessCard index="3" title="Completion" subtitle="Final Checks">
            <p>
                After developing the site, I do one last round of feedback and
                testing to ensure perfection. I then deploy your site to the web
                so customers can access it.
            </p>
            <p>After this stage, your site is good to go.</p>
        </ProcessCard>
    </div>
    
    <!-- Random margin to account for border above 1 = border/2 -->
    <div class="ml-1"> 
        <ProcessCard index="4" title="Continuation" subtitle="Ongoing support">
            <p>
                After your website is finished, I offer ongoing support. I can
                make changes to the sites appearance and functionality as well
                as add new content.
            </p>
        </ProcessCard>
    </div>
</Section>
<Cta/>

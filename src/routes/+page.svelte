<script>
    import IconCard from "$lib/IconCard.svelte";
    import Section from "$lib/Section.svelte";
    import ProcessCard from "$lib/ProcessCard.svelte";
    import Cta from "$lib/CTA.svelte";
    import UpArrow from "$lib/assets/up_arrow.svelte";
    import Star from "$lib/assets/star.svelte";
    import Flame from "$lib/assets/flame.svelte";
    import Signature from "$lib/assets/signature.svelte";
    import Quote from "$lib/Quote.svelte";
</script>

<Section title={`Stop Settling for a Website That's Just "There"`}>
    Websites are often the first impression you make. In a crowded digital
    world, "good enough" just isn't enough. A good website should set you apart
    from the crowd, and showcase your business's ability to deliver results.

    <div class="lg:flex lg:justify-stretch lg:space-x-5 lg:*:w-1/3">
        <IconCard icon={UpArrow} title="Built for Growth"
            >Websites should grow with businesses. I can produce stunning
            websites for all business sizes. From basic, single page sites for
            smaller ventures to online portals for larger enterprises.
        </IconCard>
        <IconCard icon={Star} title="Flawless Everywhere">
            Many potential customers choose to use mobile when accessing your
            site. So why should your website only work well on desktop? I
            deliver responsive designs that adapt to a variety of screen sizes
            by designing for small screens first, then scaling up.
        </IconCard>
        <IconCard icon={Flame} title="Cutting Edge and Blazingly Fast">
            I use modern tooling to develop your website to ensure it is secure,
            cost-effective and fast for customers.
        </IconCard>
    </div>
</Section>
<Cta />

<Section title="Why Me?" blueish>
    <Quote source="Jocelyn Peach">
        <p>
            William has worked with me over the past year to set up my website
            and publish interviews and other items on my website
            <a
                href="https://www.nursingchampionz.nz"
                class="underline text-sky-300">www.nursingchampionz.nz</a
            >. He has been patient, listened carefully, offered advice and
            delivered in a timely manner. I am so pleased with his work and
            highly recommend him.
        </p>
    </Quote>

    <div class="space-y-2 mt-10">
        <p>
            Hi, <br />
            I'm a freelance web developer based in New Zealand. I specialise in building
            websites for businesses who want to grow quickly and expect their website
            to keep up. I can produce anything from blogs to
            <strike class="decoration-2">simple</strike> (this is a static site)
            static sites to online portals.
        </p>
        <p>
            Unlike other designers, I build your websites with code instead of a
            drag and drop builder. This approach gives me almost complete
            control over the look, feel and functionality of the website,
            allowing me to deliver the best possible end product to you.
        </p>
        <p>
            I have been coding since I was 10, making websites since 11, been
            awarded Excellence in an exam meant for 16-year-olds at 13 and
            achieved my first scholarships at 16. I started managing websites at
            a professional capacity in mid-2024 and deployed phase 1 of my first
            professional website in September 2025. Through all this trial and
            error, I learnt how to design stunning sites, perfected my
            programming ability and have found an efficient set of tools to
            develop websites.
        </p>
        <p>
            Your online presence shouldn't just <em>uphold</em> your businesses reputation,
            it should build prestige and showcase your businesses values. There are
            too many mediocre designers out there, who will build you a janky site
            that only works well on desktop, takes ages to load and looks awful.
            Why should your businesses reputation be let down by an inexperienced
            designer.
        </p>
        <p>
            I can build you a feature packed, modern and mobile-friendly site
            that will emphasise and cultivate the business reputation you are
            working hard to build.
        </p>
        <p>Let's build your digital legacy,</p>
        <Signature />
    </div>
</Section>

<Cta />

<Section title="My process for perfection">
    <div class="border-l-4 border-sky-600 space-y-10 pb-10 mt-10">
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
<Cta />

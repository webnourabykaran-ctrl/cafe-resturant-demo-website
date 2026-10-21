import { Reveal } from "./reveal";

const PILLARS = [
  {
    number: "01",
    tag: "Morning & Afternoon",
    title: "Specialty Café & Bakery",
    body: "Freshly brewed espresso, signature pour-over coffees, smooth cold brews, and warm bakery pastries baked every morning.",
  },
  {
    number: "02",
    tag: "Evening Dinner",
    title: "Fine Dining & Chef Specials",
    body: "Delicious meals prepared with fresh ingredients, tender grilled meats, flavorful seafood, and signature dinner courses.",
  },
  {
    number: "03",
    tag: "Hospitality & Comfort",
    title: "Warm & Friendly Service",
    body: "Welcoming and polite table service, a cozy and elegant atmosphere, and private seating areas for your special gatherings.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-y border-border/80 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
            What We Offer
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.25rem)] text-foreground">
            The <span className="font-serif italic font-normal gold-shimmer">MAJHA</span> Experience
          </h2>
          <p className="mt-3 text-[0.925rem] text-muted-foreground font-light">
            From morning coffee to evening dinner, we make every visit special.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-18 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 100}
              className="group relative rounded-sm border border-border/60 bg-card/60 p-8 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:bg-card hover:shadow-[0_12px_40px_-10px_rgba(212,175,55,0.15)] md:p-10"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-5">
                <span className="font-brand text-xl font-bold text-primary">
                  {pillar.number}
                </span>
                <span className="font-sans text-[0.6rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  {pillar.tag}
                </span>
              </div>

              <h3 className="mt-6 font-display text-[1.45rem] leading-snug text-foreground transition-colors duration-500 group-hover:text-primary">
                {pillar.title}
              </h3>

              <span className="mt-4 block h-px w-8 bg-border transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />

              <p className="mt-4 text-[0.875rem] leading-[1.75] text-muted-foreground font-light">
                {pillar.body}
              </p>

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent transition-all duration-500 group-hover:via-primary/70" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

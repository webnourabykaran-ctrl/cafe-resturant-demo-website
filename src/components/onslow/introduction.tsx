import introImage from "@/assets/intro-room.jpg";
import { Reveal } from "./reveal";

export function Introduction() {
  return (
    <section id="about" className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-32 lg:px-12 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="pointer-events-none absolute -left-40 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal>
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-primary" />
            <p className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
              Our Story
            </p>
          </div>

          <h2 className="mt-5 font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.12] text-foreground">
            A Rich Tradition of{" "}
            <span className="font-serif italic font-normal text-[#f5e3b5] gold-shimmer">
              Great Food
            </span>{" "}
            & Warm Hospitality.
          </h2>

          <div className="mt-7 max-w-xl space-y-5 text-[0.925rem] md:text-[0.975rem] leading-[1.8] text-muted-foreground font-light">
            <p>
              Inspired by the generous spirit and welcoming culture of the historic Majha region,{" "}
              <strong className="text-foreground font-medium">MAJHA Café & Restaurant</strong> brings together
              delicious food, rich aromas, and a warm, inviting setting. Every dish and beverage is prepared with
              care and the highest quality ingredients.
            </p>
            <p>
              <span className="text-primary font-medium">Morning & Afternoon:</span> MAJHA is a bright and peaceful
              space. Enjoy freshly brewed specialty coffees, smooth cold brews, and warm bakery pastries made fresh
              every morning.
            </p>
            <p>
              <span className="text-primary font-medium">In the Evening:</span> The lights dim and candlelight creates
              a relaxing dinner ambiance. MAJHA becomes a fine dining destination where you can enjoy signature meals,
              tender grilled specials, and attentive table service with family and friends.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-6 border-t border-border/80 pt-6">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-xs text-primary font-brand">
                ✦
              </span>
              <div>
                <p className="font-sans text-xs font-semibold tracking-wide text-foreground">Fine Dining</p>
                <p className="font-sans text-[0.72rem] text-muted-foreground">Expert Chefs</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-xs text-primary font-brand">
                ☕
              </span>
              <div>
                <p className="font-sans text-xs font-semibold tracking-wide text-foreground">Fresh Coffee</p>
                <p className="font-sans text-[0.72rem] text-muted-foreground">Premium Roasted Beans</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-sm border border-border p-2 bg-card/40 backdrop-blur-sm">
            <img
              src={introImage}
              alt="An opulent table setting at MAJHA Café & Restaurant with crystal stemware and dark timber panelling"
              width={1200}
              height={1504}
              loading="lazy"
              decoding="async"
              className="aspect-4/5 w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.02]"
            />
            {/* Ornamental gold framing */}
            <div className="pointer-events-none absolute inset-4 border border-primary/20" />
            <div className="pointer-events-none absolute -bottom-3 -left-3 hidden size-20 border-b-2 border-l-2 border-primary md:block" />
            <div className="pointer-events-none absolute -top-3 -right-3 hidden size-20 border-t-2 border-r-2 border-primary md:block" />
            
            {/* Royal Brand Medallion Seal */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex size-22 md:size-26 rounded-full overflow-hidden p-1 bg-gradient-to-br from-[#f5e3b5] via-[#d4af37] to-[#8a7322] shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,55,0.4)] z-10 transition-transform duration-500 hover:scale-105">
              <img
                src="/majha-logo.png"
                alt="MAJHA Seal of Excellence"
                width={104}
                height={104}
                className="size-full rounded-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

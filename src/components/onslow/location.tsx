import { RESTAURANT } from "./site-data";
import { Reveal } from "./reveal";
import { useConcierge } from "./concierge-context";
import { PhoneCall } from "lucide-react";

export function Location() {
  const { openConcierge } = useConcierge();

  return (
    <section id="contact" className="border-t border-border/80 bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-18">
          <Reveal>
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-primary" />
              <p className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
                Location & Contact
              </p>
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.25rem)] text-foreground">
              Visit Us at <span className="font-serif italic font-normal gold-shimmer">MAJHA</span>
            </h2>

            <dl className="mt-10 space-y-8">
              <div>
                <dt className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
                  Our Address
                </dt>
                <dd className="mt-2 max-w-xs font-display text-[1.25rem] leading-snug text-foreground">
                  <a
                    href={RESTAURANT.directions}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-300 hover:text-primary"
                  >
                    {RESTAURANT.address}
                  </a>
                </dd>
                <p className="mt-1 text-xs text-muted-foreground">
                  Free valet parking available at the main entrance.
                </p>
              </div>

              <div>
                <dt className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
                  Telephone Contact
                </dt>
                <dd className="mt-2 font-display text-[1.25rem] text-foreground">
                  <button
                    type="button"
                    onClick={openConcierge}
                    className="transition-colors duration-300 hover:text-primary cursor-pointer text-left font-display text-[1.25rem] text-foreground"
                  >
                    {RESTAURANT.phoneDisplay}
                  </button>
                </dd>
              </div>

              <div>
                <dt className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
                  Opening Hours
                </dt>
                <dd className="mt-2 space-y-1.5 text-[0.875rem] leading-relaxed text-muted-foreground font-light">
                  <p>
                    <strong className="text-foreground font-medium">Café & Breakfast:</strong> Monday – Sunday, 8:00 AM – 3:30 PM
                  </p>
                  <p>
                    <strong className="text-foreground font-medium">Evening Dinner:</strong> Tuesday – Sunday, 5:30 PM – Late
                  </p>
                  <p className="pt-1.5 text-xs text-primary/80">
                    Dress Code: Smart Casual or Elegant. Table reservations recommended in advance.
                  </p>
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={RESTAURANT.directions}
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap border border-primary bg-primary px-8 py-3.5 text-center font-sans text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-300 hover:bg-primary/90"
              >
                Directions & Map
              </a>
              <button
                type="button"
                onClick={openConcierge}
                className="whitespace-nowrap border border-border/80 bg-card/60 px-8 py-3.5 text-center font-sans text-xs font-medium tracking-[0.2em] uppercase text-foreground transition-all duration-300 hover:border-primary hover:text-primary cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <PhoneCall className="size-3.5 text-primary" />
                <span>Call Us</span>
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-sm border border-border/80 p-2 bg-card/50">
              <iframe
                title="Map showing MAJHA Café & Restaurant"
                src={RESTAURANT.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[340px] w-full border border-border/60 transition-all duration-700 md:grayscale-[0.6] md:invert-[0.9] md:contrast-[1.2] md:hover:grayscale-0 md:hover:invert-0 md:hover:contrast-100 md:h-[500px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";
import { RESTAURANT } from "./site-data";
import { Reveal } from "./reveal";

const CRITIC_QUOTES = [
  {
    quote:
      "MAJHA brings together the comfort of a warm café with the beauty and rich flavors of fine dining. An exceptional place to dine.",
    author: "Julian Sterling",
    publication: "Food & Dining Critic",
  },
  {
    quote:
      "From the special morning saffron coffee to the slow-cooked tender beef dinner, every dish at MAJHA is made with great care and delicious taste.",
    author: "Elena Rostova",
    publication: "Lifestyle & Food Journal",
  },
  {
    quote:
      "A peaceful, candlelit atmosphere with very polite and attentive staff. One of the best places in town to enjoy a memorable evening meal.",
    author: "Marcus Vance",
    publication: "Restaurant Reviewer",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="border-y border-border/80 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 text-center md:px-10 lg:px-12">
        <Reveal>
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-primary" />
            <p className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
              Guest Reviews & Ratings
            </p>
            <span className="h-px w-6 bg-primary" />
          </div>

          <div className="mt-6 flex items-center justify-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="size-5 fill-primary text-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] md:size-6"
                strokeWidth={1}
              />
            ))}
          </div>

          <div className="mt-4 flex items-baseline justify-center gap-2">
            <span className="font-brand text-[clamp(3.2rem,7vw,5.5rem)] font-bold text-foreground leading-none">
              {RESTAURANT.rating}
            </span>
            <span className="font-sans text-lg text-primary font-semibold">/ 5.0</span>
          </div>

          <p className="font-sans text-xs font-semibold tracking-[0.18em] text-primary/90 mt-2 uppercase">
            Over {RESTAURANT.reviewCount} Verified Guest Reviews
          </p>

          <p className="mx-auto mt-3 max-w-md text-[0.875rem] text-muted-foreground font-light leading-relaxed">
            Loved by our guests for great coffee, delicious food, and warm hospitality.
          </p>
        </Reveal>

        {/* Critic Quote Cards */}
        <div className="mt-14 grid gap-6 text-left md:mt-16 md:grid-cols-3">
          {CRITIC_QUOTES.map((critic, i) => (
            <Reveal
              key={critic.publication}
              delay={i * 100}
              className="relative rounded-sm border border-border/60 bg-card/70 p-7 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-[0_10px_30px_-5px_rgba(212,175,55,0.15)] md:p-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-2xl text-primary font-light">“</span>
                <p className="font-serif italic text-[0.975rem] leading-[1.7] text-foreground/90 -mt-2">
                  {critic.quote}
                </p>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4">
                <p className="font-display text-sm font-semibold text-foreground">
                  {critic.author}
                </p>
                <p className="font-sans text-[0.6875rem] font-semibold tracking-wider text-primary uppercase">
                  {critic.publication}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

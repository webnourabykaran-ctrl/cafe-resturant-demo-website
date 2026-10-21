import crayfish from "@/assets/dish-crayfish-eclair.jpg";
import beefCheek from "@/assets/dish-beef-cheek.jpg";
import salmon from "@/assets/dish-salmon-trolley.jpg";
import souffle from "@/assets/dish-chocolate-souffle.jpg";
import { Reveal } from "./reveal";

const DISHES = [
  {
    name: "Crisp Crayfish Pastry",
    price: "$38",
    body: "Crisp golden pastry filled with fresh coastal crayfish, savory sauce, and edible gold leaf.",
    image: crayfish,
    alt: "Crisp crayfish pastry with sauce and micro herbs on a dark stone plate",
  },
  {
    name: "Slow-Cooked Tender Beef",
    price: "$58",
    body: "Slow-cooked for 18 hours until melt-in-the-mouth tender, served with creamy potato mash and rich savory gravy.",
    image: beefCheek,
    alt: "Slow cooked tender beef with rich sauce and mashed potatoes",
  },
  {
    name: "Fresh House-Cured Salmon",
    price: "$52",
    body: "Fresh cured salmon carved at your table, served with delicate caviar pearls and fresh herb cream.",
    image: salmon,
    alt: "House-cured salmon served with capers, herbs, and cream",
  },
  {
    name: "Warm Dark Chocolate Soufflé",
    price: "$28",
    body: "Freshly baked warm chocolate soufflé served with warm vanilla bean cream poured right at your table.",
    image: souffle,
    alt: "Dark chocolate soufflé with a jug of warm vanilla cream",
  },
];

export function SignatureDishes() {
  return (
    <section id="signatures" className="border-t border-border/80 bg-card/60 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
        <Reveal className="max-w-2xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-primary" />
            <p className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
              Our Specialties
            </p>
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.1] text-foreground">
            Four Signature Dishes That{" "}
            <span className="font-serif italic font-normal gold-shimmer">
              Our Guests Love.
            </span>
          </h2>
          <p className="mt-3 text-[0.925rem] text-muted-foreground font-light">
            Specially created by our head chef to give you an unforgettable taste.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {DISHES.map((dish, i) => (
            <Reveal
              key={dish.name}
              delay={i * 100}
              className="group relative rounded-sm border border-border/60 bg-background/50 p-4 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_12px_35px_-10px_rgba(212,175,55,0.2)]"
            >
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  width={1200}
                  height={1504}
                  loading="lazy"
                  decoding="async"
                  className="aspect-4/5 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                />
                <span className="absolute top-3 right-3 rounded-full border border-primary/40 bg-background/90 px-2.5 py-0.5 font-sans text-xs font-semibold text-primary backdrop-blur-sm">
                  {dish.price}
                </span>
              </div>

              <h3 className="mt-5 font-display text-[1.25rem] leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                {dish.name}
              </h3>

              <span className="mt-3 block h-px w-8 bg-primary/40 transition-all duration-300 group-hover:w-14 group-hover:bg-primary" />

              <p className="mt-3 text-[0.825rem] leading-[1.65] text-muted-foreground font-light">
                {dish.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

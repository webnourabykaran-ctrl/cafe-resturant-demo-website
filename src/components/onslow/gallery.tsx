import introRoom from "@/assets/intro-room.jpg";
import bar from "@/assets/gallery-bar.jpg";
import chef from "@/assets/gallery-chef.jpg";
import table from "@/assets/gallery-table.jpg";
import guests from "@/assets/gallery-guests.jpg";
import tuna from "@/assets/gallery-tuna.jpg";
import { Reveal } from "./reveal";

const IMAGES = [
  {
    src: table,
    title: "Elegant Table Setting",
    alt: "Handcrafted crystal glassware and silverware at MAJHA Café & Restaurant",
    w: 1200,
    h: 1504,
  },
  {
    src: chef,
    title: "Our Chefs in the Kitchen",
    alt: "Executive Chef finishing a signature dish with precision in the MAJHA kitchen",
    w: 1200,
    h: 912,
  },
  {
    src: bar,
    title: "The Drinks Bar & Lounge",
    alt: "The illuminated brass bar at MAJHA featuring specialty drinks and refreshments",
    w: 1200,
    h: 1504,
  },
  {
    src: tuna,
    title: "Fresh Seafood Dishes",
    alt: "Yellowfin tuna carpaccio elegantly plated on dark tableware",
    w: 1200,
    h: 1504,
  },
  {
    src: guests,
    title: "Memorable Evenings",
    alt: "Guests enjoying dinner at a candlelit table inside MAJHA",
    w: 1200,
    h: 912,
  },
  {
    src: introRoom,
    title: "Morning Café Seating",
    alt: "Gentle morning natural light flowing across the MAJHA café seating area",
    w: 1200,
    h: 1504,
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-32 lg:px-12">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-6 bg-primary" />
          <p className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
            Photo Gallery
          </p>
          <span className="h-px w-6 bg-primary" />
        </div>
        <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.25rem)] text-foreground">
          Inside <span className="font-serif italic font-normal gold-shimmer">MAJHA</span>
        </h2>
        <p className="mt-3 text-[0.925rem] text-muted-foreground font-light">
          Take a look at our dining halls, coffee bar, and freshly prepared dishes.
        </p>
      </Reveal>

      <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {IMAGES.map((image, i) => (
          <Reveal
            key={image.title}
            delay={(i % 3) * 100}
            className="group mb-6 break-inside-avoid relative overflow-hidden rounded-sm border border-border/60 bg-card p-2 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_10px_30px_-5px_rgba(212,175,55,0.2)]"
          >
            <div className="relative overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                width={image.w}
                height={image.h}
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.05] group-hover:brightness-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-5">
                <div>
                  <span className="font-sans text-[0.6rem] font-semibold tracking-[0.2em] text-primary uppercase">
                    MAJHA
                  </span>
                  <p className="font-display text-base text-foreground">{image.title}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

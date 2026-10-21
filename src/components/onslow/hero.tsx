import heroImage from "@/assets/hero-dining-room.jpg";
import { useReservation } from "./reservation-context";

export function Hero() {
  const { openReservation } = useReservation();

  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={heroImage}
        alt="The majestic candlelit dining hall and lounge at MAJHA Café & Restaurant"
        width={1920}
        height={1088}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover scale-105 transform-gpu"
      />
      {/* Opulent dark velvet & golden atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-16 pt-32 md:px-10 md:pb-24 lg:px-12">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          <div className="relative size-6 shrink-0 rounded-full overflow-hidden p-[1px] bg-gradient-to-br from-[#f5e3b5] via-[#d4af37] to-[#8a7322] shadow-[0_0_8px_rgba(212,175,55,0.5)]">
            <img
              src="/majha-logo.png"
              alt="MAJHA Logo"
              width={24}
              height={24}
              className="size-full rounded-full object-cover"
            />
          </div>
          <span className="font-sans text-[0.625rem] font-medium tracking-[0.25em] text-primary uppercase">
            EST. 2024 · PREMIUM CAFÉ & FINE DINING
          </span>
          <span className="text-xs text-primary">✦</span>
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,6vw,5.25rem)] font-normal leading-[1.08] text-foreground">
          Where{" "}
          <span className="font-serif italic font-normal text-[#f5e3b5] gold-shimmer">
            Fresh Coffee
          </span>
          <br className="hidden sm:inline" /> Meets{" "}
          <span className="font-serif italic font-normal text-foreground">
            Fine Dining.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl font-sans text-[0.95rem] md:text-[1.05rem] leading-[1.8] text-foreground/85 font-light tracking-wide">
          Welcome to <strong className="font-brand font-semibold text-primary tracking-widest">MAJHA</strong> — a warm and
          luxurious place to enjoy delicious food and drinks. Visit us for freshly brewed morning coffee and bakery treats,
          or join us in the evening for candlelight dining and chef-special dishes.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => openReservation({ experience: "dinner" })}
            className="whitespace-nowrap border border-primary bg-primary px-8 py-4 text-center font-sans text-xs font-semibold tracking-[0.22em] uppercase text-primary-foreground shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:bg-primary/90 hover:scale-[1.01] cursor-pointer"
          >
            Reserve Your Table
          </button>
          <a
            href="#menu"
            className="whitespace-nowrap border border-primary/40 bg-card/60 px-8 py-4 text-center font-sans text-xs font-medium tracking-[0.22em] uppercase text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
          >
            Explore Menus
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-border/60 pt-7 sm:grid-cols-4 md:gap-8">
          <div>
            <p className="font-sans text-[0.625rem] font-medium tracking-[0.22em] text-primary uppercase">Specialty Café</p>
            <p className="mt-1 font-serif text-[1rem] text-foreground/90 italic">Freshly Roasted Coffee</p>
          </div>
          <div>
            <p className="font-sans text-[0.625rem] font-medium tracking-[0.22em] text-primary uppercase">Fine Dining</p>
            <p className="mt-1 font-serif text-[1rem] text-foreground/90 italic">Expert Chefs</p>
          </div>
          <div>
            <p className="font-sans text-[0.625rem] font-medium tracking-[0.22em] text-primary uppercase">Finest Drinks</p>
            <p className="mt-1 font-serif text-[1rem] text-foreground/90 italic">Curated Beverages</p>
          </div>
          <div>
            <p className="font-sans text-[0.625rem] font-medium tracking-[0.22em] text-primary uppercase">Warm Ambience</p>
            <p className="mt-1 font-serif text-[1rem] text-foreground/90 italic">Comfortable Seating</p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to explore"
        className="absolute bottom-8 right-10 hidden flex-col items-center gap-1.5 md:flex group"
      >
        <span className="font-sans text-[0.5625rem] font-medium tracking-[0.2em] text-primary/70 uppercase group-hover:text-primary transition-colors">Scroll</span>
        <span className="block h-10 w-px bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </a>
    </section>
  );
}

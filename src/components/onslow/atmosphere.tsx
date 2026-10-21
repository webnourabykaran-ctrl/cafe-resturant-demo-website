import atmosphere from "@/assets/atmosphere-wide.jpg";
import { Reveal } from "./reveal";

export function Atmosphere() {
  return (
    <section className="relative isolate flex min-h-[70svh] items-center overflow-hidden">
      <img
        src={atmosphere}
        alt="The MAJHA dining room and lounge in the evening, warm candlelight on timber and brass panelling"
        width={1920}
        height={912}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-background/80 backdrop-blur-[1px]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-transparent to-background/90" />

      <Reveal className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-md">
          <span className="text-xs text-primary">✦</span>
          <span className="font-sans text-[0.625rem] font-semibold tracking-[0.22em] text-primary uppercase">
            OUR ATMOSPHERE
          </span>
          <span className="text-xs text-primary">✦</span>
        </div>

        <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,3.85rem)] leading-[1.08] text-foreground">
          A Warm, Elegant &{" "}
          <span className="font-serif italic font-normal text-[#f5e3b5] gold-shimmer">
            Relaxing Setting.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-[0.95rem] md:text-[1.025rem] leading-relaxed text-foreground/80 font-light">
          With soft background music, the rich aroma of freshly brewed coffee, and warm candlelight in the evening,
          MAJHA is the perfect place to unwind, celebrate, and spend quality time with family and friends.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-sans text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="text-primary font-brand">✦</span> Smart Casual Dress
          </span>
          <span className="flex items-center gap-2">
            <span className="text-primary font-brand">✦</span> Free Valet Parking
          </span>
          <span className="flex items-center gap-2">
            <span className="text-primary font-brand">✦</span> Handcrafted Drinks
          </span>
        </div>
      </Reveal>
    </section>
  );
}

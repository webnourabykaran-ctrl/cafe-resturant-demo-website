import { Reveal } from "./reveal";
import { useReservation } from "./reservation-context";

export function ReserveCta() {
  const { openReservation } = useReservation();

  return (
    <section id="reserve" className="relative overflow-hidden bg-ink py-24 md:py-36 border-t border-border/80">
      {/* Golden halo glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[450px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] blur-3xl" />

      <Reveal className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-10">
        <div className="mx-auto mb-6 flex justify-center">
          <div className="relative size-20 md:size-24 rounded-full overflow-hidden p-1 bg-gradient-to-br from-[#f5e3b5] via-[#d4af37] to-[#8a7322] shadow-[0_0_35px_rgba(212,175,55,0.45)] transition-transform duration-500 hover:scale-105">
            <img
              src="/majha-logo.png"
              alt="MAJHA Crest"
              width={96}
              height={96}
              className="size-full rounded-full object-cover"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 backdrop-blur-md">
          <span className="text-xs text-primary">✦</span>
          <span className="font-sans text-[0.625rem] font-semibold tracking-[0.22em] text-primary uppercase">
            TABLE RESERVATIONS
          </span>
          <span className="text-xs text-primary">✦</span>
        </div>

        <h2 className="mt-6 font-display text-[clamp(2.3rem,5.5vw,4.25rem)] leading-[1.08] text-foreground">
          Your Table at{" "}
          <span className="font-serif italic font-normal text-[#f5e3b5] gold-shimmer">
            MAJHA
          </span>{" "}
          Awaits.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-[0.95rem] md:text-[1.025rem] leading-relaxed text-foreground/80 font-light">
          Whether you are stopping by for morning coffee and breakfast or planning a special evening dinner,
          we invite you to reserve your table today.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => openReservation({ experience: "dinner" })}
            className="whitespace-nowrap w-full sm:w-auto border border-primary bg-primary px-9 py-4 text-center font-sans text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:bg-primary/90 hover:scale-[1.01] cursor-pointer"
          >
            Book a Table
          </button>
          <button
            type="button"
            onClick={() => openReservation({ experience: "private" })}
            className="whitespace-nowrap w-full sm:w-auto border border-border/80 bg-card/60 px-8 py-4 text-center font-sans text-xs font-medium tracking-[0.2em] uppercase text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary hover:text-primary cursor-pointer"
          >
            Private Events & Parties
          </button>
        </div>
      </Reveal>
    </section>
  );
}

import { Reveal } from "./reveal";
import { useReservation } from "./reservation-context";

const OCCASIONS = [
  {
    title: "Morning Café & Breakfast",
    time: "8:00 AM – 11:30 AM",
    body: "Bright morning seating with freshly brewed specialty coffees, smooth pour-overs, and warm breakfast pastries baked fresh daily.",
  },
  {
    title: "Business & Afternoon Lunch",
    time: "12:00 PM – 3:00 PM",
    body: "A comfortable and quiet space perfect for business discussions, family catch-ups, and a delicious midday lunch.",
  },
  {
    title: "Evening Dinner Service",
    time: "5:30 PM – Midnight",
    body: "Candlelight dining featuring signature chef specials, fresh grilled dishes, and fine drinks in a relaxed atmosphere.",
  },
  {
    title: "Private Dining Room",
    time: "By Reservation",
    body: "An exclusive private dining room for up to 18 guests with dedicated service for family celebrations, birthdays, and private parties.",
  },
];

export function Occasions() {
  const { openReservation } = useReservation();

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-32 lg:px-12">
      <Reveal className="max-w-2xl">
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-6 bg-primary" />
          <p className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
            Dining Times & Events
          </p>
        </div>
        <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.1] text-foreground">
          Join Us for{" "}
          <span className="font-serif italic font-normal gold-shimmer">
            Any Occasion.
          </span>
        </h2>
        <p className="mt-3 text-[0.925rem] text-muted-foreground font-light">
          Whether it is a peaceful breakfast, a business lunch, or a family celebration, we have the right setting for you.
        </p>
      </Reveal>

      <div className="mt-14 divide-y divide-border/80 border-y border-border/80">
        {OCCASIONS.map((occasion, i) => (
          <Reveal
            key={occasion.title}
            delay={i * 80}
            className="group grid gap-3 py-8 transition-transform duration-300 hover:translate-x-1.5 md:grid-cols-[1.1fr_1.6fr] md:items-baseline md:gap-10 md:py-10"
          >
            <div>
              <p className="font-sans text-xs font-semibold tracking-wider text-primary uppercase">
                {occasion.time}
              </p>
              <h3 className="mt-1.5 font-display text-[1.4rem] leading-snug text-foreground transition-colors duration-300 group-hover:text-primary md:text-[1.65rem]">
                {occasion.title}
              </h3>
            </div>
            <p className="max-w-xl text-[0.875rem] leading-[1.7] text-muted-foreground font-light">
              {occasion.body}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <button
          type="button"
          onClick={() => openReservation({ experience: "private" })}
          className="whitespace-nowrap inline-block border border-primary/80 bg-primary/10 px-8 py-4 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
        >
          Book a Private Room or Event
        </button>
      </Reveal>
    </section>
  );
}

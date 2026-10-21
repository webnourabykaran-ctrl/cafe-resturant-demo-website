import { RESTAURANT } from "./site-data";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Custom luxury SVG vectors for WhatsApp, Instagram, and Facebook
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path
        d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function LuxurySocialLinks({
  variant = "horizontal",
  showLabels = false,
  className,
}: {
  variant?: "horizontal" | "vertical" | "cards";
  showLabels?: boolean;
  className?: string;
}) {
  const { whatsapp, instagram, facebook, instagramHandle, whatsappDisplay } = RESTAURANT.socials;

  if (variant === "cards") {
    return (
      <div className={cn("grid gap-5 md:grid-cols-3", className)}>
        {/* WhatsApp Card - Haute Luxury Concierge Panel */}
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col justify-between rounded-sm border border-border/80 bg-[#0b0c10] p-6 transition-all duration-500 hover:border-primary/70 hover:bg-[#0f1117] hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.14)] hover:-translate-y-1"
        >
          {/* Top Row: Medallion + Category Badge */}
          <div>
            <div className="flex items-center justify-between">
              <div className="relative flex size-11 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary transition-all duration-500 group-hover:scale-105 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]">
                <WhatsAppIcon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                {/* Subtle emerald live jewel indicator */}
                <span className="absolute -top-0.5 -right-0.5 flex size-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                </span>
              </div>
              <span className="font-sans text-[0.625rem] font-semibold tracking-[0.24em] text-primary/80 uppercase">
                Direct Desk · Online
              </span>
            </div>

            {/* Title & Contact Info */}
            <div className="mt-5">
              <h3 className="font-display text-xl font-normal text-foreground group-hover:text-primary transition-colors">
                Private WhatsApp Desk
              </h3>
              <p className="mt-1 font-sans text-xs font-medium tracking-wider text-primary">
                {whatsappDisplay}
              </p>
            </div>

            <p className="mt-3 text-[0.825rem] font-light leading-relaxed text-muted-foreground">
              Direct table reservations, dietary preferences, and private dining salon bookings with our maître d'.
            </p>
          </div>

          {/* Bottom Action Footer */}
          <div className="mt-6 border-t border-border/60 pt-3.5 flex items-center justify-between text-xs font-sans font-medium tracking-[0.18em] uppercase text-primary">
            <span>Message Concierge</span>
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </a>

        {/* Instagram Card - Haute Luxury Visual Atelier Panel */}
        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col justify-between rounded-sm border border-border/80 bg-[#0b0c10] p-6 transition-all duration-500 hover:border-primary/70 hover:bg-[#0f1117] hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.14)] hover:-translate-y-1"
        >
          {/* Top Row: Medallion + Category Badge */}
          <div>
            <div className="flex items-center justify-between">
              <div className="relative flex size-11 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary transition-all duration-500 group-hover:scale-105 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]">
                <InstagramIcon className="size-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="font-sans text-[0.625rem] font-semibold tracking-[0.24em] text-primary/80 uppercase">
                Visual Chronicle
              </span>
            </div>

            {/* Title & Contact Info */}
            <div className="mt-5">
              <h3 className="font-display text-xl font-normal text-foreground group-hover:text-primary transition-colors">
                The Instagram Atelier
              </h3>
              <p className="mt-1 font-sans text-xs font-medium tracking-wider text-primary">
                {instagramHandle}
              </p>
            </div>

            <p className="mt-3 text-[0.825rem] font-light leading-relaxed text-muted-foreground">
              Explore our daily culinary artistry, seasonal degustation previews, and the ambient grandeur of our dining rooms.
            </p>
          </div>

          {/* Bottom Action Footer */}
          <div className="mt-6 border-t border-border/60 pt-3.5 flex items-center justify-between text-xs font-sans font-medium tracking-[0.18em] uppercase text-primary">
            <span>Explore Chronicle</span>
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </a>

        {/* Facebook Card - Haute Luxury Society Panel */}
        <a
          href={facebook}
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col justify-between rounded-sm border border-border/80 bg-[#0b0c10] p-6 transition-all duration-500 hover:border-primary/70 hover:bg-[#0f1117] hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.14)] hover:-translate-y-1"
        >
          {/* Top Row: Medallion + Category Badge */}
          <div>
            <div className="flex items-center justify-between">
              <div className="relative flex size-11 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary transition-all duration-500 group-hover:scale-105 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]">
                <FacebookIcon className="size-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="font-sans text-[0.625rem] font-semibold tracking-[0.24em] text-primary/80 uppercase">
                Official Society
              </span>
            </div>

            {/* Title & Contact Info */}
            <div className="mt-5">
              <h3 className="font-display text-xl font-normal text-foreground group-hover:text-primary transition-colors">
                MAJHA Dining Guild
              </h3>
              <p className="mt-1 font-sans text-xs font-medium tracking-wider text-primary">
                Official Facebook Society
              </p>
            </div>

            <p className="mt-3 text-[0.825rem] font-light leading-relaxed text-muted-foreground">
              Invitations to seasonal gala dinners, sommelier tastings, and milestones celebrating our culinary journey.
            </p>
          </div>

          {/* Bottom Action Footer */}
          <div className="mt-6 border-t border-border/60 pt-3.5 flex items-center justify-between text-xs font-sans font-medium tracking-[0.18em] uppercase text-primary">
            <span>Enter Society</span>
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </a>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        variant === "vertical" ? "flex-col" : "flex-row",
        className
      )}
    >
      {/* WhatsApp Button */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Concierge (+91 94637 37763)"
        title="WhatsApp Concierge (+91 94637 37763)"
        className="group relative flex size-9 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_18px_rgba(212,175,55,0.3)]"
      >
        <span className="absolute -top-0.5 -right-0.5 flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        <WhatsAppIcon className="size-4 transition-transform duration-300 group-hover:scale-110" />
      </a>

      {/* Instagram Button */}
      <a
        href={instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram (@official.karandeep_)"
        title="Instagram Chronicle (@official.karandeep_)"
        className="group relative flex size-9 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_18px_rgba(212,175,55,0.3)]"
      >
        <InstagramIcon className="size-4 transition-transform duration-300 group-hover:scale-110" />
      </a>

      {/* Facebook Button */}
      <a
        href={facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook Profile"
        title="Connect on Facebook"
        className="group relative flex size-9 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_18px_rgba(212,175,55,0.3)]"
      >
        <FacebookIcon className="size-4 transition-transform duration-300 group-hover:scale-110" />
      </a>

      {showLabels && (
        <span className="font-sans text-[0.6875rem] tracking-wider text-muted-foreground uppercase">
          Social Channels
        </span>
      )}
    </div>
  );
}

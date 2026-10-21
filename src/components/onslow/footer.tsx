import { RESTAURANT } from "./site-data";
import { useReservation } from "./reservation-context";
import { usePolicies } from "./policies-context";
import { useConcierge } from "./concierge-context";
import { LuxurySocialLinks } from "./social-icons";
import type { PolicyTabId } from "./policies-data";
import {
  ShieldCheck,
  FileText,
  Crown,
  CalendarCheck,
  UtensilsCrossed,
  Wine,
  Cookie,
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Award,
  ChevronRight,
} from "lucide-react";

export function Footer() {
  const { openReservation } = useReservation();
  const { openPolicy } = usePolicies();
  const { openConcierge } = useConcierge();

  const handleOpenPolicy = (tab: PolicyTabId) => {
    openPolicy(tab);
  };

  return (
    <footer className="relative border-t border-border/80 bg-ink text-foreground overflow-hidden">
      {/* Subtle luxury ambient gold glow in the background — hardware accelerated */}
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[650px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)]" />

      {/* Top Luxury Accreditations Ribbon */}
      <div className="border-b border-border/40 bg-[#07080b]/80 backdrop-blur-md">
        <div className="mx-auto max-w-[1440px] px-6 py-4 md:px-10 lg:px-12">
          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/90 font-light">
              <Award className="size-4 text-primary shrink-0" />
              <span>Top Quality Standards</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/90 font-light">
              <Sparkles className="size-4 text-primary shrink-0" />
              <span>Freshly Roasted Coffee</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/90 font-light">
              <UtensilsCrossed className="size-4 text-primary shrink-0" />
              <span>Dietary Friendly</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/90 font-light">
              <ShieldCheck className="size-4 text-primary shrink-0" />
              <span>Safe & Secure Bookings</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20 lg:px-12">
        {/* The Digital Salon & Patron Inquiries */}
        <div className="mb-16 border-b border-border/70 pb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-primary">✦</span>
                <span className="font-brand text-[0.6875rem] font-semibold tracking-[0.28em] text-primary uppercase">
                  MAJHA · STAY CONNECTED
                </span>
                <span className="text-xs text-primary">✦</span>
              </div>
              <h2 className="mt-2.5 font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-foreground tracking-tight">
                Customer Support & Social Links
              </h2>
              <p className="mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                Connect directly with our team for table reservations, event questions, or follow our updates on social media.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 text-xs text-primary font-sans font-medium tracking-widest uppercase">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Support Active · 8:00 AM – Late</span>
            </div>
          </div>

          <LuxurySocialLinks variant="cards" />
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Maison MAJHA */}
          <div className="space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="relative size-13 md:size-14 shrink-0 rounded-full overflow-hidden p-0.5 bg-gradient-to-br from-[#f5e3b5] via-[#d4af37] to-[#8a7322] shadow-[0_0_20px_rgba(212,175,55,0.35)]">
                <img
                  src="/majha-logo.png"
                  alt="MAJHA Café & Restaurant Logo"
                  width={56}
                  height={56}
                  className="size-full rounded-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-brand text-2xl font-bold tracking-[0.24em] text-foreground md:text-[1.75rem]">
                    MAJHA
                  </span>
                  <span className="text-[0.6rem] text-primary">✦</span>
                </div>
                <p className="mt-0.5 font-sans text-[0.55rem] font-medium tracking-[0.26em] text-primary uppercase">
                  Café & Restaurant
                </p>
              </div>
            </div>

            <p className="text-[0.875rem] leading-relaxed text-muted-foreground font-light">
              A welcoming café and restaurant serving freshly roasted coffee, delicious bakery treats, and memorable evening dinners with warm hospitality.
            </p>

            {/* Operating Hours Snippet */}
            <div className="rounded-sm border border-border/60 bg-secondary/30 p-3.5 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-primary font-medium tracking-wide">
                <Clock className="size-3.5" />
                <span>Opening Hours</span>
              </div>
              <div className="space-y-1 text-muted-foreground font-light text-[0.8rem]">
                <div className="flex justify-between">
                  <span>Café & Coffee:</span>
                  <span className="text-foreground">Daily 8:00 AM – 4:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Dinner Service:</span>
                  <span className="text-foreground">Tue – Sun 5:30 PM – 11:30 PM</span>
                </div>
              </div>
            </div>

            {/* Social channels icons */}
            <div className="pt-2">
              <p className="font-sans text-[0.625rem] font-semibold tracking-[0.2em] text-primary uppercase mb-2">
                Follow Us
              </p>
              <LuxurySocialLinks variant="horizontal" />
            </div>

            <div className="flex flex-wrap items-center gap-2 text-[0.65rem] text-primary/80 font-sans tracking-[0.16em] uppercase">
              <span>EST. 2024</span>
              <span>·</span>
              <span>FINE DINING</span>
              <span>·</span>
              <span>FRESH COFFEE</span>
            </div>
          </div>

          {/* Column 2: Visiting & Contact */}
          <div className="space-y-5">
            <p className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
              Visiting & Contact
            </p>
            <address className="space-y-4 text-[0.875rem] not-italic leading-relaxed text-muted-foreground font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 text-primary shrink-0 mt-1" />
                <div>
                  <a
                    href={RESTAURANT.directions}
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-colors duration-300 hover:text-primary"
                  >
                    {RESTAURANT.address}
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground/75">
                    Free valet parking at the main entrance.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="size-4 text-primary shrink-0" />
                <button
                  type="button"
                  onClick={openConcierge}
                  className="font-sans text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary cursor-pointer text-left"
                >
                  {RESTAURANT.phoneDisplay}
                </button>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="size-4 text-primary shrink-0" />
                <a
                  href="mailto:concierge@majha-luxury.com"
                  className="text-xs transition-colors duration-300 hover:text-primary"
                >
                  concierge@majha-luxury.com
                </a>
              </div>

              <div className="border-t border-border/40 pt-3 text-xs text-muted-foreground/80">
                <p className="font-medium text-foreground">Special Orders & Inquiries:</p>
                <p className="text-[0.78rem] text-muted-foreground">
                  Contact our team for special party requests or drink pairings.
                </p>
              </div>
            </address>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-5">
            <p className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
              Explore Our Site
            </p>
            <ul className="space-y-2.5 text-[0.825rem] text-muted-foreground font-light">
              <li>
                <a href="#about" className="transition-colors duration-300 hover:text-primary flex items-center gap-1.5">
                  <span className="text-[0.6rem] text-primary">✦</span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="transition-colors duration-300 hover:text-primary flex items-center gap-1.5">
                  <span className="text-[0.6rem] text-primary">✦</span>
                  Café & Breakfast
                </a>
              </li>
              <li>
                <a href="#signatures" className="transition-colors duration-300 hover:text-primary flex items-center gap-1.5">
                  <span className="text-[0.6rem] text-primary">✦</span>
                  Signature Dishes
                </a>
              </li>
              <li>
                <a href="#experience" className="transition-colors duration-300 hover:text-primary flex items-center gap-1.5">
                  <span className="text-[0.6rem] text-primary">✦</span>
                  What We Offer
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition-colors duration-300 hover:text-primary flex items-center gap-1.5">
                  <span className="text-[0.6rem] text-primary">✦</span>
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="transition-colors duration-300 hover:text-primary flex items-center gap-1.5">
                  <span className="text-[0.6rem] text-primary">✦</span>
                  Guest Reviews
                </a>
              </li>
              <li>
                <a href="/vouchers" className="transition-colors duration-300 hover:text-primary flex items-center gap-1.5 text-primary font-medium">
                  <span className="text-[0.6rem] text-primary">✦</span>
                  Gift Vouchers
                </a>
              </li>
              <li>
                <a href="/#faq" className="transition-colors duration-300 hover:text-primary flex items-center gap-1.5">
                  <span className="text-[0.6rem] text-primary">✦</span>
                  Frequently Asked Questions
                </a>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => openReservation({ experience: "dinner" })}
                  className="text-left font-medium text-primary hover:underline transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-[0.6rem]">✦</span>
                  Book Evening Dinner
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openReservation({ experience: "private" })}
                  className="text-left font-medium text-primary hover:underline transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-[0.6rem]">✦</span>
                  Private Dining Rooms
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Patron Charters & Legal Protocols (The Comprehensive Luxury Policies) */}
          <div className="space-y-5">
            <div>
              <p className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
                Guest Charters & Policies
              </p>
              <p className="mt-1 text-xs text-muted-foreground/75 font-light">
                Our standards of discretion, culinary safety, and dining decorum.
              </p>
            </div>

            <ul className="space-y-2 text-[0.825rem]">
              <li>
                <button
                  type="button"
                  onClick={() => handleOpenPolicy("privacy")}
                  className="group flex w-full items-center justify-between rounded-sm border border-border/50 bg-secondary/20 p-2.5 text-left text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50 hover:text-foreground cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="size-4 text-primary shrink-0 transition-transform group-hover:scale-110" />
                    <div>
                      <p className="font-medium text-xs text-foreground group-hover:text-primary transition-colors">
                        Privacy & Confidentiality
                      </p>
                      <p className="text-[0.7rem] text-muted-foreground/70 font-light">
                        Discretion & data protection
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="size-3 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => handleOpenPolicy("terms")}
                  className="group flex w-full items-center justify-between rounded-sm border border-border/50 bg-secondary/20 p-2.5 text-left text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50 hover:text-foreground cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="size-4 text-primary shrink-0 transition-transform group-hover:scale-110" />
                    <div>
                      <p className="font-medium text-xs text-foreground group-hover:text-primary transition-colors">
                        Terms of Dining Service
                      </p>
                      <p className="text-[0.7rem] text-muted-foreground/70 font-light">
                        Seating times, age & decorum
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="size-3 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => handleOpenPolicy("dress-code")}
                  className="group flex w-full items-center justify-between rounded-sm border border-border/50 bg-secondary/20 p-2.5 text-left text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50 hover:text-foreground cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Crown className="size-4 text-primary shrink-0 transition-transform group-hover:scale-110" />
                    <div>
                      <p className="font-medium text-xs text-foreground group-hover:text-primary transition-colors">
                        Dress Code & Etiquette
                      </p>
                      <p className="text-[0.7rem] text-muted-foreground/70 font-light">
                        Evening elegance & scent advisory
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="size-3 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => handleOpenPolicy("cancellation")}
                  className="group flex w-full items-center justify-between rounded-sm border border-border/50 bg-secondary/20 p-2.5 text-left text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50 hover:text-foreground cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <CalendarCheck className="size-4 text-primary shrink-0 transition-transform group-hover:scale-110" />
                    <div>
                      <p className="font-medium text-xs text-foreground group-hover:text-primary transition-colors">
                        Cancellations & Deposits
                      </p>
                      <p className="text-[0.7rem] text-muted-foreground/70 font-light">
                        24h notice & holding guarantees
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="size-3 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => handleOpenPolicy("dietary")}
                  className="group flex w-full items-center justify-between rounded-sm border border-border/50 bg-secondary/20 p-2.5 text-left text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50 hover:text-foreground cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <UtensilsCrossed className="size-4 text-primary shrink-0 transition-transform group-hover:scale-110" />
                    <div>
                      <p className="font-medium text-xs text-foreground group-hover:text-primary transition-colors">
                        Allergen & Dietary Safety
                      </p>
                      <p className="text-[0.7rem] text-muted-foreground/70 font-light">
                        48h notice, Halal & kitchen protocols
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="size-3 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => handleOpenPolicy("private-events")}
                  className="group flex w-full items-center justify-between rounded-sm border border-border/50 bg-secondary/20 p-2.5 text-left text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50 hover:text-foreground cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Wine className="size-4 text-primary shrink-0 transition-transform group-hover:scale-110" />
                    <div>
                      <p className="font-medium text-xs text-foreground group-hover:text-primary transition-colors">
                        Private Salons & Corkage
                      </p>
                      <p className="text-[0.7rem] text-muted-foreground/70 font-light">
                        $95 cellar fee & buyout terms
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="size-3 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Navigation Bar */}
        <div className="mt-14 border-t border-border/60 pt-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1.5">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} MAJHA Café & Restaurant. All rights reserved.
              </p>
              <p className="font-sans text-[0.625rem] tracking-[0.2em] text-primary/80 uppercase">
                Haute Cuisine · Artisanal Lounge · Bespoke Hospitality · Grand Promenade
              </p>
            </div>

            {/* Direct Quick Links to Policies */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground font-light">
              <button
                type="button"
                onClick={() => handleOpenPolicy("privacy")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleOpenPolicy("terms")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Terms & Conditions
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleOpenPolicy("dress-code")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Dress Code
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleOpenPolicy("dietary")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Allergen Charter
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleOpenPolicy("cancellation")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Cancellation Policy
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleOpenPolicy("privacy")}
                className="inline-flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
              >
                <Cookie className="size-3 text-primary/70" />
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, RESTAURANT } from "./site-data";
import { useReservation } from "./reservation-context";
import { LuxurySocialLinks, WhatsAppIcon, InstagramIcon, FacebookIcon } from "./social-icons";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openReservation } = useReservation();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-primary/20 bg-[#0c0d12]/95 backdrop-blur-md shadow-[0_8px_35px_rgba(0,0,0,0.85)]"
          : "border-b border-white/10 bg-gradient-to-b from-black/90 via-black/50 to-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:h-22 md:px-8 lg:px-10 xl:px-12">
        {/* Left: Brand Logo & Wordmark */}
        <div className="flex items-center shrink-0">
          <a
            href="/"
            className="group flex items-center gap-3 md:gap-3.5 transition-all duration-300"
          >
            <div className="relative size-10 md:size-11 shrink-0 rounded-full overflow-hidden p-0.5 bg-gradient-to-br from-[#f5e3b5] via-[#d4af37] to-[#8a7322] shadow-[0_0_15px_rgba(212,175,55,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(212,175,55,0.6)]">
              <img
                src="/majha-logo.png"
                alt="MAJHA Café & Restaurant Logo"
                width={44}
                height={44}
                className="size-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="flex items-center gap-1.5">
                <span className="font-brand text-lg font-bold tracking-[0.24em] text-foreground transition-colors duration-300 group-hover:text-primary md:text-[1.35rem]">
                  MAJHA
                </span>
                <span className="text-[0.65rem] text-primary">✦</span>
              </div>
              <span className="mt-0.5 font-sans text-[0.52rem] font-medium tracking-[0.28em] text-primary uppercase">
                Café & Restaurant
              </span>
            </div>
          </a>

          {/* Architectural Hairline Divider */}
          <div className="hidden lg:block h-7 w-px bg-white/15 ml-5 xl:ml-7" />
        </div>

        {/* Center: Desktop Navigation — Perfectly Centered with Room to Breathe */}
        <nav
          className="hidden flex-1 items-center justify-center gap-3.5 xl:gap-5 2xl:gap-6.5 lg:flex px-4"
          aria-label="Main"
        >
          {NAV_LINKS.map((link) => {
            const isVouchers = link.href.includes("vouchers");
            const isSecondary =
              link.label === "About" || link.label === "Reviews";

            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "whitespace-nowrap font-sans text-[0.6875rem] font-medium tracking-[0.16em] uppercase transition-all duration-300 relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                  isSecondary ? "hidden xl:inline-block" : "inline-block",
                  isVouchers
                    ? "text-primary hover:text-primary font-semibold flex items-center gap-1"
                    : scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-foreground/80 hover:text-foreground"
                )}
              >
                {isVouchers && <span className="text-[0.55rem] text-primary">✦</span>}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Actions, Concierge & Reservation CTA */}
        <div className="flex shrink-0 items-center gap-3 md:gap-3.5 xl:gap-4">
          {/* Haute Luxury WhatsApp Concierge Pill */}
          <a
            href={RESTAURANT.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden xl:inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-3 py-1.5 font-sans text-[0.625rem] font-semibold tracking-[0.18em] uppercase text-primary transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            title="Chat on WhatsApp"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <WhatsAppIcon className="size-3.5 text-primary" />
            <span>WhatsApp</span>
          </a>

          {/* Social Links on Ultra-Wide screens */}
          <div className="hidden 2xl:flex items-center border-l border-white/10 pl-3">
            <LuxurySocialLinks />
          </div>

          {/* Primary Reservation CTA Button */}
          <button
            type="button"
            onClick={() => openReservation({ experience: "dinner" })}
            className="whitespace-nowrap hidden border border-primary/80 bg-primary/10 px-5 py-2.5 font-sans text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-primary backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] cursor-pointer md:inline-block"
          >
            Reserve a Table
          </button>

          {/* Mobile Drawer Toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="p-2 text-foreground transition-colors duration-300 cursor-pointer lg:hidden"
          >
            {open ? (
              <X className="size-6 text-primary" strokeWidth={1.5} />
            ) : (
              <Menu className="size-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-primary/20 bg-[#0c0d12]/98 px-6 py-6 backdrop-blur-xl lg:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain animate-in fade-in slide-in-from-top-3 duration-300">
          <nav className="flex flex-col" aria-label="Mobile">
            <div className="flex items-center gap-3.5 pb-5 mb-2 border-b border-border/40">
              <div className="relative size-12 shrink-0 rounded-full overflow-hidden p-0.5 bg-gradient-to-br from-[#f5e3b5] via-[#d4af37] to-[#8a7322] shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                <img
                  src="/majha-logo.png"
                  alt="MAJHA Logo"
                  width={48}
                  height={48}
                  className="size-full rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-brand text-lg font-bold tracking-[0.24em] text-foreground">
                    MAJHA
                  </span>
                  <span className="text-[0.65rem] text-primary">✦</span>
                </div>
                <span className="mt-0.5 font-sans text-[0.52rem] font-medium tracking-[0.28em] text-primary uppercase">
                  Café & Restaurant
                </span>
              </div>
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3.5 font-display text-lg text-foreground transition-colors hover:text-primary last:border-0"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openReservation({ experience: "dinner" });
              }}
              className="mt-6 mb-2 border border-primary bg-primary px-6 py-3.5 text-center font-sans text-xs font-semibold tracking-[0.18em] uppercase text-primary-foreground shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
            >
              Reserve a Table
            </button>

            {/* Mobile Drawer Social Links */}
            <div className="mt-4 border-t border-border/40 pt-4 text-center">
              <p className="font-sans text-[0.625rem] font-semibold tracking-[0.2em] text-primary uppercase mb-2.5">
                Connect With Us
              </p>
              <div className="flex justify-center">
                <LuxurySocialLinks />
              </div>
              <p className="mt-2 text-[0.7rem] text-muted-foreground font-light">
                WhatsApp: <strong className="text-foreground">{RESTAURANT.socials.whatsappDisplay}</strong>
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

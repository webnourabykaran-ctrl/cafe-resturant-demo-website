import { useState } from "react";
import { RESTAURANT } from "./site-data";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "./social-icons";
import { MessageSquare, Sparkles, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingSocials() {
  const [isExpanded, setIsExpanded] = useState(true);
  const { whatsapp, instagram, facebook, whatsappDisplay, instagramHandle } = RESTAURANT.socials;

  return (
    <>
      <aside
      aria-label="Direct Social Channels & Concierge"
      className="fixed bottom-6 right-6 z-40 hidden sm:block animate-in fade-in slide-in-from-bottom-6 duration-700"
    >
      <div className="flex items-center gap-2">
        {isExpanded ? (
          <div className="flex items-center gap-2 rounded-full border border-primary/40 bg-[#0c0d12]/95 p-1.5 pr-3 text-foreground backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(212,175,55,0.18)] transition-all duration-300">
            {/* WhatsApp Link with Live Radar Pulse */}
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              title={`WhatsApp Concierge: ${whatsappDisplay}`}
              className="group relative flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 py-1.5 pl-2.5 pr-3.5 text-xs text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]"
            >
              <div className="relative flex size-5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <WhatsAppIcon className="size-3.5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="font-sans text-[0.6875rem] font-semibold tracking-wider uppercase">
                WhatsApp Desk
              </span>
            </a>

            {/* Instagram Link */}
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              title={`Instagram: ${instagramHandle}`}
              className="group flex size-8 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_18px_rgba(212,175,55,0.3)]"
            >
              <InstagramIcon className="size-4 transition-transform duration-300 group-hover:rotate-6" />
            </a>

            {/* Facebook Link */}
            <a
              href={facebook}
              target="_blank"
              rel="noreferrer"
              title="Connect on Facebook"
              className="group flex size-8 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_18px_rgba(212,175,55,0.3)]"
            >
              <FacebookIcon className="size-4 transition-transform duration-300 group-hover:scale-110" />
            </a>

            {/* Minimize Toggle */}
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              aria-label="Minimize social links"
              className="ml-1 p-1 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer"
            >
              <X className="size-3.5" />
            </button>
          </div>
        ) : (
          /* Collapsed Pill Button */
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="group flex items-center gap-2 rounded-full border border-primary/50 bg-[#0c0d12]/95 px-3.5 py-2 text-foreground backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 hover:border-primary hover:scale-105 cursor-pointer"
          >
            <div className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </div>
            <span className="font-brand text-[0.6875rem] font-bold tracking-[0.2em] text-primary uppercase">
              Socials
            </span>
            <ChevronRight className="size-3 text-primary transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        )}
      </div>
    </aside>

    {/* Mobile Haute Quick Concierge Touchpoint — Butter Smooth 1-Tap */}
    <div className="fixed bottom-5 right-5 z-40 sm:hidden">
      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Direct WhatsApp Concierge"
        className="relative flex size-12 items-center justify-center rounded-full border border-primary/60 bg-[#0c0d12]/95 text-primary shadow-[0_10px_25px_rgba(0,0,0,0.85),0_0_20px_rgba(212,175,55,0.3)] active:scale-90 transition-transform"
      >
        <span className="absolute -top-0.5 -right-0.5 flex size-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
        </span>
        <WhatsAppIcon className="size-5" />
      </a>
    </div>
  </>
  );
}

import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  X,
  Phone,
  PhoneCall,
  Copy,
  Check,
  MessageSquare,
  Mail,
  Clock,
  Sparkles,
  Crown,
  Calendar,
  MapPin,
} from "lucide-react";
import { useConcierge } from "./concierge-context";
import { useReservation } from "./reservation-context";
import { RESTAURANT } from "./site-data";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "./social-icons";
import { toast } from "sonner";

export function ConciergeModal() {
  const { isOpen, setIsOpen } = useConcierge();
  const { openReservation } = useReservation();
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(RESTAURANT.phoneDisplay);
    setCopied(true);
    toast.success("Concierge phone number copied to clipboard", {
      description: `${RESTAURANT.phoneDisplay} · Maison MAJHA Concierge Desk`,
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleBookTable = () => {
    setIsOpen(false);
    openReservation({ experience: "dinner" });
  };

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Portal>
        {/* Backdrop */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Modal Content */}
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-[95vw] max-w-lg max-h-[92vh] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded-sm border border-primary/40 bg-[#0c0d12] p-6 text-foreground shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.18)] duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:p-8">
          {/* Close button */}
          <DialogPrimitive.Close
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full border border-primary/30 p-2 text-primary/70 transition-all hover:border-primary hover:bg-primary/10 hover:text-primary focus:outline-none cursor-pointer"
          >
            <X className="size-4" />
          </DialogPrimitive.Close>

          {/* Header */}
          <div className="text-center">
            <div className="mx-auto mb-3.5 flex justify-center">
              <div className="relative size-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-br from-[#f5e3b5] via-[#d4af37] to-[#8a7322] shadow-[0_0_20px_rgba(212,175,55,0.35)]">
                <img
                  src="/majha-logo.png"
                  alt="MAJHA Logo"
                  width={56}
                  height={56}
                  className="size-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="text-xs text-primary">✦</span>
              <span className="font-brand text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                CONTACT & INQUIRIES
              </span>
              <span className="text-xs text-primary">✦</span>
            </div>
            <DialogPrimitive.Title className="mt-2 font-display text-2xl font-normal text-foreground sm:text-3xl">
              Get in Touch With Our Team
            </DialogPrimitive.Title>
            <DialogPrimitive.Description className="mt-1.5 font-sans text-xs text-muted-foreground font-light tracking-wide">
              We are here to assist you with table bookings, questions, and private event inquiries.
            </DialogPrimitive.Description>
          </div>

          {/* Phone Showcase Card */}
          <div className="mt-6 rounded-sm border border-primary/40 bg-gradient-to-b from-primary/10 via-secondary/20 to-secondary/10 p-5 text-center">
            <span className="font-sans text-[0.65rem] font-semibold tracking-[0.22em] text-primary uppercase">
              Direct Phone Line
            </span>
            <div className="mt-2 font-display text-2xl font-normal tracking-wider text-foreground sm:text-3xl">
              {RESTAURANT.phoneDisplay}
            </div>
            <p className="mt-1 font-sans text-[0.7rem] text-muted-foreground font-light">
              Available every day to assist you
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
              <a
                href={`tel:${RESTAURANT.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all hover:bg-primary/90 cursor-pointer"
              >
                <PhoneCall className="size-3.5" />
                <span>Call Directly</span>
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-2 rounded-sm border border-border/80 bg-secondary/50 px-4 py-2 font-sans text-xs font-medium uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary cursor-pointer"
              >
                {copied ? <Check className="size-3.5 text-primary" /> : <Copy className="size-3.5" />}
                <span>{copied ? "Copied" : "Copy Number"}</span>
              </button>
            </div>
          </div>

          {/* Alternate Contact Options */}
          <div className="mt-5 space-y-2.5">
            {/* WhatsApp Direct Action */}
            <a
              href={RESTAURANT.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-sm border border-emerald-500/40 bg-emerald-950/20 p-3 text-xs text-muted-foreground transition-all hover:border-emerald-400 hover:bg-emerald-950/40 hover:text-foreground group"
            >
              <div className="flex items-center gap-3">
                <div className="relative flex size-7 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="size-4" />
                  <span className="absolute -top-0.5 -right-0.5 flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-emerald-400 transition-colors">
                    Chat on WhatsApp
                  </p>
                  <p className="text-[0.7rem] text-muted-foreground font-light">
                    {RESTAURANT.socials.whatsappDisplay} · Fast table inquiries and support
                  </p>
                </div>
              </div>
              <span className="font-sans text-[0.65rem] tracking-wider text-emerald-400 uppercase font-semibold">
                Chat
              </span>
            </a>

            {/* Email Concierge */}
            <a
              href="mailto:concierge@majha-luxury.com"
              className="flex items-center justify-between rounded-sm border border-border/60 bg-secondary/25 p-3 text-xs text-muted-foreground transition-all hover:border-primary/50 hover:bg-secondary/50 hover:text-foreground"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-7 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                  <Mail className="size-3.5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Send an Email</p>
                  <p className="text-[0.7rem] text-muted-foreground font-light">concierge@majha-luxury.com</p>
                </div>
              </div>
              <span className="font-sans text-[0.65rem] tracking-wider text-primary uppercase">Write</span>
            </a>

            {/* Social Grid: Instagram & Facebook */}
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={RESTAURANT.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 rounded-sm border border-pink-500/30 bg-pink-950/15 p-2.5 text-xs text-muted-foreground transition-all hover:border-pink-400/70 hover:bg-pink-950/30 hover:text-foreground group"
              >
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-pink-400/40 bg-pink-500/10 text-pink-400 group-hover:scale-110 transition-transform">
                  <InstagramIcon className="size-3.5" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground text-[0.75rem] truncate group-hover:text-pink-400">Instagram</p>
                  <p className="text-[0.65rem] text-muted-foreground font-light truncate">{RESTAURANT.socials.instagramHandle}</p>
                </div>
              </a>

              <a
                href={RESTAURANT.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 rounded-sm border border-blue-500/30 bg-blue-950/15 p-2.5 text-xs text-muted-foreground transition-all hover:border-blue-400/70 hover:bg-blue-950/30 hover:text-foreground group"
              >
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <FacebookIcon className="size-3.5" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground text-[0.75rem] truncate group-hover:text-blue-400">Facebook</p>
                  <p className="text-[0.65rem] text-muted-foreground font-light truncate">MAJHA Official</p>
                </div>
              </a>
            </div>

            {/* Instant Table Booking */}
            <button
              type="button"
              onClick={handleBookTable}
              className="flex w-full items-center justify-between rounded-sm border border-border/60 bg-secondary/25 p-3 text-xs text-muted-foreground transition-all hover:border-primary/50 hover:bg-secondary/50 hover:text-foreground cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-7 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                  <Calendar className="size-3.5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Instant Online Table Booking</p>
                  <p className="text-[0.7rem] text-muted-foreground font-light">Select sitting time & guest preferences</p>
                </div>
              </div>
              <span className="font-sans text-[0.65rem] tracking-wider text-primary uppercase">Reserve</span>
            </button>
          </div>

          {/* Service Hours & Location Note */}
          <div className="mt-6 border-t border-border/50 pt-4 text-xs text-muted-foreground font-light space-y-2">
            <div className="flex items-center gap-2 text-foreground">
              <Clock className="size-3.5 text-primary shrink-0" />
              <span>Desk Availability: 8:00 AM – 11:30 PM (Mon – Sun)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="size-3.5 text-primary shrink-0" />
              <span>Complimentary Valet & Chauffeur drop-off at the porte-cochère.</span>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

import { useState, useMemo } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  X,
  ShieldCheck,
  FileText,
  Sparkles,
  CalendarCheck,
  UtensilsCrossed,
  Wine,
  Search,
  Printer,
  Lock,
  Clock,
  PhoneCall,
  Crown,
} from "lucide-react";
import { usePolicies } from "./policies-context";
import { useReservation } from "./reservation-context";
import { LUXURY_POLICIES, type PolicyTabId } from "./policies-data";
import { RESTAURANT } from "./site-data";
import { cn } from "@/lib/utils";

const TABS: { id: PolicyTabId; label: string; icon: React.ElementType; shortLabel: string }[] = [
  { id: "privacy", label: "Privacy & Confidentiality", shortLabel: "Privacy", icon: ShieldCheck },
  { id: "terms", label: "Terms & Dining Agreement", shortLabel: "Terms", icon: FileText },
  { id: "dress-code", label: "Dress Code & Etiquette", shortLabel: "Dress Code", icon: Crown },
  { id: "cancellation", label: "Reservation & Cancellations", shortLabel: "Bookings", icon: CalendarCheck },
  { id: "dietary", label: "Dietary & Allergen Charter", shortLabel: "Allergens", icon: UtensilsCrossed },
  { id: "private-events", label: "Private Salons & Corkage", shortLabel: "Private", icon: Wine },
];

export function PoliciesModal() {
  const { isOpen, setIsOpen, activeTab, setActiveTab } = usePolicies();
  const { openReservation } = useReservation();
  const [searchQuery, setSearchQuery] = useState("");

  const policy = LUXURY_POLICIES[activeTab];

  // Simple keyword filtering if user is searching within charter
  const filteredContent = useMemo(() => {
    if (!searchQuery.trim()) return policy.content;
    const q = searchQuery.toLowerCase();
    return policy.content.filter(
      (sec) =>
        sec.heading.toLowerCase().includes(q) ||
        sec.subheading?.toLowerCase().includes(q) ||
        sec.paragraphs.some((p) => p.toLowerCase().includes(q)) ||
        sec.bulletPoints?.some((b) => b.toLowerCase().includes(q)) ||
        sec.callout?.title.toLowerCase().includes(q) ||
        sec.callout?.text.toLowerCase().includes(q)
    );
  }, [policy, searchQuery]);

  const handlePrint = () => {
    window.print();
  };

  const handleBookTable = () => {
    setIsOpen(false);
    openReservation({ experience: "dinner" });
  };

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Portal>
        {/* Backdrop with silk blur */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Modal Window */}
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-[95vw] max-w-4xl max-h-[92vh] translate-x-[-50%] translate-y-[-50%] flex flex-col overflow-hidden rounded-sm border border-primary/40 bg-[#0a0b0f] text-foreground shadow-[0_30px_90px_rgba(0,0,0,0.98),0_0_40px_rgba(212,175,55,0.18)] duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          {/* Header Bar */}
          <div className="relative border-b border-border/70 bg-[#0e1017] px-6 py-5 sm:px-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                  <Crown className="size-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-brand text-xs font-bold tracking-[0.25em] text-foreground uppercase">
                      MAJHA
                    </span>
                    <span className="text-[0.6rem] text-primary">✦</span>
                    <span className="font-sans text-[0.65rem] tracking-[0.2em] text-primary uppercase">
                      Patron Charter & Legal Sanctuary
                    </span>
                  </div>
                  <DialogPrimitive.Title className="font-display text-xl font-normal text-foreground sm:text-2xl">
                    {policy.title}
                  </DialogPrimitive.Title>
                </div>
              </div>

              {/* Close Button */}
              <DialogPrimitive.Close
                aria-label="Close"
                className="rounded-full border border-primary/30 p-2 text-primary/70 transition-all hover:border-primary hover:bg-primary/10 hover:text-primary focus:outline-none"
              >
                <X className="size-4" />
              </DialogPrimitive.Close>
            </div>

            {/* Navigation Tabs */}
            <div className="mt-5 -mb-2 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary/20">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id);
                      setSearchQuery("");
                    }}
                    className={cn(
                      "group flex shrink-0 items-center gap-2 rounded-sm border px-3 py-2 text-xs font-medium transition-all duration-200 cursor-pointer",
                      isActive
                        ? "border-primary bg-primary/15 text-primary shadow-[0_0_12px_rgba(212,175,55,0.2)]"
                        : "border-border/60 bg-secondary/30 text-muted-foreground hover:border-primary/50 hover:bg-secondary/70 hover:text-foreground"
                    )}
                  >
                    <Icon className={cn("size-3.5 transition-colors", isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subheader / Search & Meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/40 bg-[#07080b] px-6 py-3 text-xs sm:px-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-2.5 py-0.5 font-sans text-[0.6875rem] text-primary">
                <Sparkles className="size-3" />
                {policy.badge}
              </span>
              <span className="hidden text-muted-foreground/60 md:inline">·</span>
              <span className="hidden text-[0.7rem] text-muted-foreground/80 md:inline">
                Effective: {policy.lastUpdated}
              </span>
              <span className="hidden text-muted-foreground/60 md:inline">·</span>
              <span className="hidden items-center gap-1 text-[0.7rem] text-muted-foreground/80 md:inline-flex">
                <Lock className="size-3 text-primary/70" />
                Verified & Legally Compliant
              </span>
            </div>

            {/* Quick Search in Charter */}
            <div className="relative flex items-center">
              <Search className="absolute left-2.5 size-3.5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search this charter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-44 rounded-sm border border-border/70 bg-secondary/40 py-1 pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none sm:w-56"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 text-xs text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Scrollable Policy Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-8 scrollbar-thin scrollbar-thumb-primary/20">
            {/* Charter Introduction Banner */}
            <div className="relative overflow-hidden rounded-sm border border-primary/20 bg-gradient-to-r from-primary/10 via-secondary/20 to-transparent p-5 sm:p-6">
              <p className="font-display text-base sm:text-lg italic text-foreground leading-relaxed">
                "{policy.summary}"
              </p>
              <div className="mt-4 flex items-center gap-2 font-sans text-[0.6875rem] tracking-[0.2em] text-primary uppercase">
                <span>Maison MAJHA</span>
                <span>·</span>
                <span>Grand Promenade Protocol</span>
              </div>
            </div>

            {/* Highlight Highlights Grid */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {policy.highlights.map((h, i) => (
                <div
                  key={i}
                  className="rounded-sm border border-border/60 bg-secondary/20 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-secondary/40"
                >
                  <div className="flex items-center gap-1.5 text-primary">
                    <span className="text-xs">✦</span>
                    <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground">
                      {h.title}
                    </h4>
                  </div>
                  <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted-foreground font-light">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Main Sections */}
            {filteredContent.length === 0 ? (
              <div className="py-12 text-center">
                <Search className="mx-auto size-8 text-muted-foreground/40" />
                <p className="mt-3 text-sm text-muted-foreground font-light">
                  No matching terms found in this charter for "{searchQuery}".
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mt-3 text-xs text-primary underline underline-offset-4"
                >
                  Clear search query
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredContent.map((sec, idx) => (
                  <article
                    key={idx}
                    className="border-b border-border/40 pb-8 last:border-b-0 last:pb-0"
                  >
                    <div className="mb-3">
                      <h3 className="font-display text-xl font-normal text-foreground">
                        {sec.heading}
                      </h3>
                      {sec.subheading && (
                        <p className="mt-0.5 font-sans text-xs tracking-wider text-primary/90 uppercase">
                          {sec.subheading}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3.5 text-[0.875rem] font-light leading-relaxed text-muted-foreground">
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                      <ul className="mt-4 space-y-2.5 text-[0.85rem] text-muted-foreground font-light">
                        {sec.bulletPoints.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <span className="mt-1 text-[0.65rem] text-primary shrink-0">✦</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {sec.callout && (
                      <div
                        className={cn(
                          "mt-5 rounded-sm border p-4 sm:p-5",
                          sec.callout.type === "gold"
                            ? "border-primary/40 bg-primary/10 text-foreground"
                            : sec.callout.type === "bronze"
                            ? "border-bronze/40 bg-secondary/50 text-foreground"
                            : "border-border bg-secondary/30 text-foreground"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <Crown className="size-4 text-primary shrink-0" />
                          <h5 className="font-sans text-xs font-semibold tracking-wider text-primary uppercase">
                            {sec.callout.title}
                          </h5>
                        </div>
                        <p className="mt-2 text-xs sm:text-[0.825rem] font-light leading-relaxed text-muted-foreground">
                          {sec.callout.text}
                        </p>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Luxury Action Bar & Concierge Footnote */}
          <div className="border-t border-border/70 bg-[#0e1017] px-6 py-4 sm:px-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs">
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 text-primary/70" />
                Maître d' Concierge: 10:00 AM – 11:30 PM
              </span>
              <a
                href={`tel:${RESTAURANT.phoneHref}`}
                className="hidden sm:inline-flex items-center gap-1 text-primary hover:underline"
              >
                <PhoneCall className="size-3" />
                {RESTAURANT.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-3 justify-end">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 rounded-sm border border-border/80 bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground hover:border-primary/50 hover:text-foreground cursor-pointer transition-colors"
                title="Print this charter for your records"
              >
                <Printer className="size-3.5" />
                <span className="hidden sm:inline">Print Charter</span>
              </button>

              <button
                type="button"
                onClick={handleBookTable}
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)] cursor-pointer"
              >
                <span>Reserve a Table</span>
                <span className="text-[0.6rem]">✦</span>
              </button>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

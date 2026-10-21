import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/onslow/header";
import { Footer } from "@/components/onslow/footer";
import { ReservationModal } from "@/components/onslow/reservation-modal";
import { PoliciesModal } from "@/components/onslow/policies-modal";
import { ConciergeModal } from "@/components/onslow/concierge-modal";
import { CookieBanner } from "@/components/onslow/cookie-banner";
import { FloatingSocials } from "@/components/onslow/floating-socials";
import { LUXURY_POLICIES, type PolicyTabId } from "@/components/onslow/policies-data";
import { RESTAURANT } from "@/components/onslow/site-data";
import { useReservation } from "@/components/onslow/reservation-context";
import {
  ShieldCheck,
  FileText,
  Crown,
  CalendarCheck,
  UtensilsCrossed,
  Wine,
  Sparkles,
  Lock,
  PhoneCall,
  Mail,
  ArrowLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TITLE = "Privacy & Patron Confidentiality Charter — MAJHA Café & Restaurant";
const DESCRIPTION =
  "Official Privacy Charter for MAJHA Café & Restaurant. Safeguarding patron discretion, high-profile anonymity, and encrypted table reservations.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

const TABS: { id: PolicyTabId; label: string; icon: React.ElementType }[] = [
  { id: "privacy", label: "Privacy Policy", icon: ShieldCheck },
  { id: "terms", label: "Terms of Service", icon: FileText },
  { id: "dress-code", label: "Dress Code", icon: Crown },
  { id: "cancellation", label: "Cancellations", icon: CalendarCheck },
  { id: "dietary", label: "Allergen Charter", icon: UtensilsCrossed },
  { id: "private-events", label: "Private Salons", icon: Wine },
];

function PrivacyPage() {
  const [activeTab, setActiveTab] = useState<PolicyTabId>("privacy");
  const { openReservation } = useReservation();
  const policy = LUXURY_POLICIES[activeTab];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />

      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-12">
          {/* Breadcrumb & Back Link */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-3.5" />
              <span>Return to MAJHA Sanctuary</span>
            </Link>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-sans text-[0.65rem] tracking-[0.2em] text-primary uppercase">
              <Sparkles className="size-3" />
              Official Patron Protocols
            </div>
          </div>

          {/* Page Hero Header */}
          <div className="border-b border-border/70 pb-10">
            <div className="flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              <span>Maison MAJHA</span>
              <span>✦</span>
              <span>Legal Sanctuary</span>
            </div>
            <h1 className="mt-3 font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {policy.title}
            </h1>
            <p className="mt-4 max-w-2xl font-display text-base italic text-muted-foreground sm:text-lg">
              "{policy.summary}"
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground/80 font-light">
              <span>Effective: {policy.lastUpdated}</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-primary">
                <Lock className="size-3" />
                Verified & Legally Enforceable
              </span>
              <span>·</span>
              <span>Jurisdiction: New Zealand & International Dining Law</span>
            </div>
          </div>

          {/* Charter Selector Tabs */}
          <div className="my-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {TABS.map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTab(t.id)}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-sm border px-3.5 py-2 text-xs font-medium transition-all duration-200 cursor-pointer",
                    isActive
                      ? "border-primary bg-primary/15 text-primary shadow-[0_0_12px_rgba(212,175,55,0.2)]"
                      : "border-border/60 bg-secondary/30 text-muted-foreground hover:border-primary/50 hover:bg-secondary/70 hover:text-foreground"
                  )}
                >
                  <Icon className="size-3.5" />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>

          {/* Highlights Grid */}
          <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {policy.highlights.map((h, i) => (
              <div
                key={i}
                className="rounded-sm border border-border/70 bg-card/40 p-4 transition-all hover:border-primary/40"
              >
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="text-xs">✦</span>
                  <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground">
                    {h.title}
                  </h4>
                </div>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-foreground font-light">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Content Articles */}
          <div className="space-y-10 rounded-sm border border-border/60 bg-secondary/15 p-6 sm:p-10">
            {policy.content.map((sec, idx) => (
              <article key={idx} className="border-b border-border/40 pb-8 last:border-b-0 last:pb-0">
                <h2 className="font-display text-2xl font-normal text-foreground">{sec.heading}</h2>
                {sec.subheading && (
                  <p className="mt-1 font-sans text-xs uppercase tracking-wider text-primary">
                    {sec.subheading}
                  </p>
                )}

                <div className="mt-4 space-y-3.5 text-[0.925rem] font-light leading-relaxed text-muted-foreground">
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <ul className="mt-5 space-y-2.5 text-[0.875rem] text-muted-foreground font-light">
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
                      "mt-6 rounded-sm border p-5",
                      sec.callout.type === "gold"
                        ? "border-primary/40 bg-primary/10"
                        : "border-border/80 bg-secondary/50"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Crown className="size-4 text-primary" />
                      <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                        {sec.callout.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-xs sm:text-[0.85rem] font-light leading-relaxed text-muted-foreground">
                      {sec.callout.text}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Concierge Assistance Box */}
          <div className="mt-12 rounded-sm border border-primary/30 bg-gradient-to-r from-primary/10 via-secondary/20 to-transparent p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-normal text-foreground">
                  Questions regarding our Charters?
                </h3>
                <p className="mt-1 max-w-lg text-xs leading-relaxed text-muted-foreground font-light">
                  Our Chief Concierge and Maître d' are pleased to assist with bespoke privacy arrangements, private dining contracts, and dietary consultations.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs">
                  <a
                    href={`tel:${RESTAURANT.phoneHref}`}
                    className="inline-flex items-center gap-1.5 text-primary hover:underline"
                  >
                    <PhoneCall className="size-3.5" />
                    <span>{RESTAURANT.phoneDisplay}</span>
                  </a>
                  <span className="text-muted-foreground/60">·</span>
                  <a
                    href="mailto:concierge@majha-luxury.com"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline"
                  >
                    <Mail className="size-3.5" />
                    <span>concierge@majha-luxury.com</span>
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => openReservation({ experience: "dinner" })}
                className="shrink-0 rounded-sm bg-primary px-6 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] cursor-pointer"
              >
                Reserve Table
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ReservationModal />
      <PoliciesModal />
      <ConciergeModal />
      <CookieBanner />
      <FloatingSocials />
    </div>
  );
}

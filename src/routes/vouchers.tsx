import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useId } from "react";
import { Header } from "@/components/onslow/header";
import { Footer } from "@/components/onslow/footer";
import { ReservationModal } from "@/components/onslow/reservation-modal";
import { PoliciesModal } from "@/components/onslow/policies-modal";
import { ConciergeModal } from "@/components/onslow/concierge-modal";
import { CookieBanner } from "@/components/onslow/cookie-banner";
import { FloatingSocials } from "@/components/onslow/floating-socials";
import { useReservation } from "@/components/onslow/reservation-context";
import { useConcierge } from "@/components/onslow/concierge-context";
import { RESTAURANT } from "@/components/onslow/site-data";
import { toast } from "sonner";
import {
  Gift,
  Sparkles,
  Crown,
  Check,
  CheckCircle2,
  Copy,
  Printer,
  Mail,
  Send,
  Package,
  Calendar,
  ShieldCheck,
  Clock,
  ArrowRight,
  ArrowLeft,
  PhoneCall,
  Utensils,
  Wine,
  Coffee,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TITLE = "Dining Gift Vouchers — MAJHA Café & Restaurant";
const DESCRIPTION =
  "Give someone special an unforgettable dining experience. Choose from morning café breakfast, evening dinner tasting, or private room dining at MAJHA.";

export const Route = createFileRoute("/vouchers")({
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
  component: VouchersPage,
});

interface ExperienceVoucher {
  id: string;
  title: string;
  price: number;
  badge: string;
  isPopular?: boolean;
  tagline: string;
  description: string;
  inclusions: string[];
  icon: React.ElementType;
}

const EXPERIENCES: ExperienceVoucher[] = [
  {
    id: "cafe-patisserie",
    title: "Café & Breakfast Experience for Two",
    price: 150,
    badge: "DAYTIME CAFÉ",
    tagline: "Specialty pour-over coffee & fresh bakery pastries",
    description:
      "A relaxing morning or afternoon experience featuring freshly brewed specialty coffees, warm butter croissants, hot chocolate, and a complimentary pack of roasted coffee beans to take home.",
    inclusions: [
      "For 2 Guests",
      "Available Daily 8:00 AM – 3:30 PM",
      "Coffee Tasting Selection",
      "Take-Home Roasted Coffee Beans",
    ],
    icon: Coffee,
  },
  {
    id: "haute-degustation",
    title: "Evening 5-Course Dinner for Two",
    price: 380,
    badge: "MOST POPULAR",
    isPopular: true,
    tagline: "5-course seasonal dinner with welcome drinks",
    description:
      "Our signature evening dinner experience. Enjoy 5 delicious chef-prepared courses, served with a welcome drink, warm appetizers, and signature desserts.",
    inclusions: [
      "For 2 Guests",
      "5-Course Chef's Dinner Menu",
      "Welcome Drinks on Arrival",
      "Printed Keepsake Menu",
    ],
    icon: Utensils,
  },
  {
    id: "wine-truffle",
    title: "Special Dinner & Drinks Pairing",
    price: 650,
    badge: "PREMIUM DINING",
    tagline: "7-course dinner featuring Wagyu steak & fine drinks",
    description:
      "A luxurious 7-course dinner featuring tender Wagyu steak, fresh seasonal ingredients, and perfectly paired beverages served throughout the meal.",
    inclusions: [
      "For 2 Guests",
      "7-Course Chef's Special Dinner",
      "Curated Drink Pairings with Each Course",
      "Served in Crystal Glassware",
    ],
    icon: Wine,
  },
  {
    id: "royal-salon",
    title: "Private Dining Room Experience",
    price: 1500,
    badge: "EXCLUSIVE SUITE",
    tagline: "Private dining room with dedicated table service",
    description:
      "The ultimate dining experience for celebrations. A private dining room reserved exclusively for your party of up to 6 guests, with dedicated personal service and a custom 8-course dinner.",
    inclusions: [
      "Up to 6 Guests",
      "Private Dining Room for the Entire Evening",
      "Dedicated Table Server & Chef Service",
      "Customized 8-Course Dinner Menu",
    ],
    icon: Crown,
  },
];

const MONETARY_AMOUNTS = [100, 250, 500, 1000];

function VouchersPage() {
  const { openReservation } = useReservation();
  const { openConcierge } = useConcierge();

  // Customizer State
  const [voucherType, setVoucherType] = useState<"experience" | "monetary">("experience");
  const [selectedExpId, setSelectedExpId] = useState("haute-degustation");
  const [monetaryAmount, setMonetaryAmount] = useState(250);
  const [customAmount, setCustomAmount] = useState("");
  const [deliveryFormat, setDeliveryFormat] = useState<"digital" | "physical">("digital");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderName, setSenderName] = useState("");
  const [dedicationMessage, setDedicationMessage] = useState("");
  const [isOrdered, setIsOrdered] = useState(false);
  const [voucherRef, setVoucherRef] = useState("");

  const recipientId = useId();
  const emailId = useId();
  const senderId = useId();
  const messageId = useId();

  const selectedExp = EXPERIENCES.find((e) => e.id === selectedExpId) || EXPERIENCES[1];
  const finalPrice =
    voucherType === "experience"
      ? selectedExp.price
      : customAmount && Number(customAmount) > 0
      ? Number(customAmount)
      : monetaryAmount;

  const handleSelectExp = (id: string) => {
    setVoucherType("experience");
    setSelectedExpId(id);
    const element = document.getElementById("voucher-customizer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `MJH-VCH-${Math.floor(10000 + Math.random() * 90000)}`;
    setVoucherRef(refCode);
    setIsOrdered(true);
    toast.success("Voucher certificate created with distinction", {
      description: `Reference: ${refCode} · Dispatched to ${recipientEmail || "your email"}`,
    });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(voucherRef);
    toast.success("Voucher Reference Copied", {
      description: voucherRef,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />

      <main className="pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
          {/* Breadcrumb & Top Bar */}
          <div className="mb-10 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-3.5" />
              <span>Return to MAJHA Sanctuary</span>
            </Link>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-sans text-[0.65rem] tracking-[0.22em] text-primary uppercase">
              <Sparkles className="size-3" />
              L'Art Du Cadeau · Bespoke Gifting
            </div>
          </div>

          {/* Hero Section */}
          <div className="border-b border-border/70 pb-16 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-primary font-brand text-xs uppercase tracking-[0.3em] mb-3">
              <span>✦</span>
              <span>MAISON MAJHA BESPOKE VOUCHERS</span>
              <span>✦</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-foreground">
              The Gift of Transcendent Gastronomy
            </h1>
            <p className="mt-5 text-sm sm:text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Bestow an unforgettable epicurean memory upon cherished family, esteemed companions, or distinguished corporate partners. Each voucher is honored as a passport to culinary excellence.
            </p>

            {/* Tri-Pillar Guarantee Ribbons */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-3xl mx-auto">
              <div className="rounded-sm border border-border/70 bg-card/40 p-3.5 flex items-center justify-center gap-2.5 text-xs text-muted-foreground font-light">
                <Clock className="size-4 text-primary shrink-0" />
                <span>3-Year Extended Validity</span>
              </div>
              <div className="rounded-sm border border-border/70 bg-card/40 p-3.5 flex items-center justify-center gap-2.5 text-xs text-muted-foreground font-light">
                <Package className="size-4 text-primary shrink-0" />
                <span>Digital Delivery or Velvet Box</span>
              </div>
              <div className="rounded-sm border border-border/70 bg-card/40 p-3.5 flex items-center justify-center gap-2.5 text-xs text-muted-foreground font-light">
                <ShieldCheck className="size-4 text-primary shrink-0" />
                <span>Transferable & Flexible Dates</span>
              </div>
            </div>
          </div>

          {/* Curated Experiences Grid */}
          <section className="py-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="font-sans text-[0.6875rem] font-semibold tracking-[0.24em] text-primary uppercase">
                  Signature Collections
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-4xl text-foreground font-normal">
                  Curated Gastronomic Journeys
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-light max-w-lg">
                  Select an extraordinary multi-course degustation or daytime tasting crafted by our culinary brigade.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-light">Prefer monetary freedom?</span>
                <button
                  type="button"
                  onClick={() => {
                    setVoucherType("monetary");
                    const element = document.getElementById("voucher-customizer");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-sans text-xs text-primary font-medium uppercase tracking-wider underline underline-offset-4 hover:text-primary/80 cursor-pointer"
                >
                  Monetary Vouchers ↓
                </button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {EXPERIENCES.map((exp) => {
                const Icon = exp.icon;
                const isSelected = voucherType === "experience" && selectedExpId === exp.id;
                return (
                  <div
                    key={exp.id}
                    className={cn(
                      "group relative flex flex-col justify-between rounded-sm border p-6 transition-all duration-500",
                      isSelected
                        ? "border-primary bg-[#0f1118] shadow-[0_15px_40px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.22)] -translate-y-1"
                        : "border-border/80 bg-card/30 hover:border-primary/60 hover:bg-card/60 hover:-translate-y-1"
                    )}
                  >
                    {/* Top Ribbon for Popular */}
                    {exp.isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-primary/50 bg-primary px-3 py-0.5 font-sans text-[0.6rem] font-bold tracking-[0.2em] uppercase text-primary-foreground shadow-sm">
                        Most Coveted
                      </div>
                    )}

                    <div>
                      {/* Icon & Category */}
                      <div className="flex items-center justify-between">
                        <div className="flex size-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                          <Icon className="size-5" />
                        </div>
                        <span className="font-sans text-[0.625rem] font-semibold tracking-[0.22em] text-primary/80 uppercase">
                          {exp.badge}
                        </span>
                      </div>

                      {/* Title & Price */}
                      <h3 className="mt-5 font-display text-xl font-normal text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="mt-2 flex items-baseline gap-1">
                        <span className="font-display text-2xl font-normal text-primary">
                          ${exp.price}
                        </span>
                        <span className="text-xs text-muted-foreground font-light">USD</span>
                      </div>

                      <p className="mt-3 text-[0.8rem] leading-relaxed text-muted-foreground font-light">
                        {exp.description}
                      </p>

                      {/* Inclusions list */}
                      <ul className="mt-5 space-y-2 border-t border-border/50 pt-4 text-xs text-muted-foreground/90 font-light">
                        {exp.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-[0.6rem] text-primary">✦</span>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Select CTA */}
                    <button
                      type="button"
                      onClick={() => handleSelectExp(exp.id)}
                      className={cn(
                        "mt-6 w-full py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 rounded-sm cursor-pointer",
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                          : "border border-border/80 bg-secondary/30 text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary"
                      )}
                    >
                      {isSelected ? "Selected Experience ✓" : "Select Experience"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Interactive Voucher Studio / Customizer & Live Certificate Preview */}
          <section id="voucher-customizer" className="py-16 border-t border-border/70">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-brand text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                ✦ THE CERTIFICATE ATELIER ✦
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl text-foreground font-normal">
                Personalize Your Gift Certificate
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-light">
                Tailor the dedication, recipient details, and presentation style with real-time live preview.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-12 items-start">
              {/* Left Column: Form Controls (7 cols) */}
              <div className="lg:col-span-7 rounded-sm border border-border/80 bg-card/40 p-6 sm:p-8 space-y-8">
                {/* 1. Voucher Type Selection */}
                <div>
                  <label className="block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                    1. Select Voucher Privilege
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setVoucherType("experience")}
                      className={cn(
                        "rounded-sm border p-3.5 text-left transition-all cursor-pointer",
                        voucherType === "experience"
                          ? "border-primary bg-primary/10 text-primary shadow-sm"
                          : "border-border/70 bg-secondary/30 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                      )}
                    >
                      <p className="font-sans text-xs font-semibold uppercase tracking-wider">
                        Curated Experience
                      </p>
                      <p className="mt-1 text-[0.75rem] text-muted-foreground font-light">
                        {selectedExp.title} (${selectedExp.price})
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setVoucherType("monetary")}
                      className={cn(
                        "rounded-sm border p-3.5 text-left transition-all cursor-pointer",
                        voucherType === "monetary"
                          ? "border-primary bg-primary/10 text-primary shadow-sm"
                          : "border-border/70 bg-secondary/30 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                      )}
                    >
                      <p className="font-sans text-xs font-semibold uppercase tracking-wider">
                        Monetary Denomination
                      </p>
                      <p className="mt-1 text-[0.75rem] text-muted-foreground font-light">
                        Flexible credit across all dining
                      </p>
                    </button>
                  </div>

                  {/* Monetary Denomination Toggles */}
                  {voucherType === "monetary" && (
                    <div className="mt-4 space-y-3 animate-in fade-in duration-300">
                      <div className="grid grid-cols-4 gap-2">
                        {MONETARY_AMOUNTS.map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => {
                              setMonetaryAmount(amt);
                              setCustomAmount("");
                            }}
                            className={cn(
                              "rounded-sm border py-2 text-center text-xs font-medium transition-all cursor-pointer",
                              monetaryAmount === amt && !customAmount
                                ? "border-primary bg-primary text-primary-foreground font-semibold"
                                : "border-border/70 bg-secondary/20 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                            )}
                          >
                            ${amt}
                          </button>
                        ))}
                      </div>

                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-xs text-muted-foreground">$</span>
                        <input
                          type="number"
                          placeholder="Or enter custom amount (USD)"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="w-full rounded-sm border border-border/80 bg-secondary/40 py-2 pl-7 pr-3 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                          min="50"
                          max="10000"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Presentation Style */}
                <div>
                  <label className="block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                    2. Presentation & Delivery Format
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setDeliveryFormat("digital")}
                      className={cn(
                        "rounded-sm border p-4 text-left transition-all cursor-pointer flex items-start gap-3",
                        deliveryFormat === "digital"
                          ? "border-primary bg-primary/10 text-foreground shadow-sm"
                          : "border-border/70 bg-secondary/30 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                      )}
                    >
                      <Send className="size-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground">
                          Digital Sanctuary Certificate
                        </p>
                        <p className="mt-1 text-[0.75rem] text-muted-foreground font-light">
                          Instant encrypted email delivery with personalized PDF keepsake.
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeliveryFormat("physical")}
                      className={cn(
                        "rounded-sm border p-4 text-left transition-all cursor-pointer flex items-start gap-3",
                        deliveryFormat === "physical"
                          ? "border-primary bg-primary/10 text-foreground shadow-sm"
                          : "border-border/70 bg-secondary/30 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                      )}
                    >
                      <Package className="size-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground">
                          Gold-Foil Velvet Presentation Box
                        </p>
                        <p className="mt-1 text-[0.75rem] text-muted-foreground font-light">
                          Hand-pressed 24K gold foil on cardstock, silk ribbon, and wax seal.
                        </p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* 3. Personalization Details Form */}
                <form onSubmit={handleOrderSubmit} className="space-y-4">
                  <label className="block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    3. Recipient & Dedication Note
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor={recipientId} className="block text-[0.7rem] uppercase tracking-wider text-muted-foreground mb-1">
                        Recipient Name
                      </label>
                      <input
                        id={recipientId}
                        type="text"
                        required
                        placeholder="e.g. Lord & Lady Hastings"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        className="w-full rounded-sm border border-border/80 bg-secondary/40 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor={emailId} className="block text-[0.7rem] uppercase tracking-wider text-muted-foreground mb-1">
                        {deliveryFormat === "digital" ? "Recipient Email" : "Courier Delivery Address"}
                      </label>
                      <input
                        id={emailId}
                        type={deliveryFormat === "digital" ? "email" : "text"}
                        required
                        placeholder={deliveryFormat === "digital" ? "recipient@example.com" : "Suite 400, 100 Promenade Ave"}
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        className="w-full rounded-sm border border-border/80 bg-secondary/40 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={senderId} className="block text-[0.7rem] uppercase tracking-wider text-muted-foreground mb-1">
                      From (Your Name / Organization)
                    </label>
                    <input
                      id={senderId}
                      type="text"
                      required
                      placeholder="e.g. Elena & Marcus Sterling"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full rounded-sm border border-border/80 bg-secondary/40 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor={messageId} className="block text-[0.7rem] uppercase tracking-wider text-muted-foreground mb-1">
                      Personal Dedication Note (Inscribed on Certificate)
                    </label>
                    <textarea
                      id={messageId}
                      rows={3}
                      placeholder="e.g. In celebration of shared triumphs and transcendent moments. May this evening linger warmly in your memory..."
                      value={dedicationMessage}
                      onChange={(e) => setDedicationMessage(e.target.value)}
                      className="w-full rounded-sm border border-border/80 bg-secondary/40 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                    />
                  </div>

                  {/* Submit Order Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-sm border border-primary bg-primary px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:bg-primary/90 hover:scale-[1.01] cursor-pointer"
                    >
                      <Sparkles className="size-4" />
                      <span>Issue Bespoke Gift Certificate (${finalPrice} USD)</span>
                    </button>
                    <p className="mt-2 text-center text-[0.6875rem] text-muted-foreground font-light">
                      ✦ 256-bit bank-grade encryption · 3-year validity · Instant email confirmation
                    </p>
                  </div>
                </form>
              </div>

              {/* Right Column: Live Luxury Certificate Preview (5 cols) */}
              <div className="lg:col-span-5 sticky top-28 space-y-4">
                <div className="flex items-center justify-between px-1">
                  <span className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-primary">
                    Live Certificate Preview
                  </span>
                  <span className="text-[0.6875rem] text-muted-foreground font-light">
                    Real-time Gold Foil Rendering
                  </span>
                </div>

                {/* The Luxury Certificate Card */}
                <div className="relative overflow-hidden rounded-sm border border-primary/50 bg-[#0a0b0f] p-6 sm:p-8 text-foreground shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.18)]">
                  {/* Subtle Corner Filigrees */}
                  <div className="pointer-events-none absolute top-2 left-2 size-6 border-t border-l border-primary/40" />
                  <div className="pointer-events-none absolute top-2 right-2 size-6 border-t border-r border-primary/40" />
                  <div className="pointer-events-none absolute bottom-2 left-2 size-6 border-b border-l border-primary/40" />
                  <div className="pointer-events-none absolute bottom-2 right-2 size-6 border-b border-r border-primary/40" />

                  {/* Certificate Inner Double Border */}
                  <div className="border border-primary/30 p-5 sm:p-6 text-center space-y-5">
                    {/* Brand Crest */}
                    <div>
                      <div className="inline-flex items-center gap-1.5">
                        <span className="font-brand text-lg sm:text-xl font-bold tracking-[0.25em] text-foreground">
                          MAJHA
                        </span>
                        <span className="text-[0.6rem] text-primary">✦</span>
                      </div>
                      <p className="font-sans text-[0.5rem] tracking-[0.28em] text-primary uppercase mt-0.5">
                        L'ART DE LA HAUTE GASTRONOMIE
                      </p>
                    </div>

                    <div className="border-t border-b border-primary/30 py-3">
                      <p className="font-sans text-[0.6rem] tracking-[0.25em] text-primary/80 uppercase">
                        OFFICIAL DINING PRIVILEGE
                      </p>
                      <h4 className="font-display text-xl sm:text-2xl font-normal text-foreground mt-1">
                        {voucherType === "experience"
                          ? selectedExp.title
                          : `Complimentary Dining Credit: $${finalPrice} USD`}
                      </h4>
                      <p className="font-display text-sm italic text-primary mt-1">
                        Value of ${finalPrice} USD
                      </p>
                    </div>

                    {/* Recipient Inscription */}
                    <div className="space-y-1">
                      <span className="font-sans text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                        Prepared In Honor Of
                      </span>
                      <p className="font-display text-lg text-foreground font-normal">
                        {recipientName || "Honored Patron"}
                      </p>
                    </div>

                    {/* Dedication Quote */}
                    <div className="rounded-sm bg-secondary/30 p-3 text-left">
                      <p className="font-display text-xs italic text-muted-foreground font-light leading-relaxed">
                        "{dedicationMessage ||
                          "May this culinary journey linger warmly in your memories for years to come. In celebration of shared moments."}"
                      </p>
                      <p className="mt-2 text-right font-sans text-[0.6875rem] text-primary font-medium tracking-wider">
                        — {senderName || "Maison MAJHA"}
                      </p>
                    </div>

                    {/* Security & Validation Footer */}
                    <div className="pt-2 flex items-center justify-between text-[0.625rem] text-muted-foreground/75 font-sans tracking-widest uppercase">
                      <span>SEC: MJH-VCH-XXXX</span>
                      <span className="text-primary">✦ VALID 3 YEARS ✦</span>
                      <span>NEW ZEALAND</span>
                    </div>
                  </div>
                </div>

                {/* Delivery format footnote */}
                <div className="rounded-sm border border-border/60 bg-secondary/20 p-3.5 flex items-center gap-3 text-xs text-muted-foreground font-light">
                  {deliveryFormat === "digital" ? (
                    <>
                      <Send className="size-4 text-primary shrink-0" />
                      <span>Encrypted PDF certificate dispatched immediately upon confirmation.</span>
                    </>
                  ) : (
                    <>
                      <Package className="size-4 text-primary shrink-0" />
                      <span>Hand-pressed gold foil cardstock delivered via attended courier in velvet sleeve.</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Corporate Gifting & Concierge Bespoke Orders */}
          <section className="my-16 rounded-sm border border-primary/30 bg-gradient-to-r from-primary/10 via-secondary/20 to-transparent p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2">
                  <Crown className="size-4 text-primary" />
                  <span className="font-brand text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                    CORPORATE & VIP CONCIERGE GIFTING
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl text-foreground font-normal">
                  Executive Rewards & Bespoke Gala Hampers
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  For corporate retreats, high-net-worth client recognition, or matrimonial gifting of 10+ certificates, our Chief Concierge personally oversees customized calligraphy, bespoke wax seals, and direct white-glove dispatch.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={RESTAURANT.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm bg-primary px-6 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] cursor-pointer"
                >
                  WhatsApp Concierge
                </a>
                <button
                  type="button"
                  onClick={openConcierge}
                  className="rounded-sm border border-border/80 bg-secondary/50 px-6 py-3 font-sans text-xs font-medium uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-all cursor-pointer"
                >
                  Call Private Desk
                </button>
              </div>
            </div>
          </section>

          {/* Gifting Privilege FAQs */}
          <section className="py-12 border-t border-border/60">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
                Frequently Addressed
              </span>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl text-foreground font-normal">
                Voucher Terms & Redemption Charters
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="rounded-sm border border-border/70 bg-card/30 p-5">
                <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground">
                  How long are vouchers valid?
                </h4>
                <p className="mt-2 text-xs text-muted-foreground font-light leading-relaxed">
                  All MAJHA Gift Vouchers carry a full 3-year validity window from the date of purchase, allowing recipients ample leisure to select their ideal dining occasion.
                </p>
              </div>

              <div className="rounded-sm border border-border/70 bg-card/30 p-5">
                <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground">
                  Can vouchers be redeemed in portions?
                </h4>
                <p className="mt-2 text-xs text-muted-foreground font-light leading-relaxed">
                  Yes. Monetary vouchers retain any unspent balance on the unique reference code, redeemable across future visits to the café lounge or grand dining room.
                </p>
              </div>

              <div className="rounded-sm border border-border/70 bg-card/30 p-5">
                <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground">
                  How does the recipient book their table?
                </h4>
                <p className="mt-2 text-xs text-muted-foreground font-light leading-relaxed">
                  Recipients simply quote their voucher reference code when reserving online or contacting our concierge desk. Our maître d' will orchestrate the experience seamlessly.
                </p>
              </div>

              <div className="rounded-sm border border-border/70 bg-card/30 p-5">
                <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground">
                  Can dietary requirements be honored?
                </h4>
                <p className="mt-2 text-xs text-muted-foreground font-light leading-relaxed">
                  Absolutely. Every tasting experience voucher can be adapted for vegan, Halal, or allergen preferences with 48 hours advance notice to our culinary brigade.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Confirmation Modal when Order is Placed */}
      {isOrdered && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg rounded-sm border border-primary/50 bg-[#0c0d12] p-6 sm:p-8 text-foreground shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.2)]">
            <div className="text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary mb-4 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <CheckCircle2 className="size-7" />
              </div>

              <span className="font-brand text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                ✦ VOUCHER ISSUED WITH DISTINCTION ✦
              </span>

              <h3 className="mt-2 font-display text-2xl sm:text-3xl text-foreground font-normal">
                Gift Certificate Confirmed
              </h3>

              <p className="mt-2 text-xs text-muted-foreground font-light leading-relaxed">
                Thank you, <strong className="text-foreground">{senderName || "Esteemed Patron"}</strong>. Your gift certificate honoring <strong className="text-primary">{recipientName || "Honored Guest"}</strong> has been officially prepared.
              </p>

              {/* Reference Card */}
              <div className="mt-6 rounded-sm border border-primary/30 bg-card/60 p-4 text-left">
                <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                  <span className="font-sans text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                    Voucher Reference Code
                  </span>
                  <span className="font-brand text-sm font-bold text-primary tracking-widest">
                    {voucherRef}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground font-light">
                  <div>
                    <span className="block text-[0.625rem] uppercase text-muted-foreground/80">Value</span>
                    <span className="font-medium text-foreground">${finalPrice} USD</span>
                  </div>
                  <div>
                    <span className="block text-[0.625rem] uppercase text-muted-foreground/80">Privilege</span>
                    <span className="font-medium text-foreground truncate">{voucherType === "experience" ? selectedExp.title : "Dining Credit"}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-border/80 bg-secondary/50 px-4 py-2.5 text-xs text-foreground hover:border-primary cursor-pointer transition-all"
                >
                  <Copy className="size-3.5 text-primary" />
                  <span>Copy Reference</span>
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-primary bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(212,175,55,0.25)] cursor-pointer transition-all"
                >
                  <Printer className="size-3.5" />
                  <span>Print Certificate</span>
                </button>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOrdered(false)}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer underline underline-offset-4"
                >
                  Return to Gift Atelier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ReservationModal />
      <PoliciesModal />
      <ConciergeModal />
      <CookieBanner />
      <FloatingSocials />
    </div>
  );
}

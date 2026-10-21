import { useState, useMemo } from "react";
import { useReservation } from "./reservation-context";
import { useConcierge } from "./concierge-context";
import { RESTAURANT } from "./site-data";
import {
  Search,
  HelpCircle,
  Sparkles,
  Crown,
  Clock,
  PhoneCall,
  UtensilsCrossed,
  ShieldCheck,
  Wine,
  CalendarCheck,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  id: string;
  category: "reservations" | "culinary" | "etiquette" | "private";
  categoryLabel: string;
  question: string;
  answer: string;
  highlight?: string;
}

const FAQS: FaqItem[] = [
  // Category: Reservations & Sittings
  {
    id: "faq-walkins",
    category: "reservations",
    categoryLabel: "Reservations",
    question: "Do I need to book in advance, or do you take walk-ins?",
    answer:
      "For our morning Café (8:00 AM – 3:30 PM), walk-in guests are always welcome on a first-come basis. For evening dinner service (5:30 PM onwards), we recommend booking your table in advance so you do not have to wait.",
    highlight: "Café welcomes walk-ins; Dinner reservations recommended in advance.",
  },
  {
    id: "faq-advance-booking",
    category: "reservations",
    categoryLabel: "Reservations",
    question: "How far in advance can I book a table?",
    answer:
      "Regular dining room tables can be booked up to 60 days in advance. For private dining rooms or large event bookings, you can reserve up to 12 months in advance by contacting our team.",
    highlight: "Up to 60 days for main dining; up to 12 months for private rooms.",
  },
  {
    id: "faq-sitting-duration",
    category: "reservations",
    categoryLabel: "Reservations",
    question: "How long can we spend at our table?",
    answer:
      "To ensure fresh, unhurried service, we allocate 75 minutes for the Daytime Café, 2 hours for Evening Dinner, and 3 hours for multi-course tasting menus. Private rooms are reserved for your group for the entire evening.",
    highlight: "75 mins for Café · 2 hours for Dinner · All evening for Private Rooms.",
  },
  {
    id: "faq-cancellation-policy",
    category: "reservations",
    categoryLabel: "Reservations",
    question: "What is your cancellation policy?",
    answer:
      "You can cancel or change your reservation for free up to 24 hours before your booking time. For late cancellations or no-shows, a $50 per guest fee applies, which we gladly convert into a 60-day dining credit for your next visit.",
    highlight: "Free cancellation up to 24 hours prior · Fee converted to 60-day dining credit.",
  },

  // Category: Culinary, Dietary & Allergens
  {
    id: "faq-dietary-allergies",
    category: "culinary",
    categoryLabel: "Food & Dietary",
    question: "Do you cater to vegetarian, vegan, gluten-free, or Halal diets?",
    answer:
      "Yes, gladly. We offer delicious dishes and set menus for vegetarian, vegan, and gluten-free guests. All poultry, lamb, and beef are certified Halal. Please let us know of any severe food allergies when booking so our kitchen can prepare safely.",
    highlight: "Vegetarian, vegan, gluten-free & Halal friendly options available.",
  },
  {
    id: "faq-temperance-pairings",
    category: "culinary",
    categoryLabel: "Food & Dietary",
    question: "Do you offer non-alcoholic drink options?",
    answer:
      "Yes. We offer a wonderful selection of freshly pressed juices, iced specialty teas, botanical fruit mocktails, and sparkling fruit drinks paired with your meal.",
    highlight: "Delicious mocktails, specialty teas & fresh fruit drinks available.",
  },
  {
    id: "faq-pastry-coffee",
    category: "culinary",
    categoryLabel: "Food & Dietary",
    question: "Are your coffees, bread, and pastries made fresh?",
    answer:
      "Yes. All our croissants, breads, and desserts are baked fresh in our bakery kitchen every morning. Our specialty coffee beans are freshly roasted in small batches each week and brewed to order.",
    highlight: "Freshly baked pastries every morning & weekly roasted coffee.",
  },

  // Category: Dress Code & Dining Room Etiquette
  {
    id: "faq-dress-code",
    category: "etiquette",
    categoryLabel: "Dress Code",
    question: "What is the dress code?",
    answer:
      "Daytime Café (8:00 AM – 3:30 PM): Smart casual — comfortable everyday clothes, neat jeans, and clean shoes are welcome. Evening Dinner (5:30 PM onwards): Smart and elegant — collared shirts, dresses, blazers, or trousers are encouraged. Please avoid gym clothes or beach slippers.",
    highlight: "Daytime: Smart Casual · Evening: Smart & Elegant.",
  },
  {
    id: "faq-photography-policy",
    category: "etiquette",
    categoryLabel: "Dress Code",
    question: "Can we take photos and videos?",
    answer:
      "Yes, you are very welcome to take photos of your food and table memories. To keep the atmosphere calm and private for everyone, we just ask that you turn off flash and avoid tripods or bright video lights.",
    highlight: "Phone photos welcome · Please keep flash and tripods turned off.",
  },
  {
    id: "faq-children-policy",
    category: "etiquette",
    categoryLabel: "Dress Code",
    question: "Are children and families welcome?",
    answer:
      "Our daytime café warmly welcomes children and families of all ages. For evening dinner service in the main dining room, we suggest children be 10 years or older so the space stays quiet and relaxing. Families with younger children are welcome to book our private dining rooms in the evening.",
    highlight: "Daytime café welcomes all ages · Private rooms available for families in the evening.",
  },

  // Category: Private Salons, Access & Corkage
  {
    id: "faq-valet-parking",
    category: "private",
    categoryLabel: "Parking & Private Rooms",
    question: "Is valet parking available at the venue?",
    answer:
      "Yes. We offer free valet parking right at our main entrance on 18 Royal Boulevard. Simply drive up to our entrance, and our staff will park your car safely for you.",
    highlight: "Free valet parking at the main entrance.",
  },
  {
    id: "faq-corkage-policy",
    category: "private",
    categoryLabel: "Parking & Private Rooms",
    question: "Can I bring my own bottle of wine?",
    answer:
      "Yes, you may bring a special bottle to celebrate your occasion. Our corkage fee is $95 per bottle (maximum 2 bottles per group), and our staff will chill, open, and pour it for your table.",
    highlight: "Corkage fee $95 per bottle · Maximum 2 bottles per group.",
  },
  {
    id: "faq-birthday-cake",
    category: "private",
    categoryLabel: "Parking & Private Rooms",
    question: "Can we bring our own birthday cake?",
    answer:
      "Our pastry chef can bake a custom celebration cake for you if you let us know 3 days in advance. If you prefer to bring your own cake from outside, a small cake service fee of $40 applies.",
    highlight: "Custom cakes available in-house · $40 fee for outside cakes.",
  },
  {
    id: "faq-private-buyouts",
    category: "private",
    categoryLabel: "Parking & Private Rooms",
    question: "How can I book a private room or host a party?",
    answer:
      "We have private dining rooms that seat 8 to 24 guests, and you can also book the whole venue for larger celebrations. You can reach out directly via email at concierge@majha-luxury.com or message us on WhatsApp.",
    highlight: "Private rooms for 8–24 guests · Entire restaurant booking available.",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "reservations", label: "Reservations" },
  { id: "culinary", label: "Food & Dietary" },
  { id: "etiquette", label: "Dress Code" },
  { id: "private", label: "Parking & Private Rooms" },
];

export function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { openReservation } = useReservation();
  const { openConcierge } = useConcierge();

  const [openItemId, setOpenItemId] = useState<string | null>("faq-walkins");

  const toggleItem = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory =
        selectedCategory === "all" || faq.category === selectedCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.highlight?.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="faq" className="border-t border-border/80 bg-background py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient gold lighting — hardware accelerated without heavy blur */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 size-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.07)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-primary font-brand text-xs uppercase tracking-[0.3em] mb-3">
            <span>✦</span>
            <span>HELP & QUESTIONS</span>
            <span>✦</span>
          </div>
          <h2 className="font-display text-[clamp(2.1rem,4vw,3.5rem)] text-foreground font-normal tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
            Everything you need to know about table reservations, opening hours, dress code, and dining with us.
          </p>

          {/* Quick Search Bar */}
          <div className="relative mt-8 max-w-md mx-auto">
            <Search className="absolute left-3.5 top-3 size-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search questions (e.g. dress code, valet, halal, cancellation)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-sm border border-border/80 bg-card/60 py-2.5 pl-10 pr-9 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "rounded-sm border px-3.5 py-1.5 text-xs font-sans tracking-wider uppercase transition-all duration-200 cursor-pointer",
                  selectedCategory === cat.id
                    ? "border-primary bg-primary text-primary-foreground font-semibold shadow-[0_0_12px_rgba(212,175,55,0.25)]"
                    : "border-border/70 bg-card/30 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-14 max-w-4xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="py-16 text-center rounded-sm border border-border/60 bg-card/30">
              <HelpCircle className="mx-auto size-9 text-muted-foreground/50 mb-3" />
              <p className="font-display text-lg text-foreground">
                No questions found matching "{searchQuery}"
              </p>
              <p className="mt-1 text-xs text-muted-foreground font-light">
                Our team is available to answer any questions directly.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-4 text-xs text-primary underline underline-offset-4 hover:text-primary/80 cursor-pointer"
              >
                Clear search terms
              </button>
            </div>
          ) : (
            <div className="space-y-3.5">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openItemId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={cn(
                      "rounded-sm border border-border/70 bg-card/30 transition-all duration-300 hover:border-primary/50 px-5 sm:px-6",
                      isOpen &&
                        "border-primary/60 bg-card/70 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.08)]"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full py-5 text-left group flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-start gap-3 sm:gap-4 pr-3">
                        <span className="font-sans text-xs font-semibold text-primary/70 shrink-0 mt-0.5 tracking-wider">
                          {String(index + 1).padStart(2, "0")}.
                        </span>
                        <div>
                          <span className="font-sans text-[0.625rem] font-semibold tracking-[0.2em] text-primary/80 uppercase block mb-1">
                            {faq.categoryLabel}
                          </span>
                          <h3 className="font-display text-base sm:text-lg font-normal text-foreground group-hover:text-primary transition-colors leading-snug">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <ChevronDown
                        className={cn(
                          "size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:text-primary mt-1",
                          isOpen && "rotate-180 text-primary"
                        )}
                      />
                    </button>

                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-in-out overflow-hidden",
                        isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0 pb-0"
                      )}
                    >
                      <div className="overflow-hidden pl-7 sm:pl-9 text-muted-foreground">
                        <p className="text-[0.875rem] font-light leading-relaxed text-muted-foreground/95">
                          {faq.answer}
                        </p>
                        {faq.highlight && (
                          <div className="mt-3.5 inline-flex items-center gap-2 rounded-sm border border-primary/25 bg-primary/5 px-3 py-1.5 font-sans text-xs text-primary font-medium">
                            <Sparkles className="size-3 shrink-0" />
                            <span>{faq.highlight}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Concierge Assistance Footer Callout */}
        <div className="mt-16 max-w-4xl mx-auto rounded-sm border border-primary/30 bg-gradient-to-r from-primary/10 via-secondary/20 to-transparent p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <Crown className="size-4 text-primary" />
                <span className="font-brand text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                  HAVE MORE QUESTIONS?
                </span>
              </div>
              <h4 className="mt-1.5 font-display text-xl text-foreground font-normal">
                Speak With Our Team
              </h4>
              <p className="mt-1 text-xs text-muted-foreground font-light leading-relaxed max-w-lg">
                Our team is available daily from 8:00 AM to 11:30 PM to help you with special requests, food preferences, and private party bookings.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={RESTAURANT.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm bg-primary px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)] cursor-pointer"
              >
                Chat on WhatsApp
              </a>
              <button
                type="button"
                onClick={openConcierge}
                className="rounded-sm border border-border/80 bg-secondary/50 px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-all cursor-pointer"
              >
                Call Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

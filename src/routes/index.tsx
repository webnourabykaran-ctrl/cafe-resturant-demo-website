import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/onslow/header";
import { Hero } from "@/components/onslow/hero";
import { Introduction } from "@/components/onslow/introduction";
import { Experience } from "@/components/onslow/experience";
import { MenuSection } from "@/components/onslow/menu-section";
import { SignatureDishes } from "@/components/onslow/signature-dishes";
import { Atmosphere } from "@/components/onslow/atmosphere";
import { Gallery } from "@/components/onslow/gallery";
import { Reviews } from "@/components/onslow/reviews";
import { Occasions } from "@/components/onslow/occasions";
import { FaqSection } from "@/components/onslow/faq-section";
import { Location } from "@/components/onslow/location";
import { ReserveCta } from "@/components/onslow/reserve-cta";
import { Footer } from "@/components/onslow/footer";
import { RESTAURANT } from "@/components/onslow/site-data";
import { ReservationModal } from "@/components/onslow/reservation-modal";
import { PoliciesModal } from "@/components/onslow/policies-modal";
import { ConciergeModal } from "@/components/onslow/concierge-modal";
import { CookieBanner } from "@/components/onslow/cookie-banner";
import { FloatingSocials } from "@/components/onslow/floating-socials";
import { Toaster } from "@/components/ui/sonner";

const TITLE = "MAJHA Café & Restaurant — Specialty Coffee & Fine Dining";
const DESCRIPTION =
  "MAJHA Café & Restaurant offers freshly brewed specialty coffee, delicious bakery treats, and memorable evening dining in a warm, welcoming setting.";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: RESTAURANT.name,
  description: DESCRIPTION,
  servesCuisine: "Specialty Coffee, Fresh Bakery, Fine Dining",
  priceRange: RESTAURANT.priceRange,
  telephone: RESTAURANT.phoneDisplay,
  url: RESTAURANT.website,
  address: {
    "@type": "PostalAddress",
    streetAddress: RESTAURANT.streetAddress,
    addressLocality: RESTAURANT.locality,
    addressRegion: RESTAURANT.region,
    postalCode: RESTAURANT.postalCode,
    addressCountry: RESTAURANT.country,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RESTAURANT.rating,
    reviewCount: RESTAURANT.reviewCount,
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "MAJHA, MAJHA cafe, MAJHA restaurant, luxury cafe, fine dining, artisanal coffee, Wagyu, royal hospitality, degustation menu",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(STRUCTURED_DATA),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Experience />
        <div className="cv-auto">
          <MenuSection />
        </div>
        <div className="cv-auto">
          <SignatureDishes />
        </div>
        <div className="cv-auto">
          <Atmosphere />
        </div>
        <div className="cv-auto">
          <Gallery />
        </div>
        <div className="cv-auto">
          <Reviews />
        </div>
        <div className="cv-auto">
          <Occasions />
        </div>
        <div className="cv-auto">
          <FaqSection />
        </div>
        <div className="cv-auto">
          <Location />
        </div>
        <div className="cv-auto">
          <ReserveCta />
        </div>
      </main>
      <Footer />
      {/* Luxury Reservation Modal & Notifications */}
      <ReservationModal />
      {/* Luxury Legal & Dining Charters Modal */}
      <PoliciesModal />
      {/* Luxury Concierge & Telephone Desk */}
      <ConciergeModal />
      {/* Luxury Cookie & Privacy Preferences */}
      <CookieBanner />
      {/* Luxury Floating Socials & WhatsApp Widget */}
      <FloatingSocials />
      <Toaster position="top-center" richColors theme="dark" />
    </div>
  );
}

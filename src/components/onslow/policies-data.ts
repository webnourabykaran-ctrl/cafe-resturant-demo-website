export interface PolicySection {
  id: string;
  title: string;
  badge: string;
  lastUpdated: string;
  summary: string;
  highlights: { title: string; desc: string }[];
  content: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
    bulletPoints?: string[];
    callout?: {
      type: "gold" | "bronze" | "info";
      title: string;
      text: string;
    };
  }[];
}

export type PolicyTabId =
  | "privacy"
  | "terms"
  | "dress-code"
  | "cancellation"
  | "dietary"
  | "private-events";

export const LUXURY_POLICIES: Record<PolicyTabId, PolicySection> = {
  privacy: {
    id: "privacy",
    title: "Privacy & Patron Confidentiality Charter",
    badge: "Discretion & Data Sanctuary",
    lastUpdated: "January 2025",
    summary:
      "MAJHA is committed to safeguarding the privacy, discretion, and personal information of our distinguished patrons with the utmost integrity and highest global encryption standards.",
    highlights: [
      {
        title: "Discreet Patron Profiles",
        desc: "Dietary preferences, seating choices, and wine notes are encrypted and confidential.",
      },
      {
        title: "High-Profile Anonymity",
        desc: "Private dining salon guest lists are strictly guarded with non-disclosure guarantees.",
      },
      {
        title: "Zero Third-Party Brokerage",
        desc: "Your data is never sold, traded, or monetized under any circumstances.",
      },
      {
        title: "PCI-DSS Tier-1 Security",
        desc: "Payment tokens and pre-authorizations are handled via end-to-end tokenized gateways.",
      },
    ],
    content: [
      {
        heading: "1. The Philosophy of Discretion",
        subheading: "A sanctuary for refined hospitality and absolute confidentiality",
        paragraphs: [
          "At MAJHA Café & Restaurant, dining is an intimate and sensory art form. We recognize that true luxury requires absolute discretion. Whether you are joining us for morning single-origin pour-overs in the café lounge, hosting a confidential business luncheon, or celebrating in our private salons, your privacy is safeguarded by strict operational protocols.",
          "This Charter sets forth how MAJHA collects, stewards, and protects information gathered through our online reservation concierge, digital platforms, private dining inquiries, and on-premises guest services.",
        ],
      },
      {
        heading: "2. Information Entrusted to Our Concierge",
        subheading: "Curating bespoke dining tailored to your preferences",
        paragraphs: [
          "To provide exceptional Michelin-caliber hospitality, we may collect the following information when you place a reservation or join our private guest register:",
        ],
        bulletPoints: [
          "Identity & Contact Details: Full name, honorific, private telephone number, and email address.",
          "Bespoke Hospitality Preferences: Seating preferences (e.g., quiet alcove, chef-facing banquette, garden terrace), celebration milestones (anniversaries, birthdays), and host notes.",
          "Health & Dietary Profiles: Severe allergies, dietary philosophies (vegan, pescatarian, gluten-free, Halal preferences), and sommelier pairing preferences.",
          "Payment & Deposit Information: Encrypted payment tokens processed via bank-grade PCI-DSS Level 1 compliant processors for table pre-authorizations and private salon deposits.",
        ],
        callout: {
          type: "gold",
          title: "VIP & Dignitary Non-Disclosure",
          text: "For patrons requiring heightened security or private salon seclusion, MAJHA coordinates directly with personal security details and honors non-disclosure guest registrations upon advance request.",
        },
      },
      {
        heading: "3. Digital Sanctuary & Cookie Etiquette",
        subheading: "Subtle technology designed to elevate your browsing experience",
        paragraphs: [
          "Our digital portal uses strictly essential session tokens and performance telemetry to guarantee smooth table bookings, retain your preferred sitting time, and display menus with lightning-fast elegance.",
          "We do not engage in invasive cross-site advertising or third-party behavioral profiling. You retain complete sovereignty over your cookie settings via your browser preferences or our on-site cookie manager.",
        ],
      },
      {
        heading: "4. Data Stewardship & Patron Rights",
        subheading: "Your absolute sovereignty over personal records",
        paragraphs: [
          "Under applicable privacy frameworks (including GDPR, CCPA, and New Zealand Privacy Act 2020), you retain full rights to inspect, update, or request the permanent deletion of your patron profile from our guest book at any moment.",
          "To exercise any of these privileges, or to speak directly with our Hospitality Compliance Officer, please address our Private Concierge at privacy@majha-luxury.com.",
        ],
      },
    ],
  },

  terms: {
    id: "terms",
    title: "Terms of Service & Dining Agreement",
    badge: "Haute Dining Protocols",
    lastUpdated: "January 2025",
    summary:
      "A reciprocal compact of elegance, punctuality, and mutual respect, ensuring every guest experiences the serene mastery of MAJHA without compromise.",
    highlights: [
      {
        title: "Punctual Seating",
        desc: "Tables are preserved for 15 minutes past the reserved hour before reallocation.",
      },
      {
        title: "Dedicated Dining Allotments",
        desc: "2 hours for A La Carte; 3 hours for the Chef's Signature Tasting Journey.",
      },
      {
        title: "Acoustic Serenity",
        desc: "Mobile phones must be placed on silent mode; speakerphone calls are strictly prohibited.",
      },
      {
        title: "Right of Admission",
        desc: "MAJHA preserves the sanctity of the room and reserves the right to decline service.",
      },
    ],
    content: [
      {
        heading: "1. The MAJHA Dining Compact",
        subheading: "An ambiance founded on elegance and consideration",
        paragraphs: [
          "By securing a reservation or crossing the threshold of MAJHA Café & Restaurant, patrons enter into a mutual agreement dedicated to culinary harmony. Our brigade and front-of-house team dedicate hundreds of hours to sourcing rare ingredients, aging vintages, and perfecting delicate table service.",
          "In return, we ask our guests to uphold the refined decorum that characterizes fine dining across the world's great gastronomic capitals.",
        ],
      },
      {
        heading: "2. Reservation Durations & Punctuality",
        subheading: "Honoring the rhythm of the culinary brigade",
        paragraphs: [
          "Each seating is synchronized to allow our culinary team to prepare dishes à la minute. To ensure that your dining flow remains unhurried, we assign generous dining allotments:",
        ],
        bulletPoints: [
          "Café Lounge & Pâtisserie Service: 75 minutes of relaxed indulgence.",
          "Grand Dining Room (A La Carte): 2 hours of personalized service.",
          "Chef's Degustation Tasting Menu: 3 hours of immersive multi-course gastronomy.",
          "Private Dining Salons: Reserved exclusively for your party for the entire lunch or dinner sitting.",
        ],
        callout: {
          type: "bronze",
          title: "Fifteen-Minute Holding Grace",
          text: "We hold your reserved table for up to 15 minutes. If your party anticipates a delay due to traffic or weather, please notify our maître d' immediately to ensure your seating is held.",
        },
      },
      {
        heading: "3. Photography & Social Media Etiquette",
        subheading: "Capturing memories while honoring the tranquility of others",
        paragraphs: [
          "We understand that our plating and architecture are visual masterworks, and discrete personal photography is warmly welcomed. However, to preserve the dining sanctuary:",
        ],
        bulletPoints: [
          "Flash photography and continuous video lights are strictly forbidden in all dining areas.",
          "Tripods, gimbals, microphones, and professional filming rigs are not permitted without prior written media accreditation.",
          "Photography must remain focused exclusively on your own table. Taking photos or videos capturing other diners without their explicit consent is strictly prohibited.",
        ],
      },
      {
        heading: "4. Children & Age Guidelines",
        subheading: "Tailored environments for every stage of appreciation",
        paragraphs: [
          "Our Artisanal Café Lounge warmly welcomes guests of all ages throughout the daytime service, offering family-friendly hospitality and artisanal pastries.",
          "In our Grand Dining Hall during evening dinner service (from 6:00 PM onwards), we request that guests be 10 years of age or older to preserve the contemplative acoustics and adult ambiance of our tasting menus. Private Salons are available for families wishing to dine with younger children in complete intimacy.",
        ],
      },
    ],
  },

  "dress-code": {
    id: "dress-code",
    title: "Dress Code & Ambience Charter",
    badge: "Sartorial Elegance",
    lastUpdated: "January 2025",
    summary:
      "Our sartorial guidelines celebrate the theatrical beauty of fine dining and ensure a harmonious aesthetic for all patrons.",
    highlights: [
      {
        title: "Evening Fine Dining",
        desc: "Smart Elegant attire: tailored jackets, collared shirts, evening gowns, and dress shoes.",
      },
      {
        title: "Daytime Café Lounge",
        desc: "Sophisticated Smart Casual: polished knitwear, collared shirts, and tailored denim.",
      },
      {
        title: "Footwear & Headwear",
        desc: "Dress shoes or pristine designer footwear; athletic flip-flops and sports caps are prohibited.",
      },
      {
        title: "Olfactory Harmony",
        desc: "We kindly request delicate, subtle perfume to avoid overpowering fine wine notes.",
      },
    ],
    content: [
      {
        heading: "1. Sartorial Philosophy",
        subheading: "Dressing as an expression of celebration and mutual respect",
        paragraphs: [
          "At MAJHA, dining is an occasion of significance. The grandeur of our architecture, the gleam of polished brass, and the glow of alabaster lighting create a stage where our guests are the principal actors. We believe that dressing elegantly enhances the collective magic of the evening.",
        ],
      },
      {
        heading: "2. Evening Dining Room Guidelines (from 5:30 PM)",
        subheading: "Smart Elegant / Haute Sophistication",
        paragraphs: [
          "For dinner service in the Grand Dining Room and Chef's Counter, we invite patrons to embrace Smart Elegant attire:",
        ],
        bulletPoints: [
          "Gentlemen: Collared shirts, tailored jackets or blazers, tailored trousers or dark premium chinos, and elegant leather dress shoes or refined loafers.",
          "Ladies: Elegant evening dresses, tailored suits, skirts, or chic evening ensembles with refined footwear.",
          "Items Prohibited in Evening Dining: Athletic sportswear, hoodies, cargo shorts, gym tights, beach flip-flops, torn or distressed denim, and sports baseball caps.",
        ],
        callout: {
          type: "gold",
          title: "Jacket Loan Service",
          text: "Should gentlemen require a tailored blazer, our Maître d' maintains a curated collection of bespoke Italian wool jackets in various sizes at the cloakroom.",
        },
      },
      {
        heading: "3. Daytime Café & Pâtisserie Lounge (8:00 AM – 4:30 PM)",
        subheading: "Sophisticated Smart Casual",
        paragraphs: [
          "During daytime hours, our Café Lounge celebrates a relaxed yet sophisticated standard. High-quality knitwear, clean tailored denim, polo shirts, and designer lifestyle footwear are warmly welcomed. Beachwear and workout attire remain unsuitable.",
        ],
      },
      {
        heading: "4. Olfactory Courtesy & Wine Etiquette",
        subheading: "Protecting the sensory clarity of rare vintages and truffle service",
        paragraphs: [
          "Gastronomy is 80% aroma. Our head sommelier and executive chef meticulously orchestrate delicate pairings featuring white truffles, aged Burgundies, and floral Ethiopian Yirgacheffe roasts.",
          "We kindly ask guests to apply perfumes, colognes, and fragrant scented oils with discretion, as overpowering scents inevitably diminish the culinary and wine tasting experience of neighboring tables.",
        ],
      },
    ],
  },

  cancellation: {
    id: "cancellation",
    title: "Reservation, Cancellation & Deposit Charter",
    badge: "Booking Commitments",
    lastUpdated: "January 2025",
    summary:
      "Transparent, honorable reservation commitments that enable our kitchen to source rare seasonal delicacies responsibly without food wastage.",
    highlights: [
      {
        title: "Standard Table Policy",
        desc: "24-hour advance notice for modifications or cancellations without penalty.",
      },
      {
        title: "Chef's Counter & Parties (6+)",
        desc: "48-hour notice required; small holding deposit applied directly to final bill.",
      },
      {
        title: "Private Dining Salons",
        desc: "7-day cancellation window due to custom ingredient procurement.",
      },
      {
        title: "Late Notice or No-Show Fee",
        desc: "$50 per guest fee credited toward future dining within 60 days.",
      },
    ],
    content: [
      {
        heading: "1. The Art of Food Stewardship",
        subheading: "Why reservations carry mutual accountability",
        paragraphs: [
          "Unlike standard eateries, MAJHA works with small-batch artisanal fisheries, heritage livestock farms, and independent coffee plantations across the globe. Ingredients such as A5 Wagyu, Hokkaido sea urchin, and French truffles are flown in specifically for the number of guests reserved each night.",
          "When tables cancel at short notice or fail to arrive, rare produce is inevitably lost. Our cancellation charter ensures sustainability and fairness to waitlisted patrons.",
        ],
      },
      {
        heading: "2. Cancellation & Modification Windows",
        subheading: "Clear timelines for changing your reservation",
        paragraphs: [
          "Please review the cancellation notice periods tailored to your dining experience:",
        ],
        bulletPoints: [
          "Standard Dining (1–5 Guests): Cancellations or party reductions must be made at least 24 hours prior to your reservation time with zero charge.",
          "Chef's Degustation Counter & Groups (6–8 Guests): Notice of 48 hours is required to allow our sommelier and culinary brigade to adjust prep schedules.",
          "Private Dining Salons & Exclusive Buyouts: Notice of 7 business days is required. Salon deposits are fully refundable up to 7 days prior.",
        ],
        callout: {
          type: "gold",
          title: "The MAJHA Courtesy Credit",
          text: "Should an unavoidable medical emergency arise, any cancellation fee assessed may be converted into a dining credit valid for 60 days by contacting our Maître d'.",
        },
      },
      {
        heading: "3. No-Show & Late Cancellation Policy",
        subheading: "Protection against unfulfilled table holds",
        paragraphs: [
          "Reservations cancelled after the stated cut-off, or parties who fail to attend their booking without notice, will be assessed a fee of $50 per guest for standard dinner reservations and $100 per guest for the Chef's Tasting Menu.",
          "This fee will be charged to the credit card pre-authorized during the booking process.",
        ],
      },
    ],
  },

  dietary: {
    id: "dietary",
    title: "Dietary, Allergen & Culinary Safety Charter",
    badge: "Gastronomic Care",
    lastUpdated: "January 2025",
    summary:
      "Meticulous cross-contamination prevention, multi-course allergy adaptations, and transparent ingredient provenance for your peace of mind.",
    highlights: [
      {
        title: "48-Hour Advance Notice",
        desc: "Essential for custom degustation menus accommodating severe or multiple allergies.",
      },
      {
        title: "Michelin Kitchen Protocol",
        desc: "Dedicated allergy preparation stations with sanitized, isolated cookware.",
      },
      {
        title: "Plant-Based & Religious Adaptations",
        desc: "Haute vegetarian, vegan, and certified Halal-compliant preparations upon request.",
      },
      {
        title: "Artisanal Bakery Note",
        desc: "Our on-site pâtisserie handles gluten, tree nuts, and dairy daily.",
      },
    ],
    content: [
      {
        heading: "1. Dedicated Culinary Craftsmanship",
        subheading: "Every guest deserves an uncompromising epicurean experience",
        paragraphs: [
          "At MAJHA, dietary requirements are never treated as an afterthought. Our Executive Chef crafts bespoke adaptations of our tasting menus so that patrons with dietary restrictions experience the identical visual elegance, textural contrast, and flavor depth as the classical degustation.",
        ],
      },
      {
        heading: "2. Advance Notice & Allergen Communication",
        subheading: "How to ensure your dietary safety before arrival",
        paragraphs: [
          "To allow our kitchen brigade to prepare custom stocks, purees, and garnishes:",
        ],
        bulletPoints: [
          "Severe & Airborne Allergies: Please inform our concierge at least 48 hours prior to your arrival. This allows us to sanitize prep counters and isolate ingredients.",
          "Plant-Based / Vegan Degustation: Our multi-course vegan tasting journey is prepared à la minute; please request it when confirming your reservation.",
          "Gluten Sensitivity: We offer house-baked gluten-free brioche, seed crackers, and certified gluten-free pairings across our savory courses.",
        ],
        callout: {
          type: "bronze",
          title: "Artisanal Bakery & Pâtisserie Laboratory Note",
          text: "While our kitchen exercises rigorous sanitation, our on-site pastry laboratory processes heirloom flours, tree nuts (pistachios, almonds, hazelnuts), and dairy daily. Guests with life-threatening airborne nut or celiac allergies are urged to consult with our Head Chef before booking.",
        },
      },
      {
        heading: "3. Halal, Kosher & Ethical Sourcing",
        subheading: "Respect for cultural, spiritual, and moral convictions",
        paragraphs: [
          "Our lamb, wagyu beef, and poultry are sourced from certified ethical, hormone-free suppliers with Halal verification. Non-alcoholic pairing flights (featuring rare cold-brew teas, infused botanical reductions, and clarified fruit nectars) are curated by our sommelier team.",
        ],
      },
    ],
  },

  "private-events": {
    id: "private-events",
    title: "Private Salons, Buyout & Corkage Agreement",
    badge: "Exclusive Gatherings",
    lastUpdated: "January 2025",
    summary:
      "Bespoke event parameters, sommelier cellar corkage rules, and full restaurant buyout agreements for unforgettable private soirées.",
    highlights: [
      {
        title: "Exclusive Private Salons",
        desc: "Accommodates 8 to 28 guests with dedicated butler service and customized floral design.",
      },
      {
        title: "Sommelier Corkage Policy",
        desc: "$95 per 750ml bottle for rare personal vintages not present on MAJHA's wine list.",
      },
      {
        title: "Pâtisserie Celebration Cakes",
        desc: "Signature custom celebration cakes created by our Master Pastry Chef.",
      },
      {
        title: "Full Venue Buyout",
        desc: "Comprehensive buyout options for corporate galas and grand matrimonial celebrations.",
      },
    ],
    content: [
      {
        heading: "1. The Private Salons of MAJHA",
        subheading: "An intimate stage for personal and corporate triumphs",
        paragraphs: [
          "MAJHA features two private dining sanctums: The Royal Salon (seating up to 14 guests around a monolithic black walnut table) and The Sommelier Vault (seating up to 24 guests amidst temperature-controlled vintage glass displays).",
          "Each private dining engagement includes a dedicated head butler, private sommelier, personalized printed menus with gold foil embossing, and state-of-the-art concealed acoustic systems.",
        ],
      },
      {
        heading: "2. Rare Vintage Corkage Policy",
        subheading: "Honoring the personal cellars of seasoned wine connoisseurs",
        paragraphs: [
          "While MAJHA takes immense pride in our 1,200-reference wine cellar, we recognize that our patrons occasionally wish to open a prized birth-year vintage or rare auction bottle to celebrate a monumental life milestone.",
        ],
        bulletPoints: [
          "Corkage Fee: $95 per 750ml bottle (maximum of two bottles per table of four).",
          "Exclusion: The bottle must not appear on MAJHA's current dining room wine list.",
          "Sommelier Care: Our sommelier will cellar, gently decant, and serve your wine in hand-blown Zalto Austrian crystal glassware with proper thermal regulation.",
        ],
        callout: {
          type: "gold",
          title: "Custom Pâtisserie Service",
          text: "Celebrate with an in-house bespoke dessert sculpted by our Pastry Chef. For external specialty celebratory cakes, a cakeage service and serving fee of $40 per cake applies.",
        },
      },
      {
        heading: "3. Minimum Spend & Event Contracts",
        subheading: "Clear terms for private bookings and grand buyouts",
        paragraphs: [
          "Private salon bookings require a minimum food and beverage spend depending on the day of the week and season. Full venue buyouts of the Café Lounge, Grand Dining Hall, and Terrace are available with at least 30 days advance booking through our Events Director at events@majha-luxury.com.",
        ],
      },
    ],
  },
};

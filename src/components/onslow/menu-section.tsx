import { useState } from "react";
import { RESTAURANT } from "./site-data";
import { Reveal } from "./reveal";
import { useReservation } from "./reservation-context";
import { cn } from "@/lib/utils";

const MENU_CATEGORIES = {
  cafe: {
    label: "Café & Breakfast",
    subtitle: "Served daily from 8:00 AM — Freshly brewed specialty coffees, morning drinks, and warm bakery items.",
    courses: [
      {
        heading: "Coffee & Specialty Drinks",
        dishes: [
          {
            name: "Royal Saffron Gold Cappuccino",
            note: "Rich single-origin espresso, steamed milk, fragrant Kashmiri saffron, and edible gold leaf",
            price: "$22",
          },
          {
            name: "Panama Geisha Pour-Over Coffee",
            note: "Smooth single-origin pour-over with delicate floral, bergamot, and peach notes",
            price: "$26",
          },
          {
            name: "Signature Cold Drip Coffee",
            note: "Slow-brewed for 14 hours for an extra smooth, rich, and refreshing taste",
            price: "$18",
          },
          {
            name: "Cardamom & Rose Milk Latte",
            note: "Gently spiced green cardamom with natural rose extract, oat milk, and pistachio dust",
            price: "$16",
          },
        ],
      },
      {
        heading: "Breakfast & Fresh Bakery",
        dishes: [
          {
            name: "Black Truffle & Mushroom Omelette",
            note: "Fresh farm eggs with black truffles, melted aged cheese, and warm toasted brioche bread",
            price: "$36",
          },
          {
            name: "Smoked Salmon & Caviar Toast",
            note: "Cured king salmon with delicate caviar pearls, fresh herb cream cheese, and crusty bread",
            price: "$44",
          },
          {
            name: "Pistachio Cream Butter Croissant",
            note: "Flaky golden butter croissant filled with rich pistachio cream and roasted nuts",
            price: "$18",
          },
          {
            name: "Dark Chocolate Cream Éclair",
            note: "Crisp pastry filled with 70% dark chocolate cream, topped with a touch of gold leaf",
            price: "$19",
          },
        ],
      },
    ],
  },
  restaurant: {
    label: "Evening Dinner & Chef Specials",
    subtitle: "Served from 5:30 PM — Delicious dinners, fresh seafood, grilled meats, and desserts.",
    courses: [
      {
        heading: "Starters & Appetizers",
        dishes: [
          {
            name: "Fresh Crayfish & Caviar Roll",
            note: "Tender coastal crayfish with light herb sauce and delicate caviar pearls",
            price: "$38",
          },
          {
            name: "Yellowfin Tuna Carpaccio",
            note: "Thinly sliced fresh yellowfin tuna dressed with lemon citrus oil and sea salt",
            price: "$42",
          },
          {
            name: "Warm Sweet Brioche & Fruit Compote",
            note: "Fresh toasted milk brioche served with spiced cherries and warm fig spread",
            price: "$46",
          },
          {
            name: "Fresh Kingfish Ceviche",
            note: "Delicate fresh kingfish dressed with fresh lime, olive oil, and light sea greens",
            price: "$34",
          },
        ],
      },
      {
        heading: "Main Courses & Desserts",
        dishes: [
          {
            name: "Prime Wagyu Steak Tenderloin",
            note: "Tender charcoal-grilled steak served with rich savory sauce and roasted sweet shallots",
            price: "$115",
          },
          {
            name: "18-Hour Slow-Cooked Tender Beef",
            note: "Slow-cooked until melt-in-the-mouth tender, served with creamy potato mash and vegetables",
            price: "$58",
          },
          {
            name: "Roasted Duck Breast with Honey Glaze",
            note: "Juicy roasted duck breast glazed with natural honey, served with sweet plum sauce",
            price: "$62",
          },
          {
            name: "Warm Dark Chocolate Soufflé",
            note: "Freshly baked warm chocolate soufflé served with rich vanilla bean cream poured tableside",
            price: "$28",
          },
        ],
      },
    ],
  },
};

export function MenuSection() {
  const [activeTab, setActiveTab] = useState<"cafe" | "restaurant">("cafe");
  const { openReservation } = useReservation();
  const currentMenu = MENU_CATEGORIES[activeTab];

  return (
    <section id="menu" className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-32 lg:px-12">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
          Our Menus
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.25rem)] text-foreground">
          A Taste of <span className="font-serif italic font-normal gold-shimmer">MAJHA</span>
        </h2>
        <p className="mt-3 text-[0.925rem] leading-relaxed text-muted-foreground font-light">
          From morning coffee and breakfast to evening dinners, explore what we make for you.
        </p>

        {/* Luxury Tab Switcher */}
        <div className="mt-8 inline-flex rounded-full border border-border/80 bg-card/80 p-1 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setActiveTab("cafe")}
            className={cn(
              "font-sans text-xs font-semibold tracking-[0.14em] uppercase rounded-full px-5 py-2.5 transition-all duration-300",
              activeTab === "cafe"
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(212,175,55,0.35)]"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            ☕ Café & Breakfast
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("restaurant")}
            className={cn(
              "font-sans text-xs font-semibold tracking-[0.14em] uppercase rounded-full px-5 py-2.5 transition-all duration-300",
              activeTab === "restaurant"
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(212,175,55,0.35)]"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            🍽️ Dinner Menu
          </button>
        </div>
      </Reveal>

      <div className="mt-6 text-center">
        <p className="font-serif italic text-sm text-primary/90">
          {currentMenu.subtitle}
        </p>
      </div>

      <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-16">
        {currentMenu.courses.map((course, ci) => (
          <Reveal key={course.heading + activeTab} delay={ci * 100}>
            <div className="flex items-center justify-between border-b border-border pb-3.5">
              <h3 className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase">
                {course.heading}
              </h3>
              <span className="text-xs text-primary/60 font-brand">✦</span>
            </div>

            <ul className="mt-2 divide-y divide-border/60">
              {course.dishes.map((dish) => (
                <li
                  key={dish.name}
                  className="group py-5 transition-all duration-300 hover:pl-2"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-display text-[1.25rem] leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                      {dish.name}
                    </p>
                    <span className="font-sans text-sm font-semibold text-primary">
                      {dish.price}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[0.825rem] leading-relaxed text-muted-foreground font-light">
                    {dish.note}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 text-center md:mt-16">
        <button
          type="button"
          onClick={() => openReservation({ experience: activeTab === "cafe" ? "cafe" : "dinner" })}
          className="whitespace-nowrap inline-block border border-primary/80 bg-primary/10 px-8 py-4 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
        >
          Reserve for {activeTab === "cafe" ? "Café & Breakfast" : "Evening Dinner"}
        </button>
      </Reveal>
    </section>
  );
}

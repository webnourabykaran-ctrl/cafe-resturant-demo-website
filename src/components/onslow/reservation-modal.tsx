import { useState, useId } from "react";
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, Utensils, Coffee, Crown } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useReservation, type ExperienceType } from "./reservation-context";
import { usePolicies } from "./policies-context";
import { cn } from "@/lib/utils";

const DINNER_TIMES = ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];
const CAFE_TIMES = ["8:30 AM", "9:30 AM", "10:30 AM", "11:30 AM", "12:30 PM", "1:30 PM", "2:30 PM"];
const PRIVATE_TIMES = ["12:00 PM (Lunch)", "6:30 PM (Dinner Sitting)", "8:30 PM (Late Degustation)"];

const PARTY_SIZES = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6 Guests", "8+ Guests"];

export function ReservationModal() {
  const { isOpen, setIsOpen, selectedExperience, setSelectedExperience } = useReservation();
  const { openPolicy } = usePolicies();

  // Form state
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  });
  const [time, setTime] = useState("7:30 PM");
  const [guests, setGuests] = useState("2 Guests");
  const [seating, setSeating] = useState("The Grand Dining Hall (Candlelit)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState("Dining Experience");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const dateId = useId();
  const notesId = useId();

  const handleExperienceChange = (exp: ExperienceType) => {
    setSelectedExperience(exp);
    if (exp === "cafe") setTime("10:30 AM");
    else if (exp === "dinner") setTime("7:30 PM");
    else setTime("6:30 PM (Dinner Sitting)");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `MJH-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(randomRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsOpen(false);
  };

  const timesList =
    selectedExperience === "cafe"
      ? CAFE_TIMES
      : selectedExperience === "private"
      ? PRIVATE_TIMES
      : DINNER_TIMES;

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Portal>
        {/* Backdrop */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Modal Window */}
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-[95vw] max-w-2xl max-h-[92vh] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded-sm border border-primary/40 bg-[#0c0d12] p-6 text-foreground shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.15)] duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:p-8 md:p-10">
          {/* Close button */}
          <DialogPrimitive.Close
            onClick={handleReset}
            className="absolute right-4 top-4 rounded-full border border-primary/30 p-2 text-primary/70 transition-all hover:border-primary hover:bg-primary/10 hover:text-primary focus:outline-none"
            aria-label="Close"
          >
            <X className="size-4" />
          </DialogPrimitive.Close>

          {!isSubmitted ? (
            <div>
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
                    MAJHA RESERVATIONS
                  </span>
                  <span className="text-xs text-primary">✦</span>
                </div>
                <DialogPrimitive.Title className="mt-2 font-display text-2xl font-normal text-foreground md:text-3xl">
                  Reserve Your Table
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="mt-1.5 font-sans text-xs text-muted-foreground font-light tracking-wide">
                  Select your preferred sitting, date, and party details for an unforgettable experience.
                </DialogPrimitive.Description>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-7 space-y-6">
                {/* 1. Experience Type Selector */}
                <div>
                  <label className="block font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-primary uppercase mb-2.5">
                    1. Choose Dining Experience
                  </label>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                    <button
                      type="button"
                      onClick={() => handleExperienceChange("dinner")}
                      className={cn(
                        "flex flex-col items-center justify-center rounded-sm border p-3.5 text-center transition-all duration-300",
                        selectedExperience === "dinner"
                          ? "border-primary bg-primary/15 text-primary shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                          : "border-border/60 bg-card/60 text-muted-foreground hover:border-border hover:text-foreground",
                      )}
                    >
                      <Utensils className="size-4 mb-1.5" />
                      <span className="font-sans text-xs font-semibold">Dinner</span>
                      <span className="text-[0.65rem] text-muted-foreground mt-0.5">Evening Dining</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleExperienceChange("cafe")}
                      className={cn(
                        "flex flex-col items-center justify-center rounded-sm border p-3.5 text-center transition-all duration-300",
                        selectedExperience === "cafe"
                          ? "border-primary bg-primary/15 text-primary shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                          : "border-border/60 bg-card/60 text-muted-foreground hover:border-border hover:text-foreground",
                      )}
                    >
                      <Coffee className="size-4 mb-1.5" />
                      <span className="font-sans text-xs font-semibold">Café & Coffee</span>
                      <span className="text-[0.65rem] text-muted-foreground mt-0.5">Morning & Lunch</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleExperienceChange("private")}
                      className={cn(
                        "flex flex-col items-center justify-center rounded-sm border p-3.5 text-center transition-all duration-300",
                        selectedExperience === "private"
                          ? "border-primary bg-primary/15 text-primary shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                          : "border-border/60 bg-card/60 text-muted-foreground hover:border-border hover:text-foreground",
                      )}
                    >
                      <Crown className="size-4 mb-1.5" />
                      <span className="font-sans text-xs font-semibold">Private Room</span>
                      <span className="text-[0.65rem] text-muted-foreground mt-0.5">Special Events</span>
                    </button>
                  </div>
                </div>

                {/* 2. Date, Time & Guests Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Date Input */}
                  <div>
                    <label htmlFor={dateId} className="block font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-primary uppercase mb-1.5 flex items-center gap-1.5">
                      <Calendar className="size-3.5 text-primary" /> Date
                    </label>
                    <input
                      id={dateId}
                      type="date"
                      value={date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      style={{ colorScheme: "dark" }}
                      className="w-full rounded-sm border border-border/70 bg-[#16171d] px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* Guests Dropdown/Chips */}
                  <div>
                    <label className="block font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-primary uppercase mb-1.5 flex items-center gap-1.5">
                      <Users className="size-3.5 text-primary" /> Party Size
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full rounded-sm border border-border/70 bg-[#16171d] px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      {PARTY_SIZES.map((size) => (
                        <option key={size} value={size} className="bg-[#16171d] text-foreground">
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 3. Time Slots */}
                <div>
                  <label className="block font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-primary uppercase mb-2 flex items-center gap-1.5">
                    <Clock className="size-3.5 text-primary" /> 2. Preferred Sitting Time
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timesList.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={cn(
                          "rounded-sm border px-3 py-1.5 font-sans text-xs transition-all duration-200",
                          time === slot
                            ? "border-primary bg-primary text-primary-foreground font-semibold shadow-[0_0_12px_rgba(212,175,55,0.3)]"
                            : "border-border/60 bg-card/60 text-muted-foreground hover:border-primary/50 hover:text-foreground",
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Seating Preference */}
                <div>
                  <label className="block font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-primary uppercase mb-1.5">
                    3. Seating Preference
                  </label>
                  <select
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="w-full rounded-sm border border-border/70 bg-[#16171d] px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="Main Dining Hall (Candlelight)">Main Dining Hall (Candlelight)</option>
                    <option value="Coffee Lounge & Bar">Coffee Lounge & Bar</option>
                    <option value="Private Booth Seating">Private Booth Seating</option>
                    <option value="Outdoor Courtyard Terrace">Outdoor Courtyard Terrace</option>
                    <option value="Chef's Counter (Kitchen View)">Chef's Counter (Kitchen View)</option>
                  </select>
                </div>

                {/* 5. Guest Information */}
                <div className="border-t border-border/60 pt-5">
                  <label className="block font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-primary uppercase mb-3">
                    4. Guest Information
                  </label>
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <div>
                      <label htmlFor={nameId} className="block text-[0.7rem] text-muted-foreground mb-1">
                        Full Name *
                      </label>
                      <input
                        id={nameId}
                        type="text"
                        placeholder="e.g. Julian Sterling"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full rounded-sm border border-border/70 bg-card/70 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor={phoneId} className="block text-[0.7rem] text-muted-foreground mb-1">
                        Telephone Number *
                      </label>
                      <input
                        id={phoneId}
                        type="tel"
                        placeholder="e.g. +64 9 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full rounded-sm border border-border/70 bg-card/70 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor={emailId} className="block text-[0.7rem] text-muted-foreground mb-1">
                        Email Address for Confirmation *
                      </label>
                      <input
                        id={emailId}
                        type="email"
                        placeholder="e.g. guest@majha.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full rounded-sm border border-border/70 bg-card/70 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-[0.7rem] text-muted-foreground mb-1">
                        Special Occasion
                      </label>
                      <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full rounded-sm border border-border/70 bg-[#16171d] px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="Dining Experience">Dining Experience</option>
                        <option value="Birthday Celebration">Birthday Celebration</option>
                        <option value="Romantic Anniversary">Romantic Anniversary</option>
                        <option value="Executive Business Dinner">Executive Business Dinner</option>
                        <option value="Proposal / Engagement">Proposal / Engagement</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor={notesId} className="block text-[0.7rem] text-muted-foreground mb-1">
                        Dietary Preferences / Requests
                      </label>
                      <input
                        id={notesId}
                        type="text"
                        placeholder="e.g. Gluten-Free, Caviar Pairing, Quiet Table"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full rounded-sm border border-border/70 bg-card/70 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 border border-primary bg-primary px-8 py-4 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:bg-primary/90 hover:scale-[1.01] cursor-pointer"
                  >
                    <Sparkles className="size-4" /> Confirm Table Reservation
                  </button>
                  <p className="mt-2.5 text-center text-[0.6875rem] text-muted-foreground">
                    ✦{" "}
                    <button
                      type="button"
                      onClick={() => openPolicy("cancellation")}
                      className="underline underline-offset-2 hover:text-primary transition-colors cursor-pointer text-muted-foreground"
                    >
                      Complimentary cancellation up to 24h prior
                    </button>{" "}
                    ·{" "}
                    <button
                      type="button"
                      onClick={() => openPolicy("dress-code")}
                      className="underline underline-offset-2 hover:text-primary transition-colors cursor-pointer text-muted-foreground"
                    >
                      Smart Elegant dress code
                    </button>
                  </p>
                </div>
              </form>
            </div>
          ) : (
            /* Confirmation Success Screen */
            <div className="py-6 text-center animate-in fade-in zoom-in-95 duration-500">
              <div className="mx-auto mb-4 flex justify-center">
                <div className="relative size-16 rounded-full overflow-hidden p-0.5 bg-gradient-to-br from-[#f5e3b5] via-[#d4af37] to-[#8a7322] shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                  <img
                    src="/majha-logo.png"
                    alt="MAJHA Crest"
                    width={64}
                    height={64}
                    className="size-full rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs text-primary font-brand uppercase tracking-widest">
                <span>✦</span>
                <span>MAJHA TABLE RESERVED</span>
                <span>✦</span>
              </div>

              <DialogPrimitive.Title className="mt-2 font-display text-2xl font-normal text-foreground md:text-3xl">
                Reservation Confirmed
              </DialogPrimitive.Title>

              <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-muted-foreground font-light">
                Thank you, <strong className="text-foreground">{name || "Esteemed Guest"}</strong>. Your table
                reservation has been received with distinction.
              </p>

              {/* Reservation card summary */}
              <div className="mx-auto mt-6 max-w-md rounded-sm border border-primary/30 bg-card/60 p-5 text-left backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="font-sans text-[0.65rem] font-semibold tracking-wider text-muted-foreground uppercase">
                    Booking Reference
                  </span>
                  <span className="font-brand text-sm font-bold text-primary tracking-widest">
                    {bookingRef}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="block text-[0.65rem] text-muted-foreground uppercase tracking-wide">
                      Date
                    </span>
                    <span className="font-medium text-foreground">{date}</span>
                  </div>
                  <div>
                    <span className="block text-[0.65rem] text-muted-foreground uppercase tracking-wide">
                      Time Slot
                    </span>
                    <span className="font-medium text-foreground">{time}</span>
                  </div>
                  <div>
                    <span className="block text-[0.65rem] text-muted-foreground uppercase tracking-wide">
                      Party Size
                    </span>
                    <span className="font-medium text-foreground">{guests}</span>
                  </div>
                  <div>
                    <span className="block text-[0.65rem] text-muted-foreground uppercase tracking-wide">
                      Experience
                    </span>
                    <span className="font-medium text-foreground capitalize">
                      {selectedExperience === "cafe" ? "Artisanal Café" : selectedExperience === "private" ? "Imperial Suite" : "Haute Cuisine"}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-[0.65rem] text-muted-foreground uppercase tracking-wide">
                      Seating Ambience
                    </span>
                    <span className="font-medium text-foreground">{seating}</span>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-[0.72rem] text-muted-foreground">
                A formal confirmation letter has been dispatched to <strong className="text-primary">{email || "your email"}</strong>.
                Our Chief Concierge is at your service.
              </p>

              <p className="mt-2 text-[0.7rem] text-muted-foreground/80">
                Prior to your visit, please review our{" "}
                <button
                  type="button"
                  onClick={() => openPolicy("dress-code")}
                  className="text-primary underline underline-offset-2 hover:text-primary/80 cursor-pointer"
                >
                  Dress Code
                </button>{" "}
                &{" "}
                <button
                  type="button"
                  onClick={() => openPolicy("terms")}
                  className="text-primary underline underline-offset-2 hover:text-primary/80 cursor-pointer"
                >
                  Dining Etiquette Charter
                </button>
                .
              </p>

              <div className="mt-7 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="border border-primary bg-primary px-8 py-3.5 font-sans text-xs font-semibold tracking-[0.18em] uppercase text-primary-foreground shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:bg-primary/90"
                >
                  Return to Sanctuary
                </button>
              </div>
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

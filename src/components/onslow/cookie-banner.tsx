import { useState, useEffect } from "react";
import { ShieldCheck, X } from "lucide-react";
import { usePolicies } from "./policies-context";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { openPolicy } = usePolicies();

  useEffect(() => {
    // Check if user has already accepted cookies
    const accepted = localStorage.getItem("majha_cookie_consent");
    if (!accepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("majha_cookie_consent", "all");
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem("majha_cookie_consent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Privacy and Cookie Consent"
      className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-5 duration-500"
    >
      <div className="relative rounded-sm border border-primary/40 bg-[#0c0d12]/95 p-4 sm:p-5 text-foreground backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(212,175,55,0.12)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3.5 max-w-2xl">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary mt-0.5">
              <ShieldCheck className="size-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-brand text-[0.6875rem] font-bold tracking-[0.2em] text-primary uppercase">
                  Maison MAJHA
                </span>
                <span className="text-[0.6rem] text-primary">✦</span>
                <span className="font-sans text-[0.6875rem] text-muted-foreground uppercase tracking-wider">
                  Patron Discretion & Cookies
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground font-light leading-relaxed">
                We employ subtle digital tokens to curate your table reservation journey, remember your preferred dining salon, and ensure the serenity of our digital sanctuary.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:shrink-0 justify-end">
            <button
              type="button"
              onClick={() => openPolicy("privacy")}
              className="text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-4 font-light cursor-pointer pr-2"
            >
              Review Charter
            </button>
            <button
              type="button"
              onClick={handleEssentialOnly}
              className="rounded-sm border border-border/80 bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all cursor-pointer"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="rounded-sm bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_12px_rgba(212,175,55,0.2)] cursor-pointer"
            >
              Accept All Protocols
            </button>
            <button
              type="button"
              onClick={handleEssentialOnly}
              aria-label="Dismiss cookie notice"
              className="p-1 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

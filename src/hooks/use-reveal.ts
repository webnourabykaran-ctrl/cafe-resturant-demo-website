import { useEffect, useRef, useState } from "react";

/**
 * Adds a subtle fade-in once an element scrolls into view.
 * Pair with the `reveal` utility class: <div className="reveal" {...reveal()} />
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              window.setTimeout(() => setVisible(true), delay);
            } else {
              setVisible(true);
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.05, rootMargin: "60px 0px -2% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return { ref, visible };
}

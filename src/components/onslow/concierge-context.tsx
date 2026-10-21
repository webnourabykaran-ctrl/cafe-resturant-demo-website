import { createContext, useContext, useState, type ReactNode } from "react";

export interface ConciergeContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  openConcierge: () => void;
  closeConcierge: () => void;
}

const defaultContext: ConciergeContextType = {
  isOpen: false,
  setIsOpen: () => {},
  openConcierge: () => {},
  closeConcierge: () => {},
};

const ConciergeContext = createContext<ConciergeContextType>(defaultContext);

export function ConciergeProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openConcierge = () => {
    // Attempt standard tel: protocol for mobile devices
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      window.location.href = "tel:+6498887799";
    }
    // Also always open the luxury contact modal so desktop users and mobile users have complete options
    setIsOpen(true);
  };

  const closeConcierge = () => {
    setIsOpen(false);
  };

  return (
    <ConciergeContext.Provider
      value={{
        isOpen,
        setIsOpen,
        openConcierge,
        closeConcierge,
      }}
    >
      {children}
    </ConciergeContext.Provider>
  );
}

export function useConcierge() {
  return useContext(ConciergeContext);
}

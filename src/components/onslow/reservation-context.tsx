import { createContext, useContext, useState, type ReactNode } from "react";

export type ExperienceType = "dinner" | "cafe" | "private";

export interface ReservationOptions {
  experience?: ExperienceType;
}

export interface ReservationContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  openReservation: (opts?: ReservationOptions) => void;
  closeReservation: () => void;
  selectedExperience: ExperienceType;
  setSelectedExperience: (exp: ExperienceType) => void;
}

const defaultContext: ReservationContextType = {
  isOpen: false,
  setIsOpen: () => {},
  openReservation: () => {},
  closeReservation: () => {},
  selectedExperience: "dinner",
  setSelectedExperience: () => {},
};

const ReservationContext = createContext<ReservationContextType>(defaultContext);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceType>("dinner");

  const openReservation = (opts?: ReservationOptions) => {
    if (opts?.experience) {
      setSelectedExperience(opts.experience);
    }
    setIsOpen(true);
  };

  const closeReservation = () => {
    setIsOpen(false);
  };

  return (
    <ReservationContext.Provider
      value={{
        isOpen,
        setIsOpen,
        openReservation,
        closeReservation,
        selectedExperience,
        setSelectedExperience,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  return useContext(ReservationContext);
}

import { createContext, useContext, useState, type ReactNode } from "react";
import type { PolicyTabId } from "./policies-data";

export interface PoliciesContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  openPolicy: (tab?: PolicyTabId) => void;
  closePolicy: () => void;
  activeTab: PolicyTabId;
  setActiveTab: (tab: PolicyTabId) => void;
}

const defaultContext: PoliciesContextType = {
  isOpen: false,
  setIsOpen: () => {},
  openPolicy: () => {},
  closePolicy: () => {},
  activeTab: "privacy",
  setActiveTab: () => {},
};

const PoliciesContext = createContext<PoliciesContextType>(defaultContext);

export function PoliciesProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<PolicyTabId>("privacy");

  const openPolicy = (tab?: PolicyTabId) => {
    if (tab) {
      setActiveTab(tab);
    }
    setIsOpen(true);
  };

  const closePolicy = () => {
    setIsOpen(false);
  };

  return (
    <PoliciesContext.Provider
      value={{
        isOpen,
        setIsOpen,
        openPolicy,
        closePolicy,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </PoliciesContext.Provider>
  );
}

export function usePolicies() {
  return useContext(PoliciesContext);
}

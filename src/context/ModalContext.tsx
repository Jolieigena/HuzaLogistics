"use client";

import React, { createContext, useContext, useState } from "react";
import { WaitlistModal } from "@/components/WaitlistModal";
import { ProductPreviewModal } from "@/components/ProductPreviewModal";

interface ModalContextType {
  openWaitlist: () => void;
  openPreview: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openWaitlist: () => setIsWaitlistOpen(true),
        openPreview: () => setIsPreviewOpen(true),
      }}
    >
      {children}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
      <ProductPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onOpenWaitlist={() => setIsWaitlistOpen(true)}
      />
    </ModalContext.Provider>
  );
}

export function useModals() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModals must be used within a ModalProvider");
  }
  return context;
}

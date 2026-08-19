"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ModalProvider } from "@/context/ModalContext";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <ModalProvider>
      {!isDashboard && <Navbar />}
      <main className={`min-h-screen w-full flex flex-col selection:bg-emerald-500 selection:text-white ${isDashboard ? 'bg-slate-50' : 'bg-white'}`}>
        {children}
      </main>
      {!isDashboard && <Footer />}
    </ModalProvider>
  );
}

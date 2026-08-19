"use client";

import React from "react";
import { ServicesSection } from "@/components/ServicesSection";
import { useModals } from "@/context/ModalContext";

export default function ServicesPage() {
  const { openPreview } = useModals();

  return (
    <div className="flex flex-col w-full min-h-[70vh]">
      {/* Inner Hero */}
      <section className="w-full bg-slate-900 text-white pt-20 pb-24 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
            Enterprise Logistics Services
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            From automated warehousing to real-time fleet telemetry, explore our comprehensive suite of supply chain solutions.
          </p>
        </div>
      </section>

      {/* Reuse the ServicesSection component from the homepage */}
      <div className="py-10">
        <ServicesSection onServiceClick={openPreview} />
      </div>
    </div>
  );
}

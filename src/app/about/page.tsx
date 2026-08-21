"use client";

import React from "react";
import { useModals } from "@/context/ModalContext";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  const { openWaitlist } = useModals();

  return (
    <div className="flex flex-col w-full min-h-[70vh]">
      {/* Inner Hero */}
      <section className="w-full bg-slate-50 pt-20 pb-24 px-6 sm:px-10 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-medium text-slate-900 tracking-tight mb-6">
            About HuzaLogistics
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We are on a mission to completely digitize the global supply chain, bringing unprecedented visibility and control to enterprise logistics.
          </p>
        </div>
      </section>

      {/* Content Area */}
      <section id="philosophy" className="w-full py-20 px-6 sm:px-10 max-w-3xl mx-auto text-center scroll-mt-20">
        <h2 className="text-3xl font-semibold mb-6 text-slate-900">Our Philosophy</h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          The modern supply chain is incredibly complex, fragmented across dozens of vendors, borders, and software systems. We believe that true efficiency requires a unified platform that connects everything from the warehouse floor to the delivery fleet.
        </p>
          <div className="mt-12 flex justify-center">
            <button
              onClick={openWaitlist}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-md"
            >
              Get in touch with us <ArrowRight className="w-5 h-5" />
            </button>
          </div>
      </section>
    </div>
  );
}

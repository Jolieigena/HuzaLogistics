"use client";

import React from "react";
import { useModals } from "@/context/ModalContext";
import { ArrowRight } from "lucide-react";

export default function TechnologyPage() {
  const { openPreview } = useModals();

  return (
    <div className="flex flex-col w-full min-h-[70vh]">
      {/* Inner Hero */}
      <section className="w-full bg-slate-50 pt-20 pb-24 px-6 sm:px-10 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-medium text-slate-900 tracking-tight mb-6">
            Platform Technology
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Powered by advanced telemetry, predictive analytics, and a modern API-first architecture, our platform is built for scale.
          </p>
        </div>
      </section>

      {/* Content Area */}
      <section className="w-full py-20 px-6 sm:px-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-900">Real-Time Telemetry</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Track thousands of assets globally with sub-second latency. Our IoT integration layer connects directly to shipping containers, freight trucks, and cargo ships, aggregating data into a single unified dashboard.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-900">Predictive Analytics</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Using historical traffic, weather, and port congestion data, our machine learning models predict shipment delays before they happen, allowing you to proactively reroute goods.
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={openPreview}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-md"
          >
            Preview Dashboard <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

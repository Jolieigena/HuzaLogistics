"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ServicesSectionProps {
  onServiceClick: () => void;
}

export function ServicesSection({ onServiceClick }: ServicesSectionProps) {
  const services = [
    {
      title: "Warehousing & Distribution",
      category: "STORAGE & FULFILLMENT",
      description:
        "Our strategically located warehouses ensure fast, secure storage and automated distribution with flexible storage options.",
      image: "/warehouse.jpg",
    },
    {
      title: "Shipment Tracking & Telemetry",
      category: "REAL-TIME VISIBILITY",
      description:
        "End-to-end multi-modal tracking with automated GPS updates, temperature monitoring, and ETA predictions.",
      image: "/hero-containers.jpg",
    },
    {
      title: "Supply Chain Optimization",
      category: "INTELLIGENT ROUTING",
      description:
        "Our expert models analyze and improve your supply chain, reducing transit costs and eliminating bottleneck delays.",
      image: "/warehouse.jpg",
    },
    {
      title: "Customs & Compliance Clearance",
      category: "GLOBAL TRADE",
      description:
        "We navigate the complexities of international customs regulations, ensuring your shipments clear without friction.",
      image: "/hero-containers.jpg",
    },
  ];

  return (
    <section id="services" className="w-full bg-white py-16 sm:py-20 px-6 sm:px-10 md:px-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-slate-500 uppercase mb-2">
            / OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Integrated Logistics Solutions
          </h2>
        </div>

        <button
          onClick={onServiceClick}
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all self-start sm:self-auto"
        >
          <span>Explore All Services</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Services Grid (2x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            onClick={onServiceClick}
            className="group relative bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-200 cursor-pointer flex flex-col justify-end h-[340px] sm:h-[380px] p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Background Image with Dark Gradient Overlay */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover object-center opacity-50 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

            {/* Content Overlay */}
            <div className="relative z-10">
              <span className="inline-block text-[11px] font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30 mb-3">
                {service.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 flex items-center justify-between">
                <span>{service.title}</span>
                <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-lg line-clamp-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

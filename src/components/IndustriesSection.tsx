"use client";

import React from "react";
import { Factory, HeartPulse, Laptop, ArrowRight } from "lucide-react";

interface IndustriesSectionProps {
  onIndustryClick: () => void;
}

export function IndustriesSection({ onIndustryClick }: IndustriesSectionProps) {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing & Industrial",
      description:
        "Optimize your supply chain from raw materials to finished goods with automated inbound-outbound logistics.",
    },
    {
      icon: HeartPulse,
      title: "Healthcare & Life Sciences",
      description:
        "Ensure safe, timely delivery of temperature-sensitive cold chain pharmaceutical products and medical equipment.",
    },
    {
      icon: Laptop,
      title: "Technology & High-Value Electronics",
      description:
        "Handle high-value, sensitive hardware with tamper-evident security tracking and express international dispatch.",
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-16 sm:py-20 px-6 sm:px-10 md:px-12 border-t border-slate-200/60">
      <div className="text-xs sm:text-sm font-semibold tracking-widest text-slate-500 uppercase mb-4">
        / INDUSTRIES WE SERVE
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        <div className="lg:col-span-7">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Logistics Tailored to Your Industry
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-slate-600 text-base leading-relaxed">
            At e-Logistics, we understand that every sector has unique supply chain requirements. That&apos;s why we offer specialized logistics frameworks for a wide range of industries.
          </p>
        </div>
      </div>

      {/* Industry Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {industries.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              onClick={onIndustryClick}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider group-hover:text-emerald-600 transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

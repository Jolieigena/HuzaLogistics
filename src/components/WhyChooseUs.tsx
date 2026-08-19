"use client";

import React from "react";
import { Globe, Cpu, Layers, Award } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "With a global network across 120+ ports, we ensure that your business can reach new markets effortlessly.",
    },
    {
      icon: Layers,
      title: "Custom Solutions",
      description:
        "We don't believe in one-size-fits-all. We design logistics strategies tailored to your specific business needs.",
    },
    {
      icon: Cpu,
      title: "Technology-Driven",
      description:
        "Our cutting-edge platform enables real-time tracking, automated dispatch, telemetry, and seamless coordination.",
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description:
        "With deep industry experience in global supply chains, we've perfected moving goods efficiently and reliably.",
    },
  ];

  return (
    <section id="why-choose-us" className="w-full bg-[#f8fafc] py-16 sm:py-20 px-6 sm:px-10 md:px-12 border-t border-b border-slate-200/60">
      {/* Category Tag */}
      <div className="text-xs sm:text-sm font-semibold tracking-widest text-slate-500 uppercase mb-4">
        / WHY CHOOSE US
      </div>

      {/* Title & Paragraph Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
        <div className="lg:col-span-7">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            We specialize in providing <br className="hidden sm:inline" />
            reliable and efficient solutions
          </h2>
        </div>

        <div className="lg:col-span-5">
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            Whether you need to streamline your supply chain, improve delivery times, or expand your reach globally, we&apos;re here to help you achieve your goals with precision and speed.
          </p>
        </div>
      </div>

      {/* 4 Feature Columns Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} className="flex flex-col items-start gap-3">
              <div className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-900 shadow-sm mb-1">
                <Icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

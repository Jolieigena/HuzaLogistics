"use client";

import React from "react";

interface ContentSectionProps {
  onViewProduct: () => void;
  onGetAccess: () => void;
}

export function ContentSection({
  onViewProduct,
  onGetAccess,
}: ContentSectionProps) {
  return (
    <div className="w-full p-8 sm:p-12 md:p-14 flex flex-col items-start gap-6 bg-white text-left transition-all">
      {/* Category Pill Tag */}
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f1f4f6] text-[#475569] text-xs sm:text-sm font-semibold tracking-wider uppercase select-none">
        LOGISTICS · SUPPLY CHAIN
      </div>

      {/* Main Title Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-[#0f172a] tracking-tight leading-none">
        e-Logistics
      </h1>

      {/* Subheading Body Text */}
      <p className="text-slate-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl">
        End-to-end supply chain visibility — shipment tracking, fleet coordination, and warehouse management for goods on the move.
      </p>

      {/* Action Buttons Row */}
      <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
        {/* Primary View Product Button */}
        <button
          onClick={onViewProduct}
          className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 group active:scale-[0.98]"
        >
          <span>View Product</span>
          <span className="transition-transform group-hover:translate-x-1 duration-200">
            →
          </span>
        </button>

        {/* Secondary Get Access Button */}
        <button
          onClick={onGetAccess}
          className="w-full sm:w-auto bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#1e293b] font-semibold text-base px-6 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center active:scale-[0.98]"
        >
          Get Access
        </button>
      </div>
    </div>
  );
}

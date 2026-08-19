"use client";

import React from "react";
import { CustomBoxIcon } from "./CustomBoxIcon";

export function HeroCard() {
  return (
    <div className="w-full bg-[#f6f8f9] border-b border-slate-200/60 py-16 sm:py-20 px-6 flex flex-col items-center justify-center gap-5 transition-all">
      {/* Light Mint Green Circle with Box Icon */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#e6f4ea] flex items-center justify-center shadow-sm border border-emerald-100/50 transition-transform duration-300 hover:scale-105">
        <CustomBoxIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#22c55e]" />
      </div>

      {/* Preview Tag Text */}
      <span className="text-[#55697d] font-bold text-xs sm:text-sm tracking-[0.22em] uppercase select-none">
        Preview Coming Soon
      </span>
    </div>
  );
}

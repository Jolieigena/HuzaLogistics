"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HuzaLogo } from "./HuzaLogo";
import { useModals } from "@/context/ModalContext";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({ 
  subsets: ["latin"],
  weight: ["600", "700", "800"] 
});

export function Navbar() {
  const { openWaitlist } = useModals();

  return (
    <header className="w-full bg-white border-b border-slate-100 py-4 px-6 sm:px-10 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md bg-white/90">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2 text-slate-900 font-semibold text-xl sm:text-2xl tracking-tight group">
        <HuzaLogo className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
        <span className={`tracking-tight ${robotoCondensed.className}`}>HuzaLogistics</span>
      </Link>

      {/* Center Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <Link href="/about" className="hover:text-slate-900 transition-colors">
          About us
        </Link>
        <Link href="/services" className="hover:text-slate-900 transition-colors">
          Services
        </Link>
        <Link href="/about#philosophy" className="hover:text-slate-900 transition-colors">
          Our Approach
        </Link>
        <Link href="/technology" className="hover:text-slate-900 transition-colors">
          Technology
        </Link>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <Link
          href="/contact-sales"
          className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm"
        >
          Contact Us
        </Link>
        <Link
          href="/licensing"
          className="hidden sm:inline-flex items-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-200"
        >
          <span>Get Access</span>
          <ArrowUpRight className="w-4 h-4 text-slate-500" />
        </Link>
      </div>
    </header>
  );
}

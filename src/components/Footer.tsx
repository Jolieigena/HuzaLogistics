"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HuzaLogo } from "./HuzaLogo";
import { useModals } from "@/context/ModalContext";

export function Footer() {
  const { openWaitlist } = useModals();

  return (
    <footer className="w-full bg-slate-950 text-white pt-16 pb-12 px-6 sm:px-10 md:px-12 border-t border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
        {/* Brand Info */}
        <div className="md:col-span-5 flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight group">
            <HuzaLogo className="w-7 h-7 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
            <span className="tracking-tight text-white">HuzaLogistics</span>
          </Link>
          <p className="text-slate-400 text-sm max-w-sm leading-relaxed mt-2">
            End-to-end supply chain visibility — shipment tracking, fleet coordination, and warehouse management for goods on the move.
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-2">
          <h4 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/about#philosophy" className="hover:text-white transition-colors">Our Approach</Link></li>
            <li><Link href="/technology" className="hover:text-white transition-colors">Technology</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-2">
          <h4 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-4">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li><Link href="/licensing" className="hover:text-white transition-colors">Warehousing</Link></li>
            <li><Link href="/licensing" className="hover:text-white transition-colors">Shipment Tracking</Link></li>
            <li><Link href="/licensing" className="hover:text-white transition-colors">Fleet Telemetry</Link></li>
            <li><Link href="/licensing" className="hover:text-white transition-colors">Customs Clearance</Link></li>
          </ul>
        </div>

        {/* CTA Column */}
        <div className="md:col-span-3 flex flex-col items-start gap-4">
          <h4 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-2">
            Get In Touch
          </h4>
          <p className="text-xs text-slate-400">
            Ready to upgrade your supply chain intelligence?
          </p>
          <button
            onClick={openWaitlist}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm py-3 px-5 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
          >
            <span>Contact Logistics Team</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} Huzalabs Inc. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Security</a>
        </div>
      </div>
    </footer>
  );
}

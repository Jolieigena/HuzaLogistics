"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Building2, Globe2, Mail, Calendar } from "lucide-react";

export default function ContactSalesPage() {
  return (
    <div className="flex flex-col w-full min-h-[70vh] bg-white items-center py-16 p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Contact Info */}
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Let's scale your operations.</h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Our Enterprise specialists are ready to help you design a custom deployment, negotiate volume pricing, and integrate with your existing ERP systems.
          </p>

          <div className="space-y-6">
            
            {/* Email Action */}
            <a href="mailto:info@huzalabs.com" className="flex items-center gap-4 p-4 -ml-4 rounded-2xl hover:bg-slate-50 transition-colors group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">Email Us Directly</h4>
                <p className="text-slate-500">info@huzalabs.com</p>
              </div>
            </a>

            {/* Calendar Action */}
            <a href="https://calendly.com/huzalabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 -ml-4 rounded-2xl hover:bg-slate-50 transition-colors group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Schedule a Meeting</h4>
                <p className="text-slate-500">Book a time on our calendar</p>
              </div>
            </a>

            {/* Location Info */}
            <div className="flex items-center gap-4 p-4 -ml-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Global Headquarters</h4>
                <p className="text-slate-500">KN 4 Ave, Kigali, Rwanda</p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Consultation</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                <input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                <input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
              <input type="email" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company Size (Fleet)</label>
              <select className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none bg-white">
                <option>100 - 500 vehicles</option>
                <option>500 - 1000 vehicles</option>
                <option>1000+ vehicles</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea rows={3} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none"></textarea>
            </div>
            <button className="w-full bg-slate-900 hover:bg-black text-white font-semibold py-3.5 rounded-xl transition-all mt-4">
              Submit Request
            </button>
          </div>
          <div className="mt-6 text-center">
            <Link href="/licensing" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Licensing
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

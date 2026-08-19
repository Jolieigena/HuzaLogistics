"use client";

import React from "react";
import Link from "next/link";
import { Check, X, HelpCircle, ArrowRight } from "lucide-react";
import { useModals } from "@/context/ModalContext";

export default function LicensingPage() {
  const { openWaitlist } = useModals();

  return (
    <div className="flex flex-col w-full min-h-[70vh] bg-slate-50">
      
      {/* Inner Hero */}
      <section className="w-full bg-white pt-20 pb-16 px-6 sm:px-10 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-medium text-slate-900 tracking-tight mb-6">
            Licensing &amp; Pricing
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Transparent enterprise licensing. Choose the right level of visibility and control for your supply chain operations.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full py-20 px-6 sm:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Starter License */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
            <p className="text-slate-500 mb-6 min-h-[48px]">Perfect for regional operators and mid-sized fleets.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-slate-900">$2,500</span>
              <span className="text-slate-500 font-medium"> /month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Up to 50 active shipments</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Basic fleet telemetry</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Standard dashboard access</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <X className="w-5 h-5 flex-shrink-0" />
                <span>Predictive delay analytics</span>
              </li>
            </ul>
            <Link
              href="/get-started"
              className="w-full py-3.5 rounded-full font-medium transition-all bg-slate-100 hover:bg-slate-200 text-slate-900 text-center block"
            >
              Get Started
            </Link>
          </div>

          {/* Professional License (Highlighted) */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl shadow-emerald-900/20 flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
            <p className="text-slate-400 mb-6 min-h-[48px]">Advanced analytics and unlimited tracking for growing enterprises.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-white">$8,000</span>
              <span className="text-slate-400 font-medium"> /month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-slate-200">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Unlimited active shipments</span>
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Real-time global telemetry</span>
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Predictive delay analytics</span>
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Customs clearance API</span>
              </li>
            </ul>
            <Link
              href="/get-started?plan=pro"
              className="w-full py-3.5 rounded-full font-medium transition-all bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-900/50 text-center block"
            >
              Buy License
            </Link>
          </div>

          {/* Enterprise License */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
            <p className="text-slate-500 mb-6 min-h-[48px]">Custom deployments for massive global supply chains.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-slate-900">Custom</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Everything in Professional</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>On-premise deployment options</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>White-label dashboard</span>
              </li>
            </ul>
            <Link
              href="/contact-sales"
              className="w-full py-3.5 rounded-full font-medium transition-all bg-slate-100 hover:bg-slate-200 text-slate-900 text-center block"
            >
              Contact Sales
            </Link>
          </div>

        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="w-full py-20 px-6 sm:px-10 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Compare Features</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-4 px-6 font-semibold text-slate-900">Feature</th>
                  <th className="py-4 px-6 font-semibold text-slate-900 text-center">Starter</th>
                  <th className="py-4 px-6 font-semibold text-slate-900 text-center">Professional</th>
                  <th className="py-4 px-6 font-semibold text-slate-900 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-slate-700">Active Shipments</td>
                  <td className="py-4 px-6 text-center text-slate-600">Up to 50</td>
                  <td className="py-4 px-6 text-center text-slate-600">Unlimited</td>
                  <td className="py-4 px-6 text-center text-slate-600">Unlimited</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-slate-700">Data Retention</td>
                  <td className="py-4 px-6 text-center text-slate-600">30 Days</td>
                  <td className="py-4 px-6 text-center text-slate-600">1 Year</td>
                  <td className="py-4 px-6 text-center text-slate-600">Unlimited</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-slate-700">Predictive Delay AI</td>
                  <td className="py-4 px-6 text-center flex justify-center"><X className="w-5 h-5 text-slate-300" /></td>
                  <td className="py-4 px-6 text-center flex justify-center"><Check className="w-5 h-5 text-emerald-500" /></td>
                  <td className="py-4 px-6 text-center flex justify-center"><Check className="w-5 h-5 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-slate-700">API Access</td>
                  <td className="py-4 px-6 text-center flex justify-center"><X className="w-5 h-5 text-slate-300" /></td>
                  <td className="py-4 px-6 text-center flex justify-center"><Check className="w-5 h-5 text-emerald-500" /></td>
                  <td className="py-4 px-6 text-center flex justify-center"><Check className="w-5 h-5 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-slate-700">24/7 Phone Support</td>
                  <td className="py-4 px-6 text-center flex justify-center"><X className="w-5 h-5 text-slate-300" /></td>
                  <td className="py-4 px-6 text-center flex justify-center"><X className="w-5 h-5 text-slate-300" /></td>
                  <td className="py-4 px-6 text-center flex justify-center"><Check className="w-5 h-5 text-emerald-500" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
    </div>
  );
}

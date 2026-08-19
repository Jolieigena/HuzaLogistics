"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";

import { StepTracker } from "@/components/StepTracker";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col w-full min-h-[70vh] bg-slate-50 items-center py-12 p-6">
      <StepTracker currentStep={2} />
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        
        {/* Checkout Form */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Secure Checkout</h1>
          <p className="text-slate-500 mb-8">Enter your billing details to activate your license.</p>
          
          <div className="space-y-6 mb-8">
            
            {/* Billing Info */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Card Information</label>
                <div className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-slate-50 text-slate-400 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>•••• •••• •••• 4242</span>
                </div>
              </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Billing Address</label>
              <input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="123 Logistics Way" />
            </div>
            <Link href="/dashboard" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 rounded-xl transition-all mt-4 flex items-center justify-center">
              Pay $8,000 / month
            </Link>
            </div>
          </div>

          <Link href="/licensing" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Plans
          </Link>
        </div>

        {/* Order Summary */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
          <div className="flex justify-between items-center py-4 border-b border-slate-800">
            <span className="text-slate-300">Professional License</span>
            <span className="font-semibold">$8,000.00</span>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-slate-800">
            <span className="text-slate-300">Predictive AI Add-on</span>
            <span className="font-semibold text-emerald-400">Included</span>
          </div>
          <div className="flex justify-between items-center py-4">
            <span className="text-lg font-bold">Total due today</span>
            <span className="text-2xl font-bold">$8,000.00</span>
          </div>
          <p className="text-xs text-slate-500 mt-6">
            By confirming your subscription, you allow HuzaLogistics to charge you for future payments in accordance with their terms.
          </p>
        </div>

      </div>
    </div>
  );
}

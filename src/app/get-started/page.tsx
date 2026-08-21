"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { StepTracker } from "@/components/StepTracker";
import { CustomSelect } from "@/components/CustomSelect";
import { getPlan } from "@/lib/plans";

function GetStartedForm() {
  const searchParams = useSearchParams();
  const plan = getPlan(searchParams.get("plan"));

  return (
    <div className="flex flex-col w-full min-h-[70vh] bg-slate-50 items-center justify-center p-6 py-16">
      <StepTracker currentStep={1} />
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Create Account</h1>
        <p className="text-lg text-slate-600 mb-4 max-w-lg mx-auto">
          Set up your organization&apos;s profile to get started with HuzaLogistics.
        </p>
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-10">
          <span>{plan.name} Plan</span>
          <span className="text-emerald-500">•</span>
          <span>{plan.priceLabel}{plan.price !== null && "/month"}</span>
        </div>

        {/* Form Container */}
        <div className="space-y-6 mb-10 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
              <input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Jane" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
              <input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Doe" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
            <input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Acme Logistics" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
              <input type="email" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="jane@acme.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <input type="tel" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="+1 (555) 000-0000" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Country / Region</label>
              <CustomSelect
                placeholder="Select a country"
                options={[
                  "United States",
                  "Rwanda",
                  "United Kingdom",
                  "Canada",
                  "Kenya",
                  "Singapore",
                  "Other"
                ]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input type="password" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="••••••••" />
            </div>
          </div>
          <Link href={`/checkout?plan=${plan.id}`} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 rounded-xl transition-all mt-6 flex items-center justify-center">
            Continue to Payment
          </Link>
        </div>

        <Link href="/licensing" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Licensing
        </Link>
      </div>
    </div>
  );
}

export default function GetStartedPage() {
  return (
    <Suspense fallback={null}>
      <GetStartedForm />
    </Suspense>
  );
}

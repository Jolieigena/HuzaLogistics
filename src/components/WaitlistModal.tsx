"use client";

import React, { useState } from "react";
import { X, CheckCircle, Send, Sparkles } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("Shipment Tracking");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail("");
    setCompany("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/30 backdrop-blur-md transition-opacity animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-slate-100 relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-50 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
              Request Access
            </h3>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed">
              Be among the first supply chain leaders to experience the full power of <strong className="text-slate-900 font-bold">HuzaLogistics</strong> when the private preview launches.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Global Freight Corp"
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Primary Use Case
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition-all appearance-none cursor-pointer"
                >
                  <option value="Shipment Tracking" className="bg-white">Shipment & Parcel Tracking</option>
                  <option value="Fleet Coordination" className="bg-white">Fleet & Route Optimization</option>
                  <option value="Warehouse Management" className="bg-white">Warehouse & Inventory Visibility</option>
                  <option value="All Features" className="bg-white">End-to-End Supply Chain Suite</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:hover:shadow-none"
              >
                {loading ? (
                  <span>Submitting request...</span>
                ) : (
                  <>
                    <span>Submit Access Request</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-10 text-center relative z-10 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
              You&apos;re on the list!
            </h3>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed max-w-xs mx-auto">
              Thank you for requesting early access for <strong className="text-slate-900 font-semibold">{email}</strong>. Our team will reach out with your preview invite shortly.
            </p>
            <button
              onClick={handleReset}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-8 py-3 rounded-xl text-sm transition-all"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

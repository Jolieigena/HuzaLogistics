"use client";

import React, { useState } from "react";
import { X, Navigation, Truck, Warehouse, PackageCheck, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";

interface ProductPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWaitlist: () => void;
}

export function ProductPreviewModal({
  isOpen,
  onClose,
  onOpenWaitlist,
}: ProductPreviewModalProps) {
  const [activeTab, setActiveTab] = useState<"shipments" | "fleet" | "warehouse">("shipments");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-opacity animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Interactive Platform Preview</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              e-Logistics Platform Suite
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Feature Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 mb-6 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab("shipments")}
            className={`flex items-center gap-2 py-2.5 px-4 font-semibold text-sm rounded-xl transition-all whitespace-nowrap ${
              activeTab === "shipments"
                ? "bg-brand-500 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <PackageCheck className="w-4 h-4" />
            <span>Shipment Tracking</span>
          </button>

          <button
            onClick={() => setActiveTab("fleet")}
            className={`flex items-center gap-2 py-2.5 px-4 font-semibold text-sm rounded-xl transition-all whitespace-nowrap ${
              activeTab === "fleet"
                ? "bg-brand-500 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Fleet Coordination</span>
          </button>

          <button
            onClick={() => setActiveTab("warehouse")}
            className={`flex items-center gap-2 py-2.5 px-4 font-semibold text-sm rounded-xl transition-all whitespace-nowrap ${
              activeTab === "warehouse"
                ? "bg-brand-500 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Warehouse className="w-4 h-4" />
            <span>Warehouse Management</span>
          </button>
        </div>

        {/* Tab Content Display */}
        {activeTab === "shipments" && (
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-3 mb-4">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Container #HZL-9842-X
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">
                    Rotterdam → Hamburg Express Line
                  </h4>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  In Transit • On Schedule
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-4">
                <div className="bg-white p-3 rounded-xl border border-slate-200/60">
                  <div className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-500" /> Origin
                  </div>
                  <div className="font-semibold text-slate-900">Port Rotterdam</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/60">
                  <div className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                    <Navigation className="w-3.5 h-3.5 text-brand-500" /> Destination
                  </div>
                  <div className="font-semibold text-slate-900">Hub Hamburg</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/60">
                  <div className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-500" /> Estimated Arrival
                  </div>
                  <div className="font-semibold text-slate-900">Today, 17:45 CET</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/60">
                  <div className="text-xs text-slate-500 mb-1">Temperature</div>
                  <div className="font-semibold text-slate-900">4.2°C (Cold Chain)</div>
                </div>
              </div>

              {/* Step Progress Tracker */}
              <div className="relative flex items-center justify-between pt-2">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0" />
                <div className="absolute top-1/2 left-0 w-3/4 h-1 bg-brand-500 -translate-y-1/2 z-0 transition-all duration-500" />

                <div className="relative z-10 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <div className="relative z-10 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <div className="relative z-10 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold shadow-md shadow-brand-500/30">
                  🚚
                </div>
                <div className="relative z-10 w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold">
                  🏁
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "fleet" && (
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Live Fleet Telemetry & Dispatch
              </h4>
              <p className="text-slate-600 text-sm mb-4">
                Real-time driver location telemetry, automated dispatching, fuel optimization, and route rerouting.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-4 rounded-xl border border-slate-200/60">
                  <div className="text-2xl font-black text-brand-600 mb-1">142</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Active Vehicles</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200/60">
                  <div className="text-2xl font-black text-emerald-600 mb-1">98.4%</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">On-Time Dispatch Rate</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200/60">
                  <div className="text-2xl font-black text-sky-600 mb-1">-14.2%</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Fuel Savings (AI Route)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "warehouse" && (
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Smart Warehouse & Inventory Node
              </h4>
              <p className="text-slate-600 text-sm mb-4">
                3D rack visualization, RFID scan sync, and instant re-order triggers across international warehouses.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white p-4 rounded-xl border border-slate-200/60 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Frankfurt Logistics Hub A</div>
                    <div className="text-xs text-slate-500">Occupancy: 84% • 12,400 Pallets</div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-lg">
                    Optimal
                  </span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/60 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Antwerp Port Terminal B</div>
                    <div className="text-xs text-slate-500">Occupancy: 91% • 18,900 Pallets</div>
                  </div>
                  <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-lg">
                    High Capacity
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Call to Action */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
            Ready to integrate end-to-end supply chain visibility into your operations?
          </p>

          <button
            onClick={() => {
              onClose();
              onOpenWaitlist();
            }}
            className="bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm whitespace-nowrap"
          >
            <span>Request Early Access</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

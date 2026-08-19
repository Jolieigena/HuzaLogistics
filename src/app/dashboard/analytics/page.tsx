"use client";

import React from "react";
import { BarChart3, TrendingUp, DollarSign, Activity } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Analytics & Reports</h1>
          <p className="text-slate-500">Deep dive into your supply chain performance metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm text-sm appearance-none">
            <option>Last 30 Days</option>
            <option>This Quarter</option>
            <option>Year to Date</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Metric 1 */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-slate-500">
            <DollarSign className="w-5 h-5 text-emerald-600" />
            <h3 className="font-medium">Revenue (Freight)</h3>
          </div>
          <p className="text-3xl font-bold text-slate-900">$4.2M</p>
          <p className="text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" /> +14.5% vs last period
          </p>
        </div>

        {/* Metric 2 */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-slate-500">
            <Activity className="w-5 h-5 text-blue-600" />
            <h3 className="font-medium">On-Time Delivery</h3>
          </div>
          <p className="text-3xl font-bold text-slate-900">96.4%</p>
          <p className="text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" /> +2.1% vs last period
          </p>
        </div>

        {/* Metric 3 */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-slate-500">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            <h3 className="font-medium">Carbon Footprint</h3>
          </div>
          <p className="text-3xl font-bold text-slate-900">412<span className="text-lg text-slate-400 ml-1">tons</span></p>
          <p className="text-sm text-rose-600 font-medium mt-2 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" /> +5.4% vs last period
          </p>
        </div>

      </div>

      {/* Chart Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm min-h-[400px] flex flex-col items-center justify-center text-slate-400">
          <BarChart3 className="w-12 h-12 mb-4 text-slate-300" />
          <p className="font-medium text-slate-600">Shipment Volume by Region</p>
          <p className="text-sm mt-1">Connect your charting library (e.g. Recharts) to render.</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm min-h-[400px] flex flex-col items-center justify-center text-slate-400">
          <Activity className="w-12 h-12 mb-4 text-slate-300" />
          <p className="font-medium text-slate-600">Fleet Efficiency Trends</p>
          <p className="text-sm mt-1">Connect your charting library (e.g. Recharts) to render.</p>
        </div>
      </div>
      
    </div>
  );
}

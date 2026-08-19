"use client";

import React from "react";
import { Warehouse, Boxes, ArrowRightLeft, TrendingUp, AlertCircle, MapPin } from "lucide-react";

export default function WarehousesPage() {
  const hubs = [
    { name: "Los Angeles Hub (LAX)", image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?auto=format&fit=crop&w=600&q=80", capacity: 92, status: "Critical", throughput: "14.2k units/day", alerts: 2 },
    { name: "Rotterdam Port (RTM)", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80", capacity: 78, status: "Healthy", throughput: "18.5k units/day", alerts: 0 },
    { name: "Kigali Logistics Hub (KGL)", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80", capacity: 45, status: "Healthy", throughput: "5.1k units/day", alerts: 0 },
    { name: "Singapore Port (SGP)", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80", capacity: 88, status: "Warning", throughput: "22.4k units/day", alerts: 1 },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Warehouse Management</h1>
          <p className="text-slate-500">Monitor inventory capacity and throughput across global hubs.</p>
        </div>
        <button className="px-4 py-2 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-500 transition-colors shadow-sm text-sm">
          + Add Facility
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Hubs List */}
        <div className="lg:col-span-2 space-y-6">
          {hubs.map((hub) => (
            <div key={hub.name} className="bg-white border border-slate-200 rounded-3xl p-4 shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between hover:shadow-md transition-shadow">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full sm:w-auto">
                {/* Hub Photo */}
                <div className="w-full sm:w-32 h-40 sm:h-24 rounded-2xl overflow-hidden relative flex-shrink-0 border border-slate-100">
                  <img src={hub.image} alt={hub.name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className={`absolute top-2 left-2 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider backdrop-blur-md
                    ${hub.status === "Critical" ? "bg-rose-500/90 text-white" : 
                      hub.status === "Warning" ? "bg-amber-500/90 text-white" : "bg-emerald-500/90 text-white"}`}
                  >
                    {hub.status}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{hub.name}</h3>
                  <div className="flex flex-col gap-1.5 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5"><ArrowRightLeft className="w-4 h-4 text-slate-400" /> {hub.throughput}</span>
                    {hub.alerts > 0 ? (
                      <span className="flex items-center gap-1.5 text-rose-600 font-medium"><AlertCircle className="w-4 h-4" /> {hub.alerts} Actionable Alerts</span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-emerald-600 font-medium"><Warehouse className="w-4 h-4" /> Operating Optimally</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-56 flex flex-col gap-2 bg-slate-50 p-4 rounded-2xl">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-semibold uppercase tracking-wider text-xs">Capacity</span>
                  <span className={`font-bold ${hub.capacity > 90 ? 'text-rose-600' : hub.capacity > 80 ? 'text-amber-600' : 'text-slate-900'}`}>
                    {hub.capacity}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${hub.capacity > 90 ? 'bg-rose-500' : hub.capacity > 80 ? 'bg-amber-500' : 'bg-emerald-500'}`} 
                    style={{ width: `${hub.capacity}%` }}
                  ></div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Right Sidebar Stats */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-lg shadow-slate-900/10 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            <h3 className="text-slate-400 text-sm font-medium mb-4 relative z-10">Total Global Inventory</h3>
            <div className="flex items-end gap-3 mb-2 relative z-10">
              <p className="text-4xl font-bold tracking-tight">1.42<span className="text-xl text-slate-400 font-medium ml-1">M</span></p>
              <span className="text-sm text-slate-400 mb-1.5">units</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium relative z-10">
              <TrendingUp className="w-4 h-4" /> +8.4% this month
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
            <h3 className="text-slate-900 font-bold mb-4">Inventory Distribution</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1 text-slate-600"><span>Electronics</span><span className="font-medium text-slate-900">45%</span></div>
                <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1 text-slate-600"><span>Apparel</span><span className="font-medium text-slate-900">30%</span></div>
                <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-indigo-500 h-2 rounded-full" style={{ width: '30%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1 text-slate-600"><span>Raw Materials</span><span className="font-medium text-slate-900">15%</span></div>
                <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-slate-700 h-2 rounded-full" style={{ width: '15%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1 text-slate-600"><span>Other</span><span className="font-medium text-slate-900">10%</span></div>
                <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-slate-300 h-2 rounded-full" style={{ width: '10%' }}></div></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

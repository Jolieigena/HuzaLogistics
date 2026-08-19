"use client";

import React from "react";
import { ArrowUpRight, ArrowDownRight, PackageCheck, AlertCircle, Clock, MoreHorizontal, Truck, Warehouse } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Supply Chain Overview</h1>
        <p className="text-slate-500">End-to-end visibility across your shipments, fleet, and warehouses.</p>
      </div>

      {/* KPI Cards Grid (The 3 Pillars + Financials) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Shipment Tracking */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <PackageCheck className="w-5 h-5" />
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3" /> 12%
            </span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium mb-1">Active Shipments</h3>
          <p className="text-3xl font-bold text-slate-900 tracking-tight">1,248</p>
        </div>

        {/* Fleet Coordination */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Truck className="w-5 h-5" />
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3" /> 94% online
            </span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium mb-1">Active Fleet Vehicles</h3>
          <p className="text-3xl font-bold text-slate-900 tracking-tight">42<span className="text-lg text-slate-400 font-medium"> / 45</span></p>
        </div>

        {/* Warehouse Management */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
              <Warehouse className="w-5 h-5" />
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
              High
            </span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium mb-1">Global Warehouse Cap.</h3>
          <p className="text-3xl font-bold text-slate-900 tracking-tight">84<span className="text-lg text-slate-400 font-medium">%</span></p>
        </div>

        {/* Financials (Dark Theme Accent) */}
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-lg shadow-slate-900/10 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400">
              <span className="font-bold text-lg">$</span>
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
              <ArrowDownRight className="w-3 h-3" /> 4.1%
            </span>
          </div>
          <h3 className="text-slate-400 text-sm font-medium mb-1 relative z-10">Total Ops Spend (MTD)</h3>
          <p className="text-3xl font-bold text-white tracking-tight relative z-10">$1.24<span className="text-lg text-slate-400 font-medium">M</span></p>
        </div>

      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Spans 2) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Recent Shipments Table */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2"><PackageCheck className="w-5 h-5 text-blue-600"/> Active Shipments</h2>
              <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="py-3 px-6 font-semibold text-xs text-slate-500 uppercase tracking-wider">Tracking ID</th>
                    <th className="py-3 px-6 font-semibold text-xs text-slate-500 uppercase tracking-wider">Route</th>
                    <th className="py-3 px-6 font-semibold text-xs text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="py-3 px-6 font-semibold text-xs text-slate-500 uppercase tracking-wider">ETA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { id: "HZ-99342", route: "Shanghai → Los Angeles", status: "In Transit", color: "text-blue-700 bg-blue-50", date: "Oct 24, 14:00" },
                    { id: "HZ-88129", route: "Rotterdam → New York", status: "Delayed", color: "text-amber-700 bg-amber-50", date: "Oct 26, 09:30" },
                    { id: "HZ-66290", route: "Singapore → Sydney", status: "Delivered", color: "text-emerald-700 bg-emerald-50", date: "Oct 22, 11:15" },
                  ].map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                      <td className="py-4 px-6 font-medium text-slate-900 text-sm">{item.id}</td>
                      <td className="py-4 px-6 text-slate-600 text-sm">{item.route}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${item.color}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-500 text-sm">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fleet Coordination Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2"><Truck className="w-5 h-5 text-indigo-600"/> Fleet Status</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="text-slate-600">On Route</span><span className="font-semibold">32</span></div>
                  <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-emerald-500 h-2 rounded-full" style={{ width: '75%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="text-slate-600">Loading/Unloading</span><span className="font-semibold">10</span></div>
                  <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="text-slate-600">Maintenance</span><span className="font-semibold">3</span></div>
                  <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-amber-500 h-2 rounded-full" style={{ width: '5%' }}></div></div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl shadow-sm p-6 text-white overflow-hidden relative border border-slate-800">
               {/* Map Background */}
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80" 
                 alt="Map" 
                 className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/90 to-transparent"></div>
               
               <h2 className="text-lg font-bold mb-1 relative z-10 flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                 Live Dispatch
               </h2>
               <p className="text-slate-300 text-sm mb-6 relative z-10">2 vehicles require routing optimization</p>
               <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-2.5 rounded-xl transition-all shadow-lg shadow-emerald-900/50 relative z-10 border border-emerald-400/50 backdrop-blur-sm">
                 Optimize Routes
               </button>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="space-y-8">
          
          {/* Warehouse Management */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2"><Warehouse className="w-5 h-5 text-amber-600"/> Hub Capacity</h2>
            <div className="space-y-5">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center font-bold text-slate-700 text-sm border border-slate-200">
                  LAX
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1.5"><span className="font-medium text-slate-700">Los Angeles</span><span className="text-rose-600 font-semibold">92%</span></div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-rose-500 h-1.5 rounded-full" style={{ width: '92%' }}></div></div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center font-bold text-slate-700 text-sm border border-slate-200">
                  RTM
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1.5"><span className="font-medium text-slate-700">Rotterdam</span><span className="text-amber-600 font-semibold">78%</span></div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '78%' }}></div></div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center font-bold text-slate-700 text-sm border border-slate-200">
                  KGL
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1.5"><span className="font-medium text-slate-700">Kigali</span><span className="text-emerald-600 font-semibold">45%</span></div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '45%' }}></div></div>
                </div>
              </div>
              
            </div>
            <button className="w-full mt-6 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-sm rounded-xl transition-colors border border-slate-200">
              Manage Inventory
            </button>
          </div>

          {/* AI Insights */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2"><AlertCircle className="w-5 h-5 text-purple-600"/> AI Insights</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 ring-4 ring-amber-50 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-slate-900">LAX Capacity Warning</p>
                  <p className="text-sm text-slate-500 mt-1">Los Angeles hub is nearing maximum capacity. Consider diverting inbound freight to Oakland.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 ring-4 ring-emerald-50 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Customs Cleared</p>
                  <p className="text-sm text-slate-500 mt-1">Shipment HZ-66290 cleared Sydney customs 12 hours ahead of schedule.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}

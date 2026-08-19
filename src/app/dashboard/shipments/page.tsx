"use client";

import React from "react";
import { Search, Filter, Download, MoreHorizontal } from "lucide-react";

export default function ShipmentsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Shipments</h1>
          <p className="text-slate-500">Manage and track all active and historical freight.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors shadow-sm text-sm">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="px-4 py-2 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-500 transition-colors shadow-sm text-sm">
            + Create Shipment
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by Tracking ID, Origin, or Destination..." 
            className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder:text-slate-400"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-100 transition-colors text-sm w-full sm:w-auto justify-center">
          <Filter className="w-4 h-4" /> Filters
        </button>
      </div>

      {/* Main Table */}
      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200">
                <th className="py-4 px-6 font-semibold text-xs text-slate-500 uppercase tracking-wider">Tracking ID</th>
                <th className="py-4 px-6 font-semibold text-xs text-slate-500 uppercase tracking-wider">Client</th>
                <th className="py-4 px-6 font-semibold text-xs text-slate-500 uppercase tracking-wider">Origin → Destination</th>
                <th className="py-4 px-6 font-semibold text-xs text-slate-500 uppercase tracking-wider">Status</th>
                <th className="py-4 px-6 font-semibold text-xs text-slate-500 uppercase tracking-wider">Est. Arrival</th>
                <th className="py-4 px-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { id: "HZ-99342", client: "Acme Corp", route: "Shanghai → Los Angeles", status: "In Transit", color: "text-blue-700 bg-blue-50", date: "Oct 24, 14:00" },
                { id: "HZ-88129", client: "Globex", route: "Rotterdam → New York", status: "Delayed", color: "text-amber-700 bg-amber-50", date: "Oct 26, 09:30" },
                { id: "HZ-77451", client: "Stark Ind.", route: "Dubai → London", status: "Customs", color: "text-purple-700 bg-purple-50", date: "Pending" },
                { id: "HZ-66290", client: "Wayne Ent.", route: "Singapore → Sydney", status: "Delivered", color: "text-emerald-700 bg-emerald-50", date: "Oct 22, 11:15" },
                { id: "HZ-55102", client: "Acme Corp", route: "Tokyo → Seattle", status: "In Transit", color: "text-blue-700 bg-blue-50", date: "Oct 25, 08:00" },
                { id: "HZ-44911", client: "Initech", route: "Hamburg → Miami", status: "Preparing", color: "text-slate-700 bg-slate-100", date: "Oct 28, 16:45" },
                { id: "HZ-33882", client: "Soylent", route: "Mumbai → Kigali", status: "In Transit", color: "text-blue-700 bg-blue-50", date: "Oct 27, 12:30" },
              ].map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                  <td className="py-4 px-6 font-medium text-slate-900 text-sm">{item.id}</td>
                  <td className="py-4 px-6 text-slate-700 text-sm font-medium">{item.client}</td>
                  <td className="py-4 px-6 text-slate-500 text-sm">{item.route}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${item.color}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-sm">{item.date}</td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
          <p className="text-sm text-slate-500">Showing <span className="font-medium text-slate-900">1</span> to <span className="font-medium text-slate-900">7</span> of <span className="font-medium text-slate-900">1,248</span> results</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-sm font-medium text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

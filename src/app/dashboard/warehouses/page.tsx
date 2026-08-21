"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Warehouse, ArrowRightLeft, TrendingUp, AlertCircle, X, Users, CalendarCheck } from "lucide-react";

interface Hub {
  name: string;
  region: string;
  image: string;
  capacity: number;
  status: "Critical" | "Warning" | "Healthy";
  throughput: string;
  alerts: number;
  staff: number;
  lastInspection: string;
}

const initialHubs: Hub[] = [
  { name: "Los Angeles Hub (LAX)", region: "North America", image: "https://images.unsplash.com/photo-1644079446600-219068676743?auto=format&fit=crop&w=600&q=80", capacity: 92, status: "Critical", throughput: "14.2k units/day", alerts: 2, staff: 84, lastInspection: "Aug 2, 2026" },
  { name: "Rotterdam Port (RTM)", region: "Europe", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80", capacity: 78, status: "Healthy", throughput: "18.5k units/day", alerts: 0, staff: 112, lastInspection: "Jul 21, 2026" },
  { name: "Kigali Logistics Hub (KGL)", region: "Africa", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80", capacity: 45, status: "Healthy", throughput: "5.1k units/day", alerts: 0, staff: 36, lastInspection: "Aug 10, 2026" },
  { name: "Singapore Port (SGP)", region: "Asia Pacific", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80", capacity: 88, status: "Warning", throughput: "22.4k units/day", alerts: 1, staff: 97, lastInspection: "Jul 30, 2026" },
];

const REGIONS = ["North America", "Europe", "Africa", "Asia Pacific", "South America"];

function statusFromCapacity(capacity: number): Hub["status"] {
  if (capacity > 90) return "Critical";
  if (capacity > 80) return "Warning";
  return "Healthy";
}

export default function WarehousesPage() {
  const [hubs, setHubs] = useState<Hub[]>(initialHubs);
  const [selectedHubName, setSelectedHubName] = useState<string | null>(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [name, setName] = useState("");
  const [region, setRegion] = useState(REGIONS[0]);
  const [capacity, setCapacity] = useState("20");

  const selectedHub = hubs.find((h) => h.name === selectedHubName) ?? null;

  const resetForm = () => {
    setName("");
    setRegion(REGIONS[0]);
    setCapacity("20");
  };

  const handleAddFacility = () => {
    if (!name) return;
    const cap = Math.min(100, Math.max(0, Number(capacity) || 0));
    setHubs((prev) => [
      ...prev,
      {
        name,
        region,
        image: "/warehouse.jpg",
        capacity: cap,
        status: statusFromCapacity(cap),
        throughput: "0 units/day",
        alerts: 0,
        staff: 0,
        lastInspection: "Not yet inspected",
      },
    ]);
    setIsAddOpen(false);
    resetForm();
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Warehouse Management</h1>
          <p className="text-slate-500">Monitor inventory capacity and throughput across global hubs.</p>
        </div>
        <button
          onClick={() => setIsAddOpen(true)}
          className="px-4 py-2 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-500 transition-colors shadow-sm text-sm"
        >
          + Add Facility
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Hubs List */}
        <div className="lg:col-span-2 space-y-6">
          {hubs.map((hub) => (
            <button
              key={hub.name}
              onClick={() => setSelectedHubName(hub.name)}
              className="w-full text-left bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between hover:shadow-md transition-shadow"
            >

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full sm:w-auto">
                {/* Hub Photo */}
                <div className="w-full sm:w-32 h-40 sm:h-24 rounded-lg overflow-hidden relative flex-shrink-0 border border-slate-100">
                  <Image src={hub.image} alt={hub.name} fill className="object-cover" />
                  <div className={`absolute top-2 left-2 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider backdrop-blur-md
                    ${hub.status === "Critical" ? "bg-rose-500/90 text-white" :
                      hub.status === "Warning" ? "bg-amber-500/90 text-white" : "bg-emerald-500/90 text-white"}`}
                  >
                    {hub.status}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-medium text-slate-900 mb-1">{hub.name}</h3>
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

              <div className="w-full sm:w-56 flex flex-col gap-2 bg-slate-50 p-4 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium uppercase tracking-wider text-xs">Capacity</span>
                  <span className={`font-semibold ${hub.capacity > 90 ? 'text-rose-600' : hub.capacity > 80 ? 'text-amber-600' : 'text-slate-900'}`}>
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

            </button>
          ))}
        </div>

        {/* Right Sidebar Stats */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white rounded-xl p-6 shadow-sm shadow-slate-900/10 border border-slate-800 relative overflow-hidden">
            <h3 className="text-slate-400 text-sm font-medium mb-4 relative z-10">Total Global Inventory</h3>
            <div className="flex items-end gap-3 mb-2 relative z-10">
              <p className="text-2xl font-semibold tracking-tight">1.42<span className="text-xl text-slate-400 font-medium ml-1">M</span></p>
              <span className="text-sm text-slate-400 mb-1.5">units</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium relative z-10">
              <TrendingUp className="w-4 h-4" /> +8.4% this month
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
            <h3 className="text-slate-900 font-semibold mb-4">Inventory Distribution</h3>
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

      {/* Hub Detail Slide-over */}
      {selectedHub && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" onClick={() => setSelectedHubName(null)}></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 border-l border-slate-200">
            <div className="relative h-40 flex-shrink-0">
              <Image src={selectedHub.image} alt={selectedHub.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <button onClick={() => setSelectedHubName(null)} className="absolute top-4 right-4 text-white p-1.5 hover:bg-white/20 rounded-md transition-colors">
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-lg font-bold text-white">{selectedHub.name}</h2>
                <p className="text-xs text-slate-200">{selectedHub.region}</p>
              </div>
            </div>

            <div className="p-6 flex-1 overflow-y-auto space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1"><Users className="w-3.5 h-3.5" /> Staff on site</div>
                  <p className="text-sm font-bold text-slate-900">{selectedHub.staff}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1"><CalendarCheck className="w-3.5 h-3.5" /> Last Inspection</div>
                  <p className="text-sm font-bold text-slate-900">{selectedHub.lastInspection}</p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-500 mb-1">Throughput</p>
                <p className="text-sm font-semibold text-slate-900">{selectedHub.throughput}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-500">Capacity</span>
                  <span className="font-semibold text-slate-900">{selectedHub.capacity}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${selectedHub.capacity > 90 ? 'bg-rose-500' : selectedHub.capacity > 80 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                    style={{ width: `${selectedHub.capacity}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50/80">
              <button
                onClick={() => setSelectedHubName(null)}
                className="w-full px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-colors text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Facility Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => { setIsAddOpen(false); resetForm(); }}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-slate-900 mb-6">Add Facility</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Facility Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Accra Distribution Center"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Region</label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
                  >
                    {REGIONS.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Initial Capacity %</label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>
              </div>
              <button
                onClick={handleAddFacility}
                disabled={!name}
                className="w-full mt-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add Facility
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Truck, MapPin, Navigation, AlertTriangle, Battery, Signal, Map as MapIcon } from "lucide-react";

// Dynamically import the Leaflet map to avoid server-side window errors
const MapComponent = dynamic(
  () => import("@/components/MapComponent"),
  { ssr: false, loading: () => <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-900">Loading Map Engine...</div> }
);

export default function FleetPage() {
  const vehicles = [
    { id: "TRK-092", driver: "Marcus Johnson", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", status: "On Route", location: "I-5 North, California", lat: 39.0, lng: -121.0, eta: "2h 15m", battery: 84, signal: "Strong" },
    { id: "TRK-114", driver: "Sarah Connor", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80", status: "Loading", location: "LAX Hub", lat: 33.94, lng: -118.4, eta: "-", battery: 100, signal: "Strong" },
    { id: "TRK-083", driver: "David Kim", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80", status: "Delayed", location: "I-15 North, Nevada", lat: 36.16, lng: -115.1, eta: "4h 30m", battery: 42, signal: "Weak", alert: "Traffic congestion ahead" },
    { id: "TRK-205", driver: "Elena Rodriguez", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80", status: "Maintenance", location: "Service Center B", lat: 40.76, lng: -111.89, eta: "-", battery: 12, signal: "Offline" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Fleet Telemetry</h1>
          <p className="text-slate-500">Live monitoring of all connected transport vehicles.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-sm text-sm flex items-center gap-2">
            <Navigation className="w-4 h-4" /> Live Dispatch
          </button>
        </div>
      </div>

      {/* Leaflet Map Premium View */}
      <div className="w-full h-96 bg-slate-900 rounded-3xl border border-slate-800 relative overflow-hidden shadow-lg">
        
        <MapComponent vehicles={vehicles} />
        
        {/* Interactive Map UI Overlay */}
        <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white shadow-xl pointer-events-none z-[1000]">
          <div className="flex items-center gap-2 mb-2">
            <MapIcon className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-sm">Global Fleet Tracker</span>
          </div>
          <p className="text-xs text-slate-300">42 active connections</p>
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-4">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col relative overflow-hidden hover:shadow-md transition-all cursor-pointer">
            
            {/* Status Indicator */}
            <div className={`absolute top-0 left-0 w-full h-1.5 
              ${vehicle.status === "On Route" ? "bg-emerald-500" : 
                vehicle.status === "Loading" ? "bg-blue-500" : 
                vehicle.status === "Maintenance" ? "bg-slate-300" : "bg-amber-500"}`}
            ></div>

            <div className="flex justify-between items-start mb-5 mt-1">
              <div className="flex items-center gap-3">
                <img src={vehicle.avatar} alt={vehicle.driver} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{vehicle.id}</h3>
                  <p className="text-xs text-slate-500 font-medium">{vehicle.driver}</p>
                </div>
              </div>
              <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full 
                ${vehicle.status === "On Route" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : 
                  vehicle.status === "Loading" ? "bg-blue-50 text-blue-700 border border-blue-200" : 
                  vehicle.status === "Maintenance" ? "bg-slate-100 text-slate-600 border border-slate-200" : "bg-amber-50 text-amber-700 border border-amber-200"}`}
              >
                {vehicle.status}
              </span>
            </div>

            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Current Location</p>
                  <p className="text-sm text-slate-900 font-medium">{vehicle.location}</p>
                </div>
              </div>

              {vehicle.alert && (
                <div className="flex items-start gap-2 bg-amber-50 p-3 rounded-xl border border-amber-100">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-amber-900 font-medium leading-relaxed">{vehicle.alert}</p>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-slate-500">
              <div className="flex items-center gap-1.5" title="Battery Level">
                <Battery className={`w-4 h-4 ${vehicle.battery < 20 ? 'text-rose-500' : 'text-slate-400'}`} />
                <span className="text-xs font-semibold">{vehicle.battery}%</span>
              </div>
              <div className="flex items-center gap-1.5" title="GPS Signal">
                <Signal className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-semibold">{vehicle.signal}</span>
              </div>
              <div className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                ETA: {vehicle.eta}
              </div>
            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
}

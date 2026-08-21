"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { Search, Filter, Download, MoreHorizontal, X } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  useShipments,
  STATUS_STYLES,
  SHIPMENT_STATUSES,
  ShipmentStatus,
} from "@/context/ShipmentsContext";

function ShipmentsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { shipments, addShipment, removeShipment, isCreateOpen, openCreate, closeCreate } =
    useShipments();

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [statusFilter, setStatusFilter] = useState<ShipmentStatus[]>([]);

  // Create Shipment form state
  const [client, setClient] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [cargoType, setCargoType] = useState("Standard Freight");

  // Respond to a deep link from elsewhere in the dashboard (?create=true).
  // The initial ?q= value is already picked up by useState's initializer above.
  useEffect(() => {
    if (searchParams.get("create") === "true") {
      openCreate();
      router.replace("/dashboard/shipments");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const toggleStatus = (status: ShipmentStatus) => {
    setStatusFilter((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const filteredShipments = useMemo(() => {
    const q = query.trim().toLowerCase();
    return shipments.filter((s) => {
      const matchesQuery =
        !q ||
        s.id.toLowerCase().includes(q) ||
        s.client.toLowerCase().includes(q) ||
        s.origin.toLowerCase().includes(q) ||
        s.destination.toLowerCase().includes(q);
      const matchesStatus = statusFilter.length === 0 || statusFilter.includes(s.status);
      return matchesQuery && matchesStatus;
    });
  }, [shipments, query, statusFilter]);

  const handleExport = () => {
    const header = ["Tracking ID", "Client", "Origin", "Destination", "Status", "Est. Arrival"];
    const rows = filteredShipments.map((s) => [s.id, s.client, s.origin, s.destination, s.status, s.date]);
    const csv = [header, ...rows].map((r) => r.map((v) => `"${v.replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "shipments_export.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCreateClose = () => {
    closeCreate();
    setClient("");
    setOrigin("");
    setDestination("");
    setCargoType("Standard Freight");
  };

  const handleSave = () => {
    if (!client || !origin || !destination) return;
    addShipment({ client, origin, destination, status: "Preparing", date: "Pending" });
    handleCreateClose();
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Shipments</h1>
          <p className="text-slate-500">Manage and track all active and historical freight.</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handleExport} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors shadow-sm text-sm">
            <Download className="w-4 h-4" /> Export
          </button>
          <button onClick={openCreate} className="px-4 py-2 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-500 transition-colors shadow-sm text-sm">
            + Create Shipment
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by Tracking ID, Origin, or Destination..."
            className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder:text-slate-400"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="relative w-full sm:w-auto">
          <button onClick={() => setIsFiltersOpen(!isFiltersOpen)} className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-100 transition-colors text-sm w-full sm:w-auto justify-center">
            <Filter className="w-4 h-4" /> Filters
            {statusFilter.length > 0 && (
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                {statusFilter.length}
              </span>
            )}
          </button>

          {/* Filters Dropdown */}
          {isFiltersOpen && (
            <div className="absolute top-full mt-2 right-0 w-64 bg-white border border-slate-200 rounded-xl shadow-lg z-20 p-4 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Filter by Status</h3>
              <div className="space-y-2">
                {SHIPMENT_STATUSES.map((status) => (
                  <label key={status} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={statusFilter.includes(status)}
                      onChange={() => toggleStatus(status)}
                      className="w-4 h-4 text-emerald-500 border-slate-300 rounded focus:ring-emerald-500"
                    />
                    <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">{status}</span>
                  </label>
                ))}
              </div>
              <hr className="my-3 border-slate-100" />
              <div className="flex gap-2">
                <button onClick={() => setStatusFilter([])} className="flex-1 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-medium rounded-lg transition-colors">Clear</button>
                <button onClick={() => setIsFiltersOpen(false)} className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors">Apply</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
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
              {filteredShipments.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-sm text-slate-400">
                    No shipments match your search or filters.
                  </td>
                </tr>
              )}
              {filteredShipments.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group relative">
                  <td className="py-4 px-6 font-medium text-slate-900 text-sm">{item.id}</td>
                  <td className="py-4 px-6 text-slate-700 text-sm font-medium">{item.client}</td>
                  <td className="py-4 px-6 text-slate-500 text-sm">{item.origin} → {item.destination}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[item.status]}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-sm">{item.date}</td>
                  <td className="py-4 px-6 text-right relative">
                    <button
                      onClick={() => setOpenMenuId(openMenuId === item.id ? null : item.id)}
                      className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                    {openMenuId === item.id && (
                      <div className="absolute right-6 top-full mt-1 w-40 bg-white border border-slate-200 rounded-xl shadow-lg z-20 py-1 text-left animate-in fade-in zoom-in-95 duration-150">
                        <button
                          onClick={() => {
                            removeShipment(item.id);
                            setOpenMenuId(null);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-rose-600 hover:bg-rose-50"
                        >
                          Delete shipment
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
          <p className="text-sm text-slate-500">Showing <span className="font-medium text-slate-900">{filteredShipments.length}</span> of <span className="font-medium text-slate-900">{shipments.length}</span> results</p>
          <div className="flex gap-2">
            <button disabled className="px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-sm font-medium text-slate-300 cursor-not-allowed">Previous</button>
            <button disabled className="px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-sm font-medium text-slate-300 cursor-not-allowed">Next</button>
          </div>
        </div>
      </div>

      {/* Create Shipment Slide-over */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" onClick={handleCreateClose}></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 border-l border-slate-200">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
              <h2 className="text-lg font-bold text-slate-900">Create New Shipment</h2>
              <button onClick={handleCreateClose} className="text-slate-400 hover:text-slate-600 transition-colors p-1 hover:bg-slate-200 rounded-md">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 flex-1 overflow-y-auto space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Client Name</label>
                <input
                  type="text"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400"
                  placeholder="e.g. Acme Corp"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Origin</label>
                  <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400"
                    placeholder="City or Port"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Destination</label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400"
                    placeholder="City or Port"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Cargo Type</label>
                <select
                  value={cargoType}
                  onChange={(e) => setCargoType(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-slate-700"
                >
                  <option>Standard Freight</option>
                  <option>Refrigerated (Cold Chain)</option>
                  <option>Hazardous Materials</option>
                  <option>Oversized Load</option>
                </select>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50/80">
              <button onClick={handleCreateClose} className="px-5 py-2.5 text-slate-600 font-medium hover:bg-slate-200 bg-slate-100 rounded-xl transition-colors text-sm">
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={!client || !origin || !destination}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors text-sm shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Save Shipment
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="w-full h-96 flex flex-col items-center justify-center text-slate-400">Loading shipments...</div>}>
      <ShipmentsContent />
    </Suspense>
  );
}

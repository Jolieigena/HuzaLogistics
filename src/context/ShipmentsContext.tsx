"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type ShipmentStatus = "In Transit" | "Delayed" | "Customs" | "Delivered" | "Preparing";

export interface Shipment {
  id: string;
  client: string;
  origin: string;
  destination: string;
  status: ShipmentStatus;
  date: string;
}

export const STATUS_STYLES: Record<ShipmentStatus, string> = {
  "In Transit": "text-blue-700 bg-blue-50",
  Delayed: "text-amber-700 bg-amber-50",
  Customs: "text-purple-700 bg-purple-50",
  Delivered: "text-emerald-700 bg-emerald-50",
  Preparing: "text-slate-700 bg-slate-100",
};

export const SHIPMENT_STATUSES: ShipmentStatus[] = [
  "In Transit",
  "Delayed",
  "Customs",
  "Delivered",
  "Preparing",
];

const initialShipments: Shipment[] = [
  { id: "HZ-99342", client: "Acme Corp", origin: "Shanghai", destination: "Los Angeles", status: "In Transit", date: "Oct 24, 14:00" },
  { id: "HZ-88129", client: "Globex", origin: "Rotterdam", destination: "New York", status: "Delayed", date: "Oct 26, 09:30" },
  { id: "HZ-77451", client: "Stark Ind.", origin: "Dubai", destination: "London", status: "Customs", date: "Pending" },
  { id: "HZ-66290", client: "Wayne Ent.", origin: "Singapore", destination: "Sydney", status: "Delivered", date: "Oct 22, 11:15" },
  { id: "HZ-55102", client: "Acme Corp", origin: "Tokyo", destination: "Seattle", status: "In Transit", date: "Oct 25, 08:00" },
  { id: "HZ-44911", client: "Initech", origin: "Hamburg", destination: "Miami", status: "Preparing", date: "Oct 28, 16:45" },
  { id: "HZ-33882", client: "Soylent", origin: "Mumbai", destination: "Kigali", status: "In Transit", date: "Oct 27, 12:30" },
];

interface ShipmentsContextType {
  shipments: Shipment[];
  addShipment: (shipment: Omit<Shipment, "id">) => void;
  removeShipment: (id: string) => void;
  isCreateOpen: boolean;
  openCreate: () => void;
  closeCreate: () => void;
}

const ShipmentsContext = createContext<ShipmentsContextType | undefined>(undefined);

export function ShipmentsProvider({ children }: { children: ReactNode }) {
  const [shipments, setShipments] = useState<Shipment[]>(initialShipments);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const addShipment = (shipment: Omit<Shipment, "id">) => {
    const id = `HZ-${Math.floor(10000 + Math.random() * 89999)}`;
    setShipments((prev) => [{ ...shipment, id }, ...prev]);
  };

  const removeShipment = (id: string) => {
    setShipments((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <ShipmentsContext.Provider
      value={{
        shipments,
        addShipment,
        removeShipment,
        isCreateOpen,
        openCreate: () => setIsCreateOpen(true),
        closeCreate: () => setIsCreateOpen(false),
      }}
    >
      {children}
    </ShipmentsContext.Provider>
  );
}

export function useShipments() {
  const ctx = useContext(ShipmentsContext);
  if (!ctx) throw new Error("useShipments must be used within a ShipmentsProvider");
  return ctx;
}

"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface Vehicle {
  id: string;
  lat: number;
  lng: number;
  status: string;
  driver: string;
}

interface MapProps {
  vehicles: Vehicle[];
}

export default function MapComponent({ vehicles }: MapProps) {
  
  // Custom Icon for Trucks
  const customIcon = L.divIcon({
    className: "bg-transparent",
    html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" fill="#10B981" stroke="white" stroke-width="3" style="box-shadow: 0 0 10px rgba(16,185,129,0.5)"/></svg>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  return (
    <MapContainer 
      center={[38.5, -95.0]} 
      zoom={4} 
      style={{ width: "100%", height: "100%", background: "#0f172a" }} 
      zoomControl={false}
      attributionControl={false}
    >
      {/* Dark theme tile layer from CartoDB */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {vehicles.map((v) => (
        <Marker key={v.id} position={[v.lat, v.lng]} icon={customIcon}>
          <Popup className="rounded-xl">
            <div className="font-sans">
              <p className="font-bold text-slate-900 m-0">{v.id}</p>
              <p className="text-sm text-slate-500 m-0">{v.driver}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

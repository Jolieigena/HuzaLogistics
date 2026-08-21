"use client";

import React, { useEffect, useRef } from "react";
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
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return;

    // Initialize map only once
    if (!leafletMap.current) {
      leafletMap.current = L.map(mapRef.current, {
        center: [38.5, -95.0],
        zoom: 4,
        zoomControl: false,
        attributionControl: false
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19
      }).addTo(leafletMap.current);
    }

    // Clear existing markers
    leafletMap.current.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        leafletMap.current?.removeLayer(layer);
      }
    });

    // Add new markers
    const customIcon = L.divIcon({
      className: "bg-transparent",
      html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" fill="#10B981" stroke="white" stroke-width="3" style="box-shadow: 0 0 10px rgba(16,185,129,0.5)"/></svg>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    vehicles.forEach(v => {
      if (leafletMap.current) {
        L.marker([v.lat, v.lng], { icon: customIcon })
          .bindPopup(`
            <div style="font-family: sans-serif;">
              <p style="font-weight: bold; margin: 0; color: #0f172a;">${v.id}</p>
              <p style="margin: 0; color: #64748b; font-size: 0.875rem;">${v.driver}</p>
            </div>
          `)
          .addTo(leafletMap.current);
      }
    });

    // Cleanup Leaflet instance on unmount to survive Fast Refresh
    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, [vehicles]);

  return <div ref={mapRef} style={{ width: "100%", height: "100%", background: "#f8fafc", zIndex: 0 }} />;
}

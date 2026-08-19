import React from "react";

export function CustomBoxIcon({ className = "w-7 h-7 text-emerald-600" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Outer hexagon contour */}
      <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" />
      {/* Inner Y lines connecting to center */}
      <path d="M12 12L20 7.5" />
      <path d="M12 12L4 7.5" />
      <path d="M12 12V21" />
      {/* Top flap detail */}
      <path d="M7.5 5.5L15.5 10" strokeDasharray="0" opacity="0.6" />
    </svg>
  );
}

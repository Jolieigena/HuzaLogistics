import React from "react";

export function HuzaLogo({ className = "w-6 h-6 text-blue-600" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      {/* Left bar */}
      <rect x="3" y="2" width="4" height="20" rx="2" />
      {/* Middle bar */}
      <rect x="10" y="7" width="4" height="10" rx="2" />
      {/* Right bar top */}
      <rect x="17" y="2" width="4" height="13" rx="2" />
      {/* Right bar bottom dot */}
      <rect x="17" y="17" width="4" height="5" rx="2" />
    </svg>
  );
}

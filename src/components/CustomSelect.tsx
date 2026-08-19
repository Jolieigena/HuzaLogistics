"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface CustomSelectProps {
  options: string[];
  placeholder?: string;
}

export function CustomSelect({ options, placeholder = "Select an option" }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between border rounded-xl px-4 py-3 bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-emerald-500
          ${isOpen ? "border-emerald-500 ring-2 ring-emerald-500/20" : "border-slate-300 hover:border-slate-400"}
        `}
      >
        <span className={`block truncate ${selected ? "text-slate-900" : "text-slate-400"}`}>
          {selected || placeholder}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2">
          <ul className="max-h-60 overflow-y-auto py-2">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors
                  ${selected === option ? "bg-emerald-50 text-emerald-700 font-medium" : "text-slate-700 hover:bg-slate-50"}
                `}
              >
                <span className="block truncate">{option}</span>
                {selected === option && (
                  <Check className="w-4 h-4 text-emerald-600" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

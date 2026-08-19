"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  Truck, 
  BarChart3, 
  Settings, 
  Bell, 
  Search,
  Menu,
  ChevronDown,
  Warehouse
} from "lucide-react";
import { HuzaLogo } from "@/components/HuzaLogo";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigation = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Shipments", href: "/dashboard/shipments", icon: Package },
    { name: "Fleet Telemetry", href: "/dashboard/fleet", icon: Truck },
    { name: "Warehouses", href: "/dashboard/warehouses", icon: Warehouse },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      
      {/* Sidebar - Mobile Overlay */}
      {isSidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>
          <aside className="relative w-64 bg-white border-r border-slate-200 h-full flex flex-col shadow-xl animate-in slide-in-from-left-8">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HuzaLogo className="w-7 h-7 text-emerald-600" />
                <span className="font-extrabold text-slate-900 tracking-tight text-xl">HuzaLogistics</span>
              </div>
            </div>
            
            <div className="px-4 py-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Main Menu</p>
              <nav className="space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all duration-200
                        ${isActive 
                          ? "bg-emerald-50 text-emerald-700" 
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }
                      `}
                    >
                      <item.icon className={`w-5 h-5 ${isActive ? "text-emerald-600" : "text-slate-400"}`} />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>
        </div>
      )}

      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 fixed h-full z-20">
        <div className="p-6 flex items-center gap-2">
          <HuzaLogo className="w-7 h-7 text-emerald-600" />
          <span className="font-extrabold text-slate-900 tracking-tight text-xl">HuzaLogistics</span>
        </div>
        
        <div className="px-4 py-6">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Main Menu</p>
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all duration-200
                    ${isActive 
                      ? "bg-emerald-50 text-emerald-700" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }
                  `}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? "text-emerald-600" : "text-slate-400"}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Profile Mini */}
        <div className="mt-auto p-4 border-t border-slate-100">
          <button className="flex items-center gap-3 w-full p-2 hover:bg-slate-50 rounded-xl transition-colors text-left">
            <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
              JD
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-semibold text-slate-900 truncate">Jane Doe</p>
              <p className="text-xs text-slate-500 truncate">Acme Logistics</p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 sm:px-10 sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <button 
              className="md:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-lg"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            
            {/* Search Bar */}
            <div className="hidden sm:flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-full border border-slate-200 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all w-96 max-w-md">
              <Search className="w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search shipments, vehicles, or IDs..." 
                className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <button className="hidden sm:flex bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium px-4 py-2 rounded-full transition-all shadow-sm">
              + New Shipment
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 sm:p-10">
          {children}
        </main>
      </div>
      
    </div>
  );
}

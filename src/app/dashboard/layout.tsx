"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  Warehouse,
  ChevronLeft,
  ChevronRight,
  LogOut,
  AlertTriangle,
  PackageCheck,
  Wrench
} from "lucide-react";
import { HuzaLogo } from "@/components/HuzaLogo";
import { Roboto_Condensed } from "next/font/google";
import { ShipmentsProvider } from "@/context/ShipmentsContext";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"]
});

interface Notification {
  id: string;
  icon: typeof AlertTriangle;
  title: string;
  detail: string;
  read: boolean;
}

const initialNotifications: Notification[] = [
  { id: "n1", icon: AlertTriangle, title: "LAX Capacity Warning", detail: "Los Angeles hub is nearing maximum capacity.", read: false },
  { id: "n2", icon: PackageCheck, title: "Customs Cleared", detail: "Shipment HZ-66290 cleared Sydney customs.", read: false },
  { id: "n3", icon: Wrench, title: "Vehicle Maintenance Due", detail: "TRK-205 is due for scheduled maintenance.", read: false },
  { id: "n4", icon: Truck, title: "Delayed Shipment", detail: "HZ-88129 is delayed due to port congestion.", read: true },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [notifications, setNotifications] = useState(initialNotifications);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const profileMobileRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
      const clickedProfile =
        (profileRef.current && profileRef.current.contains(event.target as Node)) ||
        (profileMobileRef.current && profileMobileRef.current.contains(event.target as Node));
      if (!clickedProfile) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    router.push(`/dashboard/shipments?q=${encodeURIComponent(searchValue.trim())}`);
  };

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
          <aside className="relative w-64 bg-white border-r border-slate-200 h-full flex flex-col shadow-sm animate-in slide-in-from-left-8">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HuzaLogo className="w-7 h-7 text-emerald-600" />
                <span className={`font-extrabold text-slate-900 tracking-tight text-xl ${robotoCondensed.className}`}>HuzaLogistics</span>
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
      <aside className={`hidden md:flex flex-col bg-white border-r border-slate-200 fixed h-full z-20 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
        <div className={`p-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <HuzaLogo className="w-7 h-7 text-emerald-600 flex-shrink-0" />
            {!isCollapsed && <span className={`font-extrabold text-slate-900 tracking-tight text-xl ${robotoCondensed.className}`}>HuzaLogistics</span>}
          </div>
        </div>
        
        <div className={`px-4 py-6 ${isCollapsed ? 'items-center flex flex-col' : ''}`}>
          {!isCollapsed && <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Main Menu</p>}
          <nav className="space-y-1 w-full">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  title={isCollapsed ? item.name : undefined}
                  className={`flex items-center rounded-xl font-medium transition-all duration-200
                    ${isCollapsed ? 'justify-center p-3' : 'gap-3 px-3 py-2.5'}
                    ${isActive 
                      ? "bg-emerald-50 text-emerald-700" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }
                  `}
                >
                  <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-emerald-600" : "text-slate-400"}`} />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Profile Mini */}
        <div className="mt-auto p-4 border-t border-slate-100 flex flex-col gap-2">
          {/* Collapse Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`flex items-center justify-center p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-colors ${isCollapsed ? '' : 'self-end'}`}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen((v) => !v)}
              className={`flex items-center ${isCollapsed ? 'justify-center p-2' : 'gap-3 w-full p-2 text-left'} hover:bg-slate-50 rounded-xl transition-colors`}
            >
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm flex-shrink-0">
                JD
              </div>
              {!isCollapsed && (
                <>
                  <div className="flex-1 overflow-hidden whitespace-nowrap">
                    <p className="text-sm font-semibold text-slate-900 truncate">Jane Doe</p>
                    <p className="text-xs text-slate-500 truncate">Acme Logistics</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                </>
              )}
            </button>

            {isProfileOpen && (
              <div className="absolute bottom-full left-0 mb-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-2">
                <Link href="/dashboard/settings" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">
                  Settings
                </Link>
                <Link href="/" className="flex items-center gap-2 px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50">
                  <LogOut className="w-4 h-4" /> Sign out
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${isCollapsed ? 'md:ml-20' : 'md:ml-64'}`}>
        
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
            <form
              onSubmit={handleSearchSubmit}
              className="hidden sm:flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-lg border border-slate-200 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all w-96 max-w-md"
            >
              <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search shipments, vehicles, or IDs..."
                className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder:text-slate-400"
              />
            </form>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setIsNotificationsOpen((v) => !v)}
                className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-6 h-6" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                )}
              </button>

              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                    <span className="font-semibold text-sm text-slate-900">Notifications</span>
                    {unreadCount > 0 && (
                      <button
                        onClick={() => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))}
                        className="text-xs font-medium text-emerald-600 hover:text-emerald-700"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>
                  <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                    {notifications.map((n) => (
                      <button
                        key={n.id}
                        onClick={() =>
                          setNotifications((prev) =>
                            prev.map((item) => (item.id === n.id ? { ...item, read: true } : item))
                          )
                        }
                        className="w-full flex items-start gap-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors"
                      >
                        <n.icon className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-900">{n.title}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{n.detail}</p>
                        </div>
                        {!n.read && <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/dashboard/shipments?create=true" className="hidden sm:flex bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-sm">
              + New Shipment
            </Link>

            <div className="relative md:hidden" ref={profileMobileRef}>
              <button
                onClick={() => setIsProfileOpen((v) => !v)}
                className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm"
              >
                JD
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                  <Link href="/dashboard/settings" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">
                    Settings
                  </Link>
                  <Link href="/" className="flex items-center gap-2 px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50">
                    <LogOut className="w-4 h-4" /> Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <ShipmentsProvider>
          <main className="flex-1 p-6 sm:p-10">
            {children}
          </main>
        </ShipmentsProvider>
      </div>

    </div>
  );
}

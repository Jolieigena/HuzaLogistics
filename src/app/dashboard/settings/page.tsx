"use client";

import React from "react";
import { User, Building2, Bell, Shield, CreditCard, Key } from "lucide-react";

export default function SettingsPage() {
  const tabs = [
    { name: "My Profile", icon: User, current: true },
    { name: "Organization", icon: Building2, current: false },
    { name: "Notifications", icon: Bell, current: false },
    { name: "Security", icon: Shield, current: false },
    { name: "Billing", icon: CreditCard, current: false },
    { name: "API Keys", icon: Key, current: false },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Settings</h1>
        <p className="text-slate-500">Manage your account and workspace preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Settings Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors
                  ${tab.current 
                    ? "bg-white text-emerald-600 shadow-sm border border-slate-200" 
                    : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900 border border-transparent"}
                `}
              >
                <tab.icon className={`w-5 h-5 ${tab.current ? "text-emerald-600" : "text-slate-400"}`} />
                {tab.name}
              </a>
            ))}
          </nav>
        </aside>

        {/* Settings Content Area */}
        <div className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10">
          
          <h2 className="text-xl font-bold text-slate-900 mb-6">Profile Information</h2>
          
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-100">
            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center border-4 border-white shadow-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" alt="Jane Doe" className="w-full h-full object-cover" />
            </div>
            <div>
              <button className="px-4 py-2 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors text-sm shadow-sm">
                Change Avatar
              </button>
              <p className="text-xs text-slate-500 mt-2">JPG, GIF or PNG. Max size of 800K</p>
            </div>
          </div>

          <form className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                <input type="text" defaultValue="Jane" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                <input type="text" defaultValue="Doe" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input type="email" defaultValue="jane.doe@acmelogistics.com" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Timezone</label>
              <select className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 appearance-none bg-white">
                <option>Pacific Time (US & Canada)</option>
                <option>Eastern Time (US & Canada)</option>
                <option>Greenwich Mean Time (London)</option>
                <option>Central Africa Time (Kigali)</option>
              </select>
            </div>

            <div className="pt-6 flex gap-3">
              <button type="button" className="px-6 py-2.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-500 transition-colors shadow-sm">
                Save Changes
              </button>
              <button type="button" className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
                Cancel
              </button>
            </div>
          </form>

        </div>
      </div>
      
    </div>
  );
}

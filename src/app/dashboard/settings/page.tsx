"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  User,
  Building2,
  Bell,
  Shield,
  CreditCard,
  Key,
  Check,
  Copy,
  Eye,
  EyeOff,
  Trash2,
  Plus,
} from "lucide-react";

type TabId = "profile" | "organization" | "notifications" | "security" | "billing" | "api";

const tabs: { id: TabId; name: string; icon: typeof User }[] = [
  { id: "profile", name: "My Profile", icon: User },
  { id: "organization", name: "Organization", icon: Building2 },
  { id: "notifications", name: "Notifications", icon: Bell },
  { id: "security", name: "Security", icon: Shield },
  { id: "billing", name: "Billing", icon: CreditCard },
  { id: "api", name: "API Keys", icon: Key },
];

function SavedBanner({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className="mb-6 flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm font-medium text-emerald-700 animate-in fade-in slide-in-from-top-1">
      <Check className="w-4 h-4" /> Changes saved.
    </div>
  );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
      className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${checked ? "bg-emerald-600" : "bg-slate-200"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${checked ? "translate-x-5" : ""}`}
      />
    </button>
  );
}

const initialProfile = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@acmelogistics.com",
  timezone: "Pacific Time (US & Canada)",
};

const initialOrg = {
  company: "Acme Logistics",
  industry: "Manufacturing",
  address: "1200 Freight Ave, Los Angeles, CA",
  website: "acmelogistics.com",
};

const initialNotifications = {
  emailShipmentUpdates: true,
  emailWeeklyDigest: true,
  smsDelayAlerts: false,
  pushFleetAlerts: true,
};

const initialSessions = [
  { id: "s1", device: "MacBook Pro — Chrome", location: "Los Angeles, US", current: true },
  { id: "s2", device: "iPhone 15 — Safari", location: "Los Angeles, US", current: false },
  { id: "s3", device: "Windows PC — Edge", location: "Kigali, RW", current: false },
];

const initialApiKeys = [
  { id: "k1", label: "Production Server", key: "elx_live_9f2c1a7b4e6d8091", created: "Jun 12, 2026" },
  { id: "k2", label: "Staging Environment", key: "elx_test_3b8e0f1c2a5d7096", created: "Jul 3, 2026" },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("profile");
  const [saved, setSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [avatar, setAvatar] = useState(
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  );
  const [profile, setProfile] = useState(initialProfile);
  const [org, setOrg] = useState(initialOrg);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [sessions, setSessions] = useState(initialSessions);
  const [twoFactor, setTwoFactor] = useState(false);
  const [apiKeys, setApiKeys] = useState(initialApiKeys);
  const [revealedKeyId, setRevealedKeyId] = useState<string | null>(null);
  const [copiedKeyId, setCopiedKeyId] = useState<string | null>(null);

  const showSaved = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleAvatarClick = () => fileInputRef.current?.click();

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleCopyKey = (id: string, key: string) => {
    navigator.clipboard?.writeText(key).catch(() => {});
    setCopiedKeyId(id);
    setTimeout(() => setCopiedKeyId(null), 1500);
  };

  const handleGenerateKey = () => {
    const random = Math.random().toString(16).slice(2, 18).padEnd(16, "0");
    setApiKeys((prev) => [
      ...prev,
      {
        id: `k${prev.length + 1}-${Date.now()}`,
        label: "New API Key",
        key: `elx_live_${random}`,
        created: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      },
    ]);
  };

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
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors text-left
                  ${activeTab === tab.id
                    ? "bg-white text-emerald-600 shadow-sm border border-slate-200"
                    : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900 border border-transparent"}
                `}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? "text-emerald-600" : "text-slate-400"}`} />
                {tab.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Settings Content Area */}
        <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-10">

          {activeTab === "profile" && (
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">Profile Information</h2>
              <SavedBanner show={saved} />

              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-100">
                <div className="relative w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center border-4 border-white shadow-sm overflow-hidden">
                  <Image src={avatar} alt="Profile avatar" fill className="object-cover" unoptimized={avatar.startsWith("data:")} />
                </div>
                <div>
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
                  <button onClick={handleAvatarClick} className="px-4 py-2 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors text-sm shadow-sm">
                    Change Avatar
                  </button>
                  <p className="text-xs text-slate-500 mt-2">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>

              <form className="space-y-6 max-w-2xl" onSubmit={(e) => { e.preventDefault(); showSaved(); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input
                      type="text"
                      value={profile.firstName}
                      onChange={(e) => setProfile((p) => ({ ...p, firstName: e.target.value }))}
                      className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      value={profile.lastName}
                      onChange={(e) => setProfile((p) => ({ ...p, lastName: e.target.value }))}
                      className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Timezone</label>
                  <select
                    value={profile.timezone}
                    onChange={(e) => setProfile((p) => ({ ...p, timezone: e.target.value }))}
                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 appearance-none bg-white"
                  >
                    <option>Pacific Time (US & Canada)</option>
                    <option>Eastern Time (US & Canada)</option>
                    <option>Greenwich Mean Time (London)</option>
                    <option>Central Africa Time (Kigali)</option>
                  </select>
                </div>

                <div className="pt-6 flex gap-3">
                  <button type="submit" className="px-6 py-2.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-500 transition-colors shadow-sm">
                    Save Changes
                  </button>
                  <button type="button" onClick={() => setProfile(initialProfile)} className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === "organization" && (
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">Organization</h2>
              <SavedBanner show={saved} />

              <form className="space-y-6 max-w-2xl" onSubmit={(e) => { e.preventDefault(); showSaved(); }}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    value={org.company}
                    onChange={(e) => setOrg((o) => ({ ...o, company: e.target.value }))}
                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Industry</label>
                  <select
                    value={org.industry}
                    onChange={(e) => setOrg((o) => ({ ...o, industry: e.target.value }))}
                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 appearance-none bg-white"
                  >
                    <option>Manufacturing</option>
                    <option>Retail & E-commerce</option>
                    <option>Healthcare & Pharma</option>
                    <option>Technology & Electronics</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Headquarters Address</label>
                  <input
                    type="text"
                    value={org.address}
                    onChange={(e) => setOrg((o) => ({ ...o, address: e.target.value }))}
                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Website</label>
                  <input
                    type="text"
                    value={org.website}
                    onChange={(e) => setOrg((o) => ({ ...o, website: e.target.value }))}
                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                  />
                </div>
                <div className="pt-6 flex gap-3">
                  <button type="submit" className="px-6 py-2.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-500 transition-colors shadow-sm">
                    Save Changes
                  </button>
                  <button type="button" onClick={() => setOrg(initialOrg)} className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === "notifications" && (
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">Notification Preferences</h2>
              <div className="max-w-2xl divide-y divide-slate-100">
                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Shipment status updates</p>
                    <p className="text-sm text-slate-500">Email me when a shipment status changes.</p>
                  </div>
                  <Toggle
                    checked={notifications.emailShipmentUpdates}
                    onChange={(v) => setNotifications((n) => ({ ...n, emailShipmentUpdates: v }))}
                  />
                </div>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Weekly digest</p>
                    <p className="text-sm text-slate-500">A weekly summary of fleet and warehouse activity.</p>
                  </div>
                  <Toggle
                    checked={notifications.emailWeeklyDigest}
                    onChange={(v) => setNotifications((n) => ({ ...n, emailWeeklyDigest: v }))}
                  />
                </div>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">SMS delay alerts</p>
                    <p className="text-sm text-slate-500">Text me immediately when a shipment is delayed.</p>
                  </div>
                  <Toggle
                    checked={notifications.smsDelayAlerts}
                    onChange={(v) => setNotifications((n) => ({ ...n, smsDelayAlerts: v }))}
                  />
                </div>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Push fleet alerts</p>
                    <p className="text-sm text-slate-500">Push notifications for vehicle maintenance and route issues.</p>
                  </div>
                  <Toggle
                    checked={notifications.pushFleetAlerts}
                    onChange={(v) => setNotifications((n) => ({ ...n, pushFleetAlerts: v }))}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">Security</h2>
              <SavedBanner show={saved} />

              <form className="space-y-6 max-w-2xl mb-10" onSubmit={(e) => { e.preventDefault(); showSaved(); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                    <input type="password" placeholder="••••••••" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900" />
                  </div>
                </div>
                <button type="submit" className="px-6 py-2.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-500 transition-colors shadow-sm">
                  Update Password
                </button>
              </form>

              <div className="max-w-2xl flex items-center justify-between py-4 border-t border-slate-100">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Two-factor authentication</p>
                  <p className="text-sm text-slate-500">Require a verification code in addition to your password.</p>
                </div>
                <Toggle checked={twoFactor} onChange={setTwoFactor} />
              </div>

              <div className="max-w-2xl mt-8 pt-8 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Active Sessions</h3>
                <div className="space-y-3">
                  {sessions.map((s) => (
                    <div key={s.id} className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          {s.device}
                          {s.current && <span className="ml-2 text-xs font-semibold text-emerald-600">(This device)</span>}
                        </p>
                        <p className="text-xs text-slate-500">{s.location}</p>
                      </div>
                      {!s.current && (
                        <button
                          onClick={() => setSessions((prev) => prev.filter((session) => session.id !== s.id))}
                          className="text-xs font-semibold text-rose-600 hover:text-rose-700"
                        >
                          Revoke
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">Billing</h2>

              <div className="max-w-2xl bg-slate-900 rounded-xl p-6 text-white flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Current Plan</p>
                  <p className="text-lg font-bold">Professional — $8,000/month</p>
                </div>
                <a href="/licensing" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                  Change Plan
                </a>
              </div>

              <div className="max-w-2xl mb-8">
                <h3 className="text-sm font-bold text-slate-900 mb-3">Payment Method</h3>
                <div className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-slate-400" />
                    <span className="text-sm font-medium text-slate-900">Visa ending in 4242</span>
                  </div>
                  <button className="text-xs font-semibold text-emerald-600 hover:text-emerald-700">Update</button>
                </div>
              </div>

              <div className="max-w-2xl">
                <h3 className="text-sm font-bold text-slate-900 mb-3">Invoice History</h3>
                <div className="border border-slate-100 rounded-xl overflow-hidden divide-y divide-slate-100">
                  {[
                    { date: "Aug 1, 2026", amount: "$8,000.00", status: "Paid" },
                    { date: "Jul 1, 2026", amount: "$8,000.00", status: "Paid" },
                    { date: "Jun 1, 2026", amount: "$8,000.00", status: "Paid" },
                  ].map((invoice) => (
                    <div key={invoice.date} className="flex items-center justify-between px-4 py-3 bg-white">
                      <span className="text-sm text-slate-700">{invoice.date}</span>
                      <span className="text-sm font-medium text-slate-900">{invoice.amount}</span>
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{invoice.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "api" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">API Keys</h2>
                <button
                  onClick={handleGenerateKey}
                  className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-500 transition-colors text-sm shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Generate New Key
                </button>
              </div>

              <div className="max-w-2xl space-y-3">
                {apiKeys.map((k) => (
                  <div key={k.id} className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-sm font-semibold text-slate-900">{k.label}</p>
                      <span className="text-xs text-slate-400">Created {k.created}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 text-xs font-mono text-slate-600 bg-white border border-slate-200 rounded-lg px-3 py-2 truncate">
                        {revealedKeyId === k.id ? k.key : `${k.key.slice(0, 8)}${"•".repeat(16)}`}
                      </code>
                      <button
                        onClick={() => setRevealedKeyId(revealedKeyId === k.id ? null : k.id)}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-lg transition-colors"
                        title={revealedKeyId === k.id ? "Hide" : "Reveal"}
                      >
                        {revealedKeyId === k.id ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => handleCopyKey(k.id, k.key)}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-lg transition-colors"
                        title="Copy"
                      >
                        {copiedKeyId === k.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => setApiKeys((prev) => prev.filter((key) => key.id !== k.id))}
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Revoke"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}

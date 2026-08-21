"use client";

import React, { useState } from "react";
import { BarChart3, TrendingUp, DollarSign, Activity } from "lucide-react";

type Range = "30d" | "quarter" | "ytd";

const REGION_DATA: Record<Range, { label: string; value: number }[]> = {
  "30d": [
    { label: "N. America", value: 420 },
    { label: "Europe", value: 355 },
    { label: "Asia Pacific", value: 510 },
    { label: "Africa", value: 180 },
    { label: "S. America", value: 140 },
    { label: "Middle East", value: 95 },
  ],
  quarter: [
    { label: "N. America", value: 1180 },
    { label: "Europe", value: 990 },
    { label: "Asia Pacific", value: 1420 },
    { label: "Africa", value: 520 },
    { label: "S. America", value: 410 },
    { label: "Middle East", value: 260 },
  ],
  ytd: [
    { label: "N. America", value: 3900 },
    { label: "Europe", value: 3300 },
    { label: "Asia Pacific", value: 4750 },
    { label: "Africa", value: 1680 },
    { label: "S. America", value: 1320 },
    { label: "Middle East", value: 840 },
  ],
};

const EFFICIENCY_DATA: Record<Range, number[]> = {
  "30d": [88, 90, 87, 92, 94, 91, 96],
  quarter: [82, 85, 88, 90, 91, 93, 96],
  ytd: [76, 80, 83, 87, 89, 92, 96],
};

const METRICS: Record<Range, { revenue: string; onTime: string; carbon: string }> = {
  "30d": { revenue: "$4.2M", onTime: "96.4%", carbon: "412" },
  quarter: { revenue: "$11.8M", onTime: "95.1%", carbon: "1,180" },
  ytd: { revenue: "$38.6M", onTime: "94.7%", carbon: "3,940" },
};

const RANGE_LABELS: Record<Range, string> = {
  "30d": "Last 30 Days",
  quarter: "This Quarter",
  ytd: "Year to Date",
};

function BarChart({ data }: { data: { label: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="flex items-end justify-between gap-3 h-56 px-2">
      {data.map((d) => (
        <div key={d.label} className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
          <span className="text-xs font-semibold text-slate-600">{d.value.toLocaleString()}</span>
          <div
            className="w-full max-w-10 rounded-t-lg bg-gradient-to-t from-emerald-600 to-emerald-400 transition-all duration-500"
            style={{ height: `${(d.value / max) * 100}%` }}
          />
          <span className="text-[11px] text-slate-500 text-center leading-tight">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

function LineChart({ data }: { data: number[] }) {
  const width = 500;
  const height = 200;
  const padding = 20;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((v, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((v - min) / range) * (height - padding * 2);
    return [x, y];
  });

  const linePath = points.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1][0]} ${height - padding} L ${points[0][0]} ${height - padding} Z`;
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <svg viewBox={`0 0 ${width} ${height + 24}`} className="w-full h-56">
      <defs>
        <linearGradient id="efficiencyFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#efficiencyFill)" />
      <path d={linePath} fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#059669" stroke="white" strokeWidth="1.5" />
      ))}
      {days.map((day, i) => (
        <text key={day} x={points[i][0]} y={height + 18} textAnchor="middle" className="fill-slate-400" fontSize="11">
          {day}
        </text>
      ))}
    </svg>
  );
}

export default function AnalyticsPage() {
  const [range, setRange] = useState<Range>("30d");
  const metrics = METRICS[range];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Analytics & Reports</h1>
          <p className="text-slate-500">Deep dive into your supply chain performance metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={range}
            onChange={(e) => setRange(e.target.value as Range)}
            className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm text-sm appearance-none"
          >
            {(Object.keys(RANGE_LABELS) as Range[]).map((r) => (
              <option key={r} value={r}>{RANGE_LABELS[r]}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Metric 1 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-slate-500">
            <DollarSign className="w-5 h-5 text-emerald-600" />
            <h3 className="font-medium">Revenue (Freight)</h3>
          </div>
          <p className="text-2xl font-bold text-slate-900">{metrics.revenue}</p>
          <p className="text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" /> +14.5% vs last period
          </p>
        </div>

        {/* Metric 2 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-slate-500">
            <Activity className="w-5 h-5 text-blue-600" />
            <h3 className="font-medium">On-Time Delivery</h3>
          </div>
          <p className="text-2xl font-bold text-slate-900">{metrics.onTime}</p>
          <p className="text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" /> +2.1% vs last period
          </p>
        </div>

        {/* Metric 3 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-slate-500">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            <h3 className="font-medium">Carbon Footprint</h3>
          </div>
          <p className="text-2xl font-bold text-slate-900">{metrics.carbon}<span className="text-lg text-slate-400 ml-1">tons</span></p>
          <p className="text-sm text-rose-600 font-medium mt-2 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" /> +5.4% vs last period
          </p>
        </div>

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-semibold text-slate-900 mb-1">Shipment Volume by Region</p>
          <p className="text-sm text-slate-500 mb-6">{RANGE_LABELS[range]}</p>
          <BarChart data={REGION_DATA[range]} />
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-semibold text-slate-900 mb-1">Fleet Efficiency Trends</p>
          <p className="text-sm text-slate-500 mb-6">On-time dispatch rate, last 7 days</p>
          <LineChart data={EFFICIENCY_DATA[range]} />
        </div>
      </div>

    </div>
  );
}

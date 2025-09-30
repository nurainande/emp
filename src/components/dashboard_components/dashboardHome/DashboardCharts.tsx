import React, { useMemo } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ReferenceLine,
} from "recharts";
import { Calendar, Download, TrendingUp, TrendingDown } from "lucide-react";

/* ---------------- Types ---------------- */
type Organism = "bacteria" | "fungi" | "virus" | "parasite" | "others";

interface SamplePoint {
  id: number;
  month: string;
  day: number;
  value: number;
  organism: Organism;
  color?: string;
  y: number;
  date?: string;
}

interface DonutDatum {
  name: string;
  value: number;
  color: string;
}

/* ---------------- Colors ---------------- */
const COLORS: Record<Organism, string> = {
  bacteria: "#7E45D3",
  fungi: "#412461",
  virus: "#D1B1F4",
  parasite: "#F472B6",
  others: "#FCE7F3",
};

/* ---------------- Sample Data ---------------- */
const sampleData: SamplePoint[] = [
  { id: 1, month: "Jan", day: 15, value: 2, organism: "fungi", y: 25 },
  { id: 2, month: "Jan", day: 15, value: 2, organism: "bacteria", y: 22 },
  { id: 3, month: "Feb", day: 35, value: 300, organism: "parasite", y: 0 },
  { id: 4, month: "Feb", day: 42, value: 50, organism: "bacteria", y: 15 },
  { id: 5, month: "Feb", day: 50, value: 5000, organism: "fungi", y: 25 },
  { id: 6, month: "Feb", day: 55, value: 7000, organism: "bacteria", y: 35 },
  { id: 7, month: "Feb", day: 55, value: 5000, organism: "fungi", y: 45 },
  { id: 8, month: "Feb", day: 55, value: 3000, organism: "virus", y: 50 },
  { id: 9, month: "Feb", day: 55, value: 2, organism: "fungi", y: 55 },
  { id: 10, month: "Feb", day: 55, value: 2, organism: "virus", y: 65 },
  { id: 11, month: "Feb", day: 55, value: 400, organism: "virus", y: 80 },
  { id: 12, month: "Mar", day: 70, value: 300, organism: "parasite", y: 10 },
  { id: 13, month: "Mar", day: 75, value: 5000, organism: "bacteria", y: 20 },
  { id: 14, month: "Mar", day: 80, value: 400, organism: "fungi", y: 40 },
  { id: 15, month: "Mar", day: 85, value: 5000, organism: "bacteria", y: 60 },
  { id: 16, month: "Apr", day: 20, value: 500, organism: "parasite", y: 10 },
  { id: 17, month: "Apr", day: 45, value: 3000, organism: "fungi", y: 30 },
  { id: 18, month: "Apr", day: 50, value: 500, organism: "parasite", y: 40 },
  { id: 19, month: "Apr", day: 55, value: 400, organism: "parasite", y: 55 },
  { id: 20, month: "May", day: 55, value: 300, organism: "parasite", y: 5 },
  { id: 21, month: "May", day: 55, value: 5000, organism: "parasite", y: 25 },
  { id: 22, month: "May", day: 55, value: 400, organism: "parasite", y: 45 },
  { id: 23, month: "May", day: 55, value: 400, organism: "parasite", y: 50 },
  { id: 24, month: "May", day: 55, value: 400, organism: "parasite", y: 80 },
  { id: 25, month: "Jun", day: 55, value: 400, organism: "others", y: 5 },
  { id: 26, month: "Jun", day: 55, value: 4000, organism: "fungi", y: 25 },
  { id: 27, month: "Jun", day: 55, value: 400, organism: "parasite", y: 45 },
  { id: 28, month: "Jul", day: 55, value: 400, organism: "bacteria", y: 20 },
  { id: 29, month: "Jul", day: 55, value: 3000, organism: "virus", y: 40 },
  { id: 30, month: "Jul", day: 55, value: 400, organism: "parasite", y: 50 },
  { id: 31, month: "Jul", day: 55, value: 400, organism: "parasite", y: 70 },
  { id: 32, month: "Jul", day: 55, value: 50, organism: "fungi", y: 80 },
  { id: 33, month: "Aug", day: 55, value: 2, organism: "fungi", y: 10 },
  { id: 34, month: "Aug", day: 55, value: 5, organism: "parasite", y: 80 },
  { id: 35, month: "Sep", day: 55, value: 525, organism: "virus", y: 5 },
  { id: 36, month: "Sep", day: 55, value: 5000, organism: "virus", y: 20 },
  { id: 37, month: "Sep", day: 55, value: 10000, organism: "bacteria", y: 40 },
  { id: 38, month: "Sep", day: 55, value: 300, organism: "virus", y: 55 },
  { id: 39, month: "Sep", day: 55, value: 400, organism: "parasite", y: 60 },
  { id: 40, month: "Sep", day: 55, value: 200, organism: "parasite", y: 80 },
  { id: 41, month: "Oct", day: 55, value: 5000, organism: "bacteria", y: 8 },
  { id: 42, month: "Oct", day: 55, value: 2, organism: "parasite", y: 40 },
  { id: 43, month: "Oct", day: 55, value: 2, organism: "parasite", y: 50 },
  { id: 44, month: "Oct", day: 55, value: 400, organism: "parasite", y: 65 },
  { id: 45, month: "Nov", day: 55, value: 30, organism: "parasite", y: 80 },
  { id: 46, month: "Nov", day: 55, value: 5, organism: "virus", y: 5 },
  { id: 47, month: "Nov", day: 55, value: 5000, organism: "others", y: 40 },
  { id: 48, month: "Nov", day: 55, value: 3000, organism: "parasite", y: 80 },
  { id: 49, month: "Dec", day: 15, value: 2, organism: "virus", y: 45 },
  { id: 50, month: "Dec", day: 20, value: 2, organism: "fungi", y: 50 },

  






  // ... (keep your full dataset here)
];

/* ---------------- Donut Data ---------------- */
const donutData: DonutDatum[] = [
  { name: "Bacteria", value: 24, color: COLORS.bacteria },
  { name: "Fungi", value: 234, color: COLORS.fungi },
  { name: "Virus", value: 2, color: COLORS.virus },
  { name: "Parasite", value: 34, color: COLORS.parasite },
  { name: "Others", value: 5, color: COLORS.others },
];

const legendData = [
  { name: "Bacteria", value: 24, color: COLORS.bacteria, percentage: "+05%", trend: "up" },
  { name: "Fungi", value: 234, color: COLORS.fungi, percentage: "+35%", trend: "up" },
  { name: "Virus", value: 2, color: COLORS.virus, percentage: "+0.5%", trend: "up" },
  { name: "Parasite", value: 34, color: COLORS.parasite, percentage: "+20%", trend: "up" },
  { name: "Others", value: 5, color: COLORS.others, percentage: "+0.2%", trend: "up" },
];

/* ---------------- Helpers ---------------- */
const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthTicks = Array.from({ length: 12 }, (_, i) => (i + 1) * 4);

const formatNumberLabel = (n: number): string => (n >= 1000 ? n.toLocaleString() : `${n}`);
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

const computeRadius = (value: number): number => {
  if (value >= 100000) return 28;
  if (value >= 7000) return 22;
  if (value >= 5000) return 18;
  if (value >= 1000) return 14;
  if (value >= 500) return 12;
  if (value >= 100) return 10;
  if (value >= 50) return 8;
  return 6;
};

/* ---------------- Custom Scatter Point ---------------- */
const CustomScatterPoint = ({ cx, cy, payload }: any) => {
  const value = payload.value;
  const organism = payload.organism as Organism;
  const color = COLORS[organism] || payload.color || "#8884d8";
  const r = computeRadius(value);

  if (!value) return null;

  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={color} opacity={0.95} />
      <text
        x={cx}
        y={cy}
        dy={4}
        textAnchor="middle"
        fill="#ffffff"
        fontSize={Math.max(9, Math.round(r / 3.2))}
        fontWeight="700"
        style={{ pointerEvents: "none" }}
      >
        {formatNumberLabel(value)}
      </text>
    </g>
  );
};

/* ---------------- Custom Tooltip ---------------- */
const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload;
  return (
    <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-100 text-xs" style={{ minWidth: 180 }}>
      <div className="text-xs font-semibold text-gray-800">{p.date || p.month}</div>
      <div className="mt-2 flex items-center gap-2">
        <div style={{ width: 10, height: 10, borderRadius: 6, background: COLORS[p.organism as Organism] }} />
        <div className="text-sm font-semibold text-gray-700">{p.organism}</div>
      </div>
      <div className="text-gray-500 mt-2">{formatNumberLabel(p.value)} Samples</div>
      <div className="text-gray-500">Facilities: 30</div>
    </div>
  );
};

/* ---------------- DashboardCharts ---------------- */
const DashboardCharts: React.FC = () => {
  const scatterData = useMemo(() => {
    return sampleData.map((s) => {
      const mi = monthLabels.indexOf(s.month);
      const baseX = monthTicks[mi] ?? monthTicks[0];
      const isLarge = s.value >= 5000;
      const jitter = isLarge ? 0 : ((s.id % 5) - 2) * 0.36;
      const x = baseX + jitter;
      const y = clamp(s.y, 8, 62);
      const color = COLORS[s.organism];
      return { ...s, x, y, color };
    });
  }, []);

  const donutTotal = useMemo(() => donutData.reduce((s, d) => s + d.value, 0), []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* LEFT: Scatter */}
      <div className="bg-white rounded-2xl shadow-2xl p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Positivity Rates</h3>
            <div className="flex items-center mt-1">
              <span className="text-green-600 text-sm font-medium mr-2">+10.05%</span>
              <span className="text-gray-400 text-sm">to last year</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <Calendar size={14} />
              <span>10/02/2023</span>
            </div>
            <div className="text-xs text-gray-600">End Date</div>
            <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-white">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
            <select className="text-xs bg-purple-600 text-white rounded px-2 py-1">
              <option>All</option>
            </select>
            <button className="text-gray-600">
              <Download size={16} />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 mb-4">
          {Object.entries(COLORS).map(([key, color]) => (
            <div key={key} className="flex items-center gap-2">
              <div style={{ width: 10, height: 10, borderRadius: 6, background: color }} />
              <div className="text-xs text-gray-600 capitalize">{key}</div>
            </div>
          ))}
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 8, right: 10, bottom: 28, left: 10 }}>
              <CartesianGrid horizontal={false} vertical={false} />
              {monthTicks.map((tick, idx) => (
                <ReferenceLine key={`ref-${idx}`} x={tick} stroke="#F3F4F6" strokeWidth={1} />
              ))}
              <XAxis
                type="number"
                dataKey="x"
                domain={[0.5, monthTicks[monthTicks.length - 1] + 4]}
                ticks={monthTicks}
                tickFormatter={(value) => monthLabels[monthTicks.indexOf(Math.round(value))] || ""}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 11 }}
                interval={0}
                height={30}
              />
              <YAxis type="number" dataKey="y" domain={[0, 70]} axisLine={false} tickLine={false} tick={false} width={0} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#eef2ff", strokeWidth: 1 }} />
              <Scatter data={scatterData} shape={<CustomScatterPoint />} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* RIGHT: Donut */}
      <div className="bg-white rounded-2xl p-6 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Positive Samples detected</h3>
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-gray-600" />
            <span className="text-xs text-gray-600">Start Date</span>
            <Calendar size={14} className="text-gray-600" />
            <span className="text-xs text-gray-600">End Date</span>
            <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-white">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
            <select className="text-xs bg-purple-600 text-white rounded px-2 py-1">
              <option>All</option>
            </select>
            <button className="text-gray-600">
              <Download size={16} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between flex-grow mt-4">
          <div className="relative w-48 h-48 flex-shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={56}
                  outerRadius={86}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                  cornerRadius={6}
                >
                  {donutData.map((entry, i) => (
                    <Cell key={`cell-${i}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="text-lg font-bold text-gray-900">Total: {donutTotal}</div>
              <div className="text-xs text-gray-500">Facilities: 30</div>
            </div>
          </div>
          <div className="flex flex-col ml-6 flex-grow gap-3">
            {legendData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div style={{ width: 12, height: 12, borderRadius: 6, background: item.color }} />
                  <div className="text-sm text-gray-700">{item.name}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                  <div
                    className={`flex items-center text-xs px-2 py-0.5 rounded-full ${
                      item.trend === "up" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                    }`}
                    style={{ minWidth: 54, justifyContent: "center" }}
                  >
                    {item.trend === "up" ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    <span className="ml-1">{item.percentage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;







// import React, { useMemo } from "react";
// import {
//   ScatterChart,
//   Scatter,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ReferenceLine,
// } from "recharts";
// import { Calendar, Download, TrendingUp, TrendingDown } from "lucide-react";

// /* ---------------- sample data (your original) ---------------- */
// const sampleData = [
//   { id: 1, month: "Jan", day: 15, value: 50, organism: "bacteria", color: "#7E45D3", y: 25 },
//   { id: 2, month: "Feb", day: 35, value: 5000, organism: "bacteria", color: "#7E45D3", y: 45 },
//   { id: 3, month: "Feb", day: 42, value: 100, organism: "fungi", color: "#412461", y: 35 },
//   { id: 4, month: "Feb", day: 50, value: 300, organism: "parasite", color: "#F06DAD", y: 15 },
//   { id: 5, month: "Feb", day: 55, value: 300, organism: "others", color: "#C4B5FD", y: 55 },
//   { id: 6, month: "Mar", day: 70, value: 5000, organism: "bacteria", color: "#7E45D3", y: 50 },
//   { id: 7, month: "Mar", day: 75, value: 5000, organism: "bacteria", color: "#7E45D3", y: 35 },
//   { id: 8, month: "Mar", day: 80, value: 100, organism: "bacteria", color: "#7E45D3", y: 60 },
//   { id: 9, month: "Mar", day: 85, value: 500, organism: "parasite", color: "#F06DAD", y: 25 },
//   { id: 10, month: "Mar", day: 78, value: 300, organism: "parasite", color: "#F06DAD", y: 15 },
//   { id: 11, month: "Mar", day: 82, value: 300, organism: "parasite", color: "#F06DAD", y: 20 },
//   { id: 12, month: "Apr", day: 100, value: 5000, organism: "fungi", color: "#412461", y: 40 },
//   { id: 13, month: "Apr", day: 105, value: 400, organism: "bacteria", color: "#7E45D3", y: 55 },
//   { id: 14, month: "Apr", day: 110, value: 400, organism: "virus", color: "#D1B1F4", y: 25 },
//   { id: 15, month: "Apr", day: 108, value: 1000, organism: "fungi", color: "#412461", y: 50 },
//   { id: 16, month: "May", day: 130, value: 5000, organism: "bacteria", color: "#7E45D3", y: 45 },
//   { id: 17, month: "May", day: 135, value: 400, organism: "fungi", color: "#412461", y: 30 },
//   { id: 18, month: "May", day: 140, value: 558, organism: "virus", color: "#D1B1F4", y: 20 },
//   { id: 19, month: "May", day: 125, value: 1000, organism: "bacteria", color: "#7E45D3", y: 55 },
//   { id: 20, month: "Jun", day: 160, value: 5000, organism: "bacteria", color: "#7E45D3", y: 40, date: "13/6/2023" },
//   { id: 21, month: "Jun", day: 165, value: 5000, organism: "bacteria", color: "#7E45D3", y: 50 },
//   { id: 22, month: "Jun", day: 170, value: 400, organism: "fungi", color: "#412461", y: 25 },
//   { id: 23, month: "Jul", day: 190, value: 5000, organism: "bacteria", color: "#7E45D3", y: 45 },
//   { id: 24, month: "Jul", day: 195, value: 5000, organism: "fungi", color: "#412461", y: 35 },
//   { id: 25, month: "Jul", day: 200, value: 440, organism: "virus", color: "#D1B1F4", y: 25 },
//   { id: 26, month: "Jul", day: 205, value: 430, organism: "parasite", color: "#F06DAD", y: 15 },
//   { id: 27, month: "Jul", day: 185, value: 400, organism: "bacteria", color: "#7E45D3", y: 55 },
//   { id: 28, month: "Jul", day: 198, value: 500, organism: "bacteria", color: "#7E45D3", y: 60 },
//   { id: 29, month: "Aug", day: 220, value: 5000, organism: "bacteria", color: "#7E45D3", y: 40 },
//   { id: 30, month: "Aug", day: 225, value: 5000, organism: "fungi", color: "#412461", y: 50 },
//   { id: 31, month: "Aug", day: 230, value: 1000, organism: "bacteria", color: "#7E45D3", y: 30 },
//   { id: 32, month: "Sep", day: 250, value: 100000, organism: "bacteria", color: "#7E45D3", y: 40 },
//   { id: 33, month: "Sep", day: 255, value: 5000, organism: "fungi", color: "#412461", y: 55 },
//   { id: 34, month: "Sep", day: 260, value: 5000, organism: "bacteria", color: "#7E45D3", y: 25 },
//   { id: 35, month: "Sep", day: 265, value: 474, organism: "virus", color: "#D1B1F4", y: 20 },
//   { id: 36, month: "Sep", day: 270, value: 535, organism: "parasite", color: "#F06DAD", y: 15 },
//   { id: 37, month: "Sep", day: 275, value: 400, organism: "others", color: "#FCE7F3", y: 10 },
//   { id: 38, month: "Sep", day: 245, value: 5000, organism: "bacteria", color: "#7E45D3", y: 60 },
//   { id: 39, month: "Sep", day: 268, value: 5000, organism: "bacteria", color: "#7E45D3", y: 50 },
//   { id: 40, month: "Sep", day: 272, value: 1000, organism: "fungi", color: "#412461", y: 35 },
//   { id: 41, month: "Oct", day: 280, value: 5000, organism: "bacteria", color: "#7E45D3", y: 45 },
//   { id: 42, month: "Oct", day: 285, value: 1000, organism: "bacteria", color: "#7E45D3", y: 35 },
//   { id: 43, month: "Oct", day: 290, value: 50, organism: "others", color: "#FCE7F3", y: 25 },
//   { id: 44, month: "Nov", day: 310, value: 5000, organism: "bacteria", color: "#7E45D3", y: 40 },
//   { id: 45, month: "Nov", day: 315, value: 1000, organism: "fungi", color: "#412461", y: 30 },
//   { id: 46, month: "Nov", day: 320, value: 5000, organism: "bacteria", color: "#7E45D3", y: 50 },
//   { id: 47, month: "Nov", day: 325, value: 5000, organism: "fungi", color: "#412461", y: 25 },
//   { id: 48, month: "Dec", day: 340, value: 5000, organism: "bacteria", color: "#7E45D3", y: 45 },
//   { id: 49, month: "Dec", day: 345, value: 5000, organism: "fungi", color: "#412461", y: 35 },
//   { id: 50, month: "Dec", day: 350, value: 5000, organism: "bacteria", color: "#7E45D3", y: 55 },
// ];

// /* Colors */
// const COLORS = {
//   bacteria: "#7E45D3",
//   fungi: "#412461",
//   virus: "#D1B1F4",
//   parasite: "#F472B6",
//   others: "#FCE7F3",
// };

// /* Donut data and legend */
// const donutData = [
//   { name: "Bacteria", value: 24, color: COLORS.bacteria },
//   { name: "Fungi", value: 234, color: COLORS.fungi },
//   { name: "Virus", value: 2, color: COLORS.virus },
//   { name: "Parasite", value: 34, color: COLORS.parasite },
//   { name: "Others", value: 5, color: COLORS.others },
// ];

// const legendData = [
//   { name: "Bacteria", value: 24, color: COLORS.bacteria, percentage: "+05%", trend: "up" },
//   { name: "Fungi", value: 234, color: COLORS.fungi, percentage: "+35%", trend: "up" },
//   { name: "Virus", value: 2, color: COLORS.virus, percentage: "+0.5%", trend: "up" },
//   { name: "Parasite", value: 34, color: COLORS.parasite, percentage: "+20%", trend: "up" },
//   { name: "Others", value: 5, color: COLORS.others, percentage: "+0.2%", trend: "up" },
// ];

// /* Helpers */
// const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// const monthTicks = Array.from({ length: 12 }, (_, i) => (i + 1) * 4);

// const formatNumberLabel = (n) => (n >= 1000 ? n.toLocaleString() : `${n}`);
// const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// const computeRadius = (value) => {
//   if (!value) return 0;
//   if (value >= 100000) return 28;
//   if (value >= 7000) return 22;
//   if (value >= 5000) return 18;
//   if (value >= 1000) return 14;
//   if (value >= 500) return 12;
//   if (value >= 100) return 10;
//   if (value >= 50) return 8;
//   return 6;
// };

// /* Custom Scatter Point (no white border now) */
// const CustomScatterPoint = ({ cx, cy, payload }) => {
//   const value = payload.value || 0;
//   const organism = (payload.organism || "").toLowerCase();
//   const color = COLORS[organism] || payload.color || "#8884d8";
//   const r = computeRadius(value);
//   if (!value) return null;
//   const filterId = `bubbleShadow-${payload.id}`;

//   return (
//     <g>
//       <defs>
//         <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
//           <feGaussianBlur stdDeviation="2" result="coloredBlur" />
//           <feMerge>
//             <feMergeNode in="coloredBlur" />
//             <feMergeNode in="SourceGraphic" />
//           </feMerge>
//         </filter>
//       </defs>

//       <circle cx={cx} cy={cy} r={r} fill={color} opacity={0.95} filter={`url(#${filterId})`} />
//       <text
//         x={cx}
//         y={cy}
//         dy={4}
//         textAnchor="middle"
//         fill="#ffffff"
//         fontSize={Math.max(9, Math.round(r / 3.2))}
//         fontWeight="700"
//         style={{ pointerEvents: "none" }}
//       >
//         {formatNumberLabel(value)}
//       </text>
//     </g>
//   );
// };

// /* Custom Tooltip */
// const CustomTooltip = ({ active, payload }) => {
//   if (!active || !payload || !payload.length) return null;
//   const p = payload[0].payload;
//   if (!p || p.value == null) return null;

//   return (
//     <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-100 text-xs" style={{ minWidth: 180 }}>
//       <div className="text-xs font-semibold text-gray-800">{p.date || p.month}</div>
//       <div className="mt-2 flex items-center gap-2">
//         <div style={{ width: 10, height: 10, borderRadius: 6, background: COLORS[p.organism?.toLowerCase()] }} />
//         <div className="text-sm font-semibold text-gray-700">{p.organism || "Unknown"}</div>
//       </div>
//       <div className="text-gray-500 mt-2">{formatNumberLabel(p.value)} Samples</div>
//       <div className="text-gray-500">Facilities: 30</div>
//     </div>
//   );
// };

// /* ---------------- DashboardCharts ---------------- */
// const DashboardCharts = () => {
//   const scatterData = useMemo(() => {
//     return sampleData.map((s) => {
//       const mi = Math.max(0, monthLabels.indexOf(s.month));
//       const baseX = monthTicks[mi] ?? monthTicks[0];
//       const isLarge = (s.value ?? 0) >= 5000;
//       const jitter = isLarge ? 0 : ((s.id % 5) - 2) * 0.36;
//       const x = baseX + jitter;
//       const y = clamp(s.y ?? 35, 8, 62);
//       const organismKey = (s.organism || "").toLowerCase();
//       const color = COLORS[organismKey] || s.color || "#8884d8";
//       return { ...s, x, y, color };
//     });
//   }, []);

//   const donutTotal = useMemo(() => donutData.reduce((s, d) => s + d.value, 0), []);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//       {/* LEFT: Positivity Rates */}
//       <div className="bg-white rounded-2xl shadow-2xl p-6">
//         <div className="flex items-start justify-between mb-4">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800">Positivity Rates</h3>
//             <div className="flex items-center mt-1">
//               <span className="text-green-600 text-sm font-medium mr-2">+10.05%</span>
//               <span className="text-gray-400 text-sm">to last year</span>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="flex items-center gap-1 text-xs text-gray-600">
//               <Calendar size={14} />
//               <span>10/02/2023</span>
//             </div>
//             <div className="text-xs text-gray-600">End Date</div>
//             <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-white">
//               <option>Monthly</option>
//               <option>Weekly</option>
//               <option>Daily</option>
//             </select>
//             <select className="text-xs bg-purple-600 text-white rounded px-2 py-1">
//               <option>All</option>
//             </select>
//             <button className="text-gray-600">
//               <Download size={16} />
//             </button>
//           </div>
//         </div>
//         <div className="flex flex-wrap items-center gap-4 mb-4">
//           {Object.entries(COLORS).map(([key, color]) => (
//             <div key={key} className="flex items-center gap-2">
//               <div style={{ width: 10, height: 10, borderRadius: 6, background: color }} />
//               <div className="text-xs text-gray-600 capitalize">{key}</div>
//             </div>
//           ))}
//         </div>
//         <div className="h-72">
//           <ResponsiveContainer width="100%" height="100%">
//             <ScatterChart margin={{ top: 8, right: 10, bottom: 28, left: 10 }}>
//               <CartesianGrid horizontal={false} vertical={false} />
//               {monthTicks.map((tick, idx) => (
//                 <ReferenceLine key={`ref-${idx}`} x={tick} stroke="#F3F4F6" strokeWidth={1} />
//               ))}
//               <XAxis
//                 type="number"
//                 dataKey="x"
//                 domain={[0.5, monthTicks[monthTicks.length - 1] + 4]}
//                 ticks={monthTicks}
//                 tickFormatter={(value) => {
//                   const i = monthTicks.indexOf(Math.round(value));
//                   return monthLabels[i] || "";
//                 }}
//                 axisLine={false}
//                 tickLine={false}
//                 tick={{ fill: "#9CA3AF", fontSize: 11 }}
//                 interval={0}
//                 height={30}
//               />
//               <YAxis type="number" dataKey="y" domain={[0, 70]} axisLine={false} tickLine={false} tick={false} width={0} />
//               <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#eef2ff", strokeWidth: 1 }} />
//               <Scatter data={scatterData} fill="#8884d8" shape={<CustomScatterPoint />} />
//             </ScatterChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* RIGHT: Donut */}
//       <div className="bg-white rounded-2xl p-6 shadow-2xl flex flex-col">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-lg font-semibold text-gray-800">Positive Samples detected</h3>
//           <div className="flex items-center gap-2">
//             <Calendar size={14} className="text-gray-600" />
//             <span className="text-xs text-gray-600">Start Date</span>
//             <Calendar size={14} className="text-gray-600" />
//             <span className="text-xs text-gray-600">End Date</span>
//             <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-white">
//               <option>Monthly</option>
//               <option>Weekly</option>
//               <option>Daily</option>
//             </select>
//             <select className="text-xs bg-purple-600 text-white rounded px-2 py-1">
//               <option>All</option>
//             </select>
//             <button className="text-gray-600">
//               <Download size={16} />
//             </button>
//           </div>
//         </div>
//         <div className="flex items-center justify-between flex-grow mt-4">
//           <div className="relative w-48 h-48 flex-shrink-0">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={donutData}
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={56}
//                   outerRadius={86}
//                   paddingAngle={4}
//                   dataKey="value"
//                   stroke="none"
//                   cornerRadius={6}
//                 >
//                   {donutData.map((entry, i) => (
//                     <Cell key={`cell-${i}`} fill={entry.color} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
//               <div className="text-lg font-bold text-gray-900">Total: {donutTotal}</div>
//               <div className="text-xs text-gray-500">Facilities: 30</div>
//             </div>
//           </div>
//           <div className="flex flex-col ml-6 flex-grow gap-3">
//             {legendData.map((item) => (
//               <div key={item.name} className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div style={{ width: 12, height: 12, borderRadius: 6, background: item.color }} />
//                   <div className="text-sm text-gray-700">{item.name}</div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="text-sm font-semibold text-gray-900">{item.value}</div>
//                   <div
//                     className={`flex items-center text-xs px-2 py-0.5 rounded-full ${
//                       item.trend === "up" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
//                     }`}
//                     style={{ minWidth: 54, justifyContent: "center" }}
//                   >
//                     {item.trend === "up" ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
//                     <span className="ml-1">{item.percentage}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardCharts;
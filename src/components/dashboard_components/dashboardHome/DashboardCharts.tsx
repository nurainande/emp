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
 

/* Individual sample data - each bubble is a separate sample */
const sampleData = [
  // January - very sparse
  { id: 1, month: "Jan", day: 15, value: 50, organism: "bacteria", color: "#8B5CF6", y: 25 },
  
  // February - multiple organisms
  { id: 2, month: "Feb", day: 35, value: 5000, organism: "bacteria", color: "#6D28D9", y: 45 },
  { id: 3, month: "Feb", day: 42, value: 7000, organism: "fungi", color: "#F472B6", y: 35 },
  { id: 4, month: "Feb", day: 50, value: 300, organism: "parasite", color: "#FCE7F3", y: 15 },
  { id: 5, month: "Feb", day: 55, value: 300, organism: "others", color: "#C4B5FD", y: 55 },
  
  // March - bacteria dominant with some parasites
  { id: 6, month: "Mar", day: 70, value: 5000, organism: "bacteria", color: "#6D28D9", y: 50 },
  { id: 7, month: "Mar", day: 75, value: 5000, organism: "bacteria", color: "#6D28D9", y: 35 },
  { id: 8, month: "Mar", day: 80, value: 100, organism: "bacteria", color: "#6D28D9", y: 60 },
  { id: 9, month: "Mar", day: 85, value: 500, organism: "parasite", color: "#F472B6", y: 25 },
  { id: 10, month: "Mar", day: 78, value: 300, organism: "parasite", color: "#F472B6", y: 15 },
  { id: 11, month: "Mar", day: 82, value: 300, organism: "parasite", color: "#F472B6", y: 20 },
  
  // April - fungi and virus focus
  { id: 12, month: "Apr", day: 100, value: 5000, organism: "fungi", color: "#C4B5FD", y: 40 },
  { id: 13, month: "Apr", day: 105, value: 400, organism: "bacteria", color: "#6D28D9", y: 55 },
  { id: 14, month: "Apr", day: 110, value: 400, organism: "virus", color: "#C4B5FD", y: 25 },
  { id: 15, month: "Apr", day: 108, value: 1000, organism: "fungi", color: "#C4B5FD", y: 50 },
  
  // May - mixed organisms
  { id: 16, month: "May", day: 130, value: 5000, organism: "bacteria", color: "#6D28D9", y: 45 },
  { id: 17, month: "May", day: 135, value: 400, organism: "fungi", color: "#C4B5FD", y: 30 },
  { id: 18, month: "May", day: 140, value: 558, organism: "virus", color: "#C4B5FD", y: 20 },
  { id: 19, month: "May", day: 125, value: 1000, organism: "bacteria", color: "#6D28D9", y: 55 },
  
  // June - bacteria focus
  { id: 20, month: "Jun", day: 160, value: 5000, organism: "bacteria", color: "#6D28D9", y: 40, date: "13/6/2023" },
  { id: 21, month: "Jun", day: 165, value: 5000, organism: "bacteria", color: "#6D28D9", y: 50 },
  { id: 22, month: "Jun", day: 170, value: 400, organism: "fungi", color: "#C4B5FD", y: 25 },
  
  // July - diverse organisms  
  { id: 23, month: "Jul", day: 190, value: 5000, organism: "bacteria", color: "#6D28D9", y: 45 },
  { id: 24, month: "Jul", day: 195, value: 5000, organism: "fungi", color: "#C4B5FD", y: 35 },
  { id: 25, month: "Jul", day: 200, value: 440, organism: "virus", color: "#C4B5FD", y: 25 },
  { id: 26, month: "Jul", day: 205, value: 430, organism: "parasite", color: "#F472B6", y: 15 },
  { id: 27, month: "Jul", day: 185, value: 400, organism: "bacteria", color: "#6D28D9", y: 55 },
  { id: 28, month: "Jul", day: 198, value: 500, organism: "bacteria", color: "#6D28D9", y: 60 },
  
  // August - bacteria and fungi
  { id: 29, month: "Aug", day: 220, value: 5000, organism: "bacteria", color: "#6D28D9", y: 40 },
  { id: 30, month: "Aug", day: 225, value: 5000, organism: "fungi", color: "#C4B5FD", y: 50 },
  { id: 31, month: "Aug", day: 230, value: 1000, organism: "bacteria", color: "#6D28D9", y: 30 },
  
  // September - MAJOR activity with 100,000 spike
  { id: 32, month: "Sep", day: 250, value: 100000, organism: "bacteria", color: "#6D28D9", y: 40 },
  { id: 33, month: "Sep", day: 255, value: 5000, organism: "fungi", color: "#C4B5FD", y: 55 },
  { id: 34, month: "Sep", day: 260, value: 5000, organism: "bacteria", color: "#6D28D9", y: 25 },
  { id: 35, month: "Sep", day: 265, value: 474, organism: "virus", color: "#C4B5FD", y: 20 },
  { id: 36, month: "Sep", day: 270, value: 535, organism: "parasite", color: "#F472B6", y: 15 },
  { id: 37, month: "Sep", day: 275, value: 400, organism: "others", color: "#FCE7F3", y: 10 },
  { id: 38, month: "Sep", day: 245, value: 5000, organism: "bacteria", color: "#6D28D9", y: 60 },
  { id: 39, month: "Sep", day: 268, value: 5000, organism: "bacteria", color: "#6D28D9", y: 50 },
  { id: 40, month: "Sep", day: 272, value: 1000, organism: "fungi", color: "#C4B5FD", y: 35 },
  
  // October - declining activity
  { id: 41, month: "Oct", day: 280, value: 5000, organism: "bacteria", color: "#6D28D9", y: 45 },
  { id: 42, month: "Oct", day: 285, value: 1000, organism: "bacteria", color: "#6D28D9", y: 35 },
  { id: 43, month: "Oct", day: 290, value: 50, organism: "others", color: "#FCE7F3", y: 25 },
  
  // November - moderate activity
  { id: 44, month: "Nov", day: 310, value: 5000, organism: "bacteria", color: "#6D28D9", y: 40 },
  { id: 45, month: "Nov", day: 315, value: 1000, organism: "fungi", color: "#F472B6", y: 30 },
  { id: 46, month: "Nov", day: 320, value: 5000, organism: "bacteria", color: "#6D28D9", y: 50 },
  { id: 47, month: "Nov", day: 325, value: 5000, organism: "fungi", color: "#F472B6", y: 25 },
  
  // December - end year
  { id: 48, month: "Dec", day: 340, value: 5000, organism: "bacteria", color: "#6D28D9", y: 45 },
  { id: 49, month: "Dec", day: 345, value: 5000, organism: "fungi", color: "#F472B6", y: 35 },
  { id: 50, month: "Dec", day: 350, value: 5000, organism: "bacteria", color: "#6D28D9", y: 55 },
];

/* Colors */
const COLORS = {
  bacteria: "#8B5CF6",
  fungi: "#6D28D9", 
  virus: "#C4B5FD",
  parasite: "#F472B6",
  others: "#FCE7F3",
};

/* Donut data */
const donutData = [
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

/* Helpers */
const computeRadius = (value) => {
  if (!value) return 0;
  if (value >= 100000) return 42;
  if (value >= 7000) return 34;
  if (value >= 5000) return 30;
  if (value >= 1000) return 22;
  if (value >= 500) return 18;
  if (value >= 100) return 14;
  if (value >= 50) return 10;
  return 8;
};

const formatNumberLabel = (n) => {
  if (n >= 1000) return n.toLocaleString();
  return `${n}`;
};

/* Custom bubble component */
const CustomScatterPoint = ({ cx, cy, payload }) => {
  const value = payload.value || 0;
  const color = payload.color;
  const r = computeRadius(value);

  if (!value) return null;

  return (
    <g>
      <defs>
        <filter id="bubbleShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={color}
        stroke="#ffffff"
        strokeWidth={1.5}
        opacity={0.9}
        filter="url(#bubbleShadow)"
      />
      <text
        x={cx}
        y={cy}
        dy={3}
        textAnchor="middle"
        fill="#ffffff"
        fontSize={Math.max(9, Math.round(r / 3.2))}
        fontWeight="600"
        style={{ pointerEvents: "none" }}
      >
        {formatNumberLabel(value)}
      </text>
    </g>
  );
};

/* Custom tooltip */
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;
  const p = payload[0].payload;
  if (!p || !p.value) return null;

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-100 text-xs" style={{ minWidth: 160 }}>
      <div className="text-xs font-semibold text-gray-800">{p.date || p.month}</div>

      <div className="mt-1 flex items-center gap-2">
        <div style={{ width: 10, height: 10, borderRadius: 6, background: COLORS.bacteria }} />
        <div className="text-purple-700 font-semibold text-sm">E.Coli</div>
        <div className="text-green-600 text-xs font-medium ml-1">+47%</div>
      </div>

      <div className="text-gray-500 mt-2">{p.value.toLocaleString()} Samples</div>
      <div className="text-gray-500">Facilities: 30</div>
    </div>
  );
};

const DashboardCharts = () => {
  // Convert sample data to scatter format
  const scatterData = sampleData.map(sample => ({
    x: sample.day,
    y: sample.y,
    value: sample.value,
    color: sample.color,
    month: sample.month,
    organism: sample.organism,
    date: sample.date,
    id: sample.id
  }));

  const monthTicks = [15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345];
  const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const donutTotal = useMemo(() => donutData.reduce((s, d) => s + d.value, 0), []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* LEFT: Positivity Rates */}
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

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          {[
            { name: "Bacteria", color: COLORS.bacteria },
            { name: "Fungi", color: COLORS.fungi },
            { name: "Virus", color: COLORS.virus },
            { name: "Parasite", color: COLORS.parasite },
            { name: "Others", color: COLORS.others },
          ].map((l) => (
            <div key={l.name} className="flex items-center gap-2">
              <div style={{ width: 10, height: 10, borderRadius: 6, background: l.color }} />
              <div className="text-xs text-gray-600">{l.name}</div>
            </div>
          ))}
        </div>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 10, bottom: 30, left: 10 }}>
              <CartesianGrid horizontal={false} vertical={false} />
              
              {/* Very light vertical month lines */}
              {monthTicks.map((tick, idx) => (
                <ReferenceLine
                  key={`ref-${idx}`}
                  x={tick}
                  stroke="#F8F9FA"
                  strokeWidth={1}
                />
              ))}

              <XAxis
                type="number"
                dataKey="x"
                domain={[0, 365]}
                ticks={monthTicks}
                tickFormatter={(value) => {
                  const i = monthTicks.indexOf(value);
                  return monthLabels[i] || "";
                }}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 11 }}
                interval={0}
                height={30}
              />
              
              {/* NO Y-AXIS LABELS - completely hidden */}
              <YAxis
                type="number"
                dataKey="y"
                domain={[0, 70]}
                axisLine={false}
                tickLine={false}
                tick={false}
                width={0}
              />

              <Tooltip content={<CustomTooltip />} />

              <Scatter 
                data={scatterData} 
                fill="#8884d8"
                shape={<CustomScatterPoint />}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* RIGHT: Donut + legend */}
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
          {/* donut */}
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

          {/* legend with stats */}
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
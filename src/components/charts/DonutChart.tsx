import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type DonutData = {
  name: string;
  value: number;
  color: string;
  change?: number; // percent change (optional, e.g. +5 or -3)
};

interface DonutChartProps {
  data: DonutData[];
  height?: number; // px (default 260)
}

/**
 * DonutChart
 * - Renders a responsive donut + center summary.
 * - Expects data with `name`, `value`, `color`, optional `change`.
 */
const DonutChart: React.FC<DonutChartProps> = ({ data, height = 260 }) => {
  const total = data.reduce((s, item) => s + item.value, 0);

  const formatPercent = (val: number) => {
    if (total === 0) return "0%";
    return `${((val / total) * 100).toFixed(0)}%`;
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">
          Positive Samples detected
        </h3>
        {/* Replace these with real controls if needed */}
        <div className="flex items-center gap-2">
          <button className="text-sm px-3 py-1 rounded-md bg-gray-50 border border-gray-200">All</button>
        </div>
      </div>

      <div className="relative w-full" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius="58%"
              outerRadius="86%"
              paddingAngle={6}
              startAngle={90}
              endAngle={-270}
              // labelLine={false}
            >
              {data.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: any, name: any) => [`${value}`, name]}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center card overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white rounded-full w-40 h-40 shadow-md flex items-center justify-center">
            <div className="text-center pointer-events-auto">
              <div className="text-sm text-gray-500">Total</div>
              <div className="text-2xl font-bold text-gray-900">{total}</div>
              <div className="text-xs text-gray-400 mt-1">Facilities: 30</div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend / breakdown below the chart */}
      <div className="mt-4 grid grid-cols-1 gap-2">
        {data.map((d) => (
          <div key={d.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full inline-block"
                style={{ backgroundColor: d.color }}
              />
              <span className="text-sm text-gray-700">{d.name}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-700">{d.value}</div>
              <div
                className={`text-xs font-medium ${
                  (d.change ?? 0) >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {(d.change ?? 0) >= 0 ? "▲" : "▼"} {Math.abs(d.change ?? 0)}%
              </div>
              <div className="text-sm text-gray-400">{formatPercent(d.value)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;

// // src/components/dashboard/BubbleChats.tsx
// import React from "react";
// import {
//   ResponsiveContainer,
//   ScatterChart,
//   Scatter,
//   XAxis,
//   YAxis,
//   ZAxis,
//   Tooltip,
//   CartesianGrid,
// } from "recharts";

// const data = [
//   { x: 50, y: 120, z: 200 },
//   { x: 100, y: 200, z: 260 },
//   { x: 150, y: 300, z: 400 },
//   { x: 200, y: 250, z: 300 },
//   { x: 250, y: 400, z: 500 },
// ];

// const BubbleCharts: React.FC = () => {
//   return (
//     <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm h-[350px] flex flex-col">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Bubble Chart Example
//         </h2>
//         <span className="text-sm text-gray-500">Last 30 days</span>
//       </div>

//       {/* Chart */}
//       <div className="flex-1">
//         <ResponsiveContainer width="100%" height="100%">
//           <ScatterChart>
//             <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
//             <XAxis type="number" dataKey="x" name="stature" unit="cm" />
//             <YAxis type="number" dataKey="y" name="weight" unit="kg" />
//             <ZAxis type="number" dataKey="z" range={[50, 400]} />
//             <Tooltip cursor={{ strokeDasharray: "3 3" }} />
//             <Scatter data={data} fill="#8B5CF6" />
//           </ScatterChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default BubbleCharts;


// src/components/dashboard/BubbleChats.tsx
import React from "react";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", positivity: 70, volume: 200 },
  { month: "Feb", positivity: 65, volume: 150 },
  { month: "Mar", positivity: 80, volume: 300 },
  { month: "Apr", positivity: 75, volume: 250 },
  { month: "May", positivity: 90, volume: 400 },
  { month: "Jun", positivity: 85, volume: 350 },
];

const BubbleChats: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm h-[350px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Positivity Trend
        </h2>
        <span className="text-sm text-gray-500">Jan – Jun</span>
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              type="category"
              dataKey="month"
              tick={{ fontSize: 12 }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              type="number"
              dataKey="positivity"
              tick={{ fontSize: 12 }}
              domain={[50, 100]}
            />
            <ZAxis type="number" dataKey="volume" range={[60, 400]} />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              formatter={(value, name) => {
                if (name === "positivity") return `${value}%`;
                if (name === "volume") return `${value} responses`;
                return value;
              }}
            />
            <Scatter data={data} fill="#8B5CF6" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BubbleChats;


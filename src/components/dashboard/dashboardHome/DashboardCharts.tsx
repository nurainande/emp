// import React, { useState } from 'react';
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
//   Legend
// } from 'recharts';
// import { Calendar, Download, ChevronDown } from 'lucide-react';

// // Sample data for the bubble chart
// const bubbleData = [
//   { month: 'Jan', bacteria: 15, fungi: 8, virus: 5, parasite: 3, others: 2, day: 15 },
//   { month: 'Feb', bacteria: 12, fungi: 6, virus: 4, parasite: 2, others: 1, day: 45 },
//   { month: 'Mar', bacteria: 18, fungi: 10, virus: 7, parasite: 4, others: 3, day: 75 },
//   { month: 'Apr', bacteria: 22, fungi: 14, virus: 9, parasite: 5, others: 4, day: 105 },
//   { month: 'May', bacteria: 25, fungi: 16, virus: 12, parasite: 7, others: 5, day: 135 },
//   { month: 'Jun', bacteria: 28, fungi: 18, virus: 14, parasite: 8, others: 6, day: 165 },
//   { month: 'Jul', bacteria: 32, fungi: 22, virus: 16, parasite: 10, others: 7, day: 195 },
//   { month: 'Aug', bacteria: 30, fungi: 20, virus: 15, parasite: 9, others: 6, day: 225 },
//   { month: 'Sep', bacteria: 35, fungi: 25, virus: 18, parasite: 12, others: 8, day: 255 },
//   { month: 'Oct', bacteria: 38, fungi: 28, virus: 20, parasite: 14, others: 9, day: 285 },
//   { month: 'Nov', bacteria: 42, fungi: 32, virus: 24, parasite: 16, others: 11, day: 315 },
//   { month: 'Dec', bacteria: 40, fungi: 30, virus: 22, parasite: 15, others: 10, day: 345 },
// ];

// // Donut chart data
// const donutData = [
//   { name: 'Bacteria', value: 234, color: '#8B5CF6', percentage: '+10.5%', trend: 'up' },
//   { name: 'Fungi', value: 34, color: '#EC4899', percentage: '+2.3%', trend: 'up' },
//   { name: 'Virus', value: 24, color: '#A78BFA', percentage: '-0.5%', trend: 'down' },
//   { name: 'Parasite', value: 5, color: '#F472B6', percentage: '+5.2%', trend: 'up' },
//   { name: 'Others', value: 3, color: '#DDD6FE', percentage: '+1.2%', trend: 'up' },
// ];

// const DashboardCharts = () => {
//   const [selectedPeriod, setSelectedPeriod] = useState('Monthly');
//   const [selectedFilter, setSelectedFilter] = useState('All');

//   // Create scatter data for bubble chart
//   const createScatterData = (type: string, color: string) => {
//     return bubbleData.map(item => ({
//       x: item.day,
//       y: item[type as keyof typeof item] as number,
//       z: (item[type as keyof typeof item] as number) * 100, // Size multiplier
//       month: item.month
//     }));
//   };

//   const scatterSeries = [
//     { data: createScatterData('bacteria', '#8B5CF6'), color: '#8B5CF6', name: 'Bacteria' },
//     { data: createScatterData('fungi', '#EC4899'), color: '#EC4899', name: 'Fungi' },
//     { data: createScatterData('virus', '#A78BFA'), color: '#A78BFA', name: 'Virus' },
//     { data: createScatterData('parasite', '#F472B6'), color: '#F472B6', name: 'Parasite' },
//     { data: createScatterData('others', '#DDD6FE'), color: '#DDD6FE', name: 'Others' },
//   ];

//   const CustomTooltip = ({ active, payload }: any) => {
//     if (active && payload && payload.length) {
//       const data = payload[0].payload;
//       return (
//         <div className="bg-white p-3 rounded-lg shadow-lg border">
//           <p className="text-sm font-medium">{`${data.month}`}</p>
//           <p className="text-sm text-gray-600">{`Value: ${data.y}`}</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, name }: any) => {
//     const RADIAN = Math.PI / 180;
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//       <text 
//         x={x} 
//         y={y} 
//         fill="white" 
//         textAnchor={x > cx ? 'start' : 'end'} 
//         dominantBaseline="central"
//         fontSize="12"
//         fontWeight="bold"
//       >
//         {value}
//       </text>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          
//           {/* Positivity Rates Chart */}
//           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-4">
//                 <h2 className="text-lg font-semibold text-gray-900">Positivity Rates</h2>
//                 <div className="flex items-center text-green-600 text-sm font-medium">
//                   <span className="text-red-500">📈</span>
//                   <span className="ml-1">+10.05% to last year</span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <Calendar size={16} />
//                   <span>10/02/2023</span>
//                   <span>End Date</span>
//                 </div>
//                 <select 
//                   value={selectedPeriod}
//                   onChange={(e) => setSelectedPeriod(e.target.value)}
//                   className="border border-gray-200 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 >
//                   <option>Monthly</option>
//                   <option>Weekly</option>
//                   <option>Daily</option>
//                 </select>
//                 <select 
//                   value={selectedFilter}
//                   onChange={(e) => setSelectedFilter(e.target.value)}
//                   className="bg-purple-600 text-white border-none rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 >
//                   <option>All</option>
//                   <option>Bacteria</option>
//                   <option>Fungi</option>
//                 </select>
//                 <button className="p-1 hover:bg-gray-100 rounded">
//                   <Download size={16} className="text-gray-600" />
//                 </button>
//               </div>
//             </div>

//             {/* Legend */}
//             <div className="flex flex-wrap gap-4 mb-4">
//               {scatterSeries.map((series, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                   <div 
//                     className="w-3 h-3 rounded-full" 
//                     style={{ backgroundColor: series.color }}
//                   ></div>
//                   <span className="text-sm text-gray-600">{series.name}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Bubble Chart */}
//             <div className="h-80">
//               <ResponsiveContainer width="100%" height="100%">
//                 <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                   <XAxis 
//                     type="number" 
//                     dataKey="x" 
//                     domain={[0, 365]}
//                     tickFormatter={(value) => {
//                       const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//                       return months[Math.floor(value / 30)] || '';
//                     }}
//                     axisLine={false}
//                     tickLine={false}
//                     tick={{ fill: '#666', fontSize: 12 }}
//                   />
//                   <YAxis 
//                     type="number" 
//                     dataKey="y" 
//                     axisLine={false}
//                     tickLine={false}
//                     tick={{ fill: '#666', fontSize: 12 }}
//                   />
//                   {scatterSeries.map((series, index) => (
//                     <Scatter
//                       key={index}
//                       data={series.data}
//                       fill={series.color}
//                       fillOpacity={0.7}
//                     />
//                   ))}
//                 </ScatterChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Positive Samples Detected Chart */}
//           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-lg font-semibold text-gray-900">Positive Samples detected</h2>
//               <div className="flex items-center gap-3">
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <span>Start Date</span>
//                   <span>End Date</span>
//                 </div>
//                 <select className="border border-gray-200 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
//                   <option>Monthly</option>
//                   <option>Weekly</option>
//                   <option>Daily</option>
//                 </select>
//                 <select className="bg-purple-600 text-white border-none rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
//                   <option>All</option>
//                   <option>Bacteria</option>
//                   <option>Fungi</option>
//                 </select>
//                 <button className="p-1 hover:bg-gray-100 rounded">
//                   <Download size={16} className="text-gray-600" />
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               {/* Donut Chart */}
//               <div className="relative">
//                 <ResponsiveContainer width={300} height={300}>
//                   <PieChart>
//                     <Pie
//                       data={donutData}
//                       cx="50%"
//                       cy="50%"
//                       labelLine={false}
//                       label={renderCustomizedLabel}
//                       outerRadius={120}
//                       innerRadius={60}
//                       fill="#8884d8"
//                       dataKey="value"
//                     >
//                       {donutData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={entry.color} />
//                       ))}
//                     </Pie>
//                   </PieChart>
//                 </ResponsiveContainer>
                
//                 {/* Center content */}
//                 <div className="absolute inset-0 flex items-center justify-center flex-col">
//                   <span className="text-2xl font-bold text-gray-900">300</span>
//                   <span className="text-sm text-gray-500">Total</span>
//                   <span className="text-xs text-gray-400">Facilities: 30</span>
//                 </div>
//               </div>

//               {/* Legend with stats */}
//               <div className="flex flex-col gap-3 ml-8">
//                 {donutData.map((item, index) => (
//                   <div key={index} className="flex items-center justify-between min-w-[200px]">
//                     <div className="flex items-center gap-3">
//                       <div 
//                         className="w-3 h-3 rounded-full" 
//                         style={{ backgroundColor: item.color }}
//                       ></div>
//                       <span className="text-sm text-gray-700">{item.name}</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="font-semibold text-gray-900">{item.value}</span>
//                       <span 
//                         className={`text-sm px-2 py-1 rounded ${
//                           item.trend === 'up' ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'
//                         }`}
//                       >
//                         {item.percentage}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardCharts;





// import React, { useState } from 'react';
import { 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Calendar, Download } from 'lucide-react';

// Sample data for the bubble chart
const bubbleData = [
  { month: 'Jan', bacteria: 15, fungi: 8, virus: 5, parasite: 3, others: 2, day: 15 },
  { month: 'Feb', bacteria: 12, fungi: 6, virus: 4, parasite: 2, others: 1, day: 45 },
  { month: 'Mar', bacteria: 18, fungi: 10, virus: 7, parasite: 4, others: 3, day: 75 },
  { month: 'Apr', bacteria: 22, fungi: 14, virus: 9, parasite: 5, others: 4, day: 105 },
  { month: 'May', bacteria: 25, fungi: 16, virus: 12, parasite: 7, others: 5, day: 135 },
  { month: 'Jun', bacteria: 28, fungi: 18, virus: 14, parasite: 8, others: 6, day: 165 },
  { month: 'Jul', bacteria: 32, fungi: 22, virus: 16, parasite: 10, others: 7, day: 195 },
  { month: 'Aug', bacteria: 30, fungi: 20, virus: 15, parasite: 9, others: 6, day: 225 },
  { month: 'Sep', bacteria: 35, fungi: 25, virus: 18, parasite: 12, others: 8, day: 255 },
  { month: 'Oct', bacteria: 38, fungi: 28, virus: 20, parasite: 14, others: 9, day: 285 },
  { month: 'Nov', bacteria: 42, fungi: 32, virus: 24, parasite: 16, others: 11, day: 315 },
  { month: 'Dec', bacteria: 40, fungi: 30, virus: 22, parasite: 15, others: 10, day: 345 },
];

// Donut chart data
const donutData = [
  { name: 'Bacteria', value: 234, color: '#8B5CF6' },
  { name: 'Fungi', value: 34, color: '#EC4899' },
  { name: 'Virus', value: 24, color: '#A78BFA' },
  { name: 'Parasite', value: 5, color: '#F472B6' },
  { name: 'Others', value: 3, color: '#DDD6FE' },
];

// Legend data with percentages
const legendData = [
  { name: 'Bacteria', value: 234, color: '#8B5CF6', percentage: '+10.5%', trend: 'up' },
  { name: 'Fungi', value: 34, color: '#EC4899', percentage: '+2.3%', trend: 'up' },
  { name: 'Virus', value: 24, color: '#A78BFA', percentage: '-0.5%', trend: 'down' },
  { name: 'Parasite', value: 5, color: '#F472B6', percentage: '+5.2%', trend: 'up' },
  { name: 'Others', value: 3, color: '#DDD6FE', percentage: '+1.2%', trend: 'up' },
];

const DashboardCharts = () => {
  // Create scatter data for bubble chart
  const createScatterData = (type: string) => {
    return bubbleData.map(item => ({
      x: item.day,
      y: item[type as keyof typeof item] as number,
      z: (item[type as keyof typeof item] as number) * 50, // Size multiplier for bubbles
      month: item.month,
      value: item[type as keyof typeof item] as number
    }));
  };

  const scatterSeries = [
    { data: createScatterData('bacteria'), color: '#8B5CF6', name: 'Bacteria' },
    { data: createScatterData('fungi'), color: '#EC4899', name: 'Fungi' },
    { data: createScatterData('virus'), color: '#A78BFA', name: 'Virus' },
    { data: createScatterData('parasite'), color: '#F472B6', name: 'Parasite' },
    { data: createScatterData('others'), color: '#DDD6FE', name: 'Others' },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-800 text-white p-2 rounded shadow-lg text-xs">
          <p>{`${data.month}: ${data.value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Positivity Rates Chart */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Positivity Rates</h3>
            <div className="flex items-center mt-1">
              <span className="text-green-600 text-sm font-medium">📈 +10.05%</span>
              <span className="text-gray-500 text-sm ml-1">to last year</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <Calendar size={14} />
              <span>10/02/2023</span>
            </div>
            <span className="text-xs text-gray-600">End Date</span>
            
            <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-white">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
            
            <select className="text-xs bg-purple-600 text-white rounded px-2 py-1 border-none">
              <option>All</option>
            </select>
            
            <button className="text-gray-600 hover:text-gray-800">
              <Download size={16} />
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          {scatterSeries.map((series, index) => (
            <div key={index} className="flex items-center gap-1">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: series.color }}
              ></div>
              <span className="text-xs text-gray-600">{series.name}</span>
            </div>
          ))}
        </div>

        {/* Bubble Chart */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 10, bottom: 20, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                type="number" 
                dataKey="x" 
                domain={[0, 365]}
                tickFormatter={(value) => {
                  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                  return months[Math.floor(value / 30)] || '';
                }}
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 10 }}
              />
              <YAxis 
                type="number" 
                dataKey="y" 
                domain={[0, 60]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 10 }}
              />
              {scatterSeries.map((series, index) => (
                <Scatter
                  key={index}
                  data={series.data}
                  fill={series.color}
                  fillOpacity={0.8}
                />
              ))}
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Positive Samples Detected Chart */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Positive Samples detected</h3>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">Start Date</span>
            <span className="text-xs text-gray-600">End Date</span>
            
            <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-white">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
            
            <select className="text-xs bg-purple-600 text-white rounded px-2 py-1 border-none">
              <option>All</option>
            </select>
            
            <button className="text-gray-600 hover:text-gray-800">
              <Download size={16} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* Donut Chart */}
          <div className="relative flex-shrink-0">
            <div className="w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={donutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {donutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-2xl font-bold text-gray-900">300</span>
              <span className="text-xs text-gray-500">Total</span>
              <span className="text-xs text-gray-400">Facilities: 30</span>
            </div>
          </div>

          {/* Legend with stats */}
          <div className="flex flex-col gap-2 ml-6">
            {legendData.map((item, index) => (
              <div key={index} className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full flex-shrink-0" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-700">{item.name}</span>
                </div>
                <div className="flex items-center gap-3 ml-auto">
                  <span className="font-semibold text-gray-900 text-sm">{item.value}</span>
                  <span 
                    className={`text-xs px-1 py-0.5 rounded ${
                      item.trend === 'up' ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'
                    }`}
                  >
                    {item.percentage}
                  </span>
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
// --------------------v1-cla------------

// // import React, { useState } from 'react';
// import { 
//   ScatterChart, 
//   Scatter, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell
// } from 'recharts';
// import { Calendar, Download } from 'lucide-react';

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
//   { name: 'Bacteria', value: 234, color: '#8B5CF6' },
//   { name: 'Fungi', value: 34, color: '#EC4899' },
//   { name: 'Virus', value: 24, color: '#A78BFA' },
//   { name: 'Parasite', value: 5, color: '#F472B6' },
//   { name: 'Others', value: 3, color: '#DDD6FE' },
// ];

// // Legend data with percentages
// const legendData = [
//   { name: 'Bacteria', value: 234, color: '#8B5CF6', percentage: '+10.5%', trend: 'up' },
//   { name: 'Fungi', value: 34, color: '#EC4899', percentage: '+2.3%', trend: 'up' },
//   { name: 'Virus', value: 24, color: '#A78BFA', percentage: '-0.5%', trend: 'down' },
//   { name: 'Parasite', value: 5, color: '#F472B6', percentage: '+5.2%', trend: 'up' },
//   { name: 'Others', value: 3, color: '#DDD6FE', percentage: '+1.2%', trend: 'up' },
// ];

// const DashboardCharts = () => {
//   // Create scatter data for bubble chart
//   const createScatterData = (type: string) => {
//     return bubbleData.map(item => ({
//       x: item.day,
//       y: item[type as keyof typeof item] as number,
//       z: (item[type as keyof typeof item] as number) * 50, // Size multiplier for bubbles
//       month: item.month,
//       value: item[type as keyof typeof item] as number
//     }));
//   };

//   const scatterSeries = [
//     { data: createScatterData('bacteria'), color: '#8B5CF6', name: 'Bacteria' },
//     { data: createScatterData('fungi'), color: '#EC4899', name: 'Fungi' },
//     { data: createScatterData('virus'), color: '#A78BFA', name: 'Virus' },
//     { data: createScatterData('parasite'), color: '#F472B6', name: 'Parasite' },
//     { data: createScatterData('others'), color: '#DDD6FE', name: 'Others' },
//   ];

//   // const CustomTooltip = ({ active, payload }: any) => {
//   //   if (active && payload && payload.length) {
//   //     const data = payload[0].payload;
//   //     return (
//   //       <div className="bg-gray-800 text-white p-2 rounded shadow-lg text-xs">
//   //         <p>{`${data.month}: ${data.value}`}</p>
//   //       </div>
//   //     );
//   //   }
//   //   return null;
//   // };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
//       {/* Positivity Rates Chart */}
//       <div className="bg-white rounded-lg p-6">
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800">Positivity Rates</h3>
//             <div className="flex items-center mt-1">
//               <span className="text-green-600 text-sm font-medium">📈 +10.05%</span>
//               <span className="text-gray-500 text-sm ml-1">to last year</span>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-2">
//             <div className="flex items-center gap-1 text-xs text-gray-600">
//               <Calendar size={14} />
//               <span>10/02/2023</span>
//             </div>
//             <span className="text-xs text-gray-600">End Date</span>
            
//             <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-white">
//               <option>Monthly</option>
//               <option>Weekly</option>
//               <option>Daily</option>
//             </select>
            
//             <select className="text-xs bg-purple-600 text-white rounded px-2 py-1 border-none">
//               <option>All</option>
//             </select>
            
//             <button className="text-gray-600 hover:text-gray-800">
//               <Download size={16} />
//             </button>
//           </div>
//         </div>

//         {/* Legend */}
//         <div className="flex flex-wrap items-center gap-4 mb-4">
//           {scatterSeries.map((series, index) => (
//             <div key={index} className="flex items-center gap-1">
//               <div 
//                 className="w-2 h-2 rounded-full" 
//                 style={{ backgroundColor: series.color }}
//               ></div>
//               <span className="text-xs text-gray-600">{series.name}</span>
//             </div>
//           ))}
//         </div>

//         {/* Bubble Chart */}
//         <div className="h-64">
//           <ResponsiveContainer width="100%" height="100%">
//             <ScatterChart margin={{ top: 10, right: 10, bottom: 20, left: 10 }}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//               <XAxis 
//                 type="number" 
//                 dataKey="x" 
//                 domain={[0, 365]}
//                 tickFormatter={(value) => {
//                   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//                   return months[Math.floor(value / 30)] || '';
//                 }}
//                 axisLine={false}
//                 tickLine={false}
//                 tick={{ fill: '#9CA3AF', fontSize: 10 }}
//               />
//               <YAxis 
//                 type="number" 
//                 dataKey="y" 
//                 domain={[0, 60]}
//                 axisLine={false}
//                 tickLine={false}
//                 tick={{ fill: '#9CA3AF', fontSize: 10 }}
//               />
//               {scatterSeries.map((series, index) => (
//                 <Scatter
//                   key={index}
//                   data={series.data}
//                   fill={series.color}
//                   fillOpacity={0.8}
//                 />
//               ))}
//             </ScatterChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Positive Samples Detected Chart */}
//       <div className="bg-white rounded-lg p-6">
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800">Positive Samples detected</h3>
//           </div>
          
//           <div className="flex items-center gap-2">
//             <span className="text-xs text-gray-600">Start Date</span>
//             <span className="text-xs text-gray-600">End Date</span>
            
//             <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-white">
//               <option>Monthly</option>
//               <option>Weekly</option>
//               <option>Daily</option>
//             </select>
            
//             <select className="text-xs bg-purple-600 text-white rounded px-2 py-1 border-none">
//               <option>All</option>
//             </select>
            
//             <button className="text-gray-600 hover:text-gray-800">
//               <Download size={16} />
//             </button>
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           {/* Donut Chart */}
//           <div className="relative flex-shrink-0">
//             <div className="w-48 h-48">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={donutData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={50}
//                     outerRadius={80}
//                     paddingAngle={2}
//                     dataKey="value"
//                   >
//                     {donutData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
            
//             {/* Center content */}
//             <div className="absolute inset-0 flex items-center justify-center flex-col">
//               <span className="text-2xl font-bold text-gray-900">300</span>
//               <span className="text-xs text-gray-500">Total</span>
//               <span className="text-xs text-gray-400">Facilities: 30</span>
//             </div>
//           </div>

//           {/* Legend with stats */}
//           <div className="flex flex-col gap-2 ml-6">
//             {legendData.map((item, index) => (
//               <div key={index} className="flex items-center justify-between w-full">
//                 <div className="flex items-center gap-2">
//                   <div 
//                     className="w-2 h-2 rounded-full flex-shrink-0" 
//                     style={{ backgroundColor: item.color }}
//                   ></div>
//                   <span className="text-sm text-gray-700">{item.name}</span>
//                 </div>
//                 <div className="flex items-center gap-3 ml-auto">
//                   <span className="font-semibold text-gray-900 text-sm">{item.value}</span>
//                   <span 
//                     className={`text-xs px-1 py-0.5 rounded ${
//                       item.trend === 'up' ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'
//                     }`}
//                   >
//                     {item.percentage}
//                   </span>
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

// --------v1-ge-------
// import React from 'react';
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
// } from 'recharts';
// import { Calendar, Download } from 'lucide-react';

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

// // Donut chart data (unchanged)
// const donutData = [
//   { name: 'Bacteria', value: 234, color: '#8B5CF6' },
//   { name: 'Fungi', value: 34, color: '#EC4899' },
//   { name: 'Virus', value: 24, color: '#A78BFA' },
//   { name: 'Parasite', value: 5, color: '#F472B6' },
//   { name: 'Others', value: 3, color: '#DDD6FE' },
// ];

// // Legend data with percentages (unchanged)
// const legendData = [
//   { name: 'Bacteria', value: 234, color: '#8B5CF6', percentage: '+10.5%', trend: 'up' },
//   { name: 'Fungi', value: 34, color: '#EC4899', percentage: '+2.3%', trend: 'up' },
//   { name: 'Virus', value: 24, color: '#A78BFA', percentage: '-0.5%', trend: 'down' },
//   { name: 'Parasite', value: 5, color: '#F472B6', percentage: '+5.2%', trend: 'up' },
//   { name: 'Others', value: 3, color: '#DDD6FE', percentage: '+1.2%', trend: 'up' },
// ];

// // New component for custom scatter point with a label
// const CustomScatterPoint = (props) => {
//   const { cx, cy, payload } = props;
//   const value = payload.value;
//   const radius = payload.z / 100; // Calculate radius from the `z` value

//   return (
//     <g>
//       <circle cx={cx} cy={cy} r={radius} fill={props.fill} stroke="white" strokeWidth={1} />
//       <text 
//         x={cx} 
//         y={cy} 
//         dy={4} // Vertically center the text
//         textAnchor="middle" 
//         fill="white" // Ensure text is white for contrast
//         fontSize={10} // Adjust font size as needed
//         fontWeight="bold"
//       >
//         {value}
//       </text>
//     </g>
//   );
// };

// // Custom tooltip to show month and value on hover (re-enabled)
// const CustomTooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     const data = payload[0].payload;
//     return (
//       <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-md text-xs">
//         <p className="text-gray-900 font-semibold">{data.month}</p>
//         <p className="text-gray-600">{`${payload[0].name}: ${data.value}`}</p>
//       </div>
//     );
//   }
//   return null;
// };

// const DashboardCharts = () => {
//   // Create scatter data for bubble chart
//   const createScatterData = (type) => {
//     return bubbleData.map(item => ({
//       x: item.day,
//       y: item[type],
//       z: (item[type]) * 50, // Size multiplier for bubbles
//       month: item.month,
//       value: item[type]
//     }));
//   };

//   const scatterSeries = [
//     { data: createScatterData('bacteria'), color: '#8B5CF6', name: 'Bacteria' },
//     { data: createScatterData('fungi'), color: '#EC4899', name: 'Fungi' },
//     { data: createScatterData('virus'), color: '#A78BFA', name: 'Virus' },
//     { data: createScatterData('parasite'), color: '#F472B6', name: 'Parasite' },
//     { data: createScatterData('others'), color: '#DDD6FE', name: 'Others' },
//   ];

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
//       {/* Positivity Rates Chart */}
//       <div className="bg-white rounded-lg p-6">
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800">Positivity Rates</h3>
//             <div className="flex items-center mt-1">
//               <span className="text-green-600 text-sm font-medium">📈 +10.05%</span>
//               <span className="text-gray-500 text-sm ml-1">to last year</span>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-2">
//             <div className="flex items-center gap-1 text-xs text-gray-600">
//               <Calendar size={14} />
//               <span>10/02/2023</span>
//             </div>
//             <span className="text-xs text-gray-600">End Date</span>
            
//             <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-white">
//               <option>Monthly</option>
//               <option>Weekly</option>
//               <option>Daily</option>
//             </select>
            
//             <select className="text-xs bg-purple-600 text-white rounded px-2 py-1 border-none">
//               <option>All</option>
//             </select>
            
//             <button className="text-gray-600 hover:text-gray-800">
//               <Download size={16} />
//             </button>
//           </div>
//         </div>

//         {/* Legend */}
//         <div className="flex flex-wrap items-center gap-4 mb-4">
//           {scatterSeries.map((series, index) => (
//             <div key={index} className="flex items-center gap-1">
//               <div 
//                 className="w-2 h-2 rounded-full" 
//                 style={{ backgroundColor: series.color }}
//               ></div>
//               <span className="text-xs text-gray-600">{series.name}</span>
//             </div>
//           ))}
//         </div>

//         {/* Bubble Chart */}
//         <div className="h-64">
//           <ResponsiveContainer width="100%" height="100%">
//             <ScatterChart margin={{ top: 10, right: 10, bottom: 20, left: 10 }}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//               <XAxis 
//                 type="number" 
//                 dataKey="x" 
//                 domain={[0, 365]}
//                 tickFormatter={(value) => {
//                   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//                   return months[Math.floor(value / 30)] || '';
//                 }}
//                 axisLine={false}
//                 tickLine={false}
//                 tick={{ fill: '#9CA3AF', fontSize: 10 }}
//               />
//               <YAxis 
//                 type="number" 
//                 dataKey="y" 
//                 domain={[0, 60]}
//                 axisLine={false}
//                 tickLine={false}
//                 tick={{ fill: '#9CA3AF', fontSize: 10 }}
//               />
//               <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
//               {scatterSeries.map((series, index) => (
//                 <Scatter
//                   key={index}
//                   data={series.data}
//                   fill={series.color}
//                   fillOpacity={0.8}
//                   shape={CustomScatterPoint} // Use the new custom component here
//                 />
//               ))}
//             </ScatterChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Positive Samples Detected Chart (unchanged) */}
//       <div className="bg-white rounded-lg p-6">
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800">Positive Samples detected</h3>
//           </div>
          
//           <div className="flex items-center gap-2">
//             <span className="text-xs text-gray-600">Start Date</span>
//             <span className="text-xs text-gray-600">End Date</span>
            
//             <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-white">
//               <option>Monthly</option>
//               <option>Weekly</option>
//               <option>Daily</option>
//             </select>
            
//             <select className="text-xs bg-purple-600 text-white rounded px-2 py-1 border-none">
//               <option>All</option>
//             </select>
            
//             <button className="text-gray-600 hover:text-gray-800">
//               <Download size={16} />
//             </button>
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           {/* Donut Chart */}
//           <div className="relative flex-shrink-0">
//             <div className="w-48 h-48">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={donutData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={50}
//                     outerRadius={80}
//                     paddingAngle={2}
//                     dataKey="value"
//                   >
//                     {donutData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
            
//             {/* Center content */}
//             <div className="absolute inset-0 flex items-center justify-center flex-col">
//               <span className="text-2xl font-bold text-gray-900">300</span>
//               <span className="text-xs text-gray-500">Total</span>
//               <span className="text-xs text-gray-400">Facilities: 30</span>
//             </div>
//           </div>

//           {/* Legend with stats */}
//           <div className="flex flex-col gap-2 ml-6">
//             {legendData.map((item, index) => (
//               <div key={index} className="flex items-center justify-between w-full">
//                 <div className="flex items-center gap-2">
//                   <div 
//                     className="w-2 h-2 rounded-full flex-shrink-0" 
//                     style={{ backgroundColor: item.color }}
//                   ></div>
//                   <span className="text-sm text-gray-700">{item.name}</span>
//                 </div>
//                 <div className="flex items-center gap-3 ml-auto">
//                   <span className="font-semibold text-gray-900 text-sm">{item.value}</span>
//                   <span 
//                     className={`text-xs px-1 py-0.5 rounded ${
//                       item.trend === 'up' ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'
//                     }`}
//                   >
//                     {item.percentage}
//                   </span>
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



// // --------------------v2-ge------------

// import React from 'react';
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
// } from 'recharts';
// import { Calendar, Download } from 'lucide-react';

// // --- UPDATED bubbleData to match the visual design more closely ---
// // Note: 'day' values are chosen to approximate center of each month for X-axis positioning.
// // 'bacteria', 'fungi', 'virus', 'parasite', 'others' now represent the values shown on bubbles.
// const bubbleData = [
//   // Jan
//   { month: 'Jan', day: 15, bacteria: 0, fungi: 0, virus: 0, parasite: 0, others: 0 },
//   // Feb
//   { month: 'Feb', day: 45, bacteria: 5000, fungi: 7000, virus: 3000, parasite: 300, others: 50 },
//   // Mar
//   { month: 'Mar', day: 75, bacteria: 5000, fungi: 300, virus: 100, parasite: 500, others: 0 },
//   // Apr
//   { month: 'Apr', day: 105, bacteria: 400, fungi: 5000, virus: 400, parasite: 0, others: 0 },
//   // May
//   { month: 'May', day: 135, bacteria: 5000, fungi: 400, virus: 558, parasite: 0, others: 0 },
//   // Jun
//   { month: 'Jun', day: 165, bacteria: 5000, fungi: 400, virus: 0, parasite: 0, others: 0 },
//   // Jul
//   { month: 'Jul', day: 195, bacteria: 7000, fungi: 5000, virus: 440, parasite: 430, others: 0 },
//   // Aug
//   { month: 'Aug', day: 225, bacteria: 5000, fungi: 7000, virus: 0, parasite: 0, others: 0 },
//   // Sep
//   { month: 'Sep', day: 255, bacteria: 100000, fungi: 5000, virus: 474, parasite: 535, others: 400 },
//   // Oct
//   { month: 'Oct', day: 285, bacteria: 5000, fungi: 0, virus: 0, parasite: 0, others: 0 },
//   // Nov
//   { month: 'Nov', day: 315, bacteria: 5000, fungi: 1000, virus: 0, parasite: 0, others: 0 },
//   // Dec
//   { month: 'Dec', day: 345, bacteria: 5000, fungi: 5000, virus: 0, parasite: 0, others: 0 },
// ];

// // Donut chart data (unchanged)
// const donutData = [
//   { name: 'Bacteria', value: 234, color: '#8B5CF6' },
//   { name: 'Fungi', value: 34, color: '#EC4899' },
//   { name: 'Virus', value: 24, color: '#A78BFA' },
//   { name: 'Parasite', value: 5, color: '#F472B6' },
//   { name: 'Others', value: 3, color: '#DDD6FE' },
// ];

// // Legend data with percentages (unchanged)
// const legendData = [
//   { name: 'Bacteria', value: 234, color: '#8B5CF6', percentage: '+10.5%', trend: 'up' },
//   { name: 'Fungi', value: 34, color: '#EC4899', percentage: '+2.3%', trend: 'up' },
//   { name: 'Virus', value: 24, color: '#A78BFA', percentage: '-0.5%', trend: 'down' },
//   { name: 'Parasite', value: 5, color: '#F472B6', percentage: '+5.2%', trend: 'up' },
//   { name: 'Others', value: 3, color: '#DDD6FE', percentage: '+1.2%', trend: 'up' },
// ];

// // Custom component for scatter point with a label
// const CustomScatterPoint = (props) => {
//   const { cx, cy, payload, fill } = props;
//   const value = payload.value;
//   // Scale the radius to make larger bubbles more prominent, but prevent excessively large ones
//   // Adjusted scaling: use Math.log for a less linear, more gradual size increase
//   const radius = Math.max(8, Math.sqrt(value) / 3); // Minimum radius of 8, scale by square root

//   if (value === 0) return null; // Don't render bubbles for zero values

//   return (
//     <g>
//       <circle cx={cx} cy={cy} r={radius} fill={fill} stroke="white" strokeWidth={0.5} opacity={0.8} />
//       <text 
//         x={cx} 
//         y={cy} 
//         dy={4} // Vertically center the text
//         textAnchor="middle" 
//         fill="white" // Ensure text is white for contrast
//         fontSize={Math.max(8, radius / 2.5)} // Dynamically adjust font size based on bubble size
//         fontWeight="bold"
//       >
//         {value >= 1000 ? `${value / 1000}k` : value} {/* Show 'k' for thousands */}
//       </text>
//     </g>
//   );
// };

// // Custom tooltip to show month and value on hover (re-enabled)
// const CustomTooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     const data = payload[0].payload;
//     if (data.value === 0) return null; // Don't show tooltip for empty points
    
//     return (
//       <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-md text-xs">
//         <p className="text-gray-900 font-semibold">{data.month}</p>
//         <p className="text-gray-600">{`${payload[0].name}: ${data.value}`}</p>
//         {/* Added specific tooltip from design if 'E.Coli' is present or similar */}
//         {data.date && (
//             <div className="mt-1 p-2 bg-gray-50 rounded">
//                 <p className="text-gray-700 font-bold">{data.date}</p>
//                 <div className="flex items-center text-green-600">
//                     <span>E.Coli</span> <span className="ml-1">📈 +47%</span>
//                 </div>
//                 <p className="text-gray-500">5000 Samples</p>
//                 <p className="text-gray-500">Facilities: 30</p>
//             </div>
//         )}
//       </div>
//     );
//   }
//   return null;
// };

// const DashboardCharts = () => {
//   // Define static Y-axis positions for each category to match the visual layout
//   // Adjust these values based on how you want them spaced vertically
//   const categoryYPositions = {
//     bacteria: 50, // Top
//     fungi: 40,
//     virus: 30,
//     parasite: 20,
//     others: 10, // Bottom
//   };

//   const createScatterData = (type) => {
//     return bubbleData
//       .filter(item => item[type] > 0) // Only include points with a value greater than 0
//       .map(item => ({
//         x: item.day,
//         y: categoryYPositions[type], // Use fixed Y-position for each category
//         z: item[type], // 'z' now directly represents the value for scaling
//         month: item.month,
//         value: item[type],
//         date: item.date || null, // For specific tooltip date
//       }));
//   };

//   const scatterSeries = [
//     { data: createScatterData('bacteria'), color: '#8B5CF6', name: 'Bacteria' },
//     { data: createScatterData('fungi'), color: '#EC4899', name: 'Fungi' },
//     { data: createScatterData('virus'), color: '#A78BFA', name: 'Virus' },
//     { data: createScatterData('parasite'), color: '#F472B6', name: 'Parasite' },
//     { data: createScatterData('others'), color: '#DDD6FE', name: 'Others' },
//   ];

//   // Custom tick values for XAxis to ensure months are centered
//   const monthTicks = bubbleData.map(item => item.day);
//   const monthLabels = bubbleData.map(item => item.month);

//   // Y-axis tick formatter to show category names
//   const formatYAxisTick = (value) => {
//     const categories = Object.keys(categoryYPositions);
//     const categoryName = categories.find(key => categoryYPositions[key] === value);
//     // Capitalize the first letter for display
//     return categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : '';
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
//       {/* Positivity Rates Chart */}
//       <div className="bg-white rounded-lg p-6">
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800">Positivity Rates</h3>
//             <div className="flex items-center mt-1">
//               <span className="text-green-600 text-sm font-medium">📈 +10.05%</span>
//               <span className="text-gray-500 text-sm ml-1">to last year</span>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-2">
//             <div className="flex items-center gap-1 text-xs text-gray-600">
//               <Calendar size={14} />
//               <span>10/02/2023</span>
//             </div>
//             <span className="text-xs text-gray-600">End Date</span>
            
//             <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-white">
//               <option>Monthly</option>
//               <option>Weekly</option>
//               <option>Daily</option>
//             </select>
            
//             <select className="text-xs bg-purple-600 text-white rounded px-2 py-1 border-none">
//               <option>All</option>
//             </select>
            
//             <button className="text-gray-600 hover:text-gray-800">
//               <Download size={16} />
//             </button>
//           </div>
//         </div>

//         {/* Legend - Changed to align with Y-axis categories visually */}
//         <div className="flex flex-wrap items-center gap-4 mb-4">
//           {scatterSeries.map((series, index) => (
//             <div key={index} className="flex items-center gap-1">
//               <div 
//                 className="w-2 h-2 rounded-full" 
//                 style={{ backgroundColor: series.color }}
//               ></div>
//               <span className="text-xs text-gray-600">{series.name}</span>
//             </div>
//           ))}
//         </div>

//         {/* Bubble Chart */}
//         <div className="h-64">
//           <ResponsiveContainer width="100%" height="100%">
//             <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 30 }}> {/* Adjusted margins */}
//               <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} /> {/* Removed vertical grid lines */}
//               <XAxis 
//                 type="number" 
//                 dataKey="x" 
//                 domain={[0, 365]} // Full year
//                 ticks={monthTicks} // Use custom ticks for precise month positioning
//                 tickFormatter={(value) => {
//                   const monthIndex = monthTicks.indexOf(value);
//                   return monthLabels[monthIndex] || '';
//                 }}
//                 axisLine={false}
//                 tickLine={false}
//                 tick={{ fill: '#9CA3AF', fontSize: 10 }}
//                 interval={0} // Ensure all ticks are shown
//               />
//               <YAxis 
//                 type="number" 
//                 dataKey="y" 
//                 domain={[0, 60]} // Adjusted domain to fit Y-positions
//                 ticks={Object.values(categoryYPositions)} // Use defined Y-positions as ticks
//                 tickFormatter={formatYAxisTick} // Format Y-axis with category names
//                 axisLine={false}
//                 tickLine={false}
//                 tick={{ fill: '#9CA3AF', fontSize: 10 }}
//                 orientation="left" // Keep Y-axis on the left
//                 width={80} // Give more space for category labels
//               />
//               <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
//               {scatterSeries.map((series, index) => (
//                 <Scatter
//                   key={index}
//                   data={series.data}
//                   fill={series.color}
//                   fillOpacity={0.8}
//                   shape={CustomScatterPoint}
//                   name={series.name} // Pass name for tooltip
//                 />
//               ))}
//             </ScatterChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Positive Samples Detected Chart (unchanged) */}
//       <div className="bg-white rounded-lg p-6">
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800">Positive Samples detected</h3>
//           </div>
          
//           <div className="flex items-center gap-2">
//             <span className="text-xs text-gray-600">Start Date</span>
//             <span className="text-xs text-gray-600">End Date</span>
            
//             <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-white">
//               <option>Monthly</option>
//               <option>Weekly</option>
//               <option>Daily</option>
//             </select>
            
//             <select className="text-xs bg-purple-600 text-white rounded px-2 py-1 border-none">
//               <option>All</option>
//             </select>
            
//             <button className="text-gray-600 hover:text-gray-800">
//               <Download size={16} />
//             </button>
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           {/* Donut Chart */}
//           <div className="relative flex-shrink-0">
//             <div className="w-48 h-48">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={donutData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={50}
//                     outerRadius={80}
//                     paddingAngle={2}
//                     dataKey="value"
//                   >
//                     {donutData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
            
//             {/* Center content */}
//             <div className="absolute inset-0 flex items-center justify-center flex-col">
//               <span className="text-2xl font-bold text-gray-900">300</span>
//               <span className="text-xs text-gray-500">Total</span>
//               <span className="text-xs text-gray-400">Facilities: 30</span>
//             </div>
//           </div>

//           {/* Legend with stats */}
//           <div className="flex flex-col gap-2 ml-6">
//             {legendData.map((item, index) => (
//               <div key={index} className="flex items-center justify-between w-full">
//                 <div className="flex items-center gap-2">
//                   <div 
//                     className="w-2 h-2 rounded-full flex-shrink-0" 
//                     style={{ backgroundColor: item.color }}
//                   ></div>
//                   <span className="text-sm text-gray-700">{item.name}</span>
//                 </div>
//                 <div className="flex items-center gap-3 ml-auto">
//                   <span className="font-semibold text-gray-900 text-sm">{item.value}</span>
//                   <span 
//                     className={`text-xs px-1 py-0.5 rounded ${
//                       item.trend === 'up' ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'
//                     }`}
//                   >
//                     {item.percentage}
//                   </span>
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


// // --------------------v3-ge-second-chart------------


import React from 'react';
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
} from 'recharts';
import { Calendar, Download, TrendingUp, TrendingDown } from 'lucide-react'; // Import TrendingUp/Down icons

// --- Positivity Rates Chart Data & Components (UNCHANGED from previous update) ---
// Sample data for the bubble chart
const bubbleData = [
  // Jan
  { month: 'Jan', day: 15, bacteria: 0, fungi: 0, virus: 0, parasite: 0, others: 0 },
  // Feb
  { month: 'Feb', day: 45, bacteria: 5000, fungi: 7000, virus: 3000, parasite: 300, others: 50 },
  // Mar
  { month: 'Mar', day: 75, bacteria: 5000, fungi: 300, virus: 100, parasite: 500, others: 0 },
  // Apr
  { month: 'Apr', day: 105, bacteria: 400, fungi: 5000, virus: 400, parasite: 0, others: 0 },
  // May
  { month: 'May', day: 135, bacteria: 5000, fungi: 400, virus: 558, parasite: 0, others: 0 },
  // Jun
  { month: 'Jun', day: 165, bacteria: 5000, fungi: 400, virus: 0, parasite: 0, others: 0 },
  // Jul
  { month: 'Jul', day: 195, bacteria: 7000, fungi: 5000, virus: 440, parasite: 430, others: 0 },
  // Aug
  { month: 'Aug', day: 225, bacteria: 5000, fungi: 7000, virus: 0, parasite: 0, others: 0 },
  // Sep
  { month: 'Sep', day: 255, bacteria: 100000, fungi: 5000, virus: 474, parasite: 535, others: 400 },
  // Oct
  { month: 'Oct', day: 285, bacteria: 5000, fungi: 0, virus: 0, parasite: 0, others: 0 },
  // Nov
  { month: 'Nov', day: 315, bacteria: 5000, fungi: 1000, virus: 0, parasite: 0, others: 0 },
  // Dec
  { month: 'Dec', day: 345, bacteria: 5000, fungi: 5000, virus: 0, parasite: 0, others: 0 },
];

const CustomScatterPoint = (props) => {
  const { cx, cy, payload, fill } = props;
  const value = payload.value;
  const radius = Math.max(8, Math.sqrt(value) / 3); 

  if (value === 0) return null; 

  return (
    <g>
      <circle cx={cx} cy={cy} r={radius} fill={fill} stroke="white" strokeWidth={0.5} opacity={0.8} />
      <text 
        x={cx} 
        y={cy} 
        dy={4} 
        textAnchor="middle" 
        fill="white" 
        fontSize={Math.max(8, radius / 2.5)} 
        fontWeight="bold"
      >
        {value >= 1000 ? `${value / 1000}k` : value} 
      </text>
    </g>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    if (data.value === 0) return null; 
    
    return (
      <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-md text-xs">
        <p className="text-gray-900 font-semibold">{data.month}</p>
        <p className="text-gray-600">{`${payload[0].name}: ${data.value}`}</p>
        {data.date && (
            <div className="mt-1 p-2 bg-gray-50 rounded">
                <p className="text-gray-700 font-bold">{data.date}</p>
                <div className="flex items-center text-green-600">
                    <span>E.Coli</span> <span className="ml-1">📈 +47%</span>
                </div>
                <p className="text-gray-500">5000 Samples</p>
                <p className="text-gray-500">Facilities: 30</p>
            </div>
        )}
      </div>
    );
  }
  return null;
};

const categoryYPositions = {
  bacteria: 50, 
  fungi: 40,
  virus: 30,
  parasite: 20,
  others: 10, 
};

const formatYAxisTick = (value) => {
  const categories = Object.keys(categoryYPositions);
  const categoryName = categories.find(key => categoryYPositions[key] === value);
  return categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : '';
};
// --- END Positivity Rates Chart Data & Components (UNCHANGED) ---


// --- UPDATED Donut chart data to match the image ---
const donutData = [
    { name: 'Bacteria', value: 24, color: '#A78BFA' }, // Light purple in design
    { name: 'Fungi', value: 234, color: '#8B5CF6' },   // Main purple in design
    { name: 'Virus', value: 2, color: '#EC4899' },     // Pink in design
    { name: 'Parasite', value: 34, color: '#F472B6' },  // Lighter pink in design
    { name: 'Others', value: 5, color: '#DDD6FE' },    // Very light purple in design
];

// --- UPDATED Legend data with percentages and trends to match the image ---
const legendData = [
    { name: 'Bacteria', value: 24, color: '#A78BFA', percentage: '+05%', trend: 'up' },
    { name: 'Fungi', value: 234, color: '#8B5CF6', percentage: '+35%', trend: 'up' },
    { name: 'Virus', value: 2, color: '#EC4899', percentage: '+0.5%', trend: 'up' }, // Note: Design shows +0.5% here
    { name: 'Parasite', value: 34, color: '#F472B6', percentage: '+20%', trend: 'up' },
    { name: 'Others', value: 5, color: '#DDD6FE', percentage: '+0.2%', trend: 'up' },
];

const DashboardCharts = () => {
  // Create scatter data for bubble chart (UNCHANGED)
  const createScatterData = (type) => {
    return bubbleData
      .filter(item => item[type] > 0)
      .map(item => ({
        x: item.day,
        y: categoryYPositions[type],
        z: item[type], 
        month: item.month,
        value: item[type],
        date: item.date || null,
      }));
  };

  const scatterSeries = [
    { data: createScatterData('bacteria'), color: '#8B5CF6', name: 'Bacteria' },
    { data: createScatterData('fungi'), color: '#EC4899', name: 'Fungi' },
    { data: createScatterData('virus'), color: '#A78BFA', name: 'Virus' },
    { data: createScatterData('parasite'), color: '#F472B6', name: 'Parasite' },
    { data: createScatterData('others'), color: '#DDD6FE', name: 'Others' },
  ];

  const monthTicks = bubbleData.map(item => item.day);
  const monthLabels = bubbleData.map(item => item.month);


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Positivity Rates Chart (UNCHANGED) */}
      <div className="bg-white rounded-2xl shadow-2xl p-6">
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
            <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 30 }}> 
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} /> 
              <XAxis 
                type="number" 
                dataKey="x" 
                domain={[0, 365]} 
                ticks={monthTicks} 
                tickFormatter={(value) => {
                  const monthIndex = monthTicks.indexOf(value);
                  return monthLabels[monthIndex] || '';
                }}
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 10 }}
                interval={0} 
              />
              <YAxis 
                type="number" 
                dataKey="y" 
                domain={[0, 60]} 
                ticks={Object.values(categoryYPositions)} 
                tickFormatter={formatYAxisTick} 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 10 }}
                orientation="left" 
                width={80} 
              />
              <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
              {scatterSeries.map((series, index) => (
                <Scatter
                  key={index}
                  data={series.data}
                  fill={series.color}
                  fillOpacity={0.8}
                  shape={CustomScatterPoint}
                  name={series.name} 
                />
              ))}
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Positive Samples Detected Chart */}
      {/* Adjusted padding for width and overall container setup */}
      <div className="bg-white rounded-2xl p-6 flex flex-col shadow-2xl"> {/* Added flex-col */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Positive Samples detected</h3>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-gray-600" /> {/* Added Calendar icon */}
            <span className="text-xs text-gray-600">Start Date</span>
            <Calendar size={14} className="text-gray-600" /> {/* Added Calendar icon */}
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

        {/* Combined Donut Chart and Legend */}
        <div className="flex items-center justify-between flex-grow mt-4"> {/* flex-grow to take available space, mt-4 for spacing */}
          {/* Donut Chart */}
          <div className="relative flex-shrink-0 w-48 h-48"> {/* Fixed size for donut container */}
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60} // Adjusted inner radius for a thinner donut
                  outerRadius={90} // Adjusted outer radius for a slightly larger donut
                  paddingAngle={3} // Added more padding for distinct segments
                  dataKey="value"
                  stroke="none" // Remove default stroke
                  cornerRadius={5} // Rounded corners for segments
                >
                  {donutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-xl font-bold text-gray-900 leading-tight">Total: 300</span> {/* Adjusted font size and line height */}
              <span className="text-sm text-gray-500 leading-tight">Facilities: 30</span> {/* Adjusted font size and line height */}
            </div>
          </div>

          {/* Legend with stats */}
          <div className="flex flex-col gap-2 ml-8 flex-grow"> {/* Increased ml and added flex-grow */}
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
                  {/* Trend icon and percentage */}
                  <div 
                    className={`flex items-center text-xs px-1 py-0.5 rounded ${
                      item.trend === 'up' ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'
                    }`}
                  >
                    {item.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
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
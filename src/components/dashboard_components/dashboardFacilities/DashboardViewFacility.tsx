
// import React, { useState, FC } from "react";
// import {
//   Calendar,
//   ChevronDown,
//   Download,
//   MoreHorizontal,
//   LayoutGrid,
//   Clock,
//   CheckCircle,
//   Search,
//   LucideIcon, // Import LucideIcon for component typing
// } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
// } from "recharts";

// // --- TypeScript Interface Definitions ---

// interface ChartDataItem {
//   name: string;
//   samples: number;
//   incidents: number;
// }

// interface TagLogItem {
//   id: string;
//   totalTags: string;
//   tagger: string;
//   taggedAreas: string;
//   samples: string;
//   incidents: string;
//   reviewer: string;
//   date: string;
//   status: "Pending" | "Declined" | "Approved" | string;
// }

// interface SparklineProps {
//   points: number[];
//   color: string;
// }

// interface StatCardProps {
//   title: string;
//   value: number;
//   change: string;
//   icon: LucideIcon; // Type for Lucide component
//   chartColor: string;
//   chartDataPoints: number[];
// }

// interface TagStatusCardProps {
//   title: string;
//   count: number;
//   change: string;
//   icon: LucideIcon; // Type for Lucide component
//   colorClass: string;
//   sparkPoints: number[];
// }

// // --- Data Declarations with Types ---

// const chartData: ChartDataItem[] = [
//   { name: "Jan", samples: 25, incidents: 10 },
//   { name: "Feb", samples: 45, incidents: 25 },
//   { name: "Mar", samples: 20, incidents: 40 },
//   { name: "Apr", samples: 40, incidents: 20 },
//   { name: "May", samples: 55, incidents: 15 },
//   { name: "Jun", samples: 70, incidents: 30 },
//   { name: "Jul", samples: 60, incidents: 50 },
//   { name: "Aug", samples: 75, incidents: 65 },
//   { name: "Sep", samples: 65, incidents: 70 },
//   { name: "Oct", samples: 50, incidents: 35 },
//   { name: "Nov", samples: 40, incidents: 20 },
//   { name: "Dec", samples: 60, incidents: 15 },
// ];

// const tagLogData: TagLogItem[] = [
//   {
//     id: "1",
//     totalTags: "74",
//     tagger: "Arab Shawn",
//     taggedAreas: "08",
//     samples: "67",
//     incidents: "07",
//     reviewer: "Sarah Swatti",
//     date: "23/3/2025",
//     status: "Pending",
//   },
//   {
//     id: "2",
//     totalTags: "74",
//     tagger: "Runyi Bells",
//     taggedAreas: "08",
//     samples: "67",
//     incidents: "07",
//     reviewer: "Kardi Blusela",
//     date: "23/3/2025",
//     status: "Declined",
//   },
//   {
//     id: "3",
//     totalTags: "74",
//     tagger: "Cynthia Han",
//     taggedAreas: "08",
//     samples: "67",
//     incidents: "07",
//     reviewer: "Pebble Vanis",
//     date: "23/3/2025",
//     status: "Approved",
//   },
// ];

// // --- Components with Types ---

// const Sparkline: FC<SparklineProps> = ({ points, color }) => {
//   const data = points.map((v, i) => ({ i, v }));
//   return (
//     <div className="w-16 h-8">
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={data}>
//           <Line
//             dataKey="v"
//             stroke={color}
//             strokeWidth={2}
//             dot={false}
//             type="monotone"
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// const StatCard: FC<StatCardProps> = ({ title, value, change, icon: Icon, chartColor, chartDataPoints }) => {
//   return (
//     <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
//       <div className="flex items-center justify-between mb-3">
//         <div className="flex items-center gap-2">
//           <div className="p-2 rounded-lg bg-gray-100">
//             <Icon size={18} className="text-gray-700" />
//           </div>
//           <div className="text-sm font-medium text-gray-700">{title}</div>
//         </div>
//         <div className="text-xs text-green-600 font-semibold">
//           {change}
//         </div>
//       </div>
//       <div className="flex items-end justify-between">
//         <div className="text-3xl font-bold text-gray-900">{value}</div>
//         <Sparkline points={chartDataPoints} color={chartColor} />
//       </div>
//     </div>
//   );
// };

// const TagStatusCard: FC<TagStatusCardProps> = ({ title, count, change, icon: Icon, colorClass, sparkPoints }) => {
//   const isPositive = change.startsWith("+");
//   return (
//     <div className={`${colorClass} rounded-xl p-4 text-white shadow-lg`}>
//       <div className="flex items-center justify-between mb-3">
//         <div className="flex items-center gap-3">
//           <div className="p-2 bg-white/20 rounded-lg">
//             <Icon size={18} />
//           </div>
//           <div className="text-sm font-medium">{title}</div>
//         </div>
//         <div className="flex items-center gap-2">
//           <div className={`text-sm font-semibold ${isPositive ? 'text-white' : 'text-red-200'}`}>
//             {change}
//           </div>
//           <Sparkline 
//             points={sparkPoints} 
//             color={isPositive ? "#ffffff" : "#ff6b6b"} 
//           />
//         </div>
//       </div>
//       <div className="text-2xl font-bold">{count}</div>
//     </div>
//   );
// };

// const TagStatusPanel: FC = () => {
//   return (
//     <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg h-full">
//       <div className="flex items-center justify-between mb-5">
//         <h3 className="text-base font-semibold text-gray-900">Tag Status</h3>
//         <div className="flex items-center gap-2">
//           <button className="text-xs text-gray-600 flex items-center gap-1">
//             Start Date <ChevronDown size={12} />
//           </button>
//           <button className="text-xs text-gray-600 flex items-center gap-1">
//             End Date <ChevronDown size={12} />
//           </button>
//           <button className="p-1.5 rounded hover:bg-gray-100">
//             <Download size={14} className="text-gray-600" />
//           </button>
//         </div>
//       </div>

//       <div className="space-y-3">
//         <TagStatusCard
//           title="Completed Tags"
//           count={102}
//           change="+83"
//           icon={CheckCircle}
//           colorClass="bg-gradient-to-br from-purple-600 to-purple-700"
//           sparkPoints={[10, 30, 20, 50, 40]}
//         />
//         <TagStatusCard
//           title="Active Tags"
//           count={3}
//           change="+02"
//           icon={LayoutGrid}
//           colorClass="bg-gradient-to-br from-green-500 to-green-600"
//           sparkPoints={[5, 15, 10, 25, 20]}
//         />
//         <TagStatusCard
//           title="Pending Tags"
//           count={0}
//           change="+00"
//           icon={Clock}
//           colorClass="bg-gradient-to-br from-purple-500 to-purple-600"
//           sparkPoints={[3, 8, 5, 12, 8]}
//         />
//       </div>
//     </div>
//   );
// };

// const TagLog: FC = () => {
//   // Apply type to useState
//   const [searchTerm, setSearchTerm] = useState<string>("");

//   const filtered: TagLogItem[] = tagLogData.filter(
//     (t: TagLogItem) => // Add type to filter argument
//       t.tagger.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       t.reviewer.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const getStatusClass = (status: TagLogItem['status']): string => { // Add type to status argument and return value
//     switch (status) {
//       case "Pending":
//         return "text-yellow-700 bg-yellow-100";
//       case "Declined":
//         return "text-red-700 bg-red-100";
//       case "Approved":
//         return "text-green-700 bg-green-100";
//       default:
//         return "text-gray-700 bg-gray-100";
//     }
//   };

//   return (
//     <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
//       <div className="p-5 border-b border-gray-200">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-base font-semibold text-gray-900">Tag Log</h2>
//           <div className="flex items-center gap-2">
//             <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700">
//               <Calendar size={14} />
//               Start Date <ChevronDown size={12} />
//             </button>
//             <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700">
//               <Calendar size={14} />
//               End Date <ChevronDown size={12} />
//             </button>
//             <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700">
//               Monthly <ChevronDown size={12} />
//             </button>
//             <button className="px-3 py-1.5 bg-purple-600 text-white rounded-lg text-sm font-medium">
//               All
//             </button>
//           </div>
//         </div>

//         <div className="flex items-center justify-between gap-4">
//           <div className="relative flex-1 max-w-md">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
//             <input
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search by Facility, Status, Locat..."
//               className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           <div className="flex items-center gap-2">
//             <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
//               <Download size={16} className="text-gray-600" />
//             </button>
//             <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
//               <MoreHorizontal size={16} className="text-gray-600" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="overflow-auto">
//         <table className="w-full min-w-[900px]">
//           <thead className="bg-purple-600">
//             <tr>
//               <th className="px-4 py-3 text-left">
//                 <input type="checkbox" className="rounded" />
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-white">Total Tags</th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-white">Tagger</th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-white">Tagged Areas</th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-white">Samples</th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-white">Incidents</th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-white">Reviewer</th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-white">Date</th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-white">Status</th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-white">Action</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-200">
//             {filtered.map((row: TagLogItem) => ( // Add type to map argument
//               <tr key={row.id} className="hover:bg-gray-50">
//                 <td className="px-4 py-3">
//                   <input type="checkbox" className="rounded" />
//                 </td>
//                 <td className="px-4 py-3 text-sm text-gray-900">{row.totalTags}</td>
//                 <td className="px-4 py-3 text-sm text-gray-900">{row.tagger}</td>
//                 <td className="px-4 py-3 text-sm text-gray-700">{row.taggedAreas}</td>
//                 <td className="px-4 py-3 text-sm text-gray-700">{row.samples}</td>
//                 <td className="px-4 py-3 text-sm text-gray-700">{row.incidents}</td>
//                 <td className="px-4 py-3 text-sm text-gray-700">{row.reviewer}</td>
//                 <td className="px-4 py-3 text-sm text-gray-700">{row.date}</td>
//                 <td className="px-4 py-3">
//                   <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(row.status)}`}>
//                     {row.status}
//                   </span>
//                 </td>
//                 <td className="px-4 py-3">
//                   <button className="p-1 rounded hover:bg-gray-100">
//                     <MoreHorizontal size={16} className="text-gray-600" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="px-5 py-3 border-t border-gray-200 flex justify-end">
//         <button className="text-purple-600 text-sm font-medium hover:underline">See All</button>
//       </div>
//     </div>
//   );
// };

// const DashboardViewFacility: FC = () => {
//   return (
//     <div className="min-h-screen relative w-full bg-gray-100">
//       {/* Background with blur effect */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')",
//           filter: "blur(3px) brightness(0.7)",
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto p-4 md:p-6 space-y-5">
//         {/* Header */}
//         <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
//           <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center overflow-hidden border-2 border-white/30">
//             <div className="w-full h-full bg-cover bg-center" style={{
//               backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&q=80')"
//             }} />
//           </div>
//           <div className="text-white">
//             <div className="text-lg font-bold">Comodore Facility</div>
//             <div className="text-xs opacity-90">Efab, Abuja, Nigeria.</div>
//           </div>
//         </div>

//         {/* Overview Section */}
//         <div className="flex items-center justify-between">
//           <h2 className="text-white text-base font-semibold">Overview</h2>
//           <div className="flex items-center gap-2">
//             <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs">
//               <Calendar size={12} />
//               Start Date <ChevronDown size={10} />
//             </button>
//             <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs">
//               <Calendar size={12} />
//               End Date <ChevronDown size={10} />
//             </button>
//             <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs">
//               Monthly <ChevronDown size={10} />
//             </button>
//           </div>
//         </div>

//         {/* Top Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <StatCard
//             title="Total Tags"
//             value={210}
//             change="+84"
//             icon={LayoutGrid}
//             chartColor="#10b981"
//             chartDataPoints={[20, 35, 25, 45, 55]}
//           />
//           <StatCard
//             title="Total Samples"
//             value={105}
//             change="+84"
//             icon={Clock}
//             chartColor="#ef4444"
//             chartDataPoints={[40, 25, 55, 35, 65]}
//           />
//           <StatCard
//             title="Total Incidents"
//             value={105}
//             change="+84"
//             icon={CheckCircle}
//             chartColor="#10b981"
//             chartDataPoints={[30, 45, 35, 60, 50]}
//           />
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
//           {/* Left - Tag Status */}
//           <div className="lg:col-span-2">
//             <TagStatusPanel />
//           </div>

//           {/* Right - Chart */}
//           <div className="lg:col-span-3">
//             <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-base font-semibold text-gray-900">Tag Type</h3>
//                 <div className="flex items-center gap-2">
//                   <button className="p-1.5 rounded hover:bg-gray-100">
//                     <Download size={16} className="text-gray-600" />
//                   </button>
//                   <button className="p-1.5 rounded hover:bg-gray-100">
//                     <MoreHorizontal size={16} className="text-gray-600" />
//                   </button>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between mb-4">
//                 <div className="text-green-600 text-xs font-semibold">
//                   +10.05% to last year
//                 </div>
//                 <div className="flex items-center gap-2 text-xs text-gray-600">
//                   <button className="flex items-center gap-1">
//                     <Calendar size={12} />
//                     10/02/2023 <ChevronDown size={10} />
//                   </button>
//                   <button className="flex items-center gap-1">
//                     End Date <ChevronDown size={10} />
//                   </button>
//                   <button className="flex items-center gap-1">
//                     Monthly <ChevronDown size={10} />
//                   </button>
//                   <button className="px-2 py-1 bg-gray-100 rounded flex items-center gap-1">
//                     All <ChevronDown size={10} />
//                   </button>
//                 </div>
//               </div>

//               <div className="flex items-center gap-6 mb-3">
//                 <div className="flex items-center gap-2 text-sm">
//                   <div className="w-3 h-3 bg-yellow-400 rounded-sm" />
//                   <span className="text-gray-700">Pending</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <div className="w-3 h-3 bg-green-500 rounded-sm" />
//                   <span className="text-gray-700">Active</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <div className="w-3 h-3 bg-purple-500 rounded-sm" />
//                   <span className="text-gray-700">Completed</span>
//                 </div>
//               </div>

//               <div className="h-64 w-full">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={chartData}>
//                     <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
//                     <XAxis
//                       dataKey="name"
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fill: "#6b7280", fontSize: 11 }}
//                     />
//                     <YAxis
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fill: "#6b7280", fontSize: 11 }}
//                       domain={[0, 80]}
//                     />
//                     <Bar dataKey="samples" fill="#eab308" radius={[4, 4, 0, 0]} />
//                     <Bar dataKey="incidents" fill="#22c55e" radius={[4, 4, 0, 0]} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tag Log Table */}
//         <TagLog />
//       </div>
//     </div>
//   );
// };

// export default DashboardViewFacility;







import React, { useState } from "react";
import {
  Calendar,
  ChevronDown,
  Download,
  MoreHorizontal,
  LayoutGrid,
  Clock,
  CheckCircle,
  Search,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const chartData = [
  { name: "Jan", samples: 25, incidents: 10 },
  { name: "Feb", samples: 45, incidents: 25 },
  { name: "Mar", samples: 20, incidents: 40 },
  { name: "Apr", samples: 40, incidents: 20 },
  { name: "May", samples: 55, incidents: 15 },
  { name: "Jun", samples: 70, incidents: 30 },
  { name: "Jul", samples: 60, incidents: 50 },
  { name: "Aug", samples: 75, incidents: 65 },
  { name: "Sep", samples: 65, incidents: 70 },
  { name: "Oct", samples: 50, incidents: 35 },
  { name: "Nov", samples: 40, incidents: 20 },
  { name: "Dec", samples: 60, incidents: 15 },
];

const tagLogData = [
  {
    id: "1",
    totalTags: "74",
    tagger: "Arab Shawn",
    taggedAreas: "08",
    samples: "67",
    incidents: "07",
    reviewer: "Sarah Swatti",
    date: "23/3/2025",
    status: "Pending",
  },
  {
    id: "2",
    totalTags: "74",
    tagger: "Runyi Bells",
    taggedAreas: "08",
    samples: "67",
    incidents: "07",
    reviewer: "Kardi Blusela",
    date: "23/3/2025",
    status: "Declined",
  },
  {
    id: "3",
    totalTags: "74",
    tagger: "Cynthia Han",
    taggedAreas: "08",
    samples: "67",
    incidents: "07",
    reviewer: "Pebble Vanis",
    date: "23/3/2025",
    status: "Approved",
  },
];

const Sparkline = ({ points, color }) => {
  const data = points.map((v, i) => ({ i, v }));
  return (
    <div className="w-20 h-8">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            dataKey="v"
            stroke={color}
            strokeWidth={2}
            dot={false}
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const StatCard = ({ title, value, change, icon: Icon, chartColor, chartDataPoints }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gray-50">
            <Icon size={20} className="text-gray-600" />
          </div>
          <div className="text-xs font-medium text-gray-600">{title}</div>
        </div>
        <div className="text-xs text-green-600 font-semibold">
          {change}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <Sparkline points={chartDataPoints} color={chartColor} />
      </div>
    </div>
  );
};

const TagStatusCard = ({ title, count, change, icon: Icon, colorClass, sparkPoints }) => {
  const isPositive = change.startsWith("+");
  return (
    <div className={`${colorClass} rounded-lg p-5 text-white shadow-lg`}>
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-white/20 rounded-lg">
            <Icon size={20} />
          </div>
          <div className="text-sm font-medium">{title}</div>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="text-3xl font-bold">{count}</div>
        <div className="flex items-center gap-2">
          <div className={`text-xs font-semibold ${isPositive ? 'text-white' : 'text-red-200'}`}>
            {change}
          </div>
          <Sparkline 
            points={sparkPoints} 
            color={isPositive ? "#ffffff" : "#ff6b6b"} 
          />
        </div>
      </div>
    </div>
  );
};

const TagStatusPanel = () => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-lg h-full border border-gray-200">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-semibold text-gray-900">Tag Status</h3>
        <div className="flex items-center gap-2">
          <button className="text-xs text-gray-600 flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded">
            Start Date <ChevronDown size={12} />
          </button>
          <button className="text-xs text-gray-600 flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded">
            End Date <ChevronDown size={12} />
          </button>
          <button className="p-1.5 rounded hover:bg-gray-100">
            <Download size={14} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <TagStatusCard
          title="Completed Tags"
          count={102}
          change="+83"
          icon={CheckCircle}
          colorClass="bg-gradient-to-br from-primary to-primary"
          sparkPoints={[10, 30, 20, 50, 40]}
        />
        <TagStatusCard
          title="Active Tags"
          count={3}
          change="+02"
          icon={LayoutGrid}
          colorClass="bg-gradient-to-br from-primary to-primary"
          sparkPoints={[5, 15, 10, 25, 20]}
        />
        <TagStatusCard
          title="Pending Tags"
          count={0}
          change="+00"
          icon={Clock}
          colorClass="bg-gradient-to-br from-primary to-primary"
          sparkPoints={[3, 8, 5, 12, 8]}
        />
      </div>
    </div>
  );
};

const TagLog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = tagLogData.filter(
    (t) =>
      t.tagger.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.reviewer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-600 bg-yellow-50";
      case "Declined":
        return "text-red-600 bg-red-50";
      case "Approved":
        return "text-green-600 bg-green-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="bg-white rounded-none overflow-hidden shadow-lg border border-gray-200">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-900">Tag Log</h2>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded text-xs text-gray-700 hover:bg-gray-200">
              <Calendar size={13} />
              Start Date <ChevronDown size={12} />
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded text-xs text-gray-700 hover:bg-gray-200">
              <Calendar size={13} />
              End Date <ChevronDown size={12} />
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded text-xs text-gray-700 hover:bg-gray-200">
              Monthly <ChevronDown size={12} />
            </button>
            <button className="px-3 py-1.5 bg-purple-600 text-white rounded text-xs font-medium hover:bg-purple-700">
              All
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Facility, Status, Locat..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded hover:bg-gray-100">
              <Download size={16} className="text-gray-600" />
            </button>
            <button className="p-2 rounded hover:bg-gray-100">
              <MoreHorizontal size={16} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-auto px-5">
        <table className="w-full min-w-max">
          <thead className="bg-primary">
            <tr>
              <th className="px-4 py-3 text-left">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white">Total Tags</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white">Tagger</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white">Tagged Areas</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white">Samples</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white">Incidents</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white">Reviewer</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white">Date</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {filtered.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">{row.totalTags}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{row.tagger}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.taggedAreas}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.samples}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.incidents}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.reviewer}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.date}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(row.status)}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="p-1 rounded hover:bg-gray-100">
                    <MoreHorizontal size={16} className="text-gray-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-5 py-3 border-t border-gray-200 flex justify-end">
        <button className="text-purple-600 text-sm font-medium hover:underline">See All</button>
      </div>
    </div>
  );
};

import {facility_model} from '../../../assets';
const DashboardViewFacility = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 " style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url('${facility_model}')`,
    }}>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="inline-flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-md border border-gray-200">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center overflow-hidden flex-shrink-0">
            <div className="w-full h-full bg-cover bg-center" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&q=80')"
            }} />
          </div>
          <div>
            <div className="text-base font-semibold text-gray-900">Comodore Facility</div>
            <div className="text-xs text-gray-600">Efab, Abuja, Nigeria.</div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-gray-900">Overview</h2>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-3 py-1.5 rounded bg-gray-200 text-gray-700 text-xs hover:bg-gray-300">
              <Calendar size={12} />
              Start Date <ChevronDown size={10} />
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 rounded bg-gray-200 text-gray-700 text-xs hover:bg-gray-300">
              <Calendar size={12} />
              End Date <ChevronDown size={10} />
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 rounded bg-gray-200 text-gray-700 text-xs hover:bg-gray-300">
              Monthly <ChevronDown size={10} />
            </button>
          </div>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            title="Total Tags"
            value={210}
            change="+84"
            icon={LayoutGrid}
            chartColor="#10b981"
            chartDataPoints={[20, 35, 25, 45, 55]}
          />
          <StatCard
            title="Total Samples"
            value={105}
            change="+84"
            icon={Clock}
            chartColor="#ef4444"
            chartDataPoints={[40, 25, 55, 35, 65]}
          />
          <StatCard
            title="Total Incidents"
            value={105}
            change="+84"
            icon={CheckCircle}
            chartColor="#10b981"
            chartDataPoints={[30, 45, 35, 60, 50]}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left - Tag Status */}
          <div className="lg:col-span-2">
            <TagStatusPanel />
          </div>

          {/* Right - Chart */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-5 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-900">Tag Type</h3>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 rounded hover:bg-gray-100">
                    <Download size={16} className="text-gray-600" />
                  </button>
                  <button className="p-1.5 rounded hover:bg-gray-100">
                    <MoreHorizontal size={16} className="text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="text-green-600 text-xs font-semibold">
                  +10.05% to last year
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded">
                    <Calendar size={12} />
                    10/02/2023 <ChevronDown size={10} />
                  </button>
                  <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded">
                    End Date <ChevronDown size={10} />
                  </button>
                  <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded">
                    Monthly <ChevronDown size={10} />
                  </button>
                  <button className="px-2 py-1 bg-gray-100 rounded flex items-center gap-1 hover:bg-gray-200">
                    All <ChevronDown size={10} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-yellow-400 rounded-sm" />
                  <span className="text-gray-700">Pending</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-sm" />
                  <span className="text-gray-700">Active</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-purple-500 rounded-sm" />
                  <span className="text-gray-700">Completed</span>
                </div>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#6b7280", fontSize: 11 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#6b7280", fontSize: 11 }}
                      domain={[0, 80]}
                    />
                    <Bar dataKey="samples" fill="#eab308" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="incidents" fill="#22c55e" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Tag Log Table */}
      </div>
        <TagLog />
    </div>
  );
};

export default DashboardViewFacility;
// import React from 'react';
// import {
//   HiOutlineCalendar,
//   HiChevronDown,
//   // HiOutlineAdjustments,
//   HiOutlineMagnifyingGlass,
//   HiArrowTrendingUp,
//   HiChevronLeft,
//   HiChevronRight,
// } from 'react-icons/hi2';

// const DashboardLocationDistribution: React.FC = () => {
//   return (
//     <div className="bg-white rounded-xl shadow-lg w-full max-w-7xl mx-auto overflow-hidden font-sans">
//       {/* Header */}
//       <div className="flex justify-between items-center p-6 border-b border-gray-200">
//         <h2 className="text-xl font-semibold text-gray-900">
//           Location Distribution
//         </h2>
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 cursor-pointer">
//             <HiOutlineCalendar className="w-4 h-4 mr-2 text-gray-500" />
//             <span>10/02/2023</span>
//             <HiChevronDown className="w-4 h-4 ml-2 text-gray-500" />
//           </div>
//           <div className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 cursor-pointer">
//             <span>End Date</span>
//             <HiChevronDown className="w-4 h-4 ml-2 text-gray-500" />
//           </div>
//           <div className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 cursor-pointer">
//             <span>Monthly</span>
//             <HiChevronDown className="w-4 h-4 ml-2 text-gray-500" />
//           </div>
//           <button className="bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg text-sm">
//             All
//           </button>
//           {/* <HiOutlineAdjustments className="w-6 h-6 text-indigo-600 cursor-pointer" /> */}
//         </div>
//       </div>
//       {/* Main Content */}
//       <div className="flex">
//         {/* Sidebar */}
//         <div className="w-72 p-6 border-r border-gray-200">
//           <div className="flex items-center mb-6">
//             <HiArrowTrendingUp className="w-6 h-6 text-green-600 mr-2" />
//             <span className="text-xl font-bold text-green-600 mr-2">
//               +10.05%
//             </span>
//             <span className="text-sm text-gray-500">to last year</span>
//           </div>
//           <div className="flex items-center space-x-4 mb-6">
//             <div className="flex items-center">
//               <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
//               <span className="text-sm text-gray-600">Samples</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
//               <span className="text-sm text-gray-600">Incidents</span>
//             </div>
//           </div>
//           <div className="relative mb-6">
//             <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search by Facility, Room, Tagger..."
//               className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//         </div>
//         {/* Grid Container */}
//         <div className="flex-1 grid grid-cols-2">
//           {/* Grid Item 1 */}
//           <div className="relative border-b border-r border-gray-200 p-6 flex items-center justify-center">
//             <div className="absolute top-6 left-6">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Pierro Facility
//               </h3>
//             </div>
//             <div className="relative w-full h-full">
//               {/* Dots */}
//               <span className="absolute w-3 h-3 rounded-full bg-purple-500" style={{ top: '30%', left: '80%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-purple-500" style={{ top: '45%', left: '85%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-purple-500" style={{ top: '65%', left: '70%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-purple-500" style={{ top: '55%', left: '60%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-purple-500" style={{ top: '40%', left: '50%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-red-400" style={{ top: '70%', left: '55%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-red-400" style={{ top: '50%', left: '40%' }}></span>

//               {/* Avatar */}
//               <div className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 border-white shadow-md ring-2 ring-purple-400 overflow-hidden">
//                 <img
//                   src="https://via.placeholder.com/150/A78BFA/FFFFFF?text=P"
//                   alt="Avatar"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Grid Item 2 */}
//           <div className="relative border-b border-gray-200 p-6 flex items-center justify-center">
//             <div className="absolute top-6 left-6">
//               <h3 className="text-lg font-semibold text-gray-900">Lab 1</h3>
//             </div>
//             <div className="relative w-full h-full">
//               {/* Dot */}
//               <span className="absolute w-3 h-3 rounded-full bg-red-400" style={{ top: '70%', left: '20%' }}></span>
//             </div>
//           </div>
//           {/* Grid Item 3 */}
//           <div className="relative border-b border-r border-gray-200 p-6 flex items-center justify-center">
//             <div className="absolute top-6 left-6">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Chemical Room
//               </h3>
//             </div>
//             <div className="relative w-full h-full">
//               {/* Dots */}
//               <span className="absolute w-3 h-3 rounded-full bg-red-400" style={{ top: '40%', left: '30%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-red-400" style={{ top: '60%', left: '40%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-purple-500" style={{ top: '70%', left: '60%' }}></span>
//             </div>
//           </div>
//           {/* Grid Item 4 */}
//           <div className="relative border-b border-gray-200 p-6 flex items-center justify-center">
//             <div className="absolute top-6 left-6">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Wash Room
//               </h3>
//             </div>
//             <div className="relative w-full h-full">
//               {/* Dots */}
//               <span className="absolute w-3 h-3 rounded-full bg-purple-500" style={{ top: '60%', left: '70%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-red-400" style={{ top: '50%', left: '40%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-purple-500" style={{ top: '30%', left: '80%' }}></span>
//             </div>
//           </div>
//           {/* Grid Item 5 */}
//           <div className="relative border-r border-gray-200 p-6 flex items-center justify-center">
//             <div className="absolute top-6 left-6">
//               <h3 className="text-lg font-semibold text-gray-900">Lab 2</h3>
//             </div>
//             <div className="relative w-full h-full">
//               {/* Dots */}
//               <span className="absolute w-3 h-3 rounded-full bg-red-400" style={{ top: '50%', left: '15%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-purple-500" style={{ top: '70%', left: '30%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-red-400" style={{ top: '80%', left: '25%' }}></span>
//             </div>
//           </div>
//           {/* Grid Item 6 */}
//           <div className="relative p-6 flex items-center justify-center">
//             <div className="absolute top-6 left-6">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Specimen Room
//               </h3>
//             </div>
//             <div className="relative w-full h-full">
//               {/* Dots */}
//               <span className="absolute w-3 h-3 rounded-full bg-red-400" style={{ top: '75%', left: '55%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-purple-500" style={{ top: '85%', left: '70%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-red-400" style={{ top: '90%', left: '60%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-purple-500" style={{ top: '65%', left: '85%' }}></span>
//               <span className="absolute w-3 h-3 rounded-full bg-purple-500" style={{ top: '45%', left: '75%' }}></span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Pagination */}
//       <div className="flex justify-end items-center p-4 border-t border-gray-200">
//         <button className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-300 text-gray-500 mr-2">
//           <HiChevronLeft className="w-4 h-4" />
//         </button>
//         <span className="text-sm text-gray-600 font-medium">1 / 3</span>
//         <button className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-300 text-gray-500 ml-2">
//           <HiChevronRight className="w-4 h-4" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DashboardLocationDistribution;



// import React from 'react';
// import {
//   HiOutlineCalendar,
//   HiChevronDown,
//   HiAdjustmentsHorizontal,
//   HiOutlineMagnifyingGlass,
//   HiArrowTrendingUp,
//   HiChevronLeft,
//   HiChevronRight,
// } from 'react-icons/hi2';

// const DashboardLocationDistribution: React.FC = () => {
//   const gridItems = [
//     {
//       title: 'Pierro Facility',
//       dots: [
//         { color: 'bg-purple-500', top: '20%', left: '85%' },
//         { color: 'bg-purple-500', top: '35%', left: '70%' },
//         { color: 'bg-purple-500', top: '55%', left: '80%' },
//         { color: 'bg-purple-500', top: '45%', left: '60%' },
//         { color: 'bg-purple-500', top: '70%', left: '55%' },
//         { color: 'bg-red-400', top: '80%', left: '45%' },
//         { color: 'bg-red-400', top: '40%', left: '50%' },
//       ],
//       avatar: 'https://via.placeholder.com/150/A78BFA/FFFFFF?text=P',
//     },
//     {
//       title: 'Lab 1',
//       dots: [
//         { color: 'bg-red-400', top: '70%', left: '20%' },
//       ],
//     },
//     {
//       title: 'Chemical Room',
//       dots: [
//         { color: 'bg-red-400', top: '40%', left: '30%' },
//         { color: 'bg-red-400', top: '60%', left: '40%' },
//         { color: 'bg-purple-500', top: '70%', left: '60%' },
//       ],
//     },
//     {
//       title: 'Wash Room',
//       dots: [
//         { color: 'bg-purple-500', top: '60%', left: '70%' },
//         { color: 'bg-red-400', top: '50%', left: '40%' },
//         { color: 'bg-purple-500', top: '30%', left: '80%' },
//       ],
//     },
//     {
//       title: 'Lab 2',
//       dots: [
//         { color: 'bg-red-400', top: '50%', left: '15%' },
//         { color: 'bg-purple-500', top: '70%', left: '30%' },
//         { color: 'bg-red-400', top: '80%', left: '25%' },
//       ],
//     },
//     {
//       title: 'Specimen Room',
//       dots: [
//         { color: 'bg-red-400', top: '75%', left: '55%' },
//         { color: 'bg-purple-500', top: '85%', left: '70%' },
//         { color: 'bg-red-400', top: '90%', left: '60%' },
//         { color: 'bg-purple-500', top: '65%', left: '85%' },
//         { color: 'bg-purple-500', top: '45%', left: '75%' },
//       ],
//     },
//   ];

//   return (
//     <div className="bg-white rounded-xl shadow-lg w-full max-w-7xl mx-auto overflow-hidden font-inter">
//       {/* Header */}
//       <div className="flex justify-between items-center p-6 border-b border-gray-200">
//         <h2 className="text-xl font-semibold text-gray-900">
//           Location Distribution
//         </h2>
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors">
//             <HiOutlineCalendar className="w-4 h-4 mr-2 text-gray-500" />
//             <span>10/02/2023</span>
//             <HiChevronDown className="w-4 h-4 ml-2 text-gray-500" />
//           </div>
//           <div className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors">
//             <span>End Date</span>
//             <HiChevronDown className="w-4 h-4 ml-2 text-gray-500" />
//           </div>
//           <div className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors">
//             <span>Monthly</span>
//             <HiChevronDown className="w-4 h-4 ml-2 text-gray-500" />
//           </div>
//           <button className="bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
//             All
//           </button>
//           <HiAdjustmentsHorizontal className="w-6 h-6 text-indigo-600 cursor-pointer hover:text-indigo-700 transition-colors" />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex">
//         {/* Sidebar */}
//         <div className="w-72 p-6 border-r border-gray-200">
//           <div className="flex items-center mb-6">
//             <HiArrowTrendingUp className="w-6 h-6 text-green-600 mr-2" />
//             <span className="text-xl font-bold text-green-600 mr-2">
//               +10.05%
//             </span>
//             <span className="text-sm text-gray-500">to last year</span>
//           </div>
//           <div className="flex items-center space-x-4 mb-6">
//             <div className="flex items-center">
//               <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
//               <span className="text-sm text-gray-600">Samples</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
//               <span className="text-sm text-gray-600">Incidents</span>
//             </div>
//           </div>
//           <div className="relative mb-6">
//             <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search by Facility, Room, Tagger..."
//               className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//         </div>

//         {/* Grid Container */}
//         <div className="flex-1 grid grid-cols-2">
//           {gridItems.map((item, index) => (
//             <div
//               key={index}
//               className={`relative p-6 border-gray-200 flex flex-col justify-end ${
//                 index % 2 === 0 ? 'border-r' : ''
//               } ${index < gridItems.length - 2 ? 'border-b' : ''}`}
//             >
//               <div className="absolute top-6 left-6">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {item.title}
//                 </h3>
//               </div>
//               {item.avatar && (
//                 <div className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 border-white shadow-md ring-2 ring-purple-400 overflow-hidden">
//                   <img
//                     src={item.avatar}
//                     alt={`${item.title} Avatar`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               )}
//               {/* Dot mapping */}
//               {item.dots.map((dot, dotIndex) => (
//                 <span
//                   key={dotIndex}
//                   className={`absolute w-3 h-3 rounded-full opacity-70 ${dot.color}`}
//                   style={{ top: dot.top, left: dot.left }}
//                 ></span>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-end items-center p-4 border-t border-gray-200">
//         <button className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-300 text-gray-500 mr-2 hover:bg-gray-100 transition-colors">
//           <HiChevronLeft className="w-4 h-4" />
//         </button>
//         <span className="text-sm text-gray-600 font-medium">1 / 3</span>
//         <button className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-300 text-gray-500 ml-2 hover:bg-gray-100 transition-colors">
//           <HiChevronRight className="w-4 h-4" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DashboardLocationDistribution;

// import React from 'react';
// import {
//   HiOutlineCalendar,
//   HiChevronDown,
//   HiAdjustmentsHorizontal,
//   HiOutlineMagnifyingGlass,
//   HiArrowTrendingUp,
//   HiChevronLeft,
//   HiChevronRight,
//   HiOutlineArrowsUpDown,
//   HiOutlineShare,
//   HiOutlineArrowDownTray,
// } from 'react-icons/hi2';

// const DashboardLocationDistribution: React.FC = () => {
//   // Define grid item data with more precise dot positions
//   const gridItems = [
//     {
//       title: 'Pierro Facility',
//       dots: [
//         { color: 'bg-purple-500', top: '25%', left: '86%' }, // Top right purple
//         { color: 'bg-purple-500', top: '35%', left: '77%' }, // Mid-right purple
//         { color: 'bg-purple-500', top: '65%', left: '72%' }, // Bottom-mid purple
//         { color: 'bg-purple-500', top: '75%', left: '82%' }, // Bottom-right purple
//         { color: 'bg-purple-500', top: '55%', left: '60%' }, // Mid-left purple
//         { color: 'bg-red-400', top: '85%', left: '46%' }, // Bottom-left pink
//         { color: 'bg-red-400', top: '45%', left: '49%' }, // Mid-left pink
//       ],
//       avatar: 'https://via.placeholder.com/150/A78BFA/FFFFFF?text=P', // Placeholder for avatar
//     },
//     {
//       title: 'Lab 1',
//       dots: [
//         { color: 'bg-red-400', top: '70%', left: '20%' }, // Pink dot in Lab 1
//       ],
//     },
//     {
//       title: 'Chemical Room',
//       dots: [
//         { color: 'bg-red-400', top: '45%', left: '30%' }, // Top-left pink
//         { color: 'bg-purple-500', top: '58%', left: '45%' }, // Mid-left purple
//         { color: 'bg-red-400', top: '70%', left: '35%' }, // Bottom-left pink
//       ],
//     },
//     {
//       title: 'Wash Room',
//       dots: [
//         { color: 'bg-purple-500', top: '40%', left: '70%' }, // Top-right purple
//         { color: 'bg-red-400', top: '60%', left: '55%' }, // Mid-left pink
//         { color: 'bg-purple-500', top: '75%', left: '85%' }, // Bottom-right purple
//       ],
//     },
//     {
//       title: 'Lab 2',
//       dots: [
//         { color: 'bg-red-400', top: '55%', left: '15%' }, // Top-left pink
//         { color: 'bg-purple-500', top: '70%', left: '30%' }, // Mid-left purple
//         { color: 'bg-red-400', top: '85%', left: '25%' }, // Bottom-left pink
//       ],
//     },
//     {
//       title: 'Specimen Room',
//       dots: [
//         { color: 'bg-red-400', top: '60%', left: '40%' }, // Mid-left pink
//         { color: 'bg-purple-500', top: '75%', left: '55%' }, // Mid-right purple
//         { color: 'bg-red-400', top: '50%', left: '68%' }, // Top-right pink
//         { color: 'bg-purple-500', top: '80%', left: '80%' }, // Bottom-right purple
//       ],
//     },
//   ];

//   return (
//     <div className="bg-white rounded-xl shadow-lg w-full max-w-[1200px] mx-auto overflow-hidden font-inter">
//       {/* Header */}
//       <div className="flex justify-between items-center p-6 border-b border-gray-200">
//         <h2 className="text-xl font-semibold text-gray-900">
//           Location Distribution
//         </h2>
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors">
//             <HiOutlineCalendar className="w-4 h-4 mr-2 text-gray-500" />
//             <span>10/02/2023</span>
//             <HiChevronDown className="w-4 h-4 ml-2 text-gray-500" />
//           </div>
//           <div className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors">
//             <span>End Date</span>
//             <HiChevronDown className="w-4 h-4 ml-2 text-gray-500" />
//           </div>
//           <div className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors">
//             <span>Monthly</span>
//             <HiChevronDown className="w-4 h-4 ml-2 text-gray-500" />
//           </div>
//           <button className="bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
//             All
//           </button>
//           <HiAdjustmentsHorizontal className="w-6 h-6 text-indigo-600 cursor-pointer hover:text-indigo-700 transition-colors" />
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="flex">
//         {/* Left Sidebar (Legend and Search) */}
//         <div className="w-[280px] p-6 border-r border-gray-200 flex flex-col justify-between">
//           <div>
//             <div className="flex items-center mb-6">
//               <HiArrowTrendingUp className="w-6 h-6 text-green-600 mr-2" />
//               <span className="text-xl font-bold text-green-600 mr-2">
//                 +10.05%
//               </span>
//               <span className="text-sm text-gray-500">to last year</span>
//             </div>
//             <div className="flex items-center space-x-4 mb-6">
//               <div className="flex items-center">
//                 <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
//                 <span className="text-sm text-gray-600">Samples</span>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
//                 <span className="text-sm text-gray-600">Incidents</span>
//               </div>
//             </div>
//           </div>
//           <div className="relative mt-auto"> {/* Aligned to bottom */}
//             <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search by Facility, Room, Tagger..."
//               className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <HiOutlineArrowsUpDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer" />
//           </div>
//         </div>

//         {/* Grid Container */}
//         <div className="flex-1 grid grid-cols-2">
//           {gridItems.map((item, index) => (
//             <div
//               key={index}
//               className={`relative p-6 border-gray-200 min-h-[220px] flex flex-col justify-end
//                 ${index % 2 === 0 ? 'border-r' : ''}
//                 ${index < gridItems.length - 2 ? 'border-b' : ''}
//               `}
//             >
//               <div className="absolute top-6 left-6">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {item.title}
//                 </h3>
//               </div>
//               {item.avatar && (
//                 <div className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 border-white shadow-md ring-2 ring-purple-400 overflow-hidden">
//                   <img
//                     src={item.avatar}
//                     alt={`${item.title} Avatar`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               )}
//               {/* Dot mapping */}
//               {item.dots.map((dot, dotIndex) => (
//                 <span
//                   key={dotIndex}
//                   className={`absolute w-3 h-3 rounded-full opacity-70 ${dot.color}`}
//                   style={{ top: dot.top, left: dot.left }}
//                 ></span>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer / Pagination */}
//       <div className="flex justify-between items-center p-4 border-t border-gray-200">
//         <div className="flex items-center space-x-4 text-gray-500">
//           <HiOutlineShare className="w-5 h-5 cursor-pointer hover:text-indigo-600 transition-colors" />
//           <HiOutlineArrowDownTray className="w-5 h-5 cursor-pointer hover:text-indigo-600 transition-colors" />
//           <HiOutlineArrowsUpDown className="w-5 h-5 cursor-pointer hover:text-indigo-600 transition-colors" />
//         </div>
//         <div className="flex items-center">
//           <button className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-300 text-gray-500 mr-2 hover:bg-gray-100 transition-colors">
//             <HiChevronLeft className="w-4 h-4" />
//           </button>
//           <span className="text-sm text-gray-600 font-medium">1 / 3</span>
//           <button className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-300 text-gray-500 ml-2 hover:bg-gray-100 transition-colors">
//             <HiChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLocationDistribution;

import React, { useState } from 'react';
import { Calendar, Search, Menu, ChevronLeft, ChevronRight } from 'lucide-react';

const DashboardLocationDistribution = () => {
  const [selectedDate, setSelectedDate] = useState('10/02/2023');
  const [viewMode, setViewMode] = useState('Monthly');
  
  // Sample data for dots positioning
  const roomData = {
    'Lab 1': {
      samples: [
        { x: 15, y: 40 },
        { x: 75, y: 35 },
      ],
      incidents: [
        { x: 55, y: 30 },
        { x: 85, y: 25 },
        { x: 90, y: 15 },
        { x: 95, y: 8 },
      ]
    },
    'Chemical Room': {
      samples: [
        { x: 20, y: 60 },
      ],
      incidents: [
        { x: 35, y: 50 },
        { x: 60, y: 45 },
        { x: 15, y: 80 },
        { x: 85, y: 75 },
      ]
    },
    'Lab 2': {
      samples: [
        { x: 15, y: 40 },
      ],
      incidents: [
        { x: 70, y: 55 },
        { x: 80, y: 45 },
      ]
    },
    'Wash Room': {
      samples: [
        { x: 75, y: 35 },
      ],
      incidents: []
    },
    'Specimen Room': {
      samples: [
        { x: 35, y: 35 },
        { x: 75, y: 55 },
      ],
      incidents: [
        { x: 15, y: 80 },
        { x: 55, y: 75 },
        { x: 90, y: 85 },
      ]
    }
  };

  const centerProfileImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23d4a574'/%3E%3Ccircle cx='50' cy='40' r='15' fill='%23f5f5f5'/%3E%3Cpath d='M25 75 Q50 60 75 75' fill='%23f5f5f5'/%3E%3C/svg%3E";

  return (
    <div className="w-full max-w-6xl mx-auto bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Location Distribution</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{selectedDate}</span>
            <span>End Date</span>
            <select 
              value={viewMode} 
              onChange={(e) => setViewMode(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
            <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">All</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-600 text-sm">+10.05%</span>
          <span className="text-gray-400 text-sm">from last year</span>
        </div>
      </div>

      {/* Search and Legend */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by Facility, Room, Target..."
              className="pl-10 pr-4 py-2 border rounded-lg w-80"
            />
          </div>
          <button className="p-2 border rounded">
            <Menu className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
            <span className="text-sm">Samples</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span className="text-sm">Incidents</span>
          </div>
          <div className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4 cursor-pointer" />
            <span className="text-sm">1 / 3</span>
            <ChevronRight className="w-4 h-4 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Facility Layout */}
      <div className="relative p-8">
        <div className="text-center mb-8">
          <h2 className="text-lg font-medium mb-4">Pierro Facility</h2>
          <div className="relative mx-auto w-16 h-16">
            <img 
              src={centerProfileImage} 
              alt="Profile" 
              className="w-full h-full rounded-full border-2 border-gray-200"
            />
          </div>
        </div>

        {/* Room Layout Grid */}
        <div className="grid grid-cols-2 gap-0 border border-gray-300">
          {/* Top Row */}
          <div className="relative border-r border-b border-gray-300 h-64 p-4">
            <div className="absolute top-4 left-4">
              <span className="text-sm font-medium">Lab 1</span>
            </div>
            {/* Render dots for Lab 1 */}
            {roomData['Lab 1'].samples.map((dot, idx) => (
              <div
                key={`lab1-sample-${idx}`}
                className="absolute w-3 h-3 bg-pink-400 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
            {roomData['Lab 1'].incidents.map((dot, idx) => (
              <div
                key={`lab1-incident-${idx}`}
                className="absolute w-3 h-3 bg-purple-600 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
          </div>

          <div className="relative border-b border-gray-300 h-64 p-4">
            <div className="absolute top-4 left-4">
              <span className="text-sm font-medium">Chemical Room</span>
            </div>
            {/* Render dots for Chemical Room */}
            {roomData['Chemical Room'].samples.map((dot, idx) => (
              <div
                key={`chem-sample-${idx}`}
                className="absolute w-3 h-3 bg-pink-400 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
            {roomData['Chemical Room'].incidents.map((dot, idx) => (
              <div
                key={`chem-incident-${idx}`}
                className="absolute w-3 h-3 bg-purple-600 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="relative border-r border-gray-300 h-64 p-4">
            <div className="absolute bottom-4 left-4">
              <span className="text-sm font-medium">Lab 2</span>
            </div>
            {/* Render dots for Lab 2 */}
            {roomData['Lab 2'].samples.map((dot, idx) => (
              <div
                key={`lab2-sample-${idx}`}
                className="absolute w-3 h-3 bg-pink-400 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
            {roomData['Lab 2'].incidents.map((dot, idx) => (
              <div
                key={`lab2-incident-${idx}`}
                className="absolute w-3 h-3 bg-purple-600 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
          </div>

          <div className="relative h-64 p-4">
            <div className="absolute bottom-4 right-4">
              <span className="text-sm font-medium">Wash Room</span>
            </div>
            {/* Render dots for Wash Room */}
            {roomData['Wash Room'].samples.map((dot, idx) => (
              <div
                key={`wash-sample-${idx}`}
                className="absolute w-3 h-3 bg-pink-400 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
            {roomData['Wash Room'].incidents.map((dot, idx) => (
              <div
                key={`wash-incident-${idx}`}
                className="absolute w-3 h-3 bg-purple-600 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Room */}
        <div className="relative border border-t-0 border-gray-300 h-32 p-4 mt-0">
          <div className="absolute bottom-4 right-4">
            <span className="text-sm font-medium">Specimen Room</span>
          </div>
          {/* Render dots for Specimen Room */}
          {roomData['Specimen Room'].samples.map((dot, idx) => (
            <div
              key={`spec-sample-${idx}`}
              className="absolute w-3 h-3 bg-pink-400 rounded-full"
              style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
            />
          ))}
          {roomData['Specimen Room'].incidents.map((dot, idx) => (
            <div
              key={`spec-incident-${idx}`}
              className="absolute w-3 h-3 bg-purple-600 rounded-full"
              style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardLocationDistribution;
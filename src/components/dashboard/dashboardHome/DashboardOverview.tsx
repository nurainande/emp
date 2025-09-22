// import React from 'react';
// import { MdMoreVert } from 'react-icons/md';

// const DashboardOverview = () => {
//   return (
//     <div className="space-y-8">
//       {/* Welcome Section */}
//       <div className="bg-white py-4">
//         <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back!</h1>
//         <p className="text-gray-600">Here's a quick look at your recent activity and ongoing tasks.</p>
//       </div>

//       {/* Overview Section */}
//       <div className="space-y-6">
//         {/* Header */}
//         <div className="flex items-center justify-between">
//           <h2 className="text-xl font-bold text-gray-900">Overview</h2>
//           <div className="flex items-center gap-4">
//             <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
//               <span>Start Date</span>
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
//               <span>End Date</span>
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
//               <span>Monthly</span>
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Total Samples */}
//           <div className="bg-white rounded-xl p-6 border border-gray-200 relative">
//             <div className="flex items-start justify-between mb-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
//                   </svg>
//                 </div>
//                 <span className="text-sm font-medium text-gray-600">Total Samples</span>
//               </div>
//               <button className="text-gray-400 hover:text-gray-600">
//                 <MdMoreVert className="w-5 h-5" />
//               </button>
//             </div>
//             <div className="mb-4">
//               <div className="text-3xl font-bold text-gray-900">305</div>
//               <div className="text-sm text-red-500 flex items-center gap-1 mt-1">
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"/>
//                 </svg>
//                 <span>1 to last month</span>
//               </div>
//             </div>
//             {/* Mini Chart - Red line going down */}
//             <div className="h-12">
//               <svg className="w-full h-full" viewBox="0 0 120 48">
//                 <path
//                   d="M10 20 L25 15 L40 25 L55 18 L70 30 L85 25 L100 35 L115 40"
//                   fill="none"
//                   stroke="#ef4444"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Total Facilities */}
//           <div className="bg-white rounded-xl p-6 border border-gray-200 relative">
//             <div className="flex items-start justify-between mb-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd"/>
//                   </svg>
//                 </div>
//                 <span className="text-sm font-medium text-gray-600">Total Facilities</span>
//               </div>
//               <button className="text-gray-400 hover:text-gray-600">
//                 <MdMoreVert className="w-5 h-5" />
//               </button>
//             </div>
//             <div className="mb-4">
//               <div className="text-3xl font-bold text-gray-900">510</div>
//               <div className="text-sm text-green-500 flex items-center gap-1 mt-1">
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
//                 </svg>
//                 <span>34 to last month</span>
//               </div>
//             </div>
//             {/* Mini Chart - Green line going up */}
//             <div className="h-12">
//               <svg className="w-full h-full" viewBox="0 0 120 48">
//                 <path
//                   d="M10 35 L25 30 L40 25 L55 20 L70 15 L85 10 L100 8 L115 5"
//                   fill="none"
//                   stroke="#22c55e"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Total Reviewers */}
//           <div className="bg-white rounded-xl p-6 border border-gray-200 relative">
//             <div className="flex items-start justify-between mb-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
//                   </svg>
//                 </div>
//                 <span className="text-sm font-medium text-gray-600">Total Reviewers</span>
//               </div>
//               <button className="text-gray-400 hover:text-gray-600">
//                 <MdMoreVert className="w-5 h-5" />
//               </button>
//             </div>
//             <div className="mb-4">
//               <div className="text-3xl font-bold text-gray-900">323</div>
//               <div className="text-sm text-green-500 flex items-center gap-1 mt-1">
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
//                 </svg>
//                 <span>200 to last month</span>
//               </div>
//             </div>
//             {/* Mini Chart - Green line going up */}
//             <div className="h-12">
//               <svg className="w-full h-full" viewBox="0 0 120 48">
//                 <path
//                   d="M10 40 L25 35 L40 30 L55 25 L70 20 L85 12 L100 10 L115 8"
//                   fill="none"
//                   stroke="#22c55e"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Total Samplers */}
//           <div className="bg-white rounded-xl p-6 border border-gray-200 relative">
//             <div className="flex items-start justify-between mb-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
//                   </svg>
//                 </div>
//                 <span className="text-sm font-medium text-gray-600">Total Samplers</span>
//               </div>
//               <button className="text-gray-400 hover:text-gray-600">
//                 <MdMoreVert className="w-5 h-5" />
//               </button>
//             </div>
//             <div className="mb-4">
//               <div className="text-3xl font-bold text-gray-900">1003</div>
//               <div className="text-sm text-red-500 flex items-center gap-1 mt-1">
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"/>
//                 </svg>
//                 <span>0 to last month</span>
//               </div>
//             </div>
//             {/* Mini Chart - Red line mixed trend */}
//             <div className="h-12">
//               <svg className="w-full h-full" viewBox="0 0 120 48">
//                 <path
//                   d="M10 25 L25 20 L40 30 L55 25 L70 35 L85 30 L100 38 L115 35"
//                   fill="none"
//                   stroke="#ef4444"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardOverview;


// with StatCard component

import React from "react";
import StatCard from "./StatCard";
import {  line1,
    line2,
    line3,
    line4,
    trendingup1,
    trendingup2,
    trendingup3,
    trendingup4,} from "../../../assets"


// import your assets
// import totalSamplesIcon from "../../assets/icons/samplesIcon.png";
// import totalFacilitiesIcon from "../../assets/icons/facilitiesIcon.png";
// import totalReviewersIcon from "../../assets/icons/reviewersIcon.png";
// import totalSamplersIcon from "../../assets/icons/samplersIcon.png";

// import trendUp from "../../assets/icons/trendUp.png";
// import trendDown from "../../assets/icons/trendDown.png";

// import sampleChart from "../../assets/charts/sample.png";
// import facilitiesChart from "../../assets/charts/facilities.png";
// import reviewersChart from "../../assets/charts/reviewers.png";
// import samplersChart from "../../assets/charts/samplers.png";

const DashboardOverview = () => {
  return (
    <div className="space-y-8 mb-6">
      {/* Welcome Section */}
      <div className="bg-white py-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back!</h1>
        <p className="text-gray-600">
          Here's a quick look at your recent activity and ongoing tasks.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Samples"
          value={305}
          trendText="+1 to last month"
          trendImage={trendingup1}
          chartImage={line1}
          icon={trendingup1}
        />
        <StatCard
          title="Total Facilities"
          value={510}
          trendText="+34 to last month"
          trendImage={trendingup2}
          chartImage={line2}
          icon={trendingup2}
        />
        <StatCard
          title="Total Reviewers"
          value={323}
          trendText="+200 to last month"
          trendImage={trendingup3}
          chartImage={line3}
          icon={trendingup3}
        />
        <StatCard
          title="Total Samplers"
          value={1003}
          trendText="0 to last month"
          trendImage={trendingup4}
          chartImage={line4}
          icon={trendingup4}
        />
      </div>
    </div>
  );
};

export default DashboardOverview;

// import React from "react";
// import { MdMoreVert } from "react-icons/md";

// interface StatCardProps {
//   title: string;
//   value: number | string;
//   trendText: string;
//   trendImage: string; // path to small trend icon
//   chartImage: string; // path to chart image
//   icon: string; // path to top-left icon
// }

// const StatCard: React.FC<StatCardProps> = ({
//   title,
//   value,
//   trendText,
//   trendImage,
//   chartImage,
//   icon,
// }) => {
//   return (
//     <div className="bg-white rounded-2xl py-4 px-3 border border-gray-200 shadow-sm relative flex flex-col justify-between">
//       {/* Header */}
//       <div className="flex items-start justify-between mb-4">
//         <div className="flex items-center gap-3">
//           {/* Icon */}
//           <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
//             <img src={icon} alt="icon" className="w-6 h-6" />
//           </div>
//           <span className="text-sm font-medium text-gray-700">{title}</span>
//         </div>
//         <button className="text-gray-400 hover:text-gray-600">
//           <MdMoreVert className="w-5 h-5" />
//         </button>
//       </div>

//       {/* Value + Trend */}
//         <div className="text-xl font-bold text-gray-900">{value}</div>
//       <div className="mb-4 flex">
//         <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
//           <img src={trendImage} alt="trend" className="w-4 h-4" />
//           <span className="text-[14px]">{trendText}</span>
//         </div>
//       {/* Chart Image */}
//       <div className="h-16 flex items-end">
//         <img src={chartImage} alt="chart" className="w-full h-full object-contain" />
//       </div>
//       </div>

//     </div>
//   );
// };

// export default StatCard;


import React from "react";
import { MdMoreVert } from "react-icons/md";

interface StatCardProps {
  title: string;
  value: number | string;
  trendText: string;
  trendImage: string; // path to small trend icon
  chartImage: string; // path to chart image
  icon: string; // path to top-left icon
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  trendText,
  trendImage,
  chartImage,
  icon,
}) => {
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <img src={icon} alt="icon" className="w-6 h-6" />
          </div>
          <span className="text-sm font-medium text-gray-700">{title}</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MdMoreVert className="w-5 h-5" />
        </button>
      </div>

      {/* Value */}
      <div className="text-2xl font-bold text-gray-900 mt-3">{value}</div>

      {/* Footer: Trend + Chart */}
      <div className="flex items-end justify-between mt-3">
        {/* Trend */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <img src={trendImage} alt="trend" className="w-4 h-4" />
          <span className="text-[14px]">{trendText}</span>
        </div>

        {/* Chart */}
        <div className="h-14 w-24 flex-shrink-0">
          <img
            src={chartImage}
            alt="chart"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default StatCard;


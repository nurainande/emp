// import React from 'react'

// import DonutChart from "../../charts/DonutChart";

// const donutData = [
//   { name: "Bacteria", value: 234, color: "#7B61FF", change: 5 },
//   { name: "Fungi", value: 24, color: "#A68BFF", change: 35 },
//   { name: "Virus", value: 2, color: "#F472B6", change: 0.5 },
//   { name: "Parasite", value: 34, color: "#FB7185", change: 20 },
//   { name: "Others", value: 5, color: "#E9D5FF", change: 0.2 },
// ];

// const DashboardPositivity = () => {
//   return (
//     <div className='flex'>
//       {/* <header>Dashboard DashboardPositivity</header> */}
//       <DonutChart data={donutData} height={260} />
//       <DonutChart data={donutData} height={260} />
//     </div>
//   )
// }

// export default DashboardPositivity

import React from "react";
import BubbleCharts from "../../charts/BubbleCharts";

const DashboardPositivity = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Bubble Chart Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Bubble Chart Positivity
        </h2>
        <div className="w-full h-[350px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-600">
          {/* BubbleChats will render here */}
          <BubbleCharts/>
        </div>
      </div>

      {/* Donut Chart Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Donut Chart Positivity
        </h2>
        <div className="w-full h-[350px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-600">
          DonutsChats will render here
        </div>
      </div>

    </div>
  );
};

export default DashboardPositivity;



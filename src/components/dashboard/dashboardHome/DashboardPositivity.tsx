
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



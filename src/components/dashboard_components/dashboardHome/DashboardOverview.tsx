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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
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


import React from 'react';
import DashboardOverview from '../../components/dashboard/dashboardHome/DashboardOverview';
// import DashboardPositivity from '../../components/dashboard/dashboardHome/DashboardPositivity';
import DashboardCharts from '../../components/dashboard/dashboardHome/DashboardCharts';

const DashboardHome:React.FC = () => {
  return (
    <div className="min-h-full">
     <DashboardOverview/>
     {/* <DashboardPositivity/> */}
     <DashboardCharts/>
    </div>
  );
};

export default DashboardHome;
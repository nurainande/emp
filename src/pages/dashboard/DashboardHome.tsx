
import React from 'react';
import DashboardOverview from '../../components/dashboard/dashboardHome/DashboardOverview';
import DashboardCharts from '../../components/dashboard/dashboardHome/DashboardCharts';
import DashboardActivitiesLog from '../../components/dashboard/dashboardHome/DashboardActivityLog';

const DashboardHome:React.FC = () => {
  return (
    <div className="min-h-full">
     <DashboardOverview/>
     <DashboardCharts/>
     <DashboardActivitiesLog/>
    </div>
  );
};

export default DashboardHome;
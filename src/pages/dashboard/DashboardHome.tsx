
import React from 'react';
import DashboardOverview from '../../components/dashboard/dashboardHome/DashboardOverview';
import DashboardCharts from '../../components/dashboard/dashboardHome/DashboardCharts';
import DashboardActivitiesLog from '../../components/dashboard/dashboardHome/DashboardActivityLog';
import DashboardLocationDistribution from '../../components/dashboard/dashboardHome/DashboardLocationDistribution';
import  DashboardLocationDistributionLogs from '../../components/dashboard/dashboardHome/DashboardLocationDistributionLogs';

const DashboardHome:React.FC = () => {
  return (
    <div className="min-h-full">
     <DashboardOverview/>
     <DashboardCharts/>
     <DashboardActivitiesLog/>
     <DashboardLocationDistribution/>
     <DashboardLocationDistributionLogs/>
    </div>
  );
};

export default DashboardHome;
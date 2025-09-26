
import React from 'react';
import DashboardOverview from '../../components/dashboard_components/dashboardHome/DashboardOverview';
import DashboardCharts from '../../components/dashboard_components/dashboardHome/DashboardCharts';
import DashboardActivitiesLog from '../../components/dashboard_components/dashboardHome/DashboardActivityLog';
import DashboardLocationDistribution from '../../components/dashboard_components/dashboardHome/DashboardLocationDistribution';
import  DashboardLocationDistributionLogs from '../../components/dashboard_components/dashboardHome/DashboardLocationDistributionLogs';

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
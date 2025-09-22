
import React from 'react';
import DashboardOverview from '../../components/dashboard/dashboardHome/DashboardOverview';
import DashboardPositivity from '../../components/dashboard/dashboardHome/DashboardPositivity';

const DashboardHome:React.FC = () => {
  return (
    <div className="min-h-full">
     <DashboardOverview/>
     <DashboardPositivity/>
    </div>
  );
};

export default DashboardHome;
import DashboardFacilityListView from '../../components/dashboard_components/dashboardFacilities/DashboardFacilityListView';
import DashboardOverview from '../../components/dashboard_components/dashboardHome/DashboardOverview';

const DashboardFacilities:React.FC = () => {
  return (
    <div className="min-h-full">
     <DashboardOverview/>
     <DashboardFacilityListView/>
    </div>
  );
};

export default DashboardFacilities;
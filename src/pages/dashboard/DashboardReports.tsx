import DashboardOverview from '../../components/dashboard_components/dashboardHome/DashboardOverview';
import ReportsTable from '../../components/Report_components/table';
const DashboardReports:React.FC = () => {
  return (
    <div className="min-h-full mx-4 lg:mx-6 my-6">
     <DashboardOverview/>
     <ReportsTable />
    </div>
  );
};

export default DashboardReports;
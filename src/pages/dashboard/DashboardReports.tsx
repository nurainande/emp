import DashboardOverview from '../../components/dashboard_components/dashboardHome/DashboardOverview';
import ReportsTable from '../../components/Report_components/table';
const DashboardReports:React.FC = () => {
  return (
    <div className="min-h-full">
     <DashboardOverview/>
      <ReportsTable />
    </div>
  );
};

export default DashboardReports;
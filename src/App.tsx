import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
// import Home from './pages/home/Home'
import DashboardLayout from './pages/dashboard/DashboardLayout'
import LoginPage from './pages/login/LoginPage'
import ForgotPasswordPage from './pages/forgot-password/ForgotPasswordPage'
import PasswordSentPage from './pages/forgot-password/PasswordSentPage'

import DashboardHome from './pages/dashboard/DashboardHome'
import DashboardFacilities from './pages/dashboard/DashboardFacilities'
import DashboardReports from './pages/dashboard/DashboardReports'
import DashboardSettings from './pages/dashboard/DashboardSettings'
import DashboardViewFacility from './components/dashboard_components/dashboardFacilities/DashboardViewFacility'
import EditReportTable from './components/Report_components/edit_table'
import EditIncident from './components/Report_components/edit_incident'
import DashboardNotification from './pages/dashboard/DashboardNotification'

function App() {
  return (
    <>
      <Routes>
        {/* Redirect root (/) to login for now */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="login" element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="password-sent" element={<PasswordSentPage />} />
        

        {/* dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* Dashboard Home */}
          <Route index element={<DashboardHome />} />
          {/* Dashboard Facilities */}
          <Route path="facilities" element={<DashboardFacilities />}/>
          <Route path="facilities/:facilityId" element={<DashboardViewFacility />} />
          {/* Dashboard Reports */}
          <Route path="reports" element={<DashboardReports />} />
          <Route path="reports/:reportId" element={<EditReportTable />} />
          <Route path="edit-incident" element={<EditIncident />} />
          {/* Dashboard settings */}
          <Route path="settings" element={<DashboardSettings />} />

          {/* Dashboard notification */}
          <Route path="notification" element={<DashboardNotification />} />
        </Route>

      </Routes>
    </>
  )
}

export default App

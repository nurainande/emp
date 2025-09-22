import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import DashboardLayout from './pages/dashboard/DashboardLayout'
import LoginPage from './pages/login/LoginPage'
import ForgotPasswordPage from './pages/forgot-password/ForgotPasswordPage'
import PasswordSentPage from './pages/forgot-password/PasswordSentPage'

import DashboardHome from './pages/dashboard/DashboardHome'
import DashboardFacilities from './pages/dashboard/DashboardFacilities'
import DashboardReports from './pages/dashboard/DashboardReports'
import DashboardSettings from './pages/dashboard/DashboardSettings'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<LoginPage />}/>
        <Route path="forgot-password" element={<ForgotPasswordPage />}/>
        <Route path="password-sent" element={<PasswordSentPage />}/>


        {/* dashboard */}
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index path="" element={<DashboardHome/>}/>
          <Route path="facilities" element={<DashboardFacilities/>}/>
          <Route path="reports" element={<DashboardReports /> }/> 
          <Route path="settings" element={<DashboardSettings/>}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App

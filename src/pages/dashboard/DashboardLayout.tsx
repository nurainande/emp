import { useState, useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdBusiness,
  MdDescription,
  MdSettings,
  MdSearch,
  MdAccessTime,
  MdNotifications,
  MdMenu,
  MdClose,
  MdKeyboardArrowUp,
  MdOutlineRocketLaunch,
} from "react-icons/md";
import { logo } from "../../assets";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // expanded by default
  const [mobileSidebar, setMobileSidebar] = useState(false); // mobile drawer
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleMobileSidebar = () => setMobileSidebar(!mobileSidebar);
  const closeMobileSidebar = () => setMobileSidebar(false);

  // Nav items
  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: <MdDashboard /> },
    { path: "/dashboard/facilities", label: "Facilities", icon: <MdBusiness /> },
    { path: "/dashboard/reports", label: "Reports", icon: <MdDescription /> },
    { path: "/dashboard/settings", label: "Settings", icon: <MdSettings /> },
  ];

  // ✅ Find the single most specific match
  const matchingItem = useMemo(() => {
    return (
      navItems
        .filter(
          (item) =>
            location.pathname === item.path ||
            location.pathname.startsWith(item.path + "/")
        )
        .sort((a, b) => b.path.length - a.path.length)[0] || null
    );
  }, [location.pathname]);

  return (
    <div className="flex h-screen">
      {/* Overlay for Mobile */}
      {mobileSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          ${mobileSidebar ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          fixed lg:static
          inset-y-0 left-0
          ${sidebarOpen ? "w-52" : "w-20"}
          bg-[#2B0B3F]
          text-white
          flex flex-col
          z-50
          transition-all duration-300 ease-in-out
          px-3 py-5
        `}
      >
        {/* Logo + Toggle */}
        <div className="flex items-center justify-between mb-6">
          <img
            src={logo}
            alt="Logo"
            className={`transition-all ${
              sidebarOpen ? "w-7 h-auto" : "w-5 h-auto"
            }`}
          />

          {/* Toggle Button (Desktop) */}
          <button
            onClick={toggleSidebar}
            className="hidden lg:block p-1.5 rounded-md hover:bg-white/10 ml-auto"
          >
            {sidebarOpen ? (
              <MdClose className="w-5 h-5" />
            ) : (
              <MdMenu className="w-5 h-5" />
            )}
          </button>

          {/* Close for Mobile */}
          <button
            onClick={closeMobileSidebar}
            className="lg:hidden p-1.5 rounded-md hover:bg-white/10 ml-auto"
          >
            <MdClose className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const active =
              matchingItem && matchingItem.path === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileSidebar}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  active
                    ? "bg-bggray text-secondary shadow-md"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {sidebarOpen && (
                  <span className="font-medium text-sm">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Settings at Bottom */}
        <div className="mt-auto pt-4 border-t border-white/10">
          <Link
            to="/settings"
            onClick={closeMobileSidebar}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              location.pathname === "/settings"
                ? "bg-bggray text-secondary shadow-md"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <MdOutlineRocketLaunch className="text-lg" />
            {sidebarOpen && (
              <span className="font-medium text-sm">Logout</span>
            )}
          </Link>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile Sidebar Toggle */}
              <button
                onClick={toggleMobileSidebar}
                className="lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <MdMenu className="w-5 h-5" />
              </button>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                Facilities
              </h1>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                <MdSearch className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                <MdAccessTime className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                <MdNotifications className="w-5 h-5" />
              </button>

              {/* Profile */}
              <div className="flex items-center gap-2 ml-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">JD</span>
                </div>
                <MdKeyboardArrowUp className="hidden sm:block text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <div className="h-full bg-white rounded-tl-2xl px-4 lg:px-6 py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

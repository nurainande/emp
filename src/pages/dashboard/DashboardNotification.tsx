import React from 'react';
import { Search, Calendar, ChevronDown, CheckCircle, Bell, ClipboardList, AlertTriangle } from 'lucide-react';

const notifications = [
  // ... (Your notification data array remains the same here)
  {
    icon: <CheckCircle size={18} className="text-[#5ac85c]" />, 
    iconBg: 'bg-[#e5f5e5]', 
    title: 'Performance and Progress',
    message: 'Bravo! You Completed 15 tasks this week.',
    linkText: 'Take a look',
    linkStyle: 'text-[#5ac85c]', 
    date: '30th June, 2025',
    time: '10:00AM',
    isRead: false,
  },
  {
    icon: <Bell size={18} className="text-[#a882d2]" />, 
    iconBg: 'bg-[#f0e8f8]', 
    title: 'Systems Update',
    message: 'Our system has been updated and now has more exciting features.',
    linkText: 'Try New Features',
    linkStyle: 'text-[#a882d2]', 
    date: '30th June, 2025',
    time: '10:00AM',
    isRead: false,
  },
  {
    icon: <ClipboardList size={18} className="text-[#ffd762]" />, 
    iconBg: 'bg-[#fcf5e2]', 
    title: 'Task and Assignments',
    message: 'You have 2 new facilities to inspect and tag.',
    linkText: 'Take A Look',
    linkStyle: 'text-[#ffd762]', 
    date: '30th June, 2025',
    time: '10:00AM',
    isRead: false,
  },
  {
    icon: <CheckCircle size={18} className="text-[#5ac85c]" />,
    iconBg: 'bg-[#e5f5e5]',
    title: 'Performance and Progress',
    message: 'Hello! You have 7 pending task at Facility B.',
    linkText: 'Start Now',
    linkStyle: 'text-[#5ac85c]',
    date: '30th June, 2025',
    time: '10:00AM',
    isRead: false,
  },
  {
    icon: <Bell size={18} className="text-[#a882d2]" />,
    iconBg: 'bg-[#f0e8f8]',
    title: 'Systems Update',
    message: 'Your access rights have been updated by an Admin.',
    linkText: 'Take a look',
    linkStyle: 'text-[#a882d2]',
    date: '30th June, 2025',
    time: '10:00AM',
    isRead: false,
  },
  {
    icon: <ClipboardList size={18} className="text-[#ffd762]" />,
    iconBg: 'bg-[#fcf5e2]',
    title: 'Task and Assignments',
    message: 'You logged 399 Samples for Comodor Facility.',
    linkText: 'Take A Look',
    linkStyle: 'text-[#ffd762]',
    date: '30th June, 2025',
    time: '10:00AM',
    isRead: true, 
  },
  {
    icon: <AlertTriangle size={18} className="text-[#ff5c5c]" />, 
    iconBg: 'bg-[#fff0f0]', 
    title: 'Schedule and reminders',
    message: 'It is time to complete your inspection in Facility B.',
    linkText: 'Tag Now',
    linkStyle: 'text-[#ff5c5c]',
    date: '30th June, 2025',
    time: '10:00AM',
    isRead: false,
  },
  {
    icon: <CheckCircle size={18} className="text-[#5ac85c]" />,
    iconBg: 'bg-[#e5f5e5]',
    title: 'Performance and Progress',
    message: 'Hurray! Your inspection completion rate increased by 12% this week.',
    linkText: 'Take a look',
    linkStyle: 'text-[#5ac85c]',
    date: '30th June, 2025',
    time: '10:00AM',
    isRead: false,
  },
  {
    icon: <ClipboardList size={18} className="text-[#ffd762]" />,
    iconBg: 'bg-[#fcf5e2]',
    title: 'Task and Assignments',
    message: 'Your Sample tags for Facility A has been reviewed.',
    linkText: 'View Report',
    linkStyle: 'text-[#ffd762]',
    date: '30th June, 2025',
    time: '10:00AM',
    isRead: false,
  },
  {
    icon: <AlertTriangle size={18} className="text-[#ff5c5c]" />,
    iconBg: 'bg-[#fff0f0]',
    title: 'Schedule and reminders',
    message: 'Hello! You ignored your reminder and you still have 9 pending tasks.',
    linkText: 'Start Now',
    linkStyle: 'text-[#ff5c5c]',
    date: '30th June, 2025',
    time: '10:00AM',
    isRead: false,
  }
];

export default function DashboardNotification() {
  return (
    // **Removed:** max-w-4xl, mx-auto, and excessive padding
    <div className="bg-white min-h-screen text-gray-800 font-sans mx-4 lg:mx-6 my-6">
      
      {/* 1. Header and Filters Section - Using a fixed padding for the header only */}
      <div className="px-6 pt-4 pb-2 border-b border-gray-200">
        <div className="flex justify-between items-center">
          
          {/* Search Input - Max-width set to match visual proportion */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg py-1.5 pl-3 pr-4 w-full max-w-xs">
            <Search className="text-gray-500" size={16} />
            <input
              type="text"
              placeholder="Search by Facility, Status, Location..."
              className="outline-none w-full text-sm text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Date & All Filters - Use precise spacing and padding */}
          <div className="flex items-center gap-2">
            
            {/* Start Date */}
            <div className="flex items-center gap-1 text-sm text-gray-500 px-3 py-1.5 border border-gray-300 rounded-lg cursor-pointer">
              <Calendar size={14} className="text-gray-400" /> 
              <span className="text-gray-700">Start Date</span>
            </div>
            {/* End Date */}
            <div className="flex items-center gap-1 text-sm text-gray-500 px-3 py-1.5 border border-gray-300 rounded-lg cursor-pointer">
              <Calendar size={14} className="text-gray-400" /> 
              <span className="text-gray-700">End Date</span>
            </div>
            {/* All Dropdown - Changed to a simple borderless button as in the image */}
            <button className="flex items-center px-2 py-1.5 text-sm font-medium text-gray-700">
                <span className="text-gray-700">All</span>
                <ChevronDown size={14} className="ml-1 text-gray-500" />
            </button>
            {/* Mark all as read */}
            <div className="flex items-center text-xs text-gray-500 hover:text-gray-700 pt-1">
                <CheckCircle size={14} className="text-gray-500 mr-1" />
                Mark all as read
            </div>
          </div>
        </div>
      </div>

      {/* 2. Notification List - Removed vertical padding from the list container itself */}
      <div className="divide-y divide-gray-200">
        {notifications.map((item, index) => (
          <div
            key={index}
            // Add horizontal padding here to align with the header
            className="flex justify-between items-start py-4 group px-6 relative" 
          >
            <div className="flex gap-4 items-start">
              {/* Icon Container */}
              <div 
                className={`p-2 rounded-full ${item.iconBg} flex-shrink-0 mt-0.5`}
              >
                {item.icon}
              </div>
              
              {/* Notification Content */}
              <div>
                <h3 className="font-medium text-gray-900 text-sm">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-0.5">
                  {item.message}{' '}
                  <span 
                    className={`font-medium cursor-pointer ${item.linkStyle} hover:underline transition`}
                  >
                    {item.linkText}
                  </span>
                </p>
              </div>
            </div>
            
            {/* Date/Time and Red Dot */}
            <div className="flex flex-col items-end text-right text-xs text-gray-500 flex-shrink-0 relative">
              <p className="mb-0.5">{item.date}</p>
              <p>{item.time}</p>
              {/* Red Dot (Unread indicator) - positioned absolutely to the right of the time/date block */}
              {!item.isRead && (
                <div className="absolute w-2 h-2 bg-red-500 rounded-full right-0 top-1"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
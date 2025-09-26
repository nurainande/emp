import React from 'react';
import { Calendar, ChevronDown, Download, MoreHorizontal, LayoutGrid, Clock, CheckCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// --- Data ---
const chartData = [
  { name: 'Jan', samples: 25, incidents: 10 },
  { name: 'Feb', samples: 45, incidents: 25 },
  { name: 'Mar', samples: 20, incidents: 40 },
  { name: 'Apr', samples: 40, incidents: 20 },
  { name: 'May', samples: 55, incidents: 15 },
  { name: 'Jun', samples: 70, incidents: 30 },
  { name: 'Jul', samples: 60, incidents: 50 },
  { name: 'Aug', samples: 75, incidents: 65 },
  { name: 'Sep', samples: 65, incidents: 70 },
  { name: 'Oct', samples: 50, incidents: 35 },
  { name: 'Nov', samples: 40, incidents: 20 },
  { name: 'Dec', samples: 60, incidents: 15 },
];

// --- Tag Status Card ---
const TagStatusCard = ({ title, count, change, icon: Icon, chartPoints }) => {
  const lineStrokeColor =
    title === 'Completed Tags' ? '#E91E63' : title === 'Active Tags' ? '#6AA84F' : '#E91E63';

  const tagColor = title === 'Active Tags' ? 'bg-green-600' : 'bg-pink-600';

  return (
    <div className="bg-gradient-to-br from-[#2e1b47] to-[#4a2a78] rounded-2xl p-4 text-white shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`p-2 rounded-lg mr-3 ${tagColor}`}>
            <Icon size={20} />
          </div>
          <span className="text-sm font-medium">{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <span
            className={`text-sm font-medium ${
              change.startsWith('+') ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {change}
          </span>
          <div className="w-12 h-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartPoints}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={lineStrokeColor}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <h4 className="text-2xl font-bold mt-2">{count}</h4>
    </div>
  );
};

// --- Tag Status Panel ---
const TagStatusPanel = () => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-white shadow-lg h-full">
    <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
      <h3 className="text-lg md:text-xl font-semibold">Tag Status</h3>
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-2 text-sm">
          <span>Start Date</span>
          <ChevronDown size={16} />
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span>End Date</span>
          <ChevronDown size={16} />
        </div>
        <div className="flex items-center gap-2 text-sm font-bold">
          <span>Today</span>
          <ChevronDown size={16} />
        </div>
        <button className="p-2 hover:bg-white/10 rounded-lg">
          <Download size={18} />
        </button>
      </div>
    </div>

    <div className="space-y-3">
      <TagStatusCard
        title="Completed Tags"
        count={102}
        change="+82"
        icon={CheckCircle}
        chartPoints={[{ value: 30 }, { value: 45 }, { value: 25 }, { value: 55 }]}
      />
      <TagStatusCard
        title="Active Tags"
        count={3}
        change="+02"
        icon={LayoutGrid}
        chartPoints={[{ value: 20 }, { value: 35 }, { value: 15 }, { value: 45 }]}
      />
      <TagStatusCard
        title="Pending Tags"
        count={0}
        change="+00"
        icon={Clock}
        chartPoints={[{ value: 10 }, { value: 25 }, { value: 15 }, { value: 30 }]}
      />
    </div>
  </div>
);

// --- Top Stat Card ---
const StatCard = ({ title, value, change, icon: Icon, chartDataPoints, chartColor }) => {
  const chartPoints = chartDataPoints.map((h) => ({ value: h }));

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-white shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm opacity-80">{title}</h4>
        <div className="p-2 rounded-full border border-white/30">
          <Icon size={14} className="opacity-80" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">{value}</h3>
        <div className="flex items-center gap-1 text-green-400 text-xs font-medium">
          <span className="text-lg leading-none">↗</span>
          <span>{change}</span>
        </div>
      </div>

      <div className="flex justify-end items-center mt-2 w-12 h-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartPoints}>
            <Line type="monotone" dataKey="value" stroke={chartColor} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// --- Main Component ---
import {facility_model} from '../../../assets'
import TagLog from './TagLogComponent';
const DashboardViewFacility = () => {
  return (
    <div className="-mx-4 sm:-mx-6 lg:-mx-8 min-h-screen relative w-full h-[calc(100vh_-_80px)] lg:h-[calc(100vh_-_92px)]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url('${facility_model}')`,
        }}
      />

      {/* Content */}
      <div className="relative h-full p-4 lg:p-6 space-y-6">
        {/* Facility Header */}
        <div className="p-4 bg-black/40 w-fit rounded-2xl backdrop-blur-md">
          <h1 className="text-xl md:text-2xl font-bold text-white">Comodore Facility</h1>
          <p className="text-sm md:text-lg opacity-80 text-white">Efab, Abuja, Nigeria.</p>
        </div>

        {/* Overview */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-white text-lg md:text-xl font-semibold opacity-90">Overview</h2>
          <div className="flex items-center gap-2 flex-wrap">
            {['Start Date', 'End Date', 'Monthly'].map((label, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-2 md:px-3 py-1.5 text-white text-xs md:text-sm border border-white/20 cursor-pointer hover:bg-white/20 transition"
              >
                {label !== 'Monthly' && <Calendar size={14} />}
                <span>{label}</span>
                <ChevronDown size={14} />
              </div>
            ))}
          </div>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard
            title="Total Tags"
            value={105}
            change="+84"
            icon={LayoutGrid}
            chartColor="#6AA84F"
            chartDataPoints={[30, 45, 25, 55, 40, 65]}
          />
          <StatCard
            title="Total Samples"
            value={105}
            change="+84"
            icon={Clock}
            chartColor="#E91E63"
            chartDataPoints={[40, 25, 55, 35, 65, 45]}
          />
          <StatCard
            title="Total Incidents"
            value={105}
            change="+84"
            icon={CheckCircle}
            chartColor="#6AA84F"
            chartDataPoints={[30, 45, 35, 60, 40, 55]}
          />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Panel */}
          <div className="lg:col-span-2">
            <TagStatusPanel />
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-[#1b1031] to-[#3a1b63] rounded-2xl p-4 md:p-6 text-white shadow-2xl h-full">
              <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                <h3 className="text-lg md:text-xl font-semibold">Tag Type</h3>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-white/10 rounded-lg text-white/70">
                    <Download size={18} />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-lg text-white/70">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                <div className="text-green-400 text-xs md:text-sm font-bold flex items-center">
                  <span className="text-lg leading-none">↗</span>
                  <span>+10.05% to last year</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-white/70 flex-wrap">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <Calendar size={14} />
                    <span>10/02/2023</span>
                    <ChevronDown size={14} />
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <span>End Date</span>
                    <ChevronDown size={14} />
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <span>Monthly</span>
                    <ChevronDown size={14} />
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <span>All</span>
                    <ChevronDown size={14} />
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2 text-xs md:text-sm">
                  <div className="w-3 h-3 bg-[#A78BFA] rounded-full"></div>
                  <span className="text-white/90">Samples</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm">
                  <div className="w-3 h-3 bg-[#F472B6] rounded-full"></div>
                  <span className="text-white/90">Incidents</span>
                </div>
              </div>

              {/* Line Chart */}
              <div className="h-64 md:h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" opacity={0.1} vertical={false} />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#E5E7EB', fontSize: 11 }}
                      interval={0}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#E5E7EB', fontSize: 11 }}
                      domain={[0, 100]}
                      tickCount={5}
                    />
                    <Line
                      type="monotone"
                      dataKey="samples"
                      stroke="#A78BFA"
                      strokeWidth={2}
                      dot={{ fill: '#A78BFA', r: 3 }}
                      activeDot={{ r: 5, fill: '#A78BFA' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="incidents"
                      stroke="#F472B6"
                      strokeWidth={2}
                      dot={{ fill: '#F472B6', r: 3 }}
                      activeDot={{ r: 5, fill: '#F472B6' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
       <TagLog/>
      </div>
    </div>
  );
};

export default DashboardViewFacility;


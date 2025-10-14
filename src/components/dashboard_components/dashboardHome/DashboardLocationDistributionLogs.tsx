import React, { useState } from "react";
import { Search, Printer, Download, Calendar } from "lucide-react";

interface LocationData {
  id: number;
  facility: string;
  location: string;
  rooms: number;
  samples: number;
  incidents: number;
  date: string;
  status: "Active" | "Pending";
}

const locationsData: LocationData[] = [
  {
    id: 1,
    facility: "Ramullo",
    location: "San Fra.",
    rooms: 395,
    samples: 55,
    incidents: 786,
    date: "2025-09-17",
    status: "Pending",
  },
  {
    id: 2,
    facility: "St. Napo",
    location: "Berkeley",
    rooms: 40,
    samples: 8,
    incidents: 1,
    date: "2025-09-17",
    status: "Active",
  },
];

const DashboardLocationDistributionLogs: React.FC = () => {
  const [selectedLocations, setSelectedLocations] = useState<number[]>([]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [month, setMonth] = useState<string>("Monthly");
  const [status, setStatus] = useState<string>("All");

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedLocations(locationsData.map((loc) => loc.id));
    } else {
      setSelectedLocations([]);
    }
  };

  const handleSelectLocation = (id: number) => {
    if (selectedLocations.includes(id)) {
      setSelectedLocations(selectedLocations.filter((locId) => locId !== id));
    } else {
      setSelectedLocations([...selectedLocations, id]);
    }
  };

  return (
    <div className="bg-white w-full pb-8">
      {/* Header */}
      <div className="pb-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 whitespace-nowrap mb-4">
            Location Distribution Log
          </h2>

          {/* Row 1: Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {/* Start Date */}
            <label className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 cursor-pointer">
              <Calendar size={14} className="text-gray-500" />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="cursor-pointer bg-transparent focus:outline-none"
              />
            </label>

            {/* End Date */}
            <label className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 cursor-pointer">
              <Calendar size={14} className="text-gray-500" />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="cursor-pointer bg-transparent focus:outline-none"
              />
            </label>

            {/* Monthly Dropdown */}
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 cursor-pointer focus:outline-none"
            >
              <option>Monthly</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>

            {/* Status Dropdown */}
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="px-3 py-1.5 bg-[#331C4A] text-white rounded-md text-sm cursor-pointer focus:outline-none"
            >
              <option>All</option>
              <option>Active</option>
              <option>Pending</option>
            </select>
          </div>
        </div>

        {/* Row 2: Search + Icons */}
        <div className="flex justify-end items-center gap-3">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, status, class...."
              className="w-72 px-4 py-2 pr-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Icons */}
          <Printer
            className="cursor-pointer text-gray-500 hover:text-gray-700"
            size={18}
          />
          <Download
            className="cursor-pointer text-gray-500 hover:text-gray-700"
            size={18}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-[#331C4A] text-white text-sm font-medium">
              <th className="py-3 px-6 text-left w-12">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={
                    selectedLocations.length === locationsData.length &&
                    locationsData.length > 0
                  }
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded cursor-pointer"
                />
              </th>
              <th className="py-3 px-6 text-left">Facility</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">No. Rooms</th>
              <th className="py-3 px-6 text-left">Samples</th>
              <th className="py-3 px-6 text-left">Incidents</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 text-sm">
            {locationsData.map((location, index) => (
              <tr
                key={location.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } border-b border-gray-200`}
              >
                <td className="py-4 px-6">
                  <input
                    type="checkbox"
                    checked={selectedLocations.includes(location.id)}
                    onChange={() => handleSelectLocation(location.id)}
                    className="w-4 h-4 text-purple-600 border-gray-300 rounded cursor-pointer"
                  />
                </td>
                <td className="py-4 px-6 font-medium text-gray-900">
                  {location.facility}
                </td>
                <td className="py-4 px-6">{location.location}</td>
                <td className="py-4 px-6">{location.rooms}</td>
                <td className="py-4 px-6">{location.samples}</td>
                <td className="py-4 px-6">{location.incidents}</td>
                <td className="py-4 px-6">{location.date}</td>
                <td className="py-4 px-6">
                  <span
                    className={`${
                      location.status === "Active"
                        ? "text-green-600"
                        : "text-yellow-500"
                    } font-medium`}
                  >
                    {location.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-gray-600 text-lg cursor-pointer hover:text-gray-800">
                    ⋮
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardLocationDistributionLogs;

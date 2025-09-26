// Version 1 good
// import React, { useState, useMemo } from "react";
// import {
//   FaMagnifyingGlass,
//   FaCalendarDays,
//   FaDownload,
//   FaTableCellsLarge,
//   FaBarsStaggered,
// } from "react-icons/fa6";

// interface Facility {
//   id: number;
//   name: string;
//   location: string;
//   totalTags: number;
//   status: "Active" | "Pending" | "Completed";
//   action: "Continue" | "Tag Now" | "View Report"
//   color?: string;
// }

// const DashboardFacilityListView: React.FC = () => {
//   const [activeTab, setActiveTab] = useState("All Facilities");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [viewMode, setViewMode] = useState("table");
//   const [selectedFacilities, setSelectedFacilities] = useState<number[]>([]);

//   const facilities: Facility[] = [
//     { id: 1, name: "Comodore Factory", location: "Efab, Abuja. Nigeria", totalTags: 39, status: "Active",action:"Continue",color:"green" },
//     { id: 2, name: "Eagle Prime Facility", location: "Wuse, Abuja. Nigeria", totalTags: 348, status: "Pending",action:"Tag Now",color:"yellow" },
//     { id: 3, name: "Krystine Reasearch Insti...", location: "Garki, Abuja. Nigeria", totalTags: 9, status: "Active",action:"Continue",color:"green"},
//     { id: 4, name: "Polish port", location: "Guzape, Abuja. Nigeria", totalTags: 988, status: "Completed",action:"View Report",color:"red" },
//     { id: 5, name: "Sampfield Facility", location: "Garki, Abuja. Nigeria", totalTags: 8796, status: "Active",action:"Continue",color:"green" },
//   ];

//   const tabs = ["All Facilities", "Active Facilities", "Pending Facilities", "Completed Facilities"];

//   const filteredFacilities = useMemo(() => {
//     return facilities.filter((facility) => {
//       const matchesTab =
//         activeTab === "All Facilities" ||
//         (activeTab === "Active Facilities" && facility.status === "Active") ||
//         (activeTab === "Pending Facilities" && facility.status === "Pending") ||
//         (activeTab === "Completed Facilities" && facility.status === "Completed");

//       const matchesSearch =
//         facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         facility.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         facility.status.toLowerCase().includes(searchQuery.toLowerCase());

//       return matchesTab && matchesSearch;
//     });
//   }, [activeTab, searchQuery, facilities]);

//   const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.checked) {
//       setSelectedFacilities(filteredFacilities.map((f) => f.id));
//     } else {
//       setSelectedFacilities([]);
//     }
//   };

//   const handleSelectFacility = (id: number) => {
//     setSelectedFacilities((prev) =>
//       prev.includes(id) ? prev.filter((_id) => _id !== id) : [...prev, id]
//     );
//   };

//   const allFacilitiesSelected =
//     filteredFacilities.length > 0 && selectedFacilities.length === filteredFacilities.length;
//   const someFacilitiesSelected =
//     selectedFacilities.length > 0 && !allFacilitiesSelected;

//   return (
//     <div className="overflow-hidden font-sans text-sm">
//       {/* Tabs */}
//       <div className="flex gap-2 p-4">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-5 py-2 rounded-full text-xs font-medium transition-colors 
//               ${
//                 activeTab === tab
//                   ? "bg-[#3C0A6D] text-white"
//                   : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
//               }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Controls */}
//       <div className="p-4 bg-white border-b border-gray-200">
//         <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
//           {/* Search */}
//           <div className="relative flex-1 max-w-md">
//             <FaMagnifyingGlass className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//             <input
//               type="text"
//               placeholder="Search by Facility, Status, Locat...."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3C0A6D] text-xs"
//             />
//           </div>

//           {/* Filters */}
//           <div className="flex flex-wrap gap-2 items-center">
//             <div className="relative">
//               <FaCalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
//               <input
//                 type="text"
//                 onFocus={(e) => (e.target.type = "date")}
//                 onBlur={(e) => (e.target.type = "text")}
//                 placeholder="Start Date"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 className="pl-9 pr-3 py-2.5 border border-gray-300 rounded-md text-xs focus:ring-2 focus:ring-[#3C0A6D]"
//               />
//             </div>

//             <div className="relative">
//               <FaCalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
//               <input
//                 type="text"
//                 onFocus={(e) => (e.target.type = "date")}
//                 onBlur={(e) => (e.target.type = "text")}
//                 placeholder="End Date"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 className="pl-9 pr-3 py-2.5 border border-gray-300 rounded-md text-xs focus:ring-2 focus:ring-[#3C0A6D]"
//               />
//             </div>

//             <select className="px-3 py-2.5 border border-gray-300 rounded-md text-xs bg-white focus:ring-2 focus:ring-[#3C0A6D]">
//               <option>Monthly</option>
//               <option>Weekly</option>
//               <option>Daily</option>
//             </select>

//             {/* View Mode */}
//             <div className="flex border border-gray-300 rounded-md overflow-hidden">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2.5 ${
//                   viewMode === "grid" ? "bg-[#3C0A6D] text-white" : "text-gray-500 hover:bg-gray-100"
//                 }`}
//               >
//                 <FaTableCellsLarge className="h-4 w-4" />
//               </button>
//               <button
//                 onClick={() => setViewMode("table")}
//                 className={`p-2.5 ${
//                   viewMode === "table" ? "bg-[#3C0A6D] text-white" : "text-gray-500 hover:bg-gray-100"
//                 }`}
//               >
//                 <FaBarsStaggered className="h-4 w-4" />
//               </button>
//             </div>

//             <button className="flex items-center gap-2 px-3 py-2.5 bg-[#3C0A6D] text-white rounded-md hover:bg-purple-800 text-xs">
//               <FaDownload className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto bg-white border border-gray-200 rounded-md mt-4">
//         <table className="w-full">
//           <thead className="bg-[#3C0A6D] text-white text-xs">
//             <tr>
//               <th className="px-4 py-3 text-left">
//                 <input
//                   type="checkbox"
//                   className="rounded border-white text-[#3C0A6D] bg-white h-4 w-4"
//                   checked={allFacilitiesSelected}
//                   onChange={handleSelectAll}
//                   ref={(input) => {
//                     if (input) {
//                       input.indeterminate = someFacilitiesSelected;
//                     }
//                   }}
//                 />
//               </th>
//               <th className="px-4 py-3 text-left font-medium">Facility Name</th>
//               <th className="px-4 py-3 text-left font-medium">Location</th>
//               <th className="px-4 py-3 text-left font-medium">Total Tags</th>
//               <th className="px-4 py-3 text-left font-medium">Status</th>
//               <th className="px-4 py-3 text-left font-medium">Action</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200 text-xs">
//             {filteredFacilities.map((facility) => (
//               <tr key={facility.id} className="hover:bg-gray-50">
//                 <td className="px-4 py-3">
//                   <input
//                     type="checkbox"
//                     className="rounded border-gray-300 text-[#3C0A6D] h-4 w-4"
//                     checked={selectedFacilities.includes(facility.id)}
//                     onChange={() => handleSelectFacility(facility.id)}
//                   />
//                 </td>
//                 <td className="px-4 py-3 font-medium text-gray-900">{facility.name}</td>
//                 <td className="px-4 py-3 text-gray-600">{facility.location}</td>
//                 <td className="px-4 py-3 font-medium text-gray-900">{facility.totalTags}</td>
//                 <td className="px-4 py-3">
//                   <span className="inline-flex items-center">
//                     {facility.name === "Sampfield Facility" && (
//                       <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
//                     )}
//                     <span className={`text-${facility.color}-600 font-medium`}>{facility.status}</span>
//                   </span>
//                 </td>
//                 <td className="px-4 py-3">
//                   <button className="text-[#3C0A6D] hover:text-purple-800 font-medium">{facility.action}</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {filteredFacilities.length === 0 && (
//         <div className="text-center py-12 text-gray-500 text-sm">
//           No facilities found matching your criteria.
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardFacilityListView;


import React, { useState, useMemo } from "react";
import {
  FaMagnifyingGlass,
  FaCalendarDays,
  FaDownload,
  FaTableCellsLarge, // Grid Icon
  FaBarsStaggered, // List/Table Icon
  FaLocationDot, // Location pin icon
} from "react-icons/fa6";

interface Facility {
  id: number;
  name: string;
  location: string;
  totalTags: number;
  status: "Active" | "Pending" | "Completed";
  action: "Continue" | "Tag Now" | "View Report";
  statusColor: "green" | "yellow" | "red"; // Added specific colors for status dot/tag
  imageUrl?: string; // Added for grid view
}

const DashboardFacilityListView: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All Facilities");
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'grid'
  const [selectedFacilities, setSelectedFacilities] = useState<number[]>([]);

  // Updated facilities data with image URLs and status colors
  const facilities: Facility[] = [
    {
      id: 1,
      name: "Comodore Factory",
      location: "Efab, Abuja. Nigeria",
      totalTags: 344, // Updated count to match image
      status: "Active",
      action: "Continue",
      statusColor: "green",
      imageUrl: "https://via.placeholder.com/300x200?text=Comodore+Factory", // Placeholder image
    },
    {
      id: 2,
      name: "Eagle Prime Facility",
      location: "Wuse, Abuja. Nigeria",
      totalTags: 2, // Updated count to match image
      status: "Pending",
      action: "Tag Now",
      statusColor: "yellow",
      imageUrl: "https://via.placeholder.com/300x200?text=Eagle+Prime+Facility", // Placeholder image
    },
    {
      id: 3,
      name: "Krestlyn Research Ins...", // Corrected name to match image
      location: "Garki, Abuja. Nigeria",
      totalTags: 1, // Updated count to match image
      status: "Completed", // Updated status to match image
      action: "Tag Now", // Updated action to match image
      statusColor: "red", // Updated status color to match image
      imageUrl: "https://via.placeholder.com/300x200?text=Krestlyn+Research", // Placeholder image
    },
    {
      id: 4,
      name: "Sampfield Facility", // Moved to match image order for "Bond Street"
      location: "Garki, Abuja. Nigeria",
      totalTags: 10, // Updated count to match image
      status: "Completed", // Updated status to match image
      action: "Tag Now", // Updated action to match image
      statusColor: "red",
      imageUrl: "https://via.placeholder.com/300x200?text=Bond+Street", // Placeholder image
    },
    {
      id: 5,
      name: "Granule Mill Facility",
      location: "Garki, Abuja. Nigeria",
      totalTags: 0, // Updated count to match image
      status: "Active", // Updated status to match image
      action: "Continue", // Updated action to match image
      statusColor: "green",
      imageUrl: "https://via.placeholder.com/300x200?text=C", // Placeholder for initial C
    },
    {
      id: 6,
      name: "Beefeater Bundles Facility",
      location: "Garki, Abuja. Nigeria",
      totalTags: 39, // Updated count to match image
      status: "Pending", // Updated status to match image
      action: "Tag Now", // Updated action to match image
      statusColor: "yellow",
      imageUrl: "https://via.placeholder.com/300x200?text=Beefeater+Bundles", // Placeholder image
    },
  ];

  const tabs = ["All Facilities", "Active Facilities", "Pending Facilities", "Completed Facilities"];

  const filteredFacilities = useMemo(() => {
    return facilities.filter((facility) => {
      const matchesTab =
        activeTab === "All Facilities" ||
        (activeTab === "Active Facilities" && facility.status === "Active") ||
        (activeTab === "Pending Facilities" && facility.status === "Pending") ||
        (activeTab === "Completed Facilities" && facility.status === "Completed");

      const matchesSearch =
        facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        facility.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        facility.status.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery, facilities]);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedFacilities(filteredFacilities.map((f) => f.id));
    } else {
      setSelectedFacilities([]);
    }
  };

  const handleSelectFacility = (id: number) => {
    setSelectedFacilities((prev) =>
      prev.includes(id) ? prev.filter((_id) => _id !== id) : [...prev, id]
    );
  };

  const allFacilitiesSelected =
    filteredFacilities.length > 0 && selectedFacilities.length === filteredFacilities.length;
  const someFacilitiesSelected =
    selectedFacilities.length > 0 && !allFacilitiesSelected;

  // Helper for status tag background color
  const getStatusBgColor = (statusColor: "green" | "yellow" | "red") => {
    switch (statusColor) {
      case "green": return "bg-green-500";
      case "yellow": return "bg-yellow-500";
      case "red": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="overflow-hidden font-sans text-sm">
      {/* Tabs */}
      <div className="flex gap-2 p-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-md text-xs font-medium transition-colors
              ${
                activeTab === tab
                  ? "bg-[#3C0A6D] text-white" // Active tab
                  : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50" // Inactive tab
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="p-4 bg-white border-b border-gray-200">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <FaMagnifyingGlass className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search by Facility, Status, Locat...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3C0A6D] text-xs"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <div className="relative">
              <FaCalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="pl-9 pr-3 py-2.5 border border-gray-300 rounded-md text-xs focus:ring-2 focus:ring-[#3C0A6D]"
              />
            </div>

            <div className="relative">
              <FaCalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="pl-9 pr-3 py-2.5 border border-gray-300 rounded-md text-xs focus:ring-2 focus:ring-[#3C0A6D]"
              />
            </div>

            <select className="px-3 py-2.5 border border-gray-300 rounded-md text-xs bg-white focus:ring-2 focus:ring-[#3C0A6D]">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>

            {/* View Mode */}
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 ${
                  viewMode === "grid" ? "bg-[#3C0A6D] text-white" : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <FaTableCellsLarge className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-2.5 ${
                  viewMode === "table" ? "bg-[#3C0A6D] text-white" : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <FaBarsStaggered className="h-4 w-4" />
              </button>
            </div>

            <button className="flex items-center gap-2 px-3 py-2.5 bg-[#3C0A6D] text-white rounded-md hover:bg-purple-800 text-xs">
              <FaDownload className="h-4 w-4" /> Download
            </button>
          </div>
        </div>
      </div>

      {/* Conditional Rendering for Table vs Grid View */}
      {viewMode === "table" ? (
        // Table View
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-md mt-4">
          <table className="w-full">
            <thead className="bg-[#3C0A6D] text-white text-xs">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    className="rounded border-white text-[#3C0A6D] bg-white h-4 w-4"
                    checked={allFacilitiesSelected}
                    onChange={handleSelectAll}
                    ref={(input) => {
                      if (input) {
                        input.indeterminate = someFacilitiesSelected;
                      }
                    }}
                  />
                </th>
                <th className="px-4 py-3 text-left font-medium">Facility Name</th>
                <th className="px-4 py-3 text-left font-medium">Location</th>
                <th className="px-4 py-3 text-left font-medium">Total Tags</th>
                <th className="px-4 py-3 text-left font-medium">Status</th>
                <th className="px-4 py-3 text-left font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-xs">
              {filteredFacilities.map((facility) => (
                <tr key={facility.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-[#3C0A6D] h-4 w-4"
                      checked={selectedFacilities.includes(facility.id)}
                      onChange={() => handleSelectFacility(facility.id)}
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">{facility.name}</td>
                  <td className="px-4 py-3 text-gray-600">{facility.location}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{facility.totalTags}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center">
                      <span className={`w-2 h-2 ${getStatusBgColor(facility.statusColor)} rounded-full mr-2`}></span>
                      <span className={`text-${facility.statusColor}-600 font-medium`}>{facility.status}</span>
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-[#3C0A6D] hover:text-purple-800 font-medium">{facility.action}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Grid View
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-2">
          {filteredFacilities.map((facility) => (
            <div key={facility.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative h-40 bg-gray-100 flex items-center justify-center">
                {facility.imageUrl ? (
                  <img
                    src={facility.imageUrl}
                    alt={facility.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl font-bold text-gray-400">{facility.name.charAt(0)}</span>
                )}
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-medium ${getStatusBgColor(facility.statusColor)} flex items-center gap-1`}>
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  {facility.status}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{facility.name}</h3>
                <p className="text-xs text-gray-600 flex items-center gap-1 mb-2">
                  <FaLocationDot className="h-3 w-3 text-purple-600" /> {facility.location}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-gray-500">{facility.totalTags} Tags</span>
                </div>
                <button className="w-full py-2 bg-[#3C0A6D] text-white rounded-md text-xs font-medium hover:bg-purple-800 transition-colors">
                  {facility.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredFacilities.length === 0 && (
        <div className="text-center py-12 text-gray-500 text-sm">
          No facilities found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default DashboardFacilityListView;
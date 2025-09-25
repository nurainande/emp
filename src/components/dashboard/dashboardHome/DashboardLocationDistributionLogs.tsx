// import React, { useState } from 'react';
// // import { IoIosSearch, IoIosPrint, IoIosDownload, IoIosMore } from 'react-icons/io'; // Example from react-icons
// import {
//   MdOutlineSearch,
//   MdOutlinePrint,
//   MdOutlineDownload,
//   MdOutlineMoreVert,
//   MdArrowDropDown,
// } from 'react-icons/md';

// // Data structure for a single row in the table
// interface LocationData {
//   id: number;
//   facility: string;
//   location: string;
//   rooms: number;
//   samples: number;
//   incidents: number;
//   activeIssues: number;
//   resolvedIssues: number;
// }

// // Hardcoded dummy data for the table
// const locationsData: LocationData[] = [
//   {
//     id: 1,
//     facility: 'Ramullo',
//     location: 'San Fra.',
//     rooms: 395,
//     samples: 55,
//     incidents: 786,
//     activeIssues: 6,
//     resolvedIssues: 8,
//   },
//   {
//     id: 2,
//     facility: 'St. Napo',
//     location: 'Berkeley',
//     rooms: 40,
//     samples: 8,
//     incidents: 1,
//     activeIssues: 0,
//     resolvedIssues: 1,
//   },
// ];

// const DashboardLocationDistributionLogs: React.FC = () => {
//   const [selectedLocations, setSelectedLocations] = useState<number[]>([]);

//   const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.checked) {
//       const allIds = locationsData.map((loc) => loc.id);
//       setSelectedLocations(allIds);
//     } else {
//       setSelectedLocations([]);
//     }
//   };

//   const handleSelectLocation = (id: number) => {
//     if (selectedLocations.includes(id)) {
//       setSelectedLocations(selectedLocations.filter((locId) => locId !== id));
//     } else {
//       setSelectedLocations([...selectedLocations, id]);
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm w-full">
//       {/* Header section */}
//       <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 whitespace-nowrap">
//           Location Distribution Log
//         </h2>
//         <div className="flex flex-wrap items-center gap-2 md:gap-4 w-full md:w-auto">
//           {/* Date pickers and dropdowns */}
//           <div className="flex items-center gap-2 text-sm text-gray-600">
//             <span className="flex items-center gap-1 p-2 border rounded-md">
//               <span className="text-gray-500">Start Date</span>
//               <MdArrowDropDown className="text-xl" />
//             </span>
//             <span className="flex items-center gap-1 p-2 border rounded-md">
//               <span className="text-gray-500">End Date</span>
//               <MdArrowDropDown className="text-xl" />
//             </span>
//             <span className="flex items-center gap-1 p-2 border rounded-md">
//               <span className="text-gray-500">Monthly</span>
//               <MdArrowDropDown className="text-xl" />
//             </span>
//             <span className="flex items-center gap-1 p-2 border rounded-md">
//               <span className="text-gray-500">All</span>
//               <MdArrowDropDown className="text-xl" />
//             </span>
//           </div>

//           {/* Search bar and action icons */}
//           <div className="relative w-full max-w-sm">
//             <input
//               type="text"
//               placeholder="Search by name, status, class...."
//               className="w-full px-4 py-2 pr-10 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <MdOutlineSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//           </div>

//           <div className="flex items-center gap-2 text-lg text-gray-500">
//             <MdOutlinePrint className="cursor-pointer hover:text-gray-700" />
//             <MdOutlineDownload className="cursor-pointer hover:text-gray-700" />
//           </div>
//         </div>
//       </div>

//       {/* Table section */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto">
//           {/* Table header */}
//           <thead>
//             <tr className="bg-gray-800 text-white uppercase text-sm leading-normal">
//               <th className="py-3 px-6 text-left rounded-tl-lg">
//                 <input
//                   type="checkbox"
//                   onChange={handleSelectAll}
//                   checked={
//                     selectedLocations.length === locationsData.length &&
//                     locationsData.length > 0
//                   }
//                   className="form-checkbox text-blue-500 rounded focus:ring-0 cursor-pointer"
//                 />
//               </th>
//               <th className="py-3 px-6 text-left">Facility</th>
//               <th className="py-3 px-6 text-left">Location</th>
//               <th className="py-3 px-6 text-left">No. Rooms</th>
//               <th className="py-3 px-6 text-left">Samples</th>
//               <th className="py-3 px-6 text-left">Incidents</th>
//               <th className="py-3 px-6 text-left">Active Issues</th>
//               <th className="py-3 px-6 text-left">Resolved Issues</th>
//               <th className="py-3 px-6 text-left rounded-tr-lg">Action</th>
//             </tr>
//           </thead>
//           {/* Table body */}
//           <tbody className="text-gray-600 text-sm font-light">
//             {locationsData.map((location) => (
//               <tr
//                 key={location.id}
//                 className="border-b border-gray-200 hover:bg-gray-100"
//               >
//                 <td className="py-3 px-6 whitespace-nowrap">
//                   <input
//                     type="checkbox"
//                     checked={selectedLocations.includes(location.id)}
//                     onChange={() => handleSelectLocation(location.id)}
//                     className="form-checkbox text-blue-500 rounded focus:ring-0 cursor-pointer"
//                   />
//                 </td>
//                 <td className="py-3 px-6 whitespace-nowrap">
//                   {location.facility}
//                 </td>
//                 <td className="py-3 px-6 whitespace-nowrap">
//                   {location.location}
//                 </td>
//                 <td className="py-3 px-6 whitespace-nowrap">
//                   {location.rooms}
//                 </td>
//                 <td className="py-3 px-6 whitespace-nowrap">
//                   {location.samples}
//                 </td>
//                 <td className="py-3 px-6 whitespace-nowrap">
//                   {location.incidents}
//                 </td>
//                 <td className="py-3 px-6 whitespace-nowrap">
//                   {location.activeIssues}
//                 </td>
//                 <td className="py-3 px-6 whitespace-nowrap">
//                   {location.resolvedIssues}
//                 </td>
//                 <td className="py-3 px-6 text-center">
//                   <MdOutlineMoreVert className="text-gray-500 text-lg cursor-pointer hover:text-gray-700" />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DashboardLocationDistributionLogs;


import React, { useState } from 'react';

// Data structure for a single row in the table
interface LocationData {
  id: number;
  facility: string;
  location: string;
  rooms: number;
  samples: number;
  incidents: number;
  activeIssues: number;
  resolvedIssues: number;
}

// Hardcoded dummy data for the table
const locationsData: LocationData[] = [
  {
    id: 1,
    facility: 'Ramullo',
    location: 'San Fra.',
    rooms: 395,
    samples: 55,
    incidents: 786,
    activeIssues: 6,
    resolvedIssues: 8,
  },
  {
    id: 2,
    facility: 'St. Napo',
    location: 'Berkeley',
    rooms: 40,
    samples: 8,
    incidents: 1,
    activeIssues: 0,
    resolvedIssues: 1,
  },
];

const DashboardLocationDistributionLogs: React.FC = () => {
  const [selectedLocations, setSelectedLocations] = useState<number[]>([]);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds = locationsData.map((loc) => loc.id);
      setSelectedLocations(allIds);
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
    <div className="bg-white w-full">
      {/* Header section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-0 p-6 pb-4">
        <h2 className="text-xl font-semibold text-gray-800 whitespace-nowrap">
          Location Distribution Log
        </h2>
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Date pickers and dropdowns */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 cursor-pointer hover:bg-gray-50">
              <span className="text-gray-500 text-sm">📅</span>
              <span>Start Date</span>
              <span className="text-gray-500 text-sm">▼</span>
            </div>
            <div className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 cursor-pointer hover:bg-gray-50">
              <span className="text-gray-500 text-sm">📅</span>
              <span>End Date</span>
              <span className="text-gray-500 text-sm">▼</span>
            </div>
            <div className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 cursor-pointer hover:bg-gray-50">
              <span>Monthly</span>
              <span className="text-gray-500 text-sm">▼</span>
            </div>
            <div className="flex items-center gap-1 px-3 py-2 bg-purple-700 text-white rounded-md text-sm cursor-pointer hover:bg-purple-800">
              <span>All</span>
              <span className="text-white text-sm">▼</span>
            </div>
          </div>

          {/* Search bar and action icons */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, status, class...."
              className="w-72 px-4 py-2 pr-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg cursor-pointer">🔍</span>
          </div>

          <div className="flex items-center gap-2 text-lg text-gray-500">
            <span className="cursor-pointer hover:text-gray-700 text-lg">🖨️</span>
            <span className="cursor-pointer hover:text-gray-700 text-lg">⬇️</span>
          </div>
        </div>
      </div>

      {/* Table section */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          {/* Table header */}
          <thead>
            <tr className="bg-purple-800 text-white text-sm font-medium">
              <th className="py-4 px-6 text-left w-12">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={
                    selectedLocations.length === locationsData.length &&
                    locationsData.length > 0
                  }
                  className="w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500 focus:ring-2 cursor-pointer"
                />
              </th>
              <th className="py-4 px-6 text-left font-medium">Facility</th>
              <th className="py-4 px-6 text-left font-medium">Location</th>
              <th className="py-4 px-6 text-left font-medium">No. Rooms</th>
              <th className="py-4 px-6 text-left font-medium">Samples</th>
              <th className="py-4 px-6 text-left font-medium">Incidents</th>
              <th className="py-4 px-6 text-left font-medium">Active Issues</th>
              <th className="py-4 px-6 text-left font-medium">Resolved Issues</th>
              <th className="py-4 px-6 text-left font-medium w-20">Action</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-gray-700 text-sm">
            {locationsData.map((location, index) => (
              <tr
                key={location.id}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 border-b border-gray-200`}
              >
                <td className="py-4 px-6">
                  <input
                    type="checkbox"
                    checked={selectedLocations.includes(location.id)}
                    onChange={() => handleSelectLocation(location.id)}
                    className="w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500 focus:ring-2 cursor-pointer"
                  />
                </td>
                <td className="py-4 px-6 font-medium text-gray-900">
                  {location.facility}
                </td>
                <td className="py-4 px-6">
                  {location.location}
                </td>
                <td className="py-4 px-6">
                  {location.rooms}
                </td>
                <td className="py-4 px-6">
                  {location.samples}
                </td>
                <td className="py-4 px-6">
                  {location.incidents}
                </td>
                <td className="py-4 px-6">
                  {location.activeIssues}
                </td>
                <td className="py-4 px-6">
                  {location.resolvedIssues}
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="text-gray-500 text-lg cursor-pointer hover:text-gray-700 inline-block">⋮</span>
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
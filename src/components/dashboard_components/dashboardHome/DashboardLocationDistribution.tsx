import React, { useState } from "react";
import { Calendar, Search, ChevronLeft, ChevronRight, Filter } from "lucide-react";

interface MarkerData {
  id: number;
  type: "sample" | "incident";
  x: number; // percentage left
  y: number; // percentage top
  date: string;
}

interface RoomProps {
  name: string;
  markers: MarkerData[];
}

const Marker: React.FC<{ marker: MarkerData }> = ({ marker }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={`absolute w-3 h-3 rounded-full cursor-pointer ${
        marker.type === "sample" ? "bg-purple-500" : "bg-pink-500"
      }`}
      style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
      onClick={() => setShowTooltip(!showTooltip)}
    >
      {showTooltip && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-xs border border-gray-200 shadow rounded px-2 py-1">
          {marker.type === "sample" ? "Sample" : "Incident"} <br />
          {marker.date}
        </div>
      )}
    </div>
  );
};

const Room: React.FC<RoomProps> = ({ name, markers }) => (
  <div className="relative border border-gray-300 h-64 p-2 overflow-hidden bg-white">
    <span className="absolute text-sm font-medium bottom-2 right-2">{name}</span>
    {markers.map((marker) => (
      <Marker key={marker.id} marker={marker} />
    ))}
  </div>
);

const LocationDistribution: React.FC = () => {
  // dummy marker data
  const markerData: Record<string, MarkerData[]> = {
    "Lab 1": [
      { id: 1, type: "incident", x: 20, y: 30, date: "2023-10-01" },
      { id: 2, type: "sample", x: 70, y: 50, date: "2023-10-02" },
    ],
    "Lab 2": [
      { id: 3, type: "incident", x: 10, y: 20, date: "2023-10-01" },
      { id: 4, type: "sample", x: 40, y: 70, date: "2023-10-02" },
    ],
    "Chemical Room": [
      { id: 5, type: "sample", x: 30, y: 30, date: "2023-10-01" },
      { id: 6, type: "incident", x: 50, y: 50, date: "2023-10-02" },
      { id: 7, type: "sample", x: 35, y: 60, date: "2023-10-03" },
      { id: 8, type: "sample", x: 75, y: 45, date: "2023-10-04" },
    ],
    "Wash Room": [
      { id: 9, type: "incident", x: 50, y: 25, date: "2023-10-01" },
      { id: 10, type: "sample", x: 60, y: 30, date: "2023-10-02" },
      { id: 11, type: "sample", x: 65, y: 35, date: "2023-10-03" },
      { id: 12, type: "sample", x: 75, y: 65, date: "2023-10-04" },
    ],
    "Specimen Room": [
      { id: 13, type: "sample", x: 15, y: 60, date: "2023-10-01" },
      { id: 14, type: "incident", x: 35, y: 45, date: "2023-10-02" },
      { id: 15, type: "sample", x: 50, y: 55, date: "2023-10-03" },
      { id: 16, type: "incident", x: 70, y: 50, date: "2023-10-04" },
      { id: 17, type: "sample", x: 85, y: 70, date: "2023-10-05" },
    ],
  };

  return (
    <div className="p-6 w-full">
      {/* Top Section */}
      <div className="mb-6 gap-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Location Distribution</h1>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm bg-white">
              <Calendar className="w-4 h-4" /> 10/02/2023
            </button>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm bg-white">
              <option>Monthly</option>
              <option>Weekly</option>
            </select>
            <button className="flex items-center gap-1 px-3 py-1 border-none rounded text-sm bg-primary text-white">
              All <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-sm text-red-500 font-medium">+10.05% to last year</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-gray-300 rounded px-3 py-1 bg-white">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search by Facility, Room..."
                className="outline-none text-sm px-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-between gap-4 mb-4">
        <div className="flex gap-4">
          <span className="flex items-center gap-1 text-sm">
            <span className="w-3 h-3 rounded-full bg-purple-500 inline-block"></span> Samples
          </span>
          <span className="flex items-center gap-1 text-sm">
            <span className="w-3 h-3 rounded-full bg-pink-500 inline-block"></span> Incidents
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 border border-gray-300 rounded bg-white">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm">1 / 3</span>
          <button className="p-1 border border-gray-300 rounded bg-white">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

     
     <h2 className="text-center mb-4 ">
          Pierro Facility
        </h2>
      {/* Facility Grid */}
      <div className="relative border border-gray-300 rounded-lg overflow-hidden min-h-[500px] bg-white">
        {/* <h2 className="absolute top-3 left-1/2 transform -translate-x-1/2 font-medium z-10">
          Pierro Facility
        </h2> */}
        <div className="grid grid-cols-2 grid-rows-2 h-[500px]">
          <Room name="Lab 1" markers={markerData["Lab 1"]} />
          <Room name="Chemical Room" markers={markerData["Chemical Room"]} />
          <Room name="Lab 2" markers={markerData["Lab 2"]} />
          <Room name="Wash Room" markers={markerData["Wash Room"]} />
        </div>
        <div className="h-64 border-t border-gray-300">
          <Room name="Specimen Room" markers={markerData["Specimen Room"]} />
        </div>
      </div>
    </div>
  );
};

export default LocationDistribution;
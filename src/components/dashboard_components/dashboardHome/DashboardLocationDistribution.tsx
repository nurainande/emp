import React, { useState } from 'react';
import { Calendar, Search, Menu, ChevronLeft, ChevronRight } from 'lucide-react';

const DashboardLocationDistribution = () => {
  const [selectedDate, setSelectedDate] = useState('10/02/2023');
  const [viewMode, setViewMode] = useState('Monthly');
  
  // Sample data for dots positioning
  const roomData = {
    'Lab 1': {
      samples: [
        { x: 15, y: 40 },
        { x: 75, y: 35 },
      ],
      incidents: [
        { x: 55, y: 30 },
        { x: 85, y: 25 },
        { x: 90, y: 15 },
        { x: 95, y: 8 },
      ]
    },
    'Chemical Room': {
      samples: [
        { x: 20, y: 60 },
      ],
      incidents: [
        { x: 35, y: 50 },
        { x: 60, y: 45 },
        { x: 15, y: 80 },
        { x: 85, y: 75 },
      ]
    },
    'Lab 2': {
      samples: [
        { x: 15, y: 40 },
      ],
      incidents: [
        { x: 70, y: 55 },
        { x: 80, y: 45 },
      ]
    },
    'Wash Room': {
      samples: [
        { x: 75, y: 35 },
      ],
      incidents: []
    },
    'Specimen Room': {
      samples: [
        { x: 35, y: 35 },
        { x: 75, y: 55 },
      ],
      incidents: [
        { x: 15, y: 80 },
        { x: 55, y: 75 },
        { x: 90, y: 85 },
      ]
    }
  };

  const centerProfileImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23d4a574'/%3E%3Ccircle cx='50' cy='40' r='15' fill='%23f5f5f5'/%3E%3Cpath d='M25 75 Q50 60 75 75' fill='%23f5f5f5'/%3E%3C/svg%3E";

  return (
    <div className="w-full max-w-6xl mx-auto bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Location Distribution</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{selectedDate}</span>
            <span>End Date</span>
            <select 
              value={viewMode} 
              onChange={(e) => setViewMode(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
            <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">All</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-600 text-sm">+10.05%</span>
          <span className="text-gray-400 text-sm">from last year</span>
        </div>
      </div>

      {/* Search and Legend */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by Facility, Room, Target..."
              className="pl-10 pr-4 py-2 border rounded-lg w-80"
            />
          </div>
          <button className="p-2 border rounded">
            <Menu className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
            <span className="text-sm">Samples</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span className="text-sm">Incidents</span>
          </div>
          <div className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4 cursor-pointer" />
            <span className="text-sm">1 / 3</span>
            <ChevronRight className="w-4 h-4 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Facility Layout */}
      <div className="relative p-8">
        <div className="text-center mb-8">
          <h2 className="text-lg font-medium mb-4">Pierro Facility</h2>
          <div className="relative mx-auto w-16 h-16">
            <img 
              src={centerProfileImage} 
              alt="Profile" 
              className="w-full h-full rounded-full border-2 border-gray-200"
            />
          </div>
        </div>

        {/* Room Layout Grid */}
        <div className="grid grid-cols-2 gap-0 border border-gray-300">
          {/* Top Row */}
          <div className="relative border-r border-b border-gray-300 h-64 p-4">
            <div className="absolute top-4 left-4">
              <span className="text-sm font-medium">Lab 1</span>
            </div>
            {/* Render dots for Lab 1 */}
            {roomData['Lab 1'].samples.map((dot, idx) => (
              <div
                key={`lab1-sample-${idx}`}
                className="absolute w-3 h-3 bg-pink-400 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
            {roomData['Lab 1'].incidents.map((dot, idx) => (
              <div
                key={`lab1-incident-${idx}`}
                className="absolute w-3 h-3 bg-purple-600 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
          </div>

          <div className="relative border-b border-gray-300 h-64 p-4">
            <div className="absolute top-4 left-4">
              <span className="text-sm font-medium">Chemical Room</span>
            </div>
            {/* Render dots for Chemical Room */}
            {roomData['Chemical Room'].samples.map((dot, idx) => (
              <div
                key={`chem-sample-${idx}`}
                className="absolute w-3 h-3 bg-pink-400 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
            {roomData['Chemical Room'].incidents.map((dot, idx) => (
              <div
                key={`chem-incident-${idx}`}
                className="absolute w-3 h-3 bg-purple-600 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="relative border-r border-gray-300 h-64 p-4">
            <div className="absolute bottom-4 left-4">
              <span className="text-sm font-medium">Lab 2</span>
            </div>
            {/* Render dots for Lab 2 */}
            {roomData['Lab 2'].samples.map((dot, idx) => (
              <div
                key={`lab2-sample-${idx}`}
                className="absolute w-3 h-3 bg-pink-400 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
            {roomData['Lab 2'].incidents.map((dot, idx) => (
              <div
                key={`lab2-incident-${idx}`}
                className="absolute w-3 h-3 bg-purple-600 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
          </div>

          <div className="relative h-64 p-4">
            <div className="absolute bottom-4 right-4">
              <span className="text-sm font-medium">Wash Room</span>
            </div>
            {/* Render dots for Wash Room */}
            {roomData['Wash Room'].samples.map((dot, idx) => (
              <div
                key={`wash-sample-${idx}`}
                className="absolute w-3 h-3 bg-pink-400 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
            {roomData['Wash Room'].incidents.map((dot, idx) => (
              <div
                key={`wash-incident-${idx}`}
                className="absolute w-3 h-3 bg-purple-600 rounded-full"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Room */}
        <div className="relative border border-t-0 border-gray-300 h-32 p-4 mt-0">
          <div className="absolute bottom-4 right-4">
            <span className="text-sm font-medium">Specimen Room</span>
          </div>
          {/* Render dots for Specimen Room */}
          {roomData['Specimen Room'].samples.map((dot, idx) => (
            <div
              key={`spec-sample-${idx}`}
              className="absolute w-3 h-3 bg-pink-400 rounded-full"
              style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
            />
          ))}
          {roomData['Specimen Room'].incidents.map((dot, idx) => (
            <div
              key={`spec-incident-${idx}`}
              className="absolute w-3 h-3 bg-purple-600 rounded-full"
              style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardLocationDistribution;